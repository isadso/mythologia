/* js/celtica-insulare.js — logica pagina tradizione gaelica scozzese e insulare
   Identificatore route: celtica-insulare
   Prefisso costanti: SCOTTISH_
   Sigla DOM: scot / scsec */

/* ── Registrazione nel registro globale del router ─────────────────── */
(function registerScottishEntities() {
  if (!window.MYTH_ENTITIES) window.MYTH_ENTITIES = {};

  const bucket = { deity: {}, hero: {}, myth: {} };

  if (typeof SCOTTISH_DEITIES !== 'undefined') {
    SCOTTISH_DEITIES.forEach(d => { bucket.deity[d.id] = d; });
  }
  if (typeof SCOTTISH_HEROES !== 'undefined') {
    SCOTTISH_HEROES.forEach(h => { bucket.hero[h.id] = h; });
  }
  if (typeof SCOTTISH_MYTHS !== 'undefined') {
    SCOTTISH_MYTHS.forEach(m => { bucket.myth[m.id] = m; });
  }

  window.MYTH_ENTITIES['celtica-insulare'] = bucket;
})();

/* ── Init pagina ───────────────────────────────────────────────────── */
window['initPage_celtica-insulare'] = function() {
  _buildScottishPantheon();
  _buildScottishHeroes();
  _buildScottishMyths();
  showScottishSec('cosmo', document.querySelector('#page-celtica-insulare .snav-btn'));
};

/* ── Costruzione griglie ───────────────────────────────────────────── */
function _buildScottishPantheon() {
  const grid = document.getElementById('scot-pantheon');
  if (!grid || grid.dataset.built) return;
  grid.dataset.built = '1';
  if (typeof SCOTTISH_DEITIES === 'undefined') return;

  grid.innerHTML = SCOTTISH_DEITIES.map(d => `
    <div class="deity-card" onclick="openScottishEntity('deity','${d.id}')">
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

function _buildScottishHeroes() {
  const c = document.getElementById('scot-heroes');
  if (!c || c.dataset.built) return;
  c.dataset.built = '1';
  if (typeof SCOTTISH_HEROES === 'undefined') return;

  c.innerHTML = SCOTTISH_HEROES.map(h => `
    <div class="hero-card" onclick="openScottishEntity('hero','${h.id}')">
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

function _buildScottishMyths() {
  const c = document.getElementById('scot-myths');
  if (!c || c.dataset.built) return;
  c.dataset.built = '1';
  if (typeof SCOTTISH_MYTHS === 'undefined') return;

  c.innerHTML = SCOTTISH_MYTHS.map(m => `
    <div class="myth-entry" onclick="openScottishEntity('myth','${m.id}')">
      <div class="myth-tag">${m.tag}</div>
      <div class="myth-title">${m.title}</div>
      <div class="myth-text">${m.shortDesc}</div>
      <div class="myth-cta">Leggi il mito completo &rarr;</div>
    </div>
  `).join('');
}

/* ── Tabs della sezione ────────────────────────────────────────────── */
function showScottishSec(id, btn) {
  document.querySelectorAll('#page-celtica-insulare .sec-block')
    .forEach(s => s.classList.remove('active'));
  document.querySelectorAll('#page-celtica-insulare .snav-btn')
    .forEach(b => b.classList.remove('active'));
  const el = document.getElementById('scsec-' + id);
  if (el) el.classList.add('active');
  if (btn) btn.classList.add('active');
}

/* ── Apertura entità: delega al router ─────────────────────────────── */
function openScottishEntity(type, id) {
  window.openEntityRoute('celtica-insulare', type, id);
}
