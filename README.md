# 🏛️ Mythologia

> **Enciclopedia Universale delle Mitologie** — un viaggio attraverso le 12 grandi tradizioni mitologiche del mondo.

Mythologia è una Single Page Application (SPA) che raccoglie, in forma enciclopedica, i miti delle civiltà che hanno plasmato l'immaginario umano: dalla Mesopotamia del III millennio a.C. al Giappone degli spiriti kami, dalle saghe norrene alle nebbie celtiche, dalla Cina imperiale alle foreste sacre dell'Africa subsahariana.

Ogni mitologia è organizzata in quattro sezioni — **Cosmogonia**, **Pantheon**, **Eroi**, **Miti principali** — e ogni divinità, eroe o mito ha la sua pagina dedicata con biografia, versioni culturali, culto, influenze successive e testi originali tradotti.

---

## 🌍 Stato del progetto

### ✅ Mitologie sviluppate
- 🏺 **Mesopotamica** — Sumera, Accadica, Babilonese, Assira (3500–500 a.C.)
- 𓂀 **Egizia** — Eliopoli, Menfi, Tebe, Ermopoli (3100 a.C.–IV sec. d.C.)

### 🚧 Mitologie in arrivo
- 🏛️ Greco-Romana
- ⚔️ Norrena
- ⛩️ Giapponese
- 🕉️ Indù
- 🌽 Maya & Azteca
- 🍀 Celtica
- 🥁 Africane
- 🐉 Cinese
- 🔥 Slava
- 🕌 Araba

---

## ✨ Caratteristiche

- 🗺️ **Atlante interattivo** dei regni mitologici, basato su D3.js e TopoJSON
- 📖 **Pagine entità dedicate** per ogni dio, eroe e mito — con URL condivisibili
- 🔗 **Routing hash-based** con deep-link: `#mesopotamia/deity/anu`, `#egitto/hero/imhotep`
- ⬅️ **Back button intelligente** che conosce la mitologia di provenienza
- 🎨 **Design tematico** con palette cromatica dedicata per ogni civiltà
- 📱 **Responsive** — funziona su desktop, tablet e mobile
- 🌐 **Nessun backend** — SPA statica servibile da qualsiasi web server o CDN

---

## 🚀 Avvio locale

Non c'è un build step. Basta servire la cartella con qualsiasi web server statico:

```bash
# Con Python
python3 -m http.server 8000

# Con Node
npx serve .

# Con PHP
php -S localhost:8000
```

Poi apri `http://localhost:8000` nel browser.

> ⚠️ Aprire `index.html` con doppio click (protocollo `file://`) **non funziona** — le CDN e il routing hash-based richiedono un contesto HTTP.

---

## 📁 Struttura del progetto

```
mythologia/
├── index.html                  ← SPA shell con tutte le pagine
│
├── css/
│   ├── main.css                ← stili globali + componenti condivisi
│   ├── home.css                ← homepage (hero + griglia mitologie)
│   ├── atlas.css               ← atlante D3
│   ├── myth-page.css           ← hero delle pagine mitologia
│   └── page-view.css           ← display logic SPA
│
├── js/
│   ├── router.js               ← router hash-based con sub-routes entità
│   ├── entity.js               ← renderer condiviso pagina entità
│   ├── atlas.js                ← mappa D3 interattiva
│   ├── mesopotamia.js          ← logica sezione mesopotamica
│   └── egitto.js               ← logica sezione egizia
│
└── data/
    ├── atlas.js                ← pin mappa
    ├── mesopotamia.js          ← MESOP_DEITIES / MESOP_HEROES / MESOP_MYTHS
    └── egitto.js               ← EGIZIO_DEITIES / EGIZIO_HEROES / EGIZIO_MYTHS
```

---

## 🗺️ Sistema di routing

Mythologia usa un router hash-based custom con supporto per sub-routes delle entità. Questo permette URL condivisibili, back button del browser funzionante e refresh senza perdita di contesto.

| URL | Pagina |
|---|---|
| `#home` | Homepage con le 12 mitologie |
| `#atlante` | Atlante interattivo |
| `#mesopotamia` | Sezione mesopotamica |
| `#mesopotamia/deity/anu` | Pagina di Anu |
| `#mesopotamia/hero/gilgamesh` | Pagina di Gilgamesh |
| `#mesopotamia/myth/enuma` | Pagina dell'Enuma Elish |
| `#egitto/deity/horus` | Pagina di Horus |

---

## 🧩 Architettura — come aggiungere una mitologia

Questa sezione documenta il pattern esatto per sviluppare una nuova mitologia mantenendo la coerenza architetturale. Serve come riferimento tecnico per Claude quando lavoriamo sul progetto in nuove chat.

### Componenti chiave (da NON modificare senza motivo)

- **`js/router.js`** — contiene già la mappa `ROUTES` (tutte e 12 le mitologie registrate), la mappa `MYTH_LABELS` (etichette del back button), il registro globale `window.MYTH_ENTITIES[mitologia][tipo][id]` e l'API pubblica `window.openEntityRoute(mythRoute, type, id)`.
- **`js/entity.js`** — renderer condiviso che costruisce la pagina dettaglio di ogni entità (tab, hero, testi, versioni, ecc.).

### Pattern per ogni nuova mitologia

Esempio: sviluppare la **mitologia norrena**. Identificatore route: `norrena`. Prefisso costanti: `NORSE_`.

#### 1. `data/norrena.js` — Contenuti

Tre array con la stessa struttura dei file esistenti:

- `NORSE_DEITIES` — divinità
  Campi: `id, name, role, tags, epithet, type, chips, heroColor, bio, versions, cult, influence, texts`
