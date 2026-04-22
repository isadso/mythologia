/* js/mesopotamia.js — logica pagina mitologia mesopotamica
   Le click handler delegano al router (openEntityRoute) per avere URL dedicati
   e un back-button che funziona naturalmente. */

/* ── Registrazione nel registro globale del router ─────────────────── */
(function registerMesopEntities() {
  if (!window.MYTH_ENTITIES) window.MYTH_ENTITIES = {};

  const bucket = { deity: {}, hero: {}, myth: {} };

  if (typeof MESOP_DEITIES !== 'undefined') {
    MESOP_DEITIES.forEach(d => { bucket.deity[d.id] = d; });
  }
  if (typeof MESOP_HEROES !== 'undefined') {
    MESOP_HEROES.forEach(h => { bucket.hero[h.id] = h; });
  }
  if (typeof MESOP_MYTHS !== 'undefined') {
    MESOP_MYTHS.forEach(m => { bucket.myth[m.id] = m; });
  }

  window.MYTH_ENTITIES.mesopotamia = bucket;
})();

/* ── Init pagina ───────────────────────────────────────────────────── */
window.initPage_mesopotamia = function() {
  _buildMesopPantheon();
  _buildMesopHeroes();
  _buildMesopMyths();
  showMesopSec('cosmo', document.querySelector('#page-mesopotamia .snav-btn'));
};

/* ── Costruzione griglie ───────────────────────────────────────────── */
function _buildMesopPantheon() {
  const grid = document.getElementById('mesop-pantheon');
  if (!grid || grid.dataset.built) return;
  grid.dataset.built = '1';

  grid.innerHTML = MESOP_DEITIES.map(d => `
    <div class="deity-card" onclick="openMesopEntity('deity','${d.id}')">
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

function _buildMesopHeroes() {
  const c = document.getElementById('mesop-heroes');
  if (!c || c.dataset.built) return;
  c.dataset.built = '1';

  c.innerHTML = MESOP_HEROES.map(h => `
    <div class="hero-card" onclick="openMesopEntity('hero','${h.id}')">
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

function _buildMesopMyths() {
  const c = document.getElementById('mesop-myths');
  if (!c || c.dataset.built) return;
  c.dataset.built = '1';

  c.innerHTML = MESOP_MYTHS.map(m => `
    <div class="myth-entry" onclick="openMesopEntity('myth','${m.id}')">
      <div class="myth-tag">${m.tag}</div>
      <div class="myth-title">${m.title}</div>
      <div class="myth-text">${m.shortDesc}</div>
      <div class="myth-cta">Leggi il mito completo &rarr;</div>
    </div>
  `).join('');
}

/* ── Tabs della sezione ────────────────────────────────────────────── */
function showMesopSec(id, btn) {
  document.querySelectorAll('#page-mesopotamia .sec-block')
    .forEach(s => s.classList.remove('active'));
  document.querySelectorAll('#page-mesopotamia .snav-btn')
    .forEach(b => b.classList.remove('active'));
  const el = document.getElementById('msec-' + id);
  if (el) el.classList.add('active');
  if (btn) btn.classList.add('active');
}

/* ── Apertura entità: delega al router ─────────────────────────────── */
function openMesopEntity(type, id) {
  // cambia l'URL → il router gestisce rendering e back-button
  window.openEntityRoute('mesopotamia', type, id);
}
