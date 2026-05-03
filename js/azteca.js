/* js/azteca.js — logica pagina sotto-tradizione Azteca/Mexica
   Le click handler delegano al router (openEntityRoute) per avere URL dedicati
   e un back-button che funziona naturalmente.

   Route: #azteca  (sotto-tradizione di "Maya & Azteca", fratello di #maya)
   Sigla DOM: az-  (es. az-pantheon, az-heroes, az-myths)
   Prefisso tab: azsec-  (es. azsec-cosmo, azsec-dei, azsec-eroi, azsec-miti)
*/

/* ── Registrazione nel registro globale del router ─────────────────── */
(function registerAztecEntities() {
  if (!window.MYTH_ENTITIES) window.MYTH_ENTITIES = {};

  const bucket = { deity: {}, hero: {}, myth: {} };

  if (typeof AZTEC_DEITIES !== "undefined") {
    AZTEC_DEITIES.forEach((d) => {
      bucket.deity[d.id] = d;
    });
  }
  if (typeof AZTEC_HEROES !== "undefined") {
    AZTEC_HEROES.forEach((h) => {
      bucket.hero[h.id] = h;
    });
  }
  if (typeof AZTEC_MYTHS !== "undefined") {
    AZTEC_MYTHS.forEach((m) => {
      bucket.myth[m.id] = m;
    });
  }

  window.MYTH_ENTITIES.azteca = bucket;
})();

/* ── Init pagina ───────────────────────────────────────────────────── */
window.initPage_azteca = function () {
  _buildAztecPantheon();
  _buildAztecHeroes();
  _buildAztecMyths();
  showAztecSec("cosmo", document.querySelector("#page-azteca .snav-btn"));
};

/* ── Costruzione griglie ───────────────────────────────────────────── */
function _buildAztecPantheon() {
  const grid = document.getElementById("az-pantheon");
  if (!grid || grid.dataset.built) return;
  grid.dataset.built = "1";

  grid.innerHTML = AZTEC_DEITIES.map(
    (d) => `
    <div class="deity-card" onclick="openAztecEntity('deity','${d.id}')">
      <div class="deity-top">
        <div class="deity-circle"></div>
        <div>
          <div class="deity-name">${d.name}</div>
          <div class="deity-role">${d.role}</div>
        </div>
      </div>
      <div class="deity-desc">
        ${
          ((typeof d.bio === "object" ? d.bio.main : d.bio) || "")
            .slice(0, 160)
            .replace(/\n/g, " ") ||
          '<em style="opacity:.6">Scheda da compilare</em>'
        }
${((typeof d.bio === "object" ? d.bio.main : d.bio) || "").length > 160 ? "…" : ""}
      </div>
      <div class="deity-tags">${d.tags.map((t) => `<span class="dtag">${t}</span>`).join("")}</div>
      <div class="deity-cta">Scopri tutto &rarr;</div>
    </div>
  `,
  ).join("");
}

function _buildAztecHeroes() {
  const c = document.getElementById("az-heroes");
  if (!c || c.dataset.built) return;
  c.dataset.built = "1";

  c.innerHTML = AZTEC_HEROES.map(
    (h) => `
    <div class="hero-card" onclick="openAztecEntity('hero','${h.id}')">
      <div class="hca">
        <div class="hca-circle"></div>
        <div class="hca-name">${h.name}</div>
        <div class="hca-ep">${h.epithet}</div>
      </div>
      <div class="hcb">
        <div class="hcb-label">Chi era</div>
        <div class="hcb-text">
          ${h.shortDesc || '<em style="opacity:.6">Scheda da compilare</em>'}
        </div>
        <div class="hcb-cta">Leggi la storia completa &rarr;</div>
      </div>
    </div>
  `,
  ).join("");
}

function _buildAztecMyths() {
  const c = document.getElementById("az-myths");
  if (!c || c.dataset.built) return;
  c.dataset.built = "1";

  c.innerHTML = AZTEC_MYTHS.map(
    (m) => `
    <div class="myth-entry" onclick="openAztecEntity('myth','${m.id}')">
      <div class="myth-tag">${m.tag}</div>
      <div class="myth-title">${m.title}</div>
      <div class="myth-text">
        ${m.shortDesc || '<em style="opacity:.6">Scheda da compilare</em>'}
      </div>
      <div class="myth-cta">Leggi il mito completo &rarr;</div>
    </div>
  `,
  ).join("");
}

/* ── Tabs della sezione ────────────────────────────────────────────── */
function showAztecSec(id, btn) {
  document
    .querySelectorAll("#page-azteca .sec-block")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll("#page-azteca .snav-btn")
    .forEach((b) => b.classList.remove("active"));
  const el = document.getElementById("azsec-" + id);
  if (el) el.classList.add("active");
  if (btn) btn.classList.add("active");
}

/* ── Apertura entità: delega al router ─────────────────────────────── */
function openAztecEntity(type, id) {
  // cambia l'URL → il router gestisce rendering e back-button
  window.openEntityRoute("azteca", type, id);
}