- `NORSE_HEROES` — eroi
  `bio` è un oggetto: `{main, sub1, text1, sub2, text2, sub3, text3, sub4, text4}`
- `NORSE_MYTHS` — miti principali
  Stessa struttura degli eroi

Usa `data/mesopotamia.js` o `data/egitto.js` come riferimento.

#### 2. `js/norrena.js` — Logica

Deve contenere:

**(a)** Un IIFE di registrazione all'apertura del file:
```javascript
(function registerNorseEntities() {
  if (!window.MYTH_ENTITIES) window.MYTH_ENTITIES = {};
  const bucket = { deity: {}, hero: {}, myth: {} };
  NORSE_DEITIES.forEach(d => { bucket.deity[d.id] = d; });
  NORSE_HEROES.forEach(h => { bucket.hero[h.id] = h; });
  NORSE_MYTHS.forEach(m => { bucket.myth[m.id] = m; });
  window.MYTH_ENTITIES.norrena = bucket;
})();
```

**(b)** `window.initPage_norrena = function() {...}` — costruisce le griglie e attiva la prima tab.

**(c)** Funzioni `_buildNorsePantheon/Heroes/Myths` che popolano i contenitori DOM.

**(d)** Funzione `showNorseSec(id, btn)` per le tab della sezione.

**(e)** Funzione `openNorseEntity(type, id)` che delega al router:
```javascript
function openNorseEntity(type, id) {
  window.openEntityRoute('norrena', type, id);
}
```

**(f)** I click handler delle card DEVONO chiamare `openNorseEntity(...)`, MAI `openEntity` alla vecchia maniera.

Usa `js/mesopotamia.js` o `js/egitto.js` come modello esatto.

#### 3. `index.html` — Shell

- Rimuovi il placeholder `<div id="page-norrena">...in arrivo...</div>`
- Aggiungi il blocco completo `<div id="page-norrena" class="page-view">` copiando la struttura di `page-mesopotamia` o `page-egitto`:
  - Hero della mitologia (`myth-page-hero`)
  - Nav con 4 tab (`section-nav`): Cosmogonia, Pantheon, Eroi, Miti principali
  - Content con 4 `sec-block`
- Gli id seguono convenzione: `<sigla>sec-cosmo/dei/eroi/miti` e `<sigla>-pantheon/heroes/myths` (es. `nsec-cosmo`, `norse-pantheon`)
- Aggiungi i due `<script>` **PRIMA** di `js/router.js`:
  ```html
  <script src="data/norrena.js"></script>
  ...
  <script src="js/norrena.js"></script>
  ```

#### 4. `css/myth-page.css` — Hero tematico

Aggiungi la classe `.mph-bg-norse` con gradienti tematici per l'hero (aurora boreale, freddi blu-verdi per la Norrena). Vedi `.mph-bg-mesopotamia` e `.mph-bg-egyptian` come esempio.

#### 5. Router

**Non toccare `router.js`.** Route ed etichette sono già registrate per tutte e 12 le mitologie.

### ✅ Checklist finale

- [ ] IIFE registra entità in `MYTH_ENTITIES.<mitologia>`?
- [ ] Click handler chiamano `open<Mito>Entity` → `openEntityRoute`, non `openEntity` diretto?
- [ ] `<script src="js/<mitologia>.js">` è PRIMA di `router.js`?
- [ ] Placeholder rimosso?
- [ ] `.mph-bg-<nome>` aggiunto in `myth-page.css`?
- [ ] `router.js` e `entity.js` NON modificati?

---

## 📚 Standard di contenuto

Mythologia aspira a essere enciclopedica, non divulgativa. I contenuti seguono questi standard:

- **Precisione accademica** — fonti primarie tradotte (Enuma Elish, Testi delle Piramidi, Edda Poetica, Rig Veda, Popol Vuh, ecc.), enciclopedie di riferimento, studi accademici. Citazione sempre della fonte e dell'epoca.
- **Completezza** — per ogni divinità: biografia estesa, versioni attraverso culture e periodi, culto e templi, influenze successive, testi originali.
- **Parallelismi interculturali** — attenzione particolare ai motivi mitici transculturali: diluvio universale, dèi morenti e risorti, discesa agli inferi, axis mundi, battaglia cosmica.
- **Lingua** — italiano, registro colto ma leggibile. Né tecnicismo pedante né divulgazione banalizzante.

---

## 🔧 Stack tecnico

- **Vanilla HTML / CSS / JavaScript** — nessun framework, nessun build step
- **D3.js v7** — atlante interattivo
- **TopoJSON Client v3** — dati geografici
- **World Atlas 110m** — mappa mondiale (caricata runtime da CDN)
- **Google Fonts** — Cinzel Decorative, Cinzel, EB Garamond

Tutte le dipendenze sono caricate da CDN. Richiede connessione internet al primo caricamento.

---

## 📖 Fonti e riferimenti principali

Per la Mesopotamia: Andrew George, *The Babylonian Gilgamesh Epic*; Stephanie Dalley, *Myths from Mesopotamia*; Thorkild Jacobsen, *The Treasures of Darkness*; Jean Bottéro, *Mésopotamie: L'écriture, la raison et les dieux*.

Per l'Egitto: E.A. Wallis Budge, *The Gods of the Egyptians*; Erik Hornung, *Conceptions of God in Ancient Egypt*; Richard H. Wilkinson, *The Complete Gods and Goddesses of Ancient Egypt*; Jan Assmann, *Il mito dell'esodo*.

Bibliografie specifiche saranno aggiunte man mano che nuove mitologie verranno sviluppate.

---

*"Gli dèi si sono fatti mortali per poter morire, e poi risorgere nel racconto."*

**Mythologia** © 2025
