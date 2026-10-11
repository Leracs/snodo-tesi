(function (factory) {
  'use strict';
  const gate = factory();
  if (typeof module === 'object' && module.exports) module.exports = gate;
  if (typeof document !== 'undefined') gate.start();
})(function () {
  'use strict';

  // Metadata pubblici per un gate frontend; nessuna autenticazione lato server.
  const EMBEDDED_CONFIG = {"schemaVersion":1,"gateId":"snodo-materiali","sessionKey":"snodo.access.v1","credentialVersion":"6f9ed190c601df51","passwordVerifier":{"algorithm":"PBKDF2","hash":"SHA-256","iterations":310000,"lengthBytes":32,"saltBase64":"kiNGy/y/zwCZJltQqiedNg==","valueBase64":"JhdNXk9tIzWivp2B1YNjUa/wi3rwDOBUwN46dMuzbe8="}};
  const LOCK_CLASS = 'snodo-gate-locked';
  const GATE_ID = 'snodo-access-gate';
  const CRITICAL_CSS = 'html.snodo-gate-locked body{overflow:hidden!important;background:#F7F1E8!important}html.snodo-gate-locked body>:not(#snodo-access-gate):not(#snodo-access-safety):not(noscript),html.snodo-gate-locked body>:not(#snodo-access-gate):not(#snodo-access-safety):not(noscript) *{visibility:hidden!important;pointer-events:none!important}#snodo-access-safety{display:block;position:fixed;inset:0;z-index:2147483646;padding:32px 24px;background:#F7F1E8;color:#28221F;font:16px/1.6 Trebuchet MS,sans-serif}';

  function bytesFromBase64(value) {
    if (typeof value !== 'string' || !/^[A-Za-z0-9+/]+={0,2}$/.test(value)) throw new Error('Invalid encoding');
    return Uint8Array.from(atob(value), character => character.charCodeAt(0));
  }

  function validateConfig(value) {
    const proof = value && value.passwordVerifier;
    if (!value || value.schemaVersion !== 1 || !/^[a-z0-9._-]{1,80}$/i.test(value.gateId || '') ||
        !/^snodo\.[a-z0-9._-]{1,80}$/i.test(value.sessionKey || '') ||
        !/^[a-f0-9]{16}$/.test(value.credentialVersion || '') || !proof ||
        proof.algorithm !== 'PBKDF2' || proof.hash !== 'SHA-256' ||
        !Number.isInteger(proof.iterations) || proof.iterations < 200000 || proof.iterations > 2000000 ||
        proof.lengthBytes !== 32) throw new Error('Invalid configuration');
    const salt = bytesFromBase64(proof.saltBase64);
    if (salt.length < 16 || salt.length > 64 || bytesFromBase64(proof.valueBase64).length !== 32) {
      throw new Error('Invalid configuration');
    }
    return value;
  }

  async function deriveVerifier(password, config, cryptoAPI) {
    const engine = cryptoAPI || globalThis.crypto;
    if (!engine || !engine.subtle) throw new Error('WebCrypto unavailable');
    const proof = validateConfig(config).passwordVerifier;
    const key = await engine.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
    const result = await engine.subtle.deriveBits({name: 'PBKDF2', hash: 'SHA-256', salt: bytesFromBase64(proof.saltBase64), iterations: proof.iterations}, key, proof.lengthBytes * 8);
    return new Uint8Array(result);
  }

  function equalBytes(first, second) {
    if (first.length !== second.length) return false;
    let difference = 0;
    for (let index = 0; index < first.length; index += 1) difference |= first[index] ^ second[index];
    return difference === 0;
  }

  function isAcceptedSession(value, config) {
    return Boolean(value && value.gateId === config.gateId && value.credentialVersion === config.credentialVersion &&
      typeof value.token === 'string' && /^[a-f0-9]{64}$/.test(value.token) &&
      Number.isFinite(value.issuedAt) && value.issuedAt > 0);
  }

  function readSession(storage, config) {
    try {
      const raw = storage.getItem(config.sessionKey);
      if (!raw) return {accepted: false, blocked: false};
      let parsed;
      try { parsed = JSON.parse(raw); } catch (_) { return {accepted: false, blocked: false}; }
      return {accepted: isAcceptedSession(parsed, config), blocked: false};
    } catch (_) { return {accepted: false, blocked: true}; }
  }

  function writeSession(storage, config, cryptoAPI) {
    try {
      const random = (cryptoAPI || globalThis.crypto).getRandomValues(new Uint8Array(32));
      const value = {gateId: config.gateId, credentialVersion: config.credentialVersion,
        token: Array.from(random, byte => byte.toString(16).padStart(2, '0')).join(''), issuedAt: Date.now()};
      storage.setItem(config.sessionKey, JSON.stringify(value));
      return {ok: readSession(storage, config).accepted};
    } catch (_) { return {ok: false}; }
  }

  function clearSession(storage, config) {
    try { storage.removeItem(config.sessionKey); return storage.getItem(config.sessionKey) === null; }
    catch (_) { return false; }
  }

  function start() {
    const root = document.documentElement;
    root.classList.add(LOCK_CLASS);
    root.dataset.snodoAccess = 'pending';
    if (!document.getElementById('snodo-access-critical')) {
      const critical = document.createElement('style');
      critical.id = 'snodo-access-critical';
      critical.textContent = CRITICAL_CSS;
      document.head.appendChild(critical);
    }
    let config = null, dialog = null, observer = null, busy = false, authorized = false, loadError = false;
    const protectedNodes = new Map();
    let form, input, submit, error, status;

    function protectElement(element) {
      if (element.id === GATE_ID || element.id === 'snodo-access-safety' || /^(SCRIPT|STYLE|LINK|NOSCRIPT)$/.test(element.tagName)) return;
      if (!protectedNodes.has(element)) protectedNodes.set(element, {inert: element.hasAttribute('inert'), ariaHidden: element.getAttribute('aria-hidden')});
      element.setAttribute('inert', '');
      element.setAttribute('aria-hidden', 'true');
    }

    function protectContent() {
      if (!document.body) return;
      Array.from(document.body.children).forEach(protectElement);
      if (!observer) {
        observer = new MutationObserver(records => {
          for (const record of records) for (const node of record.addedNodes) if (node.nodeType === 1) protectElement(node);
        });
        observer.observe(document.body, {childList: true});
      }
    }

    function restoreContent() {
      if (observer) observer.disconnect();
      observer = null;
      for (const [element, previous] of protectedNodes) {
        if (!previous.inert) element.removeAttribute('inert');
        if (previous.ariaHidden === null) element.removeAttribute('aria-hidden');
        else element.setAttribute('aria-hidden', previous.ariaHidden);
      }
      protectedNodes.clear();
    }

    function showError(message, invalid) {
      if (!error) return;
      error.textContent = message;
      if (invalid) input.setAttribute('aria-invalid', 'true');
      else input.removeAttribute('aria-invalid');
    }

    function setBusy(value) {
      busy = value;
      if (!form) return;
      form.setAttribute('aria-busy', String(value));
      input.readOnly = value;
      submit.disabled = value || !config || loadError;
      status.textContent = value ? (config ? 'Verifica in corso…' : 'Preparazione dell’accesso…') : '';
    }

    function mount() {
      if (dialog || authorized || !document.body) return;
      dialog = document.createElement('dialog');
      dialog.id = GATE_ID;
      dialog.setAttribute('aria-labelledby', 'snodo-access-title');
      dialog.setAttribute('aria-describedby', 'snodo-access-intro');
      dialog.innerHTML = '<div class="snodo-access-layout"><section class="snodo-access-panel"><div class="snodo-access-brand"><span class="snodo-access-mark" aria-hidden="true"></span><span>SNODO</span></div><p class="snodo-access-eyebrow">Progetto di tesi · UX/UI</p><h1 id="snodo-access-title">Il progetto,<br>da leggere e provare.</h1><p id="snodo-access-intro" class="snodo-access-intro">Materiali di ricerca, contributi alla tesi e prototipo dimostrativo.</p><form class="snodo-access-form"><label for="snodo-access-password">Password</label><input id="snodo-access-password" name="snodo-password" type="password" autocomplete="current-password" enterkeyhint="go" required autofocus aria-describedby="snodo-access-hint snodo-access-error"><p id="snodo-access-hint" class="snodo-access-hint">Usa la password che hai ricevuto.</p><p id="snodo-access-error" class="snodo-access-error" aria-live="polite" aria-atomic="true"></p><button class="snodo-access-submit" type="submit">Entra nei materiali<span aria-hidden="true">↗</span></button><p class="snodo-access-status" role="status" aria-live="polite" aria-atomic="true"></p></form><p class="snodo-access-foot">SNODO · Design della comunicazione</p></section></div>';
      document.body.appendChild(dialog);
      form = dialog.querySelector('form');
      input = dialog.querySelector('input');
      submit = dialog.querySelector('button');
      error = dialog.querySelector('#snodo-access-error');
      status = dialog.querySelector('.snodo-access-status');
      dialog.addEventListener('cancel', event => event.preventDefault());
      form.addEventListener('submit', async event => {
        event.preventDefault();
        if (busy || !config || loadError) return;
        showError('', false);
        setBusy(true);
        try {
          const computed = await deriveVerifier(input.value, config);
          if (!equalBytes(computed, bytesFromBase64(config.passwordVerifier.valueBase64))) {
            showError('La password non è corretta. Riprova.', true);
            input.select();
            return;
          }
          let stored = false;
          try { stored = writeSession(window.sessionStorage, config).ok; } catch (_) {}
          if (!stored) {
            showError('Il browser non può mantenere l’accesso. Abilita l’archiviazione per questo sito e riprova.', false);
            return;
          }
          input.value = '';
          unlock(true);
        } catch (_) {
          showError('La verifica non è disponibile. Ricarica la pagina e riprova.', false);
        } finally {
          setBusy(false);
          if (dialog) input.focus({preventScroll: true});
        }
      });
      input.addEventListener('input', () => showError('', false));
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else { dialog.setAttribute('open', ''); dialog.setAttribute('role', 'dialog'); dialog.setAttribute('aria-modal', 'true'); }
      setBusy(!config && !loadError);
      if (loadError) showError('L’accesso non è disponibile. Ricarica la pagina e riprova.', false);
      input.focus({preventScroll: true});
    }

    function attachSignout() {
      if (document.getElementById('snodo-access-exit')) return;
      const button = document.createElement('button');
      button.id = 'snodo-access-exit';
      button.className = 'snodo-access-exit';
      button.type = 'button';
      button.textContent = 'Esci';
      button.setAttribute('aria-label', 'Esci dai materiali SNODO');
      const host = document.querySelector('[data-snodo-access-actions]');
      if (!host) button.classList.add('snodo-access-exit-floating');
      (host || document.body).appendChild(button);
      button.addEventListener('click', () => {
        try { clearSession(window.sessionStorage, config); } catch (_) {}
        authorized = false;
        root.classList.add(LOCK_CLASS);
        root.dataset.snodoAccess = 'locked';
        protectContent();
        mount();
        if (input) input.focus({preventScroll: true});
      });
    }

    function unlock(focusContent) {
      authorized = true;
      if (dialog) {
        if (typeof dialog.close === 'function') dialog.close();
        dialog.remove();
        dialog = null;
      }
      restoreContent();
      root.dataset.snodoAccess = 'open';
      root.classList.remove(LOCK_CLASS);
      attachSignout();
      if (focusContent) {
        const main = document.querySelector('main');
        if (main) {
          const previous = main.getAttribute('tabindex');
          main.setAttribute('tabindex', '-1');
          main.focus({preventScroll: true});
          if (previous === null) main.addEventListener('blur', () => main.removeAttribute('tabindex'), {once: true});
          else main.setAttribute('tabindex', previous);
        }
      }
    }

    const ready = new Promise(resolve => {
      function complete() { protectContent(); mount(); resolve(); }
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', complete, {once: true});
      else complete();
    });
    const load = Promise.resolve().then(() => validateConfig(EMBEDDED_CONFIG));
    Promise.all([ready, load]).then(([, value]) => {
      config = value;
      if (!globalThis.crypto || !globalThis.crypto.subtle) throw new Error('WebCrypto unavailable');
      let session;
      try { session = readSession(window.sessionStorage, config); }
      catch (_) { session = {accepted: false, blocked: true}; }
      if (session.accepted) unlock(false);
      else {
        root.dataset.snodoAccess = 'locked';
        setBusy(false);
        if (session.blocked) showError('Il browser non può mantenere l’accesso. Abilita l’archiviazione per questo sito e riprova.', false);
        input.focus({preventScroll: true});
      }
    }).catch(() => {
      loadError = true;
      ready.then(() => { setBusy(false); showError('L’accesso non è disponibile. Ricarica la pagina e riprova.', false); });
    });

    // Il lock viene conservato anche nelle pagine ripristinate dalla cache di navigazione.
    window.addEventListener('pagehide', () => {
      root.classList.add(LOCK_CLASS);
      root.dataset.snodoAccess = 'pending';
      protectContent();
    });
    window.addEventListener('pageshow', event => {
      if (!event.persisted || !config) return;
      let session;
      try { session = readSession(window.sessionStorage, config); }
      catch (_) { session = {accepted: false, blocked: true}; }
      if (session.accepted) unlock(false);
      else {
        authorized = false;
        root.classList.add(LOCK_CLASS);
        root.dataset.snodoAccess = 'locked';
        protectContent();
        mount();
        setBusy(false);
        if (session.blocked) showError('Il browser non può mantenere l’accesso. Abilita l’archiviazione per questo sito e riprova.', false);
        input.focus({preventScroll: true});
      }
    });
  }

  return {start, validateConfig, bytesFromBase64, deriveVerifier, equalBytes, isAcceptedSession, readSession, writeSession, clearSession};
});
