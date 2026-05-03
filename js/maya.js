/* js/maya.js — logica pagina sotto-tradizione Maya
   Le click handler delegano al router (openEntityRoute) per avere URL dedicati
   e un back-button che funziona naturalmente.

   Route: #maya  (sotto-tradizione di "Maya & Azteca", fratello di #azteca)
   Sigla DOM: my-  (es. my-pantheon, my-heroes, my-myths)
   Prefisso tab: mysec-  (es. mysec-cosmo, mysec-dei, mysec-eroi, mysec-miti)
*/

/* ── Registrazione nel registro globale del router ─────────────────── */
(function registerMayaEntities() {
  if (!window.MYTH_ENTITIES) window.MYTH_ENTITIES = {};

  const bucket = { deity: {}, hero: {}, myth: {} };

  if (typeof MAYA_DEITIES !== "undefined") {
    MAYA_DEITIES.forEach((d) => {
      bucket.deity[d.id] = d;
    });
  }
  if (typeof MAYA_HEROES !== "undefined") {
    MAYA_HEROES.forEach((h) => {
      bucket.hero[h.id] = h;
    });
  }
  if (typeof MAYA_MYTHS !== "undefined") {
    MAYA_MYTHS.forEach((m) => {
      bucket.myth[m.id] = m;
    });
  }

  window.MYTH_ENTITIES.maya = bucket;
})();

/* ── Init pagina ───────────────────────────────────────────────────── */
window.initPage_maya = function () {
  _buildMayaPantheon();
  _buildMayaHeroes();
  _buildMayaMyths();
  showMayaSec("cosmo", document.querySelector("#page-maya .snav-btn"));
};

/* ── Costruzione griglie ───────────────────────────────────────────── */
function _buildMayaPantheon() {
  const grid = document.getElementById("my-pantheon");
  if (!grid || grid.dataset.built) return;
  grid.dataset.built = "1";

  grid.innerHTML = MAYA_DEITIES.map(
    (d) => `
    <div class="deity-card" onclick="openMayaEntity('deity','${d.id}')">
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

function _buildMayaHeroes() {
  const c = document.getElementById("my-heroes");
  if (!c || c.dataset.built) return;
  c.dataset.built = "1";

  c.innerHTML = MAYA_HEROES.map(
    (h) => `
    <div class="hero-card" onclick="openMayaEntity('hero','${h.id}')">
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

function _buildMayaMyths() {
  const c = document.getElementById("my-myths");
  if (!c || c.dataset.built) return;
  c.dataset.built = "1";

  c.innerHTML = MAYA_MYTHS.map(
    (m) => `
    <div class="myth-entry" onclick="openMayaEntity('myth','${m.id}')">
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
function showMayaSec(id, btn) {
  document
    .querySelectorAll("#page-maya .sec-block")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll("#page-maya .snav-btn")
    .forEach((b) => b.classList.remove("active"));
  const el = document.getElementById("mysec-" + id);
  if (el) el.classList.add("active");
  if (btn) btn.classList.add("active");
}

/* ── Apertura entità: delega al router ─────────────────────────────── */
function openMayaEntity(type, id) {
  // cambia l'URL → il router gestisce rendering e back-button
  window.openEntityRoute("maya", type, id);
}
