/* js/celtica-irlandese.js — logica pagina mitologia celtica irlandese
   Identificatore route: celtica-irlandese
   Prefisso costanti: IRISH_
   Sigla DOM: irish / irsec */

/* ── Registrazione nel registro globale del router ─────────────────── */
(function registerIrishEntities() {
  if (!window.MYTH_ENTITIES) window.MYTH_ENTITIES = {};

  const bucket = { deity: {}, hero: {}, myth: {} };

  if (typeof IRISH_DEITIES !== 'undefined') {
    IRISH_DEITIES.forEach(d => { bucket.deity[d.id] = d; });
  }
  if (typeof IRISH_HEROES !== 'undefined') {
    IRISH_HEROES.forEach(h => { bucket.hero[h.id] = h; });
  }
  if (typeof IRISH_MYTHS !== 'undefined') {
    IRISH_MYTHS.forEach(m => { bucket.myth[m.id] = m; });
  }

  window.MYTH_ENTITIES['celtica-irlandese'] = bucket;
})();

/* ── Init pagina ───────────────────────────────────────────────────── */
window['initPage_celtica-irlandese'] = function() {
  _buildIrishPantheon();
  _buildIrishHeroes();
  _buildIrishMyths();
  showIrishSec('cosmo', document.querySelector('#page-celtica-irlandese .snav-btn'));
};

/* ── Costruzione griglie ───────────────────────────────────────────── */
function _buildIrishPantheon() {
  const grid = document.getElementById('irish-pantheon');
  if (!grid || grid.dataset.built) return;
  grid.dataset.built = '1';
  if (typeof IRISH_DEITIES === 'undefined') return;

  grid.innerHTML = IRISH_DEITIES.map(d => `
    <div class="deity-card" onclick="openIrishEntity('deity','${d.id}')">
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

function _buildIrishHeroes() {
  const c = document.getElementById('irish-heroes');
  if (!c || c.dataset.built) return;
  c.dataset.built = '1';
  if (typeof IRISH_HEROES === 'undefined') return;

  c.innerHTML = IRISH_HEROES.map(h => `
    <div class="hero-card" onclick="openIrishEntity('hero','${h.id}')">
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

function _buildIrishMyths() {
  const c = document.getElementById('irish-myths');
  if (!c || c.dataset.built) return;
  c.dataset.built = '1';
  if (typeof IRISH_MYTHS === 'undefined') return;

  c.innerHTML = IRISH_MYTHS.map(m => `
    <div class="myth-entry" onclick="openIrishEntity('myth','${m.id}')">
      <div class="myth-tag">${m.tag}</div>
      <div class="myth-title">${m.title}</div>
      <div class="myth-text">${m.shortDesc}</div>
      <div class="myth-cta">Leggi il mito completo &rarr;</div>
    </div>
  `).join('');
}

/* ── Tabs della sezione ────────────────────────────────────────────── */
function showIrishSec(id, btn) {
  document.querySelectorAll('#page-celtica-irlandese .sec-block')
    .forEach(s => s.classList.remove('active'));
  document.querySelectorAll('#page-celtica-irlandese .snav-btn')
    .forEach(b => b.classList.remove('active'));
  const el = document.getElementById('irsec-' + id);
  if (el) el.classList.add('active');
  if (btn) btn.classList.add('active');
}

/* ── Apertura entità: delega al router ─────────────────────────────── */
function openIrishEntity(type, id) {
  window.openEntityRoute('celtica-irlandese', type, id);
}
