/* router.js — hash-based SPA router con supporto sub-routes entità

   Formati URL supportati:
     #home                            → homepage
     #atlante                         → atlante interattivo
     #mesopotamia                     → sezione mesopotamica
     #mesopotamia/deity/anu           → pagina entità (dio/eroe/mito)
     #mesopotamia/hero/gilgamesh
     #mesopotamia/myth/enuma
     #grecia                          → altre mitologie (placeholder)
*/

const ROUTES = {
  "": "home",
  home: "home",
  atlante: "atlante",
  mesopotamia: "mesopotamia",
  grecia: "grecia",
  egitto: "egitto",
  norrena: "norrena",
  giapponese: "giapponese",
  indu: "indu",
  "maya-azteca": "maya-azteca",
  maya: "maya",
  azteca: "azteca",
  celtica: "celtica",
  "celtica-irlandese": "celtica-irlandese",
  "celtica-gallese": "celtica-gallese",
  "celtica-gallica": "celtica-gallica",
  "celtica-insulare": "celtica-insulare",
  africana: "africana",
  cinese: "cinese",
  slava: "slava",
  araba: "araba",
};

/* Registro globale: ogni data-file registra qui le proprie entità.
   Struttura: MYTH_ENTITIES[mitologia][tipo][id] = dato */
window.MYTH_ENTITIES = window.MYTH_ENTITIES || {};

/* Etichetta mostrata nel pulsante "← indietro" della pagina entità */
const MYTH_LABELS = {
  mesopotamia: "Mesopotamica",
  grecia: "Greco-Romana",
  egitto: "Egizia",
  norrena: "Norrena",
  giapponese: "Giapponese",
  indu: "Indù",
  "maya-azteca": "Maya & Azteca",
  maya: "Maya",
  azteca: "Azteca",
  celtica: "Celtica",
  "celtica-irlandese": "Celtica Irlandese",
  "celtica-gallese": "Celtica Gallese",
  "celtica-gallica": "Celtica Gallica",
  "celtica-insulare": "Gaelica Scozzese",
  africana: "Africane",
  cinese: "Cinese",
  slava: "Slava",
  araba: "Araba",
};

function getHashParts() {
  return (location.hash || "#").slice(1).split("/").filter(Boolean);
}

function navigateTo(path) {
  location.hash = path;
}

function _activatePage(pageId) {
  document
    .querySelectorAll(".page-view")
    .forEach((p) => p.classList.remove("active"));
  const el = document.getElementById("page-" + pageId);
  if (el) el.classList.add("active");
}

function _updateNavActive(route) {
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.classList.toggle("active", a.dataset.route === route);
  });
}

function _lookupEntity(myth, type, id) {
  const m = window.MYTH_ENTITIES[myth];
  if (!m) return null;
  const t = m[type];
  if (!t) return null;
  return t[id] || null;
}

function _renderEntityWithBack(data, type, mythRoute) {
  if (typeof renderEntityPage !== "function") return;

  renderEntityPage(data, type);

  const backBtn = document.getElementById("e-back-btn");
  if (backBtn) {
    backBtn.innerHTML = "&larr; " + (MYTH_LABELS[mythRoute] || "Indietro");
    backBtn.onclick = (e) => {
      e.preventDefault();
      navigateTo(mythRoute);
    };
  }
}

function onHashChange() {
  const parts = getHashParts();
  const page = parts[0] || "home";

  // ── CASO 1: rotta entità #<mitologia>/<tipo>/<id> ──
  if (parts.length >= 3 && ROUTES[page]) {
    const mythRoute = ROUTES[page];
    const type = parts[1];
    const id = parts[2];

    const entityData = _lookupEntity(mythRoute, type, id);
    if (entityData) {
      _activatePage("entity");
      _updateNavActive(mythRoute);
      _renderEntityWithBack(entityData, type, mythRoute);
      window.scrollTo(0, 0);
      return;
    }
    // fallback: entità non trovata → mostra la sezione madre
  }

  // ── CASO 2: pagina semplice ──
  const target = ROUTES[page] || "home";
  _activatePage(target);
  _updateNavActive(target);

  if (window["initPage_" + target]) {
    window["initPage_" + target](parts[1] || null, parts[2] || null);
  }

  window.scrollTo(0, 0);
}

/* API pubblica: chiamata dai click handler delle varie mitologie */
window.openEntityRoute = function (mythRoute, type, id) {
  navigateTo(mythRoute + "/" + type + "/" + id);
};

window.addEventListener("hashchange", onHashChange);
window.addEventListener("DOMContentLoaded", onHashChange);
