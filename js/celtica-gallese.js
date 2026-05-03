/* js/celtica-gallese.js — logica pagina tradizione gallese (brittonica)
   Identificatore route: celtica-gallese
   Prefisso costanti: WELSH_
   Sigla DOM: welsh / wlsec */

/* ── Registrazione nel registro globale del router ─────────────────── */
(function registerWelshEntities() {
  if (!window.MYTH_ENTITIES) window.MYTH_ENTITIES = {};

  const bucket = { deity: {}, hero: {}, myth: {} };

  if (typeof WELSH_DEITIES !== "undefined") {
    WELSH_DEITIES.forEach((d) => {
      bucket.deity[d.id] = d;
    });
  }
  if (typeof WELSH_HEROES !== "undefined") {
    WELSH_HEROES.forEach((h) => {
      bucket.hero[h.id] = h;
    });
  }
  if (typeof WELSH_MYTHS !== "undefined") {
    WELSH_MYTHS.forEach((m) => {
      bucket.myth[m.id] = m;
    });
  }

  window.MYTH_ENTITIES["celtica-gallese"] = bucket;
})();

/* ── Init pagina ───────────────────────────────────────────────────── */
window["initPage_celtica-gallese"] = function () {
  _buildWelshPantheon();
  _buildWelshHeroes();
  _buildWelshMyths();
  showWelshSec(
    "cosmo",
    document.querySelector("#page-celtica-gallese .snav-btn"),
  );
};

/* ── Costruzione griglie ───────────────────────────────────────────── */
function _buildWelshPantheon() {
  const grid = document.getElementById("welsh-pantheon");
  if (!grid || grid.dataset.built) return;
  grid.dataset.built = "1";
  if (typeof WELSH_DEITIES === "undefined") return;

  grid.innerHTML = WELSH_DEITIES.map(
    (d) => `
    <div class="deity-card" onclick="openWelshEntity('deity','${d.id}')">
      <div class="deity-top">
        <div class="deity-circle"></div>
        <div>
          <div class="deity-name">${d.name}</div>
          <div class="deity-role">${d.role}</div>
        </div>
      </div>
<div class="deity-desc">${((typeof d.bio === "object" ? d.bio.main : d.bio) || "").slice(0, 160).replace(/\n/g, " ") || '<em style="opacity:.6">Scheda da compilare</em>'}${((typeof d.bio === "object" ? d.bio.main : d.bio) || "").length > 160 ? "…" : ""}</div>      <div class="deity-tags">${d.tags.map((t) => `<span class="dtag">${t}</span>`).join("")}</div>
      <div class="deity-cta">Scopri tutto &rarr;</div>
    </div>
  `,
  ).join("");
}

function _buildWelshHeroes() {
  const c = document.getElementById("welsh-heroes");
  if (!c || c.dataset.built) return;
  c.dataset.built = "1";
  if (typeof WELSH_HEROES === "undefined") return;

  c.innerHTML = WELSH_HEROES.map(
    (h) => `
    <div class="hero-card" onclick="openWelshEntity('hero','${h.id}')">
      <div class="hca">
        <div class="hca-circle"></div>
        <div class="hca-name">${h.name}</div>
        <div class="hca-ep">${h.epithet}</div>
      </div>
      <div class="hcb">
        <div class="hcb-label">Chi era</div>
        <div class="hcb-text">${h.shortDesc || '<em style="opacity:.6">Scheda da compilare</em>'}</div>
        <div class="hcb-cta">Leggi la storia completa &rarr;</div>
      </div>
    </div>
  `,
  ).join("");
}

function _buildWelshMyths() {
  const c = document.getElementById("welsh-myths");
  if (!c || c.dataset.built) return;
  c.dataset.built = "1";
  if (typeof WELSH_MYTHS === "undefined") return;

  c.innerHTML = WELSH_MYTHS.map(
    (m) => `
    <div class="myth-entry" onclick="openWelshEntity('myth','${m.id}')">
      <div class="myth-tag">${m.tag}</div>
      <div class="myth-title">${m.title}</div>
      <div class="myth-text">${m.shortDesc || '<em style="opacity:.6">Scheda da compilare</em>'}</div>
      <div class="myth-cta">Leggi il mito completo &rarr;</div>
    </div>
  `,
  ).join("");
}

/* ── Tabs della sezione ────────────────────────────────────────────── */
function showWelshSec(id, btn) {
  document
    .querySelectorAll("#page-celtica-gallese .sec-block")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll("#page-celtica-gallese .snav-btn")
    .forEach((b) => b.classList.remove("active"));
  const el = document.getElementById("wlsec-" + id);
  if (el) el.classList.add("active");
  if (btn) btn.classList.add("active");
}

/* ── Apertura entità: delega al router ─────────────────────────────── */
function openWelshEntity(type, id) {
  window.openEntityRoute("celtica-gallese", type, id);
}
