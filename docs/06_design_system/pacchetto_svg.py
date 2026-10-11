"""Valida gli SVG e prepara l'archivio scaricabile, senza dipendenze esterne."""
from pathlib import Path
import hashlib
import json
import os
import xml.etree.ElementTree as ET
import zipfile

root = Path(__file__).resolve().parent
manifest = json.loads((root / 'SVG_manifest.json').read_text())
entries = manifest['entries']
assert len({e['file'] for e in entries}) == len(entries)
for entry in entries:
    content = (root / entry['file']).read_bytes()
    assert hashlib.sha256(content).hexdigest() == entry['sha256'], entry['file']
    tree = ET.fromstring(content)
    assert tree.findall('.//{http://www.w3.org/2000/svg}text'), entry['file']
    assert not tree.findall('.//{http://www.w3.org/2000/svg}image'), entry['file']
    assert not tree.findall('.//{http://www.w3.org/2000/svg}foreignObject'), entry['file']

archive = root / 'svg/SNODO-componenti-SVG.zip'
temporary = archive.with_suffix('.zip.tmp')
with zipfile.ZipFile(temporary, 'w', zipfile.ZIP_DEFLATED) as package:
    files = [(root / entry['file'], Path(entry['file']).name) for entry in entries]
    files += [(root / 'SVG_manifest.json', 'manifest.json'),
              (root / '../05_style_tiles/fonts/OFL.txt', 'Boldonse-OFL.txt')]
    for source, name in files:
        info = zipfile.ZipInfo(name, (2026, 10, 11, 0, 0, 0))
        info.compress_type = zipfile.ZIP_DEFLATED
        package.writestr(info, source.read_bytes())
    info = zipfile.ZipInfo('LEGGIMI.txt', (2026, 10, 11, 0, 0, 0))
    info.compress_type = zipfile.ZIP_DEFLATED
    package.writestr(info, f'SNODO · {len(entries)} visuali SVG dei 22 componenti e della composizione Atmosfera/Affluenza. Pop (B) principale; Calda (A) alternativa. Testi modificabili, forme e icone vettoriali. Boldonse incorporato in Pop, licenza OFL inclusa. Font del corpo: fallback di sistema. Layout acquisiti a 390 px. Visuali statici: le interazioni rimangono nel prototipo. Importazione Figma non verificata.\n')
os.replace(temporary, archive)
print(f'{len(entries)} SVG validati; archivio aggiornato ({archive.stat().st_size} byte).')
