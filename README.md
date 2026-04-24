# Mythologia

## Enciclopedia Universale delle Mitologie

---

### Struttura del progetto

```
mythologia/
├── index.html              ← entry point (SPA shell)
├── css/
│   ├── main.css            ← stili globali, componenti condivisi
│   ├── home.css            ← homepage hero + myth grid
│   ├── atlas.css           ← atlante interattivo
│   ├── myth-page.css       ← hero delle pagine mitologia
│   └── page-view.css       ← routing SPA (display logic)
├── js/
│   ├── router.js           ← hash-based router
│   ├── entity.js           ← renderer pagine entità (dei/eroi/miti)
│   ├── atlas.js            ← D3 world map
│   └── mesopotamia.js      ← logica pagina mesopotamica
└── data/
    ├── atlas.js            ← dati pin della mappa
    └── mesopotamia.js      ← tutti i contenuti mesopotamici
```

---

### Navigazione

| URL hash         | Pagina                        |
| ---------------- | ----------------------------- |
| `#home`          | Homepage con le 12 mitologie  |
| `#atlante`       | Mappa interattiva del mondo   |
| `#mesopotamia`   | Sezione mesopotamica completa |
| `#grecia`        | Greco-Romana (placeholder)    |
| `#egitto`        | Egizia (placeholder)          |
| _(e altre 8...)_ | Placeholder — da sviluppare   |

Cliccando su un'entità (dio, eroe, mito) si apre la pagina dedicata.
Il tasto "← Mesopotamica" riporta alla sezione.

---

### Aggiungere una nuova mitologia

1. Crea `data/nomemito.js` con la struttura di `data/mesopotamia.js`
2. Crea `js/nomemito.js` con la struttura di `js/mesopotamia.js`
3. Aggiungi la pagina HTML in `index.html` (copia il blocco `page-mesopotamia`)
4. Registra la route in `js/router.js` nell'oggetto `ROUTES`
5. Includi i due script `<script>` in fondo a `index.html`
6. Rimuovi il placeholder `div` corrispondente

---

### Dipendenze esterne (CDN)

- Google Fonts: Cinzel Decorative, Cinzel, EB Garamond
- D3.js v7 (mappa)
- TopoJSON client v3 (mappa)
- World Atlas 110m (dati geografici — caricato runtime)

Tutte le dipendenze sono caricate da CDN — serve una connessione internet.
Per uso offline, scarica i file e aggiorna i path in `index.html`.

---

Mythologia © 2025 — Enciclopedia Universale delle Mitologie
