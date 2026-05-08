/* js/norrena.js — logica pagina mitologia norrena
   Identificatore route: norrena
   Prefisso costanti: NORSE_
   Sigla DOM: norse / norsec */

/* ── Registrazione nel registro globale del router ─────────────────── */
(function registerNorseEntities() {
  if (!window.MYTH_ENTITIES) window.MYTH_ENTITIES = {};

  const bucket = { deity: {}, hero: {}, myth: {} };

  if (typeof NORSE_DEITIES !== "undefined") {
    NORSE_DEITIES.forEach((d) => {
      bucket.deity[d.id] = d;
    });
  }
  if (typeof NORSE_HEROES !== "undefined") {
    NORSE_HEROES.forEach((h) => {
      bucket.hero[h.id] = h;
    });
  }
  if (typeof NORSE_MYTHS !== "undefined") {
    NORSE_MYTHS.forEach((m) => {
      bucket.myth[m.id] = m;
    });
  }

  window.MYTH_ENTITIES.norrena = bucket;
})();

/* ── Init pagina ───────────────────────────────────────────────────── */
window.initPage_norrena = function () {
  _buildNorsePantheon();
  _buildNorseHeroes();
  _buildNorseMyths();
  showNorseSec(
    "cosmo",
    document.querySelector("#page-norrena .snav-btn"),
  );
};

/* ── Costruzione griglie ───────────────────────────────────────────── */
function _buildNorsePantheon() {
  const grid = document.getElementById("norse-pantheon");
  if (!grid || grid.dataset.built) return;
  grid.dataset.built = "1";
  if (typeof NORSE_DEITIES === "undefined") return;

  grid.innerHTML = NORSE_DEITIES.map((d) => {
    const bioText = (typeof d.bio === "object" ? d.bio.main : d.bio) || "";
    return `
    <div class="deity-card" onclick="openNorseEntity('deity','${d.id}')">
      <div class="deity-top">
        <div class="deity-circle"></div>
        <div>
          <div class="deity-name">${d.name}</div>
          <div class="deity-role">${d.role}</div>
        </div>
      </div>
      <div class="deity-desc">${
        bioText.slice(0, 160).replace(/\n/g, " ") ||
        '<em style="opacity:.6">Scheda da compilare</em>'
      }${bioText.length > 160 ? "…" : ""}</div>
      <div class="deity-tags">${(d.tags || [])
        .map((t) => `<span class="dtag">${t}</span>`)
        .join("")}</div>
      <div class="deity-cta">Scopri tutto &rarr;</div>
    </div>
  `;
  }).join("");
}

function _buildNorseHeroes() {
  const c = document.getElementById("norse-heroes");
  if (!c || c.dataset.built) return;
  c.dataset.built = "1";
  if (typeof NORSE_HEROES === "undefined") return;

  c.innerHTML = NORSE_HEROES.map(
    (h) => `
    <div class="hero-card" onclick="openNorseEntity('hero','${h.id}')">
      <div class="hca">
        <div class="hca-circle"></div>
        <div class="hca-name">${h.name}</div>
        <div class="hca-ep">${h.epithet}</div>
      </div>
      <div class="hcb">
        <div class="hcb-label">Chi era</div>
        <div class="hcb-text">${
          h.shortDesc || '<em style="opacity:.6">Scheda da compilare</em>'
        }</div>
        <div class="hcb-cta">Leggi la storia completa &rarr;</div>
      </div>
    </div>
  `,
  ).join("");
}

function _buildNorseMyths() {
  const c = document.getElementById("norse-myths");
  if (!c || c.dataset.built) return;
  c.dataset.built = "1";
  if (typeof NORSE_MYTHS === "undefined") return;

  c.innerHTML = NORSE_MYTHS.map(
    (m) => `
    <div class="myth-entry" onclick="openNorseEntity('myth','${m.id}')">
      <div class="myth-tag">${m.tag}</div>
      <div class="myth-title">${m.title}</div>
      <div class="myth-text">${
        m.shortDesc || '<em style="opacity:.6">Scheda da compilare</em>'
      }</div>
      <div class="myth-cta">Leggi il mito completo &rarr;</div>
    </div>
  `,
  ).join("");
}

/* ── Tabs della sezione ────────────────────────────────────────────── */
function showNorseSec(id, btn) {
  document
    .querySelectorAll("#page-norrena .sec-block")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll("#page-norrena .snav-btn")
    .forEach((b) => b.classList.remove("active"));
  const el = document.getElementById("norsec-" + id);
  if (el) el.classList.add("active");
  if (btn) btn.classList.add("active");
}

/* ── Apertura entità: delega al router ─────────────────────────────── */
function openNorseEntity(type, id) {
  window.openEntityRoute("norrena", type, id);
}
