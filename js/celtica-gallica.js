/* js/celtica-gallica.js — logica pagina tradizione gallica continentale
   Identificatore route: celtica-gallica
   Prefisso costanti: GALLIC_
   Sigla DOM: gallic / glsec */

/* ── Registrazione nel registro globale del router ─────────────────── */
(function registerGallicEntities() {
  if (!window.MYTH_ENTITIES) window.MYTH_ENTITIES = {};

  const bucket = { deity: {}, hero: {}, myth: {} };

  if (typeof GALLIC_DEITIES !== 'undefined') {
    GALLIC_DEITIES.forEach(d => { bucket.deity[d.id] = d; });
  }
  if (typeof GALLIC_HEROES !== 'undefined') {
    GALLIC_HEROES.forEach(h => { bucket.hero[h.id] = h; });
  }
  if (typeof GALLIC_MYTHS !== 'undefined') {
    GALLIC_MYTHS.forEach(m => { bucket.myth[m.id] = m; });
  }

  window.MYTH_ENTITIES['celtica-gallica'] = bucket;
})();

/* ── Init pagina ───────────────────────────────────────────────────── */
window['initPage_celtica-gallica'] = function() {
  _buildGallicPantheon();
  _buildGallicHeroes();
  _buildGallicMyths();
  showGallicSec('cosmo', document.querySelector('#page-celtica-gallica .snav-btn'));
};

/* ── Costruzione griglie ───────────────────────────────────────────── */
function _buildGallicPantheon() {
  const grid = document.getElementById('gallic-pantheon');
  if (!grid || grid.dataset.built) return;
  grid.dataset.built = '1';
  if (typeof GALLIC_DEITIES === 'undefined') return;

  grid.innerHTML = GALLIC_DEITIES.map(d => `
    <div class="deity-card" onclick="openGallicEntity('deity','${d.id}')">
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

function _buildGallicHeroes() {
  const c = document.getElementById('gallic-heroes');
  if (!c || c.dataset.built) return;
  c.dataset.built = '1';
  if (typeof GALLIC_HEROES === 'undefined' || !GALLIC_HEROES.length) {
    c.innerHTML = '<div style="text-align:center;padding:3rem 1rem;color:#8a8a8a;font-style:italic;">Sezione eroi in arrivo col Lotto 3B</div>';
    return;
  }

  c.innerHTML = GALLIC_HEROES.map(h => `
    <div class="hero-card" onclick="openGallicEntity('hero','${h.id}')">
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

function _buildGallicMyths() {
  const c = document.getElementById('gallic-myths');
  if (!c || c.dataset.built) return;
  c.dataset.built = '1';
  if (typeof GALLIC_MYTHS === 'undefined' || !GALLIC_MYTHS.length) {
    c.innerHTML = '<div style="text-align:center;padding:3rem 1rem;color:#8a8a8a;font-style:italic;">Sezione miti in arrivo col Lotto 3B</div>';
    return;
  }

  c.innerHTML = GALLIC_MYTHS.map(m => `
    <div class="myth-entry" onclick="openGallicEntity('myth','${m.id}')">
      <div class="myth-tag">${m.tag}</div>
      <div class="myth-title">${m.title}</div>
      <div class="myth-text">${m.shortDesc}</div>
      <div class="myth-cta">Leggi il mito completo &rarr;</div>
    </div>
  `).join('');
}

/* ── Tabs della sezione ────────────────────────────────────────────── */
function showGallicSec(id, btn) {
  document.querySelectorAll('#page-celtica-gallica .sec-block')
    .forEach(s => s.classList.remove('active'));
  document.querySelectorAll('#page-celtica-gallica .snav-btn')
    .forEach(b => b.classList.remove('active'));
  const el = document.getElementById('glsec-' + id);
  if (el) el.classList.add('active');
  if (btn) btn.classList.add('active');
}

/* ── Apertura entità: delega al router ─────────────────────────────── */
function openGallicEntity(type, id) {
  window.openEntityRoute('celtica-gallica', type, id);
}
