window.SNODO_CATALOG = {
  "version": "0.1",
  "productCoverage": "Italia",
  "demoCities": [
    "Roma",
    "Milano"
  ],
  "notice": "Luoghi, prezzi, orari, distanze, contributi e illustrazioni sono fittizi. Nessun dato live.",
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
          "text": "Potevamo parlare senza alzare la voce.",
          "source": "Recensione mock"
        }
      ],
      "media": [
        {
          "id": "media-roma-01-01",
          "source": "Gestore mock",
          "date": "2026-10-01",
          "kind": "Illustrazione dimostrativa"
        },
        {
          "id": "media-roma-01-02",
          "source": "Utente mock",
          "date": "2026-09-28",
          "kind": "Illustrazione dimostrativa"
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
          "text": "Durante la mia visita il volume era più alto di quanto mi aspettassi.",
          "source": "Recensione mock"
        }
      ],
      "media": [
        {
          "id": "media-roma-02-01",
          "source": "Gestore mock",
          "date": "2026-10-01",
          "kind": "Illustrazione dimostrativa"
        },
        {
          "id": "media-roma-02-02",
          "source": "Utente mock",
          "date": "2026-09-28",
          "kind": "Illustrazione dimostrativa"
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
          "text": "Durante la mia visita il volume era più alto di quanto mi aspettassi.",
          "source": "Recensione mock"
        }
      ],
      "media": [
        {
          "id": "media-roma-03-01",
          "source": "Gestore mock",
          "date": "2026-10-01",
          "kind": "Illustrazione dimostrativa"
        },
        {
          "id": "media-roma-03-02",
          "source": "Utente mock",
          "date": "2026-09-28",
          "kind": "Illustrazione dimostrativa"
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
      "media": [
        {
          "id": "media-roma-04-01",
          "source": "Gestore mock",
          "date": "2026-10-01",
          "kind": "Illustrazione dimostrativa"
        },
        {
          "id": "media-roma-04-02",
          "source": "Utente mock",
          "date": "2026-09-28",
          "kind": "Illustrazione dimostrativa"
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
          "text": "Potevamo parlare senza alzare la voce.",
          "source": "Recensione mock"
        }
      ],
      "media": [
        {
          "id": "media-milano-01-01",
          "source": "Gestore mock",
          "date": "2026-10-01",
          "kind": "Illustrazione dimostrativa"
        },
        {
          "id": "media-milano-01-02",
          "source": "Utente mock",
          "date": "2026-09-28",
          "kind": "Illustrazione dimostrativa"
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
          "text": "Durante la mia visita il volume era più alto di quanto mi aspettassi.",
          "source": "Recensione mock"
        }
      ],
      "media": [
        {
          "id": "media-milano-02-01",
          "source": "Gestore mock",
          "date": "2026-10-01",
          "kind": "Illustrazione dimostrativa"
        },
        {
          "id": "media-milano-02-02",
          "source": "Utente mock",
          "date": "2026-09-28",
          "kind": "Illustrazione dimostrativa"
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
          "text": "Durante la mia visita il volume era più alto di quanto mi aspettassi.",
          "source": "Recensione mock"
        }
      ],
      "media": [
        {
          "id": "media-milano-03-01",
          "source": "Gestore mock",
          "date": "2026-10-01",
          "kind": "Illustrazione dimostrativa"
        },
        {
          "id": "media-milano-03-02",
          "source": "Utente mock",
          "date": "2026-09-28",
          "kind": "Illustrazione dimostrativa"
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
      "reviews": [],
      "media": [
        {
          "id": "media-milano-04-01",
          "source": "Gestore mock",
          "date": "2026-10-01",
          "kind": "Illustrazione dimostrativa"
        },
        {
          "id": "media-milano-04-02",
          "source": "Utente mock",
          "date": "2026-09-28",
          "kind": "Illustrazione dimostrativa"
        }
      ],
      "fictional": true
    }
  ]
};
