window.SNODO_CATALOG = {
  "version": "0.1",
  "productCoverage": "Italia",
  "demoCities": [
    "Roma",
    "Milano"
  ],
  "notice": "Luoghi, prezzi, orari, distanze, contributi sono fittizi. Le fotografie stock sono illustrative e non ritraggono i luoghi della demo. Nessun dato live.",
  "places": [
    {
      "id": "luogo-roma-01",
      "name": "Cortile Uno",
      "city": "Roma",
      "zone": "San Lorenzo",
      "kind": "Caffè",
      "budget": {
        "min": 12,
        "max": 18,
        "currency": "EUR",
        "source": "Dichiarazione del gestore mock",
        "updated": "2026-10-01"
      },
      "distance": {
        "km": 0.8,
        "reference": "Roma · riferimento centrale dimostrativo",
        "kind": "schematic_mock"
      },
      "hours": {
        "text": "16:00–23:00",
        "source": "Gestore mock",
        "updated": "2026-10-01",
        "live": false
      },
      "practical": {
        "outdoor": true,
        "stepFreeReported": true,
        "source": "Gestore mock",
        "updated": "2026-10-01"
      },
      "atmosphere": {
        "noise": "basso",
        "crowding": "basso",
        "light": "naturale",
        "period": "settembre 2026",
        "slot": "18:00–21:00",
        "visits": 3,
        "contributions": 3,
        "noiseContributions": 2,
        "scale": {
          "min": 1,
          "max": 5,
          "lowLabel": "Intensità bassa",
          "highLabel": "Intensità alta"
        },
        "values": {
          "noise": 2,
          "light": 3,
          "crowding": 2,
          "comfort": 4
        },
        "metricCoverage": {
          "noise": 2,
          "light": 3,
          "crowding": 3,
          "comfort": 3
        },
        "attendance": {
          "bands": [
            {
              "id": "pomeriggio",
              "label": "Pomeriggio",
              "start": "16:00",
              "end": "18:00"
            },
            {
              "id": "sera",
              "label": "Sera",
              "start": "18:00",
              "end": "21:00"
            },
            {
              "id": "tarda-sera",
              "label": "Tarda sera",
              "start": "21:00",
              "end": "23:00"
            }
          ],
          "days": [
            {
              "day": 0,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 4,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 3,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 1,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 2,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 3,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 4,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 5,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 6,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 4,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 3,
                  "contributions": 1
                }
              ]
            }
          ],
          "source": "Profili mock predisposti; non calcolati dai contributi",
          "method": "Intensità illustrative 1–5 per giorno e fascia; non misure live né medie reali"
        },
        "lastContribution": "2026-10-01",
        "source": "Contributi mock",
        "sufficient": false,
        "valueMethod": "Valori illustrativi predisposti, non medie realmente calcolate; metodo futuro da definire"
      },
      "reviews": [
        {
          "id": "rec-roma-01-01",
          "author": "Luca",
          "visited": "2026-09-21",
          "slot": "19:00–21:00",
          "company": "Con amici",
          "text": "Potevamo parlare senza alzare la voce. Ci siamo fermati all’aperto per una pausa.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": [
            "media-roma-01-user-01"
          ]
        },
        {
          "id": "rec-roma-01-02",
          "author": "Chiara",
          "visited": "2026-09-25",
          "slot": "17:00–18:00",
          "company": "Da sola",
          "text": "Mi sono fermata per un caffè nel pomeriggio. Ho trovato un tavolino libero e sono rimasta a leggere; l’esperienza potrebbe essere diversa la sera.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": [
            "media-roma-01-user-02"
          ]
        },
        {
          "id": "rec-roma-01-03",
          "author": "Matteo",
          "visited": "2026-09-30",
          "slot": "20:00–21:00",
          "company": "In coppia",
          "text": "Siamo arrivati dopo le otto. I tavoli più vicini erano occupati: per parlare abbiamo preferito sederci un po’ in disparte.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": [
            "media-roma-01-user-03"
          ]
        }
      ],
      "photo": {
        "id": "cafe-terrazza",
        "file": "cafe-terrazza.jpg",
        "src": "../07_prototipo/media/cafe-terrazza.jpg",
        "author": "Masha",
        "sourceUrl": "https://unsplash.com/photos/outdoor-cafe-tables-and-chairs-on-a-sunny-day-iFYRe0ck80s",
        "license": "Unsplash License",
        "licenseUrl": "https://unsplash.com/license",
        "alt": "Terrazza di un caffè con sedie intrecciate, tavolini e piante — foto d’esempio, non del locale fittizio",
        "illustrative": true,
        "downloadUrl": "https://images.unsplash.com/photo-1773092984066-69ee15920b94?auto=format&fit=crop&fm=jpg&q=82&w=1400"
      },
      "media": [
        {
          "id": "media-roma-01-01",
          "file": "cafe-terrazza.jpg",
          "src": "../07_prototipo/media/cafe-terrazza.jpg",
          "author": "Masha",
          "sourceUrl": "https://unsplash.com/photos/outdoor-cafe-tables-and-chairs-on-a-sunny-day-iFYRe0ck80s",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Terrazza di un caffè con sedie intrecciate, tavolini e piante — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1773092984066-69ee15920b94?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "source": "Masha / Unsplash",
          "kind": "Fotografia stock dimostrativa",
          "origin": "venue",
          "uploadedBy": "Cortile Uno",
          "uploadedAt": "2026-10-01",
          "caption": "Gli spazi",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-roma-01-02",
          "file": "cafe-verde.jpg",
          "src": "../07_prototipo/media/cafe-verde.jpg",
          "author": "Thamy N.",
          "sourceUrl": "https://unsplash.com/photos/whimsical-green-cafe-interior-with-eclectic-decor-4dpyu39QivA",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Caffè con pareti verdi, sedute in legno e piante — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1777709352854-ca94b4564d22?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "source": "Thamy N. / Unsplash",
          "kind": "Fotografia stock dimostrativa",
          "origin": "venue",
          "uploadedBy": "Cortile Uno",
          "uploadedAt": "2026-10-01",
          "caption": "Un’altra prospettiva",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-roma-01-03",
          "file": "cafe-sala.jpg",
          "src": "../07_prototipo/media/cafe-sala.jpg",
          "author": "stephen packwood",
          "sourceUrl": "https://unsplash.com/photos/grand-cafe-interior-at-daytime-UitmsTgUgcE",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Sala di un caffè con sedute e lampade decorative — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1571130961933-0680ba8d5ff2?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "venue",
          "uploadedBy": "Cortile Uno",
          "uploadedAt": "2026-10-01",
          "caption": "La sala",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-roma-01-user-01",
          "file": "caffe-tazza.jpg",
          "src": "../07_prototipo/media/caffe-tazza.jpg",
          "author": "EADWYNE",
          "sourceUrl": "https://unsplash.com/photos/a-coffee-cup-on-a-table-QEkKvtzL-Pc",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Tazza di caffè appoggiata su un tavolino — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1651789276450-2ba99bf5f270?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "reviews",
          "uploadedBy": "Luca",
          "uploadedAt": "2026-09-21",
          "caption": "Una pausa al tavolo",
          "mock": true,
          "reviewId": "rec-roma-01-01"
        },
        {
          "id": "media-roma-01-user-02",
          "file": "caffe-due-tazze.jpg",
          "src": "../07_prototipo/media/caffe-due-tazze.jpg",
          "author": "engin akyurt",
          "sourceUrl": "https://unsplash.com/photos/two-cups-of-coffee-on-a-white-table-t16HUOz9fjI",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Due tazze di caffè su un tavolo bianco — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1769412340450-528930c62f77?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "reviews",
          "uploadedBy": "Chiara",
          "uploadedAt": "2026-09-25",
          "caption": "Il caffè del pomeriggio",
          "mock": true,
          "reviewId": "rec-roma-01-02"
        },
        {
          "id": "media-roma-01-user-03",
          "file": "cafe-luci.jpg",
          "src": "../07_prototipo/media/cafe-luci.jpg",
          "author": "Clifford",
          "sourceUrl": "https://unsplash.com/photos/cafe-interior-with-hanging-bulbs-and-table-VobvKmG-StA",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Interno di un caffè con tavolini in legno e lampade sospese — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "reviews",
          "uploadedBy": "Matteo",
          "uploadedAt": "2026-09-30",
          "caption": "Il nostro punto di vista",
          "mock": true,
          "reviewId": "rec-roma-01-03"
        }
      ],
      "fictional": true
    },
    {
      "id": "luogo-roma-02",
      "name": "Spazio Lume",
      "city": "Roma",
      "zone": "Ostiense",
      "kind": "Spazio culturale",
      "budget": {
        "min": 8,
        "max": 14,
        "currency": "EUR",
        "source": "Dichiarazione del gestore mock",
        "updated": "2026-10-01"
      },
      "distance": {
        "km": 2.1,
        "reference": "Roma · riferimento centrale dimostrativo",
        "kind": "schematic_mock"
      },
      "hours": {
        "text": "16:00–23:00",
        "source": "Gestore mock",
        "updated": "2026-10-01",
        "live": false
      },
      "practical": {
        "outdoor": true,
        "stepFreeReported": false,
        "source": "Gestore mock",
        "updated": "2026-10-01"
      },
      "atmosphere": {
        "noise": "medio",
        "crowding": "basso",
        "light": "naturale",
        "period": "settembre 2026",
        "slot": "18:00–21:00",
        "visits": 6,
        "contributions": 6,
        "noiseContributions": 6,
        "scale": {
          "min": 1,
          "max": 5,
          "lowLabel": "Intensità bassa",
          "highLabel": "Intensità alta"
        },
        "values": {
          "noise": 3,
          "light": 3,
          "crowding": 2,
          "comfort": 4
        },
        "metricCoverage": {
          "noise": 6,
          "light": 6,
          "crowding": 6,
          "comfort": 6
        },
        "attendance": {
          "bands": [
            {
              "id": "pomeriggio",
              "label": "Pomeriggio",
              "start": "16:00",
              "end": "18:00"
            },
            {
              "id": "sera",
              "label": "Sera",
              "start": "18:00",
              "end": "21:00"
            },
            {
              "id": "tarda-sera",
              "label": "Tarda sera",
              "start": "21:00",
              "end": "23:00"
            }
          ],
          "days": [
            {
              "day": 0,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 4,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 3,
                  "contributions": 2
                }
              ]
            },
            {
              "day": 1,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": null,
                  "contributions": 0
                }
              ]
            },
            {
              "day": 2,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 2
                }
              ]
            },
            {
              "day": 3,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 2
                }
              ]
            },
            {
              "day": 4,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 2
                }
              ]
            },
            {
              "day": 5,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 2
                }
              ]
            },
            {
              "day": 6,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 4,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 3,
                  "contributions": 2
                }
              ]
            }
          ],
          "source": "Profili mock predisposti; non calcolati dai contributi",
          "method": "Intensità illustrative 1–5 per giorno e fascia; non misure live né medie reali"
        },
        "lastContribution": "2026-10-01",
        "source": "Contributi mock",
        "sufficient": false,
        "valueMethod": "Valori illustrativi predisposti, non medie realmente calcolate; metodo futuro da definire"
      },
      "reviews": [
        {
          "id": "rec-roma-02-01",
          "author": "Luca",
          "visited": "2026-09-28",
          "slot": "18:00–21:00",
          "company": "Con amici",
          "text": "Durante la mia visita il volume era più alto di quanto mi aspettassi. Ho preferito spostarmi nella sala interna.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": [
            "media-roma-02-user-01"
          ]
        },
        {
          "id": "rec-roma-02-02",
          "author": "Sara",
          "visited": "2026-09-26",
          "slot": "16:00–18:00",
          "company": "Con un’amica",
          "text": "Siamo entrate per vedere l’esposizione e ci siamo fermate a commentare le opere. Nel pomeriggio gli spazi erano facili da attraversare.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": [
            "media-roma-02-user-02"
          ]
        },
        {
          "id": "rec-roma-02-03",
          "author": "Elena",
          "visited": "2026-09-29",
          "slot": "19:00–20:00",
          "company": "Da sola",
          "text": "Ho preferito la sala più interna per guardare le opere con calma. All’ingresso c’erano più persone rispetto al resto dello spazio.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": []
        }
      ],
      "photo": {
        "id": "spazio-legno",
        "file": "spazio-legno.jpg",
        "src": "../07_prototipo/media/spazio-legno.jpg",
        "author": "Neon Wang",
        "sourceUrl": "https://unsplash.com/photos/interior-view-of-a-modern-art-gallery-with-wooden-accents-xCmifs1SbJw",
        "license": "Unsplash License",
        "licenseUrl": "https://unsplash.com/license",
        "alt": "Spazio espositivo con arredi in legno e luce naturale — foto d’esempio, non del locale fittizio",
        "illustrative": true,
        "downloadUrl": "https://images.unsplash.com/photo-1766802982249-12274bebfdf6?auto=format&fit=crop&fm=jpg&q=82&w=1400"
      },
      "media": [
        {
          "id": "media-roma-02-01",
          "file": "spazio-legno.jpg",
          "src": "../07_prototipo/media/spazio-legno.jpg",
          "author": "Neon Wang",
          "sourceUrl": "https://unsplash.com/photos/interior-view-of-a-modern-art-gallery-with-wooden-accents-xCmifs1SbJw",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Spazio espositivo con arredi in legno e luce naturale — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1766802982249-12274bebfdf6?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "source": "Neon Wang / Unsplash",
          "kind": "Fotografia stock dimostrativa",
          "origin": "venue",
          "uploadedBy": "Spazio Lume",
          "uploadedAt": "2026-10-01",
          "caption": "Gli spazi",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-roma-02-02",
          "file": "spazio-galleria.jpg",
          "src": "../07_prototipo/media/spazio-galleria.jpg",
          "author": "Toa Heftiba",
          "sourceUrl": "https://unsplash.com/photos/art-gallery-interior-YSKrZtgFvL0",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Interno di una galleria con pavimento chiaro e opere alle pareti — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1553101331-ce6281c677b9?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "source": "Toa Heftiba / Unsplash",
          "kind": "Fotografia stock dimostrativa",
          "origin": "venue",
          "uploadedBy": "Spazio Lume",
          "uploadedAt": "2026-10-01",
          "caption": "Un’altra prospettiva",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-roma-02-user-01",
          "file": "galleria-visita.jpg",
          "src": "../07_prototipo/media/galleria-visita.jpg",
          "author": "Cristian Pineda",
          "sourceUrl": "https://unsplash.com/photos/visitors-observing-black-and-white-artwork-in-a-gallery-pz_4rUEfRGs",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Visitatori davanti a opere in bianco e nero in una galleria — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1781209443212-e91a91e44d49?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "reviews",
          "uploadedBy": "Luca",
          "uploadedAt": "2026-09-28",
          "caption": "Durante l’esposizione",
          "mock": true,
          "reviewId": "rec-roma-02-01"
        },
        {
          "id": "media-roma-02-user-02",
          "file": "galleria-persone.jpg",
          "src": "../07_prototipo/media/galleria-persone.jpg",
          "author": "Egor Myznik",
          "sourceUrl": "https://unsplash.com/photos/two-people-observe-art-in-a-gallery-ifdGh_suSio",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Due persone osservano opere d’arte in uno spazio espositivo — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1773474352672-452579bdfe40?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "reviews",
          "uploadedBy": "Sara",
          "uploadedAt": "2026-09-26",
          "caption": "La visita nella sala interna",
          "mock": true,
          "reviewId": "rec-roma-02-02"
        }
      ],
      "fictional": true
    },
    {
      "id": "luogo-roma-03",
      "name": "Sala Aperta",
      "city": "Roma",
      "zone": "Pigneto",
      "kind": "Caffè",
      "budget": {
        "min": 18,
        "max": 24,
        "currency": "EUR",
        "source": "Dichiarazione del gestore mock",
        "updated": "2026-10-01"
      },
      "distance": {
        "km": 1.4,
        "reference": "Roma · riferimento centrale dimostrativo",
        "kind": "schematic_mock"
      },
      "hours": {
        "text": "16:00–23:00",
        "source": "Gestore mock",
        "updated": "2026-10-01",
        "live": false
      },
      "practical": {
        "outdoor": false,
        "stepFreeReported": true,
        "source": "Gestore mock",
        "updated": "2026-10-01"
      },
      "atmosphere": {
        "noise": "alto",
        "crowding": "basso",
        "light": "soffusa",
        "period": "settembre 2026",
        "slot": "18:00–21:00",
        "visits": 5,
        "contributions": 5,
        "noiseContributions": 5,
        "scale": {
          "min": 1,
          "max": 5,
          "lowLabel": "Intensità bassa",
          "highLabel": "Intensità alta"
        },
        "values": {
          "noise": 4,
          "light": 3,
          "crowding": 2,
          "comfort": 4
        },
        "metricCoverage": {
          "noise": 5,
          "light": 5,
          "crowding": 5,
          "comfort": 5
        },
        "attendance": {
          "bands": [
            {
              "id": "pomeriggio",
              "label": "Pomeriggio",
              "start": "16:00",
              "end": "18:00"
            },
            {
              "id": "sera",
              "label": "Sera",
              "start": "18:00",
              "end": "21:00"
            },
            {
              "id": "tarda-sera",
              "label": "Tarda sera",
              "start": "21:00",
              "end": "23:00"
            }
          ],
          "days": [
            {
              "day": 0,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 4,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 3,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 1,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 2,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 3,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 4,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 5,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 6,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 4,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 3,
                  "contributions": 1
                }
              ]
            }
          ],
          "source": "Profili mock predisposti; non calcolati dai contributi",
          "method": "Intensità illustrative 1–5 per giorno e fascia; non misure live né medie reali"
        },
        "lastContribution": "2026-10-01",
        "source": "Contributi mock",
        "sufficient": false,
        "valueMethod": "Valori illustrativi predisposti, non medie realmente calcolate; metodo futuro da definire"
      },
      "reviews": [
        {
          "id": "rec-roma-03-01",
          "author": "Luca",
          "visited": "2026-09-28",
          "slot": "18:00–21:00",
          "company": "Con amici",
          "text": "Durante la mia visita il volume era più alto di quanto mi aspettassi. L’ambiente era vivace, soprattutto vicino ai tavoli centrali.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": [
            "media-roma-03-user-01"
          ]
        },
        {
          "id": "rec-roma-03-02",
          "author": "Giulia",
          "visited": "2026-09-24",
          "slot": "17:00–18:00",
          "company": "Con un’amica",
          "text": "Per una pausa veloce abbiamo trovato posto vicino alla finestra. Mi è piaciuto l’ambiente, ma non ho provato a lavorare qui.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": [
            "media-roma-03-user-02"
          ]
        },
        {
          "id": "rec-roma-03-03",
          "author": "Andrea",
          "visited": "2026-09-29",
          "slot": "21:00–22:00",
          "company": "Con amici",
          "text": "Ci siamo fermati per stare insieme. Durante la visita la musica rendeva più difficile seguire la conversazione da un lato all’altro del tavolo.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": [
            "media-roma-03-user-03"
          ]
        }
      ],
      "photo": {
        "id": "cafe-luci",
        "file": "cafe-luci.jpg",
        "src": "../07_prototipo/media/cafe-luci.jpg",
        "author": "Clifford",
        "sourceUrl": "https://unsplash.com/photos/cafe-interior-with-hanging-bulbs-and-table-VobvKmG-StA",
        "license": "Unsplash License",
        "licenseUrl": "https://unsplash.com/license",
        "alt": "Interno di un caffè con tavolini in legno e lampade sospese — foto d’esempio, non del locale fittizio",
        "illustrative": true,
        "downloadUrl": "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&fm=jpg&q=82&w=1400"
      },
      "media": [
        {
          "id": "media-roma-03-01",
          "file": "cafe-luci.jpg",
          "src": "../07_prototipo/media/cafe-luci.jpg",
          "author": "Clifford",
          "sourceUrl": "https://unsplash.com/photos/cafe-interior-with-hanging-bulbs-and-table-VobvKmG-StA",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Interno di un caffè con tavolini in legno e lampade sospese — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "source": "Clifford / Unsplash",
          "kind": "Fotografia stock dimostrativa",
          "origin": "venue",
          "uploadedBy": "Sala Aperta",
          "uploadedAt": "2026-10-01",
          "caption": "Gli spazi",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-roma-03-02",
          "file": "cafe-sala.jpg",
          "src": "../07_prototipo/media/cafe-sala.jpg",
          "author": "stephen packwood",
          "sourceUrl": "https://unsplash.com/photos/grand-cafe-interior-at-daytime-UitmsTgUgcE",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Sala di un caffè con sedute e lampade decorative — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1571130961933-0680ba8d5ff2?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "source": "stephen packwood / Unsplash",
          "kind": "Fotografia stock dimostrativa",
          "origin": "venue",
          "uploadedBy": "Sala Aperta",
          "uploadedAt": "2026-10-01",
          "caption": "Un’altra prospettiva",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-roma-03-03",
          "file": "cafe-verde.jpg",
          "src": "../07_prototipo/media/cafe-verde.jpg",
          "author": "Thamy N.",
          "sourceUrl": "https://unsplash.com/photos/whimsical-green-cafe-interior-with-eclectic-decor-4dpyu39QivA",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Caffè con pareti verdi, sedute in legno e piante — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1777709352854-ca94b4564d22?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "venue",
          "uploadedBy": "Sala Aperta",
          "uploadedAt": "2026-10-01",
          "caption": "La sala",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-roma-03-user-01",
          "file": "caffe-tazza.jpg",
          "src": "../07_prototipo/media/caffe-tazza.jpg",
          "author": "EADWYNE",
          "sourceUrl": "https://unsplash.com/photos/a-coffee-cup-on-a-table-QEkKvtzL-Pc",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Tazza di caffè appoggiata su un tavolino — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1651789276450-2ba99bf5f270?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "reviews",
          "uploadedBy": "Luca",
          "uploadedAt": "2026-09-28",
          "caption": "Una pausa al tavolo",
          "mock": true,
          "reviewId": "rec-roma-03-01"
        },
        {
          "id": "media-roma-03-user-02",
          "file": "caffe-due-tazze.jpg",
          "src": "../07_prototipo/media/caffe-due-tazze.jpg",
          "author": "engin akyurt",
          "sourceUrl": "https://unsplash.com/photos/two-cups-of-coffee-on-a-white-table-t16HUOz9fjI",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Due tazze di caffè su un tavolo bianco — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1769412340450-528930c62f77?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "reviews",
          "uploadedBy": "Giulia",
          "uploadedAt": "2026-09-24",
          "caption": "Il caffè del pomeriggio",
          "mock": true,
          "reviewId": "rec-roma-03-02"
        },
        {
          "id": "media-roma-03-user-03",
          "file": "cafe-patio.jpg",
          "src": "../07_prototipo/media/cafe-patio.jpg",
          "author": "Arlind Photography",
          "sourceUrl": "https://unsplash.com/photos/outdoor-cafe-tables-and-chairs-on-a-stone-patio-Bn0ABSKgQS8",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Tavolini e sedie di un caffè su una piazza lastricata — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1778429557617-d116d4bf210b?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "reviews",
          "uploadedBy": "Andrea",
          "uploadedAt": "2026-09-29",
          "caption": "Il nostro punto di vista",
          "mock": true,
          "reviewId": "rec-roma-03-03"
        }
      ],
      "fictional": true
    },
    {
      "id": "luogo-roma-04",
      "name": "Giardino Piccolo",
      "city": "Roma",
      "zone": "Garbatella",
      "kind": "Giardino",
      "budget": {
        "min": 0,
        "max": 8,
        "currency": "EUR",
        "source": "Dichiarazione del gestore mock",
        "updated": "2026-10-01"
      },
      "distance": {
        "km": 3.3,
        "reference": "Roma · riferimento centrale dimostrativo",
        "kind": "schematic_mock"
      },
      "hours": {
        "text": "16:00–23:00",
        "source": "Gestore mock",
        "updated": "2026-10-01",
        "live": false
      },
      "practical": {
        "outdoor": true,
        "stepFreeReported": null,
        "source": "Gestore mock",
        "updated": "2026-10-01"
      },
      "atmosphere": {
        "noise": null,
        "crowding": null,
        "light": "naturale",
        "period": "settembre 2026",
        "slot": "18:00–21:00",
        "visits": 0,
        "contributions": 0,
        "noiseContributions": 0,
        "scale": {
          "min": 1,
          "max": 5,
          "lowLabel": "Intensità bassa",
          "highLabel": "Intensità alta"
        },
        "values": {
          "noise": null,
          "light": null,
          "crowding": null,
          "comfort": null
        },
        "metricCoverage": {
          "noise": 0,
          "light": 0,
          "crowding": 0,
          "comfort": 0
        },
        "attendance": {
          "bands": [
            {
              "id": "pomeriggio",
              "label": "Pomeriggio",
              "start": "16:00",
              "end": "18:00"
            },
            {
              "id": "sera",
              "label": "Sera",
              "start": "18:00",
              "end": "21:00"
            },
            {
              "id": "tarda-sera",
              "label": "Tarda sera",
              "start": "21:00",
              "end": "23:00"
            }
          ],
          "days": [
            {
              "day": 0,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "sera",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "tarda-sera",
                  "value": null,
                  "contributions": 0
                }
              ]
            },
            {
              "day": 1,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "sera",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "tarda-sera",
                  "value": null,
                  "contributions": 0
                }
              ]
            },
            {
              "day": 2,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "sera",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "tarda-sera",
                  "value": null,
                  "contributions": 0
                }
              ]
            },
            {
              "day": 3,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "sera",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "tarda-sera",
                  "value": null,
                  "contributions": 0
                }
              ]
            },
            {
              "day": 4,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "sera",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "tarda-sera",
                  "value": null,
                  "contributions": 0
                }
              ]
            },
            {
              "day": 5,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "sera",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "tarda-sera",
                  "value": null,
                  "contributions": 0
                }
              ]
            },
            {
              "day": 6,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "sera",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "tarda-sera",
                  "value": null,
                  "contributions": 0
                }
              ]
            }
          ],
          "source": "Profili mock predisposti; non calcolati dai contributi",
          "method": "Intensità illustrative 1–5 per giorno e fascia; non misure live né medie reali"
        },
        "lastContribution": null,
        "source": "Contributi mock",
        "sufficient": false,
        "valueMethod": "Valori illustrativi predisposti, non medie realmente calcolate; metodo futuro da definire"
      },
      "reviews": [],
      "photo": {
        "id": "giardino-panchina",
        "file": "giardino-panchina.jpg",
        "src": "../07_prototipo/media/giardino-panchina.jpg",
        "author": "Jack Baxter",
        "sourceUrl": "https://unsplash.com/photos/a-park-area-with-a-bench-and-trees-TggeawQGcdk",
        "license": "Unsplash License",
        "licenseUrl": "https://unsplash.com/license",
        "alt": "Panchina in un giardino alberato — foto d’esempio, non del locale fittizio",
        "illustrative": true,
        "downloadUrl": "https://images.unsplash.com/photo-1684061334750-2cd2bbbc2513?auto=format&fit=crop&fm=jpg&q=82&w=1400"
      },
      "media": [
        {
          "id": "media-roma-04-01",
          "file": "giardino-panchina.jpg",
          "src": "../07_prototipo/media/giardino-panchina.jpg",
          "author": "Jack Baxter",
          "sourceUrl": "https://unsplash.com/photos/a-park-area-with-a-bench-and-trees-TggeawQGcdk",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Panchina in un giardino alberato — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1684061334750-2cd2bbbc2513?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "source": "Jack Baxter / Unsplash",
          "kind": "Fotografia stock dimostrativa",
          "origin": "venue",
          "uploadedBy": "Giardino Piccolo",
          "uploadedAt": "2026-10-01",
          "caption": "Gli spazi",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-roma-04-02",
          "file": "giardino-sole.jpg",
          "src": "../07_prototipo/media/giardino-sole.jpg",
          "author": "Stephanie Klepacki",
          "sourceUrl": "https://unsplash.com/photos/park-bench-under-leafy-trees-on-a-sunny-day-Uvp4Xv9XdQ0",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Panchina all’ombra di alberi in un parco — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1757126203591-a1db459106ea?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "source": "Stephanie Klepacki / Unsplash",
          "kind": "Fotografia stock dimostrativa",
          "origin": "venue",
          "uploadedBy": "Giardino Piccolo",
          "uploadedAt": "2026-10-01",
          "caption": "Un’altra prospettiva",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-roma-04-03",
          "file": "parco-viale.jpg",
          "src": "../07_prototipo/media/parco-viale.jpg",
          "author": "Hung Tran",
          "sourceUrl": "https://unsplash.com/photos/people-at-the-park-qqAnlW6b2pU",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Viale alberato di un parco con persone in passeggiata — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1501591277443-e1656641d551?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "venue",
          "uploadedBy": "Giardino Piccolo",
          "uploadedAt": "2026-10-01",
          "caption": "Il percorso alberato",
          "mock": true,
          "reviewId": null
        }
      ],
      "fictional": true
    },
    {
      "id": "luogo-milano-01",
      "name": "Cortile Due",
      "city": "Milano",
      "zone": "Isola",
      "kind": "Caffè",
      "budget": {
        "min": 10,
        "max": 18,
        "currency": "EUR",
        "source": "Dichiarazione del gestore mock",
        "updated": "2026-10-01"
      },
      "distance": {
        "km": 0.6,
        "reference": "Milano · riferimento centrale dimostrativo",
        "kind": "schematic_mock"
      },
      "hours": {
        "text": "16:00–23:00",
        "source": "Gestore mock",
        "updated": "2026-10-01",
        "live": false
      },
      "practical": {
        "outdoor": true,
        "stepFreeReported": true,
        "source": "Gestore mock",
        "updated": "2026-10-01"
      },
      "atmosphere": {
        "noise": "basso",
        "crowding": "basso",
        "light": "naturale",
        "period": "settembre 2026",
        "slot": "18:00–21:00",
        "visits": 4,
        "contributions": 4,
        "noiseContributions": 4,
        "scale": {
          "min": 1,
          "max": 5,
          "lowLabel": "Intensità bassa",
          "highLabel": "Intensità alta"
        },
        "values": {
          "noise": 2,
          "light": 3,
          "crowding": 2,
          "comfort": 4
        },
        "metricCoverage": {
          "noise": 4,
          "light": 4,
          "crowding": 4,
          "comfort": 4
        },
        "attendance": {
          "bands": [
            {
              "id": "pomeriggio",
              "label": "Pomeriggio",
              "start": "16:00",
              "end": "18:00"
            },
            {
              "id": "sera",
              "label": "Sera",
              "start": "18:00",
              "end": "21:00"
            },
            {
              "id": "tarda-sera",
              "label": "Tarda sera",
              "start": "21:00",
              "end": "23:00"
            }
          ],
          "days": [
            {
              "day": 0,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 4,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 3,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 1,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 2,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 3,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 4,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 5,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 1
                }
              ]
            },
            {
              "day": 6,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 1
                },
                {
                  "band": "sera",
                  "value": 4,
                  "contributions": 1
                },
                {
                  "band": "tarda-sera",
                  "value": 3,
                  "contributions": 1
                }
              ]
            }
          ],
          "source": "Profili mock predisposti; non calcolati dai contributi",
          "method": "Intensità illustrative 1–5 per giorno e fascia; non misure live né medie reali"
        },
        "lastContribution": "2026-10-01",
        "source": "Contributi mock",
        "sufficient": false,
        "valueMethod": "Valori illustrativi predisposti, non medie realmente calcolate; metodo futuro da definire"
      },
      "reviews": [
        {
          "id": "rec-milano-01-01",
          "author": "Luca",
          "visited": "2026-09-28",
          "slot": "18:00–21:00",
          "company": "Con amici",
          "text": "Potevamo parlare senza alzare la voce. Ci siamo fermati all’aperto per una pausa.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": [
            "media-milano-01-user-01"
          ]
        },
        {
          "id": "rec-milano-01-02",
          "author": "Chiara",
          "visited": "2026-09-25",
          "slot": "17:00–18:00",
          "company": "Da sola",
          "text": "Mi sono fermata per un caffè nel pomeriggio. Ho trovato un tavolino libero e sono rimasta a leggere; l’esperienza potrebbe essere diversa la sera.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": [
            "media-milano-01-user-02"
          ]
        },
        {
          "id": "rec-milano-01-03",
          "author": "Matteo",
          "visited": "2026-09-30",
          "slot": "20:00–21:00",
          "company": "In coppia",
          "text": "Siamo arrivati dopo le otto. I tavoli più vicini erano occupati: per parlare abbiamo preferito sederci un po’ in disparte.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": [
            "media-milano-01-user-03"
          ]
        }
      ],
      "photo": {
        "id": "cafe-patio",
        "file": "cafe-patio.jpg",
        "src": "../07_prototipo/media/cafe-patio.jpg",
        "author": "Arlind Photography",
        "sourceUrl": "https://unsplash.com/photos/outdoor-cafe-tables-and-chairs-on-a-stone-patio-Bn0ABSKgQS8",
        "license": "Unsplash License",
        "licenseUrl": "https://unsplash.com/license",
        "alt": "Tavolini e sedie di un caffè su una piazza lastricata — foto d’esempio, non del locale fittizio",
        "illustrative": true,
        "downloadUrl": "https://images.unsplash.com/photo-1778429557617-d116d4bf210b?auto=format&fit=crop&fm=jpg&q=82&w=1400"
      },
      "media": [
        {
          "id": "media-milano-01-01",
          "file": "cafe-patio.jpg",
          "src": "../07_prototipo/media/cafe-patio.jpg",
          "author": "Arlind Photography",
          "sourceUrl": "https://unsplash.com/photos/outdoor-cafe-tables-and-chairs-on-a-stone-patio-Bn0ABSKgQS8",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Tavolini e sedie di un caffè su una piazza lastricata — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1778429557617-d116d4bf210b?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "source": "Arlind Photography / Unsplash",
          "kind": "Fotografia stock dimostrativa",
          "origin": "venue",
          "uploadedBy": "Cortile Due",
          "uploadedAt": "2026-10-01",
          "caption": "Gli spazi",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-milano-01-02",
          "file": "cafe-verde.jpg",
          "src": "../07_prototipo/media/cafe-verde.jpg",
          "author": "Thamy N.",
          "sourceUrl": "https://unsplash.com/photos/whimsical-green-cafe-interior-with-eclectic-decor-4dpyu39QivA",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Caffè con pareti verdi, sedute in legno e piante — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1777709352854-ca94b4564d22?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "source": "Thamy N. / Unsplash",
          "kind": "Fotografia stock dimostrativa",
          "origin": "venue",
          "uploadedBy": "Cortile Due",
          "uploadedAt": "2026-10-01",
          "caption": "Un’altra prospettiva",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-milano-01-03",
          "file": "cafe-sala.jpg",
          "src": "../07_prototipo/media/cafe-sala.jpg",
          "author": "stephen packwood",
          "sourceUrl": "https://unsplash.com/photos/grand-cafe-interior-at-daytime-UitmsTgUgcE",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Sala di un caffè con sedute e lampade decorative — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1571130961933-0680ba8d5ff2?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "venue",
          "uploadedBy": "Cortile Due",
          "uploadedAt": "2026-10-01",
          "caption": "La sala",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-milano-01-user-01",
          "file": "caffe-tazza.jpg",
          "src": "../07_prototipo/media/caffe-tazza.jpg",
          "author": "EADWYNE",
          "sourceUrl": "https://unsplash.com/photos/a-coffee-cup-on-a-table-QEkKvtzL-Pc",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Tazza di caffè appoggiata su un tavolino — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1651789276450-2ba99bf5f270?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "reviews",
          "uploadedBy": "Luca",
          "uploadedAt": "2026-09-28",
          "caption": "Una pausa al tavolo",
          "mock": true,
          "reviewId": "rec-milano-01-01"
        },
        {
          "id": "media-milano-01-user-02",
          "file": "caffe-due-tazze.jpg",
          "src": "../07_prototipo/media/caffe-due-tazze.jpg",
          "author": "engin akyurt",
          "sourceUrl": "https://unsplash.com/photos/two-cups-of-coffee-on-a-white-table-t16HUOz9fjI",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Due tazze di caffè su un tavolo bianco — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1769412340450-528930c62f77?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "reviews",
          "uploadedBy": "Chiara",
          "uploadedAt": "2026-09-25",
          "caption": "Il caffè del pomeriggio",
          "mock": true,
          "reviewId": "rec-milano-01-02"
        },
        {
          "id": "media-milano-01-user-03",
          "file": "cafe-luci.jpg",
          "src": "../07_prototipo/media/cafe-luci.jpg",
          "author": "Clifford",
          "sourceUrl": "https://unsplash.com/photos/cafe-interior-with-hanging-bulbs-and-table-VobvKmG-StA",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Interno di un caffè con tavolini in legno e lampade sospese — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "reviews",
          "uploadedBy": "Matteo",
          "uploadedAt": "2026-09-30",
          "caption": "Il nostro punto di vista",
          "mock": true,
          "reviewId": "rec-milano-01-03"
        }
      ],
      "fictional": true
    },
    {
      "id": "luogo-milano-02",
      "name": "Officina Chiara",
      "city": "Milano",
      "zone": "Porta Venezia",
      "kind": "Spazio culturale",
      "budget": {
        "min": 16,
        "max": 22,
        "currency": "EUR",
        "source": "Dichiarazione del gestore mock",
        "updated": "2026-10-01"
      },
      "distance": {
        "km": 2.0,
        "reference": "Milano · riferimento centrale dimostrativo",
        "kind": "schematic_mock"
      },
      "hours": {
        "text": "16:00–23:00",
        "source": "Gestore mock",
        "updated": "2026-10-01",
        "live": false
      },
      "practical": {
        "outdoor": true,
        "stepFreeReported": true,
        "source": "Gestore mock",
        "updated": "2026-10-01"
      },
      "atmosphere": {
        "noise": "medio",
        "crowding": "basso",
        "light": "naturale",
        "period": "settembre 2026",
        "slot": "18:00–21:00",
        "visits": 7,
        "contributions": 7,
        "noiseContributions": 7,
        "scale": {
          "min": 1,
          "max": 5,
          "lowLabel": "Intensità bassa",
          "highLabel": "Intensità alta"
        },
        "values": {
          "noise": 3,
          "light": 3,
          "crowding": 2,
          "comfort": 4
        },
        "metricCoverage": {
          "noise": 7,
          "light": 7,
          "crowding": 7,
          "comfort": 7
        },
        "attendance": {
          "bands": [
            {
              "id": "pomeriggio",
              "label": "Pomeriggio",
              "start": "16:00",
              "end": "18:00"
            },
            {
              "id": "sera",
              "label": "Sera",
              "start": "18:00",
              "end": "21:00"
            },
            {
              "id": "tarda-sera",
              "label": "Tarda sera",
              "start": "21:00",
              "end": "23:00"
            }
          ],
          "days": [
            {
              "day": 0,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 4,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 3,
                  "contributions": 2
                }
              ]
            },
            {
              "day": 1,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": null,
                  "contributions": 0
                }
              ]
            },
            {
              "day": 2,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 2
                }
              ]
            },
            {
              "day": 3,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 2
                }
              ]
            },
            {
              "day": 4,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 2
                }
              ]
            },
            {
              "day": 5,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 2
                }
              ]
            },
            {
              "day": 6,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 4,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 3,
                  "contributions": 2
                }
              ]
            }
          ],
          "source": "Profili mock predisposti; non calcolati dai contributi",
          "method": "Intensità illustrative 1–5 per giorno e fascia; non misure live né medie reali"
        },
        "lastContribution": "2026-10-01",
        "source": "Contributi mock",
        "sufficient": false,
        "valueMethod": "Valori illustrativi predisposti, non medie realmente calcolate; metodo futuro da definire"
      },
      "reviews": [
        {
          "id": "rec-milano-02-01",
          "author": "Luca",
          "visited": "2026-09-28",
          "slot": "18:00–21:00",
          "company": "Con amici",
          "text": "Durante la mia visita il volume era più alto di quanto mi aspettassi. Ho preferito spostarmi nella sala interna.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": [
            "media-milano-02-user-01"
          ]
        },
        {
          "id": "rec-milano-02-02",
          "author": "Sara",
          "visited": "2026-09-26",
          "slot": "16:00–18:00",
          "company": "Con un’amica",
          "text": "Siamo entrate per vedere l’esposizione e ci siamo fermate a commentare le opere. Nel pomeriggio gli spazi erano facili da attraversare.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": [
            "media-milano-02-user-02"
          ]
        },
        {
          "id": "rec-milano-02-03",
          "author": "Elena",
          "visited": "2026-09-29",
          "slot": "19:00–20:00",
          "company": "Da sola",
          "text": "Ho preferito la sala più interna per guardare le opere con calma. All’ingresso c’erano più persone rispetto al resto dello spazio.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": []
        }
      ],
      "photo": {
        "id": "spazio-galleria",
        "file": "spazio-galleria.jpg",
        "src": "../07_prototipo/media/spazio-galleria.jpg",
        "author": "Toa Heftiba",
        "sourceUrl": "https://unsplash.com/photos/art-gallery-interior-YSKrZtgFvL0",
        "license": "Unsplash License",
        "licenseUrl": "https://unsplash.com/license",
        "alt": "Interno di una galleria con pavimento chiaro e opere alle pareti — foto d’esempio, non del locale fittizio",
        "illustrative": true,
        "downloadUrl": "https://images.unsplash.com/photo-1553101331-ce6281c677b9?auto=format&fit=crop&fm=jpg&q=82&w=1400"
      },
      "media": [
        {
          "id": "media-milano-02-01",
          "file": "spazio-galleria.jpg",
          "src": "../07_prototipo/media/spazio-galleria.jpg",
          "author": "Toa Heftiba",
          "sourceUrl": "https://unsplash.com/photos/art-gallery-interior-YSKrZtgFvL0",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Interno di una galleria con pavimento chiaro e opere alle pareti — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1553101331-ce6281c677b9?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "source": "Toa Heftiba / Unsplash",
          "kind": "Fotografia stock dimostrativa",
          "origin": "venue",
          "uploadedBy": "Officina Chiara",
          "uploadedAt": "2026-10-01",
          "caption": "Gli spazi",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-milano-02-02",
          "file": "spazio-legno.jpg",
          "src": "../07_prototipo/media/spazio-legno.jpg",
          "author": "Neon Wang",
          "sourceUrl": "https://unsplash.com/photos/interior-view-of-a-modern-art-gallery-with-wooden-accents-xCmifs1SbJw",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Spazio espositivo con arredi in legno e luce naturale — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1766802982249-12274bebfdf6?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "source": "Neon Wang / Unsplash",
          "kind": "Fotografia stock dimostrativa",
          "origin": "venue",
          "uploadedBy": "Officina Chiara",
          "uploadedAt": "2026-10-01",
          "caption": "Un’altra prospettiva",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-milano-02-user-01",
          "file": "galleria-visita.jpg",
          "src": "../07_prototipo/media/galleria-visita.jpg",
          "author": "Cristian Pineda",
          "sourceUrl": "https://unsplash.com/photos/visitors-observing-black-and-white-artwork-in-a-gallery-pz_4rUEfRGs",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Visitatori davanti a opere in bianco e nero in una galleria — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1781209443212-e91a91e44d49?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "reviews",
          "uploadedBy": "Luca",
          "uploadedAt": "2026-09-28",
          "caption": "Durante l’esposizione",
          "mock": true,
          "reviewId": "rec-milano-02-01"
        },
        {
          "id": "media-milano-02-user-02",
          "file": "galleria-persone.jpg",
          "src": "../07_prototipo/media/galleria-persone.jpg",
          "author": "Egor Myznik",
          "sourceUrl": "https://unsplash.com/photos/two-people-observe-art-in-a-gallery-ifdGh_suSio",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Due persone osservano opere d’arte in uno spazio espositivo — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1773474352672-452579bdfe40?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "reviews",
          "uploadedBy": "Sara",
          "uploadedAt": "2026-09-26",
          "caption": "La visita nella sala interna",
          "mock": true,
          "reviewId": "rec-milano-02-02"
        }
      ],
      "fictional": true
    },
    {
      "id": "luogo-milano-03",
      "name": "Casa del Suono",
      "city": "Milano",
      "zone": "Navigli",
      "kind": "Caffè",
      "budget": {
        "min": 20,
        "max": 28,
        "currency": "EUR",
        "source": "Dichiarazione del gestore mock",
        "updated": "2026-10-01"
      },
      "distance": {
        "km": 3.1,
        "reference": "Milano · riferimento centrale dimostrativo",
        "kind": "schematic_mock"
      },
      "hours": {
        "text": "16:00–23:00",
        "source": "Gestore mock",
        "updated": "2026-10-01",
        "live": false
      },
      "practical": {
        "outdoor": false,
        "stepFreeReported": true,
        "source": "Gestore mock",
        "updated": "2026-10-01"
      },
      "atmosphere": {
        "noise": "alto",
        "crowding": "basso",
        "light": "soffusa",
        "period": "settembre 2026",
        "slot": "18:00–21:00",
        "visits": 8,
        "contributions": 8,
        "noiseContributions": 8,
        "scale": {
          "min": 1,
          "max": 5,
          "lowLabel": "Intensità bassa",
          "highLabel": "Intensità alta"
        },
        "values": {
          "noise": 4,
          "light": 3,
          "crowding": 2,
          "comfort": 4
        },
        "metricCoverage": {
          "noise": 8,
          "light": 8,
          "crowding": 8,
          "comfort": 8
        },
        "attendance": {
          "bands": [
            {
              "id": "pomeriggio",
              "label": "Pomeriggio",
              "start": "16:00",
              "end": "18:00"
            },
            {
              "id": "sera",
              "label": "Sera",
              "start": "18:00",
              "end": "21:00"
            },
            {
              "id": "tarda-sera",
              "label": "Tarda sera",
              "start": "21:00",
              "end": "23:00"
            }
          ],
          "days": [
            {
              "day": 0,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 4,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 3,
                  "contributions": 2
                }
              ]
            },
            {
              "day": 1,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 2
                }
              ]
            },
            {
              "day": 2,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 2
                }
              ]
            },
            {
              "day": 3,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 2
                }
              ]
            },
            {
              "day": 4,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 2
                }
              ]
            },
            {
              "day": 5,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 3,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 2,
                  "contributions": 2
                }
              ]
            },
            {
              "day": 6,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": 2,
                  "contributions": 2
                },
                {
                  "band": "sera",
                  "value": 4,
                  "contributions": 2
                },
                {
                  "band": "tarda-sera",
                  "value": 3,
                  "contributions": 2
                }
              ]
            }
          ],
          "source": "Profili mock predisposti; non calcolati dai contributi",
          "method": "Intensità illustrative 1–5 per giorno e fascia; non misure live né medie reali"
        },
        "lastContribution": "2026-10-01",
        "source": "Contributi mock",
        "sufficient": false,
        "valueMethod": "Valori illustrativi predisposti, non medie realmente calcolate; metodo futuro da definire"
      },
      "reviews": [
        {
          "id": "rec-milano-03-01",
          "author": "Luca",
          "visited": "2026-09-28",
          "slot": "18:00–21:00",
          "company": "Con amici",
          "text": "Durante la mia visita il volume era più alto di quanto mi aspettassi. L’ambiente era vivace, soprattutto vicino ai tavoli centrali.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": [
            "media-milano-03-user-01"
          ]
        },
        {
          "id": "rec-milano-03-02",
          "author": "Giulia",
          "visited": "2026-09-24",
          "slot": "17:00–18:00",
          "company": "Con un’amica",
          "text": "Per una pausa veloce abbiamo trovato posto vicino alla finestra. Mi è piaciuto l’ambiente, ma non ho provato a lavorare qui.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": [
            "media-milano-03-user-02"
          ]
        },
        {
          "id": "rec-milano-03-03",
          "author": "Andrea",
          "visited": "2026-09-29",
          "slot": "21:00–22:00",
          "company": "Con amici",
          "text": "Ci siamo fermati per stare insieme. Durante la visita la musica rendeva più difficile seguire la conversazione da un lato all’altro del tavolo.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": [
            "media-milano-03-user-03"
          ]
        }
      ],
      "photo": {
        "id": "cafe-sala",
        "file": "cafe-sala.jpg",
        "src": "../07_prototipo/media/cafe-sala.jpg",
        "author": "stephen packwood",
        "sourceUrl": "https://unsplash.com/photos/grand-cafe-interior-at-daytime-UitmsTgUgcE",
        "license": "Unsplash License",
        "licenseUrl": "https://unsplash.com/license",
        "alt": "Sala di un caffè con sedute e lampade decorative — foto d’esempio, non del locale fittizio",
        "illustrative": true,
        "downloadUrl": "https://images.unsplash.com/photo-1571130961933-0680ba8d5ff2?auto=format&fit=crop&fm=jpg&q=82&w=1400"
      },
      "media": [
        {
          "id": "media-milano-03-01",
          "file": "cafe-sala.jpg",
          "src": "../07_prototipo/media/cafe-sala.jpg",
          "author": "stephen packwood",
          "sourceUrl": "https://unsplash.com/photos/grand-cafe-interior-at-daytime-UitmsTgUgcE",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Sala di un caffè con sedute e lampade decorative — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1571130961933-0680ba8d5ff2?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "source": "stephen packwood / Unsplash",
          "kind": "Fotografia stock dimostrativa",
          "origin": "venue",
          "uploadedBy": "Casa del Suono",
          "uploadedAt": "2026-10-01",
          "caption": "Gli spazi",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-milano-03-02",
          "file": "cafe-luci.jpg",
          "src": "../07_prototipo/media/cafe-luci.jpg",
          "author": "Clifford",
          "sourceUrl": "https://unsplash.com/photos/cafe-interior-with-hanging-bulbs-and-table-VobvKmG-StA",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Interno di un caffè con tavolini in legno e lampade sospese — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "source": "Clifford / Unsplash",
          "kind": "Fotografia stock dimostrativa",
          "origin": "venue",
          "uploadedBy": "Casa del Suono",
          "uploadedAt": "2026-10-01",
          "caption": "Un’altra prospettiva",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-milano-03-03",
          "file": "cafe-verde.jpg",
          "src": "../07_prototipo/media/cafe-verde.jpg",
          "author": "Thamy N.",
          "sourceUrl": "https://unsplash.com/photos/whimsical-green-cafe-interior-with-eclectic-decor-4dpyu39QivA",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Caffè con pareti verdi, sedute in legno e piante — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1777709352854-ca94b4564d22?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "venue",
          "uploadedBy": "Casa del Suono",
          "uploadedAt": "2026-10-01",
          "caption": "La sala",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-milano-03-user-01",
          "file": "caffe-tazza.jpg",
          "src": "../07_prototipo/media/caffe-tazza.jpg",
          "author": "EADWYNE",
          "sourceUrl": "https://unsplash.com/photos/a-coffee-cup-on-a-table-QEkKvtzL-Pc",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Tazza di caffè appoggiata su un tavolino — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1651789276450-2ba99bf5f270?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "reviews",
          "uploadedBy": "Luca",
          "uploadedAt": "2026-09-28",
          "caption": "Una pausa al tavolo",
          "mock": true,
          "reviewId": "rec-milano-03-01"
        },
        {
          "id": "media-milano-03-user-02",
          "file": "caffe-due-tazze.jpg",
          "src": "../07_prototipo/media/caffe-due-tazze.jpg",
          "author": "engin akyurt",
          "sourceUrl": "https://unsplash.com/photos/two-cups-of-coffee-on-a-white-table-t16HUOz9fjI",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Due tazze di caffè su un tavolo bianco — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1769412340450-528930c62f77?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "reviews",
          "uploadedBy": "Giulia",
          "uploadedAt": "2026-09-24",
          "caption": "Il caffè del pomeriggio",
          "mock": true,
          "reviewId": "rec-milano-03-02"
        },
        {
          "id": "media-milano-03-user-03",
          "file": "cafe-patio.jpg",
          "src": "../07_prototipo/media/cafe-patio.jpg",
          "author": "Arlind Photography",
          "sourceUrl": "https://unsplash.com/photos/outdoor-cafe-tables-and-chairs-on-a-stone-patio-Bn0ABSKgQS8",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Tavolini e sedie di un caffè su una piazza lastricata — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1778429557617-d116d4bf210b?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "reviews",
          "uploadedBy": "Andrea",
          "uploadedAt": "2026-09-29",
          "caption": "Il nostro punto di vista",
          "mock": true,
          "reviewId": "rec-milano-03-03"
        }
      ],
      "fictional": true
    },
    {
      "id": "luogo-milano-04",
      "name": "Sosta Verde",
      "city": "Milano",
      "zone": "Lambrate",
      "kind": "Giardino",
      "budget": {
        "min": 0,
        "max": 10,
        "currency": "EUR",
        "source": "Dichiarazione del gestore mock",
        "updated": "2026-10-01"
      },
      "distance": {
        "km": 4.2,
        "reference": "Milano · riferimento centrale dimostrativo",
        "kind": "schematic_mock"
      },
      "hours": {
        "text": "16:00–23:00",
        "source": "Gestore mock",
        "updated": "2026-10-01",
        "live": false
      },
      "practical": {
        "outdoor": true,
        "stepFreeReported": null,
        "source": "Gestore mock",
        "updated": "2026-10-01"
      },
      "atmosphere": {
        "noise": null,
        "crowding": null,
        "light": "naturale",
        "period": "settembre 2026",
        "slot": "18:00–21:00",
        "visits": 0,
        "contributions": 0,
        "noiseContributions": 0,
        "scale": {
          "min": 1,
          "max": 5,
          "lowLabel": "Intensità bassa",
          "highLabel": "Intensità alta"
        },
        "values": {
          "noise": null,
          "light": null,
          "crowding": null,
          "comfort": null
        },
        "metricCoverage": {
          "noise": 0,
          "light": 0,
          "crowding": 0,
          "comfort": 0
        },
        "attendance": {
          "bands": [
            {
              "id": "pomeriggio",
              "label": "Pomeriggio",
              "start": "16:00",
              "end": "18:00"
            },
            {
              "id": "sera",
              "label": "Sera",
              "start": "18:00",
              "end": "21:00"
            },
            {
              "id": "tarda-sera",
              "label": "Tarda sera",
              "start": "21:00",
              "end": "23:00"
            }
          ],
          "days": [
            {
              "day": 0,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "sera",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "tarda-sera",
                  "value": null,
                  "contributions": 0
                }
              ]
            },
            {
              "day": 1,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "sera",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "tarda-sera",
                  "value": null,
                  "contributions": 0
                }
              ]
            },
            {
              "day": 2,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "sera",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "tarda-sera",
                  "value": null,
                  "contributions": 0
                }
              ]
            },
            {
              "day": 3,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "sera",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "tarda-sera",
                  "value": null,
                  "contributions": 0
                }
              ]
            },
            {
              "day": 4,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "sera",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "tarda-sera",
                  "value": null,
                  "contributions": 0
                }
              ]
            },
            {
              "day": 5,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "sera",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "tarda-sera",
                  "value": null,
                  "contributions": 0
                }
              ]
            },
            {
              "day": 6,
              "values": [
                {
                  "band": "pomeriggio",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "sera",
                  "value": null,
                  "contributions": 0
                },
                {
                  "band": "tarda-sera",
                  "value": null,
                  "contributions": 0
                }
              ]
            }
          ],
          "source": "Profili mock predisposti; non calcolati dai contributi",
          "method": "Intensità illustrative 1–5 per giorno e fascia; non misure live né medie reali"
        },
        "lastContribution": null,
        "source": "Contributi mock",
        "sufficient": false,
        "valueMethod": "Valori illustrativi predisposti, non medie realmente calcolate; metodo futuro da definire"
      },
      "reviews": [
        {
          "id": "rec-milano-04-01",
          "author": "Francesca",
          "visited": "2026-09-24",
          "slot": "16:00–17:00",
          "company": "Da sola",
          "text": "Ho fatto una passeggiata e mi sono fermata su una panchina. Non ho osservato abbastanza a lungo per descrivere l’affluenza nelle altre ore.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": [
            "media-milano-04-user-01"
          ]
        },
        {
          "id": "rec-milano-04-02",
          "author": "Paolo",
          "visited": "2026-09-30",
          "slot": "17:00–18:00",
          "company": "Con amici",
          "text": "Abbiamo scelto il viale alberato per camminare insieme. La mia foto racconta solo il tratto che ho attraversato durante quella visita.",
          "source": "Recensione mock",
          "mock": true,
          "mediaIds": []
        }
      ],
      "photo": {
        "id": "giardino-sole",
        "file": "giardino-sole.jpg",
        "src": "../07_prototipo/media/giardino-sole.jpg",
        "author": "Stephanie Klepacki",
        "sourceUrl": "https://unsplash.com/photos/park-bench-under-leafy-trees-on-a-sunny-day-Uvp4Xv9XdQ0",
        "license": "Unsplash License",
        "licenseUrl": "https://unsplash.com/license",
        "alt": "Panchina all’ombra di alberi in un parco — foto d’esempio, non del locale fittizio",
        "illustrative": true,
        "downloadUrl": "https://images.unsplash.com/photo-1757126203591-a1db459106ea?auto=format&fit=crop&fm=jpg&q=82&w=1400"
      },
      "media": [
        {
          "id": "media-milano-04-01",
          "file": "giardino-sole.jpg",
          "src": "../07_prototipo/media/giardino-sole.jpg",
          "author": "Stephanie Klepacki",
          "sourceUrl": "https://unsplash.com/photos/park-bench-under-leafy-trees-on-a-sunny-day-Uvp4Xv9XdQ0",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Panchina all’ombra di alberi in un parco — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1757126203591-a1db459106ea?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "source": "Stephanie Klepacki / Unsplash",
          "kind": "Fotografia stock dimostrativa",
          "origin": "venue",
          "uploadedBy": "Sosta Verde",
          "uploadedAt": "2026-10-01",
          "caption": "Gli spazi",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-milano-04-02",
          "file": "giardino-panchina.jpg",
          "src": "../07_prototipo/media/giardino-panchina.jpg",
          "author": "Jack Baxter",
          "sourceUrl": "https://unsplash.com/photos/a-park-area-with-a-bench-and-trees-TggeawQGcdk",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Panchina in un giardino alberato — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1684061334750-2cd2bbbc2513?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "source": "Jack Baxter / Unsplash",
          "kind": "Fotografia stock dimostrativa",
          "origin": "venue",
          "uploadedBy": "Sosta Verde",
          "uploadedAt": "2026-10-01",
          "caption": "Un’altra prospettiva",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-milano-04-03",
          "file": "parco-viale.jpg",
          "src": "../07_prototipo/media/parco-viale.jpg",
          "author": "Hung Tran",
          "sourceUrl": "https://unsplash.com/photos/people-at-the-park-qqAnlW6b2pU",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Viale alberato di un parco con persone in passeggiata — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1501591277443-e1656641d551?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "venue",
          "uploadedBy": "Sosta Verde",
          "uploadedAt": "2026-10-01",
          "caption": "Il percorso alberato",
          "mock": true,
          "reviewId": null
        },
        {
          "id": "media-milano-04-user-01",
          "file": "parco-passeggiata.jpg",
          "src": "../07_prototipo/media/parco-passeggiata.jpg",
          "author": "George Pagan III",
          "sourceUrl": "https://unsplash.com/photos/people-walking-and-running-on-a-tree-lined-park-path-4ICNfwu0SDA",
          "license": "Unsplash License",
          "licenseUrl": "https://unsplash.com/license",
          "alt": "Persone che passeggiano lungo un sentiero alberato — foto d’esempio, non del locale fittizio",
          "illustrative": true,
          "downloadUrl": "https://images.unsplash.com/photo-1767555257233-603bdfda72b1?auto=format&fit=crop&fm=jpg&q=82&w=1400",
          "origin": "reviews",
          "uploadedBy": "Francesca",
          "uploadedAt": "2026-09-24",
          "caption": "Durante la passeggiata",
          "mock": true,
          "reviewId": "rec-milano-04-01"
        }
      ],
      "fictional": true
    }
  ]
};
