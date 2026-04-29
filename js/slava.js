/* js/slava.js — logica pagina mitologia slava
   Identificatore route: slava
   Prefisso costanti: SLAVIC_
   Sigla DOM: slavic / slvsec */

/* ── Registrazione nel registro globale del router ─────────────────── */
(function registerSlavicEntities() {
  if (!window.MYTH_ENTITIES) window.MYTH_ENTITIES = {};

  const bucket = { deity: {}, hero: {}, myth: {} };

  if (typeof SLAVIC_DEITIES !== 'undefined') {
    SLAVIC_DEITIES.forEach(d => { bucket.deity[d.id] = d; });
  }
  if (typeof SLAVIC_HEROES !== 'undefined') {
    SLAVIC_HEROES.forEach(h => { bucket.hero[h.id] = h; });
  }
  if (typeof SLAVIC_MYTHS !== 'undefined') {
    SLAVIC_MYTHS.forEach(m => { bucket.myth[m.id] = m; });
  }

  window.MYTH_ENTITIES['slava'] = bucket;
})();

/* ── Init pagina ───────────────────────────────────────────────────── */
window.initPage_slava = function() {
  _buildSlavicPantheon();
  _buildSlavicHeroes();
  _buildSlavicMyths();
  showSlavicSec('cosmo', document.querySelector('#page-slava .snav-btn'));
};

/* ── Costruzione griglie ───────────────────────────────────────────── */
function _buildSlavicPantheon() {
  const grid = document.getElementById('slavic-pantheon');
  if (!grid || grid.dataset.built) return;
  grid.dataset.built = '1';
  if (typeof SLAVIC_DEITIES === 'undefined') return;

  grid.innerHTML = SLAVIC_DEITIES.map(d => `
    <div class="deity-card" onclick="openSlavicEntity('deity','${d.id}')">
      <div class="deity-top">
        <div class="deity-circle"></div>
        <div>
          <div class="deity-name">${d.name}</div>
          <div class="deity-role">${d.role}</div>
        </div>
      </div>
      <div class="deity-desc">${(d.bio || '').slice(0, 160).replace(/\n/g, ' ') || '<em style="opacity:.6">Scheda da compilare</em>'}${(d.bio || '').length > 160 ? '…' : ''}</div>
      <div class="deity-tags">${d.tags.map(t => `<span class="dtag">${t}</span>`).join('')}</div>
      <div class="deity-cta">Scopri tutto &rarr;</div>
    </div>
  `).join('');
}

function _buildSlavicHeroes() {
  const c = document.getElementById('slavic-heroes');
  if (!c || c.dataset.built) return;
  c.dataset.built = '1';
  if (typeof SLAVIC_HEROES === 'undefined') return;

  c.innerHTML = SLAVIC_HEROES.map(h => `
    <div class="hero-card" onclick="openSlavicEntity('hero','${h.id}')">
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
  `).join('');
}

function _buildSlavicMyths() {
  const c = document.getElementById('slavic-myths');
  if (!c || c.dataset.built) return;
  c.dataset.built = '1';
  if (typeof SLAVIC_MYTHS === 'undefined') return;

  c.innerHTML = SLAVIC_MYTHS.map(m => `
    <div class="myth-entry" onclick="openSlavicEntity('myth','${m.id}')">
      <div class="myth-tag">${m.tag}</div>
      <div class="myth-title">${m.title}</div>
      <div class="myth-text">${m.shortDesc || '<em style="opacity:.6">Scheda da compilare</em>'}</div>
      <div class="myth-cta">Leggi il mito completo &rarr;</div>
    </div>
  `).join('');
}

/* ── Tabs della sezione ────────────────────────────────────────────── */
function showSlavicSec(id, btn) {
  document.querySelectorAll('#page-slava .sec-block')
    .forEach(s => s.classList.remove('active'));
  document.querySelectorAll('#page-slava .snav-btn')
    .forEach(b => b.classList.remove('active'));
  const el = document.getElementById('slvsec-' + id);
  if (el) el.classList.add('active');
  if (btn) btn.classList.add('active');
}

/* ── Apertura entità: delega al router ─────────────────────────────── */
function openSlavicEntity(type, id) {
  window.openEntityRoute('slava', type, id);
}
