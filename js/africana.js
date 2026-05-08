/* js/africana.js — logica pagina Mitologie Africane
   Identificatore route: africana
   Prefisso costanti: AFRICAN_
   Sigla DOM: african / afrsec

   Le mitologie africane sono un mosaico di tradizioni distinte
   (Yoruba, Akan, Vodun, Bantu, Zulu, Dogon, Mongo, Swahili),
   non un sistema unitario. Vedi disclaimer nella pagina HTML.
*/

/* ── Registrazione nel registro globale del router ─────────────────── */
(function registerAfricanEntities() {
  if (!window.MYTH_ENTITIES) window.MYTH_ENTITIES = {};

  const bucket = { deity: {}, hero: {}, myth: {} };

  if (typeof AFRICAN_DEITIES !== "undefined") {
    AFRICAN_DEITIES.forEach((d) => {
      bucket.deity[d.id] = d;
    });
  }
  if (typeof AFRICAN_HEROES !== "undefined") {
    AFRICAN_HEROES.forEach((h) => {
      bucket.hero[h.id] = h;
    });
  }
  if (typeof AFRICAN_MYTHS !== "undefined") {
    AFRICAN_MYTHS.forEach((m) => {
      bucket.myth[m.id] = m;
    });
  }

  window.MYTH_ENTITIES["africana"] = bucket;
})();

/* ── Init pagina ───────────────────────────────────────────────────── */
window["initPage_africana"] = function () {
  _buildAfricanPantheon();
  _buildAfricanHeroes();
  _buildAfricanMyths();
  showAfricanSec(
    "cosmo",
    document.querySelector("#page-africana .snav-btn"),
  );
};

/* ── Costruzione griglia divinità ──────────────────────────────────── */
function _buildAfricanPantheon() {
  const grid = document.getElementById("african-pantheon");
  if (!grid || grid.dataset.built) return;
  grid.dataset.built = "1";
  if (typeof AFRICAN_DEITIES === "undefined") return;

  grid.innerHTML = AFRICAN_DEITIES.map((d) => {
    const bioText = (typeof d.bio === "object" ? d.bio.main : d.bio) || "";
    return `
    <div class="deity-card" onclick="openAfricanEntity('deity','${d.id}')">
      <div class="deity-top">
        <div class="deity-circle"></div>
        <div>
          <div class="deity-name">${d.name}</div>
          <div class="deity-role">${d.role}</div>
        </div>
      </div>
      <div class="deity-desc">
        ${bioText.slice(0, 160).replace(/\n/g, " ") || '<em style="opacity:.6">Scheda da compilare</em>'}
        ${bioText.length > 160 ? "…" : ""}
      </div>
      <div class="deity-tags">${d.tags.map((t) => `<span class="dtag">${t}</span>`).join("")}</div>
      <div class="deity-cta">Scopri tutto &rarr;</div>
    </div>
  `;
  }).join("");
}

/* ── Costruzione griglia eroi ──────────────────────────────────────── */
function _buildAfricanHeroes() {
  const c = document.getElementById("african-heroes");
  if (!c || c.dataset.built) return;
  c.dataset.built = "1";
  if (typeof AFRICAN_HEROES === "undefined" || !AFRICAN_HEROES.length) {
    c.innerHTML =
      '<div style="text-align:center;padding:3rem 1rem;color:#8a8a8a;font-style:italic;">Sezione eroi in costruzione</div>';
    return;
  }

  c.innerHTML = AFRICAN_HEROES.map((h) => {
    const desc = h.shortDesc || "";
    return `
    <div class="hero-card" onclick="openAfricanEntity('hero','${h.id}')">
      <div class="hca">
        <div class="hca-circle"></div>
        <div class="hca-name">${h.name}</div>
        <div class="hca-ep">${h.epithet}</div>
      </div>
      <div class="hcb">
        <div class="hcb-label">Chi era</div>
        <div class="hcb-text">${desc || '<em style="opacity:.6">Scheda da compilare</em>'}</div>
        <div class="hcb-cta">Leggi la storia completa &rarr;</div>
      </div>
    </div>
  `;
  }).join("");
}

/* ── Costruzione lista miti ────────────────────────────────────────── */
function _buildAfricanMyths() {
  const c = document.getElementById("african-myths");
  if (!c || c.dataset.built) return;
  c.dataset.built = "1";
  if (typeof AFRICAN_MYTHS === "undefined" || !AFRICAN_MYTHS.length) {
    c.innerHTML =
      '<div style="text-align:center;padding:3rem 1rem;color:#8a8a8a;font-style:italic;">Sezione miti in costruzione</div>';
    return;
  }

  c.innerHTML = AFRICAN_MYTHS.map((m) => {
    const desc = m.shortDesc || "";
    return `
    <div class="myth-entry" onclick="openAfricanEntity('myth','${m.id}')">
      <div class="myth-tag">${m.tag}</div>
      <div class="myth-title">${m.title}</div>
      <div class="myth-text">${desc || '<em style="opacity:.6">Scheda da compilare</em>'}</div>
      <div class="myth-cta">Leggi il mito completo &rarr;</div>
    </div>
  `;
  }).join("");
}

/* ── Tabs della sezione ────────────────────────────────────────────── */
function showAfricanSec(id, btn) {
  document
    .querySelectorAll("#page-africana .sec-block")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll("#page-africana .snav-btn")
    .forEach((b) => b.classList.remove("active"));
  const el = document.getElementById("afrsec-" + id);
  if (el) el.classList.add("active");
  if (btn) btn.classList.add("active");
}

/* ── Apertura entità: delega al router ─────────────────────────────── */
function openAfricanEntity(type, id) {
  window.openEntityRoute("africana", type, id);
}
