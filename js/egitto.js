/* js/egitto.js — logica pagina mitologia egizia
   Le click handler delegano al router (openEntityRoute) per avere URL dedicati
   e un back-button che funziona naturalmente. */

/* ── Registrazione nel registro globale del router ─────────────────── */
(function registerEgyptEntities() {
  if (!window.MYTH_ENTITIES) window.MYTH_ENTITIES = {};

  const bucket = { deity: {}, hero: {}, myth: {} };

  if (typeof EGIZIO_DEITIES !== 'undefined') {
    EGIZIO_DEITIES.forEach(d => { bucket.deity[d.id] = d; });
  }
  if (typeof EGIZIO_HEROES !== 'undefined') {
    EGIZIO_HEROES.forEach(h => { bucket.hero[h.id] = h; });
  }
  if (typeof EGIZIO_MYTHS !== 'undefined') {
    EGIZIO_MYTHS.forEach(m => { bucket.myth[m.id] = m; });
  }

  window.MYTH_ENTITIES.egitto = bucket;
})();

/* ── Init pagina ───────────────────────────────────────────────────── */
window.initPage_egitto = function() {
  _buildEgiziPantheon();
  _buildEgiziHeroes();
  _buildEgiziMyths();
  showEgiziSec('cosmo', document.querySelector('#page-egitto .snav-btn'));
};

/* ── Costruzione griglie ───────────────────────────────────────────── */
function _buildEgiziPantheon() {
  const grid = document.getElementById('egizi-pantheon');
  if (!grid || grid.dataset.built) return;
  grid.dataset.built = '1';

  grid.innerHTML = EGIZIO_DEITIES.map(d => `
    <div class="deity-card" onclick="openEgiziEntity('deity','${d.id}')">
      <div class="deity-top">
        <div class="deity-circle"></div>
        <div>
          <div class="deity-name">${d.name}</div>
          <div class="deity-role">${d.role}</div>
        </div>
      </div>
      <div class="deity-desc">${d.bio.slice(0, 160).replace(/\n/g, ' ')}…</div>
      <div class="deity-tags">${d.tags.map(t => `<span class="dtag">${t}</span>`).join('')}</div>
      <div class="deity-cta">Scopri tutto &rarr;</div>
    </div>
  `).join('');
}

function _buildEgiziHeroes() {
  const c = document.getElementById('egizi-heroes');
  if (!c || c.dataset.built) return;
  c.dataset.built = '1';

  c.innerHTML = EGIZIO_HEROES.map(h => `
    <div class="hero-card" onclick="openEgiziEntity('hero','${h.id}')">
      <div class="hca">
        <div class="hca-circle"></div>
        <div class="hca-name">${h.name}</div>
        <div class="hca-ep">${h.epithet}</div>
      </div>
      <div class="hcb">
        <div class="hcb-label">Chi era</div>
        <div class="hcb-text">${h.shortDesc}</div>
        <div class="hcb-cta">Leggi la storia completa &rarr;</div>
      </div>
    </div>
  `).join('');
}

function _buildEgiziMyths() {
  const c = document.getElementById('egizi-myths');
  if (!c || c.dataset.built) return;
  c.dataset.built = '1';

  c.innerHTML = EGIZIO_MYTHS.map(m => `
    <div class="myth-entry" onclick="openEgiziEntity('myth','${m.id}')">
      <div class="myth-tag">${m.tag}</div>
      <div class="myth-title">${m.title}</div>
      <div class="myth-text">${m.shortDesc}</div>
      <div class="myth-cta">Leggi il mito completo &rarr;</div>
    </div>
  `).join('');
}

/* ── Tabs della sezione ────────────────────────────────────────────── */
function showEgiziSec(id, btn) {
  document.querySelectorAll('#page-egitto .sec-block')
    .forEach(s => s.classList.remove('active'));
  document.querySelectorAll('#page-egitto .snav-btn')
    .forEach(b => b.classList.remove('active'));
  const el = document.getElementById('esec-' + id);
  if (el) el.classList.add('active');
  if (btn) btn.classList.add('active');
}

/* ── Apertura entità: delega al router ─────────────────────────────── */
function openEgiziEntity(type, id) {
  window.openEntityRoute('egitto', type, id);
}
