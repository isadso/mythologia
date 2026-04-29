/* entity.js — renderer pagina entità (deity / hero / myth)
   Il back button è configurato dal router (router.js) con l'etichetta
   corretta della mitologia di provenienza. */

function renderEntityPage(data, type) {
  const container = document.getElementById('page-entity');
  if (!container) return;

  // sfondo hero
  container.querySelector('#e-hero-bg').style.background =
    data.heroColor || 'linear-gradient(160deg,#1a1000,#2a1800,#120c00)';

  // header
  container.querySelector('#e-type').textContent    = data.type || type;
  container.querySelector('#e-title').textContent   = data.name;
  container.querySelector('#e-epithet').textContent = data.epithet || '';

  const chipsEl = container.querySelector('#e-chips');
  chipsEl.innerHTML = (data.chips || [])
    .map(c => `<span class="e-chip">${c}</span>`)
    .join('');

  // back button: etichetta/comportamento gestiti dal router dopo questa render
  // (vedi _renderEntityWithBack in router.js)

  // tabs + corpo
  if (type === 'deity') {
    _renderDeityTabs(container, data);
  } else {
    _renderHeroMythTabs(container, data);
  }
}

function _buildTabBar(container, tabs) {
  const nav = container.querySelector('#e-nav-tabs');
  nav.innerHTML = tabs
    .map((t, i) =>
      `<button class="snav-btn${i === 0 ? ' active' : ''}"
         onclick="switchEntityTab('${t.id}', this)">${t.label}</button>`
    )
    .join('');
}

function _versionCards(versions) {
  return `<div class="versions-grid">
    ${(versions || []).map(v => `
      <div class="version-card">
        <div class="vc-era">${v.era}</div>
        <div class="vc-name">${v.name}</div>
        <div class="vc-text">${v.text}</div>
      </div>`).join('')}
  </div>`;
}

function _influenceList(influence) {
  return `<div class="influence-list">
    ${(influence || []).map(i => `
      <div class="inf-item">
        <div class="inf-era">${i.era}</div>
        <div class="inf-text">${i.text}</div>
      </div>`).join('')}
  </div>`;
}

function _textTablets(texts) {
  return (texts || []).map(t => `
    <div class="text-tablet">
      <div class="tt-header">
        <div class="tt-title">${t.title}</div>
        <div class="tt-source">${t.source}</div>
      </div>
      <div class="tt-text">${t.text}</div>
    </div>`).join('');
}

function _renderDeityTabs(container, d) {
  _buildTabBar(container, [
    { id: 'bio',   label: 'Natura e biografia' },
    { id: 'ver',   label: 'Versioni del mito' },
    { id: 'cult',  label: 'Culto e templi' },
    { id: 'inf',   label: 'Influenza culturale' },
    { id: 'testi', label: 'Testi originali' },
  ]);

  const bioHtml  = (d.bio  || '').split('\n\n').map(p => `<p>${p}</p>`).join('');
  const cultHtml = (d.cult || '').split('\n\n').map(p => `<p>${p}</p>`).join('');

  container.querySelector('#e-body').innerHTML = `
    <div class="e-section active" id="etab-bio">
      <p class="e-sec-title">Natura e biografia</p>
      <div class="e-prose">${bioHtml}</div>
    </div>
    <div class="e-section" id="etab-ver">
      <p class="e-sec-title">Versioni attraverso le culture</p>
      ${_versionCards(d.versions)}
    </div>
    <div class="e-section" id="etab-cult">
      <p class="e-sec-title">Culto, templi e rituali</p>
      <div class="e-prose">${cultHtml}</div>
    </div>
    <div class="e-section" id="etab-inf">
      <p class="e-sec-title">Influenza su culture successive</p>
      ${_influenceList(d.influence)}
    </div>
    <div class="e-section" id="etab-testi">
      <p class="e-sec-title">Testi originali tradotti</p>
      ${_textTablets(d.texts)}
    </div>
  `;
}

function _renderHeroMythTabs(container, d) {
  _buildTabBar(container, [
    { id: 'bio',   label: 'Biografia completa' },
    { id: 'ver',   label: 'Versioni del mito' },
    { id: 'inf',   label: 'Influenza culturale' },
    { id: 'testi', label: 'Testi originali' },
  ]);

  const b = d.bio || {};
  let bioHtml = `<div class="e-prose"><p>${(b.main || '').replace(/\n\n/g, '</p><p>')}</p></div>`;
  ['sub1','sub2','sub3','sub4'].forEach(k => {
    if (b[k]) {
      const textKey = 'text' + k.slice(3);
      bioHtml += `<div class="e-subhead">${b[k]}</div>
        <div class="e-prose"><p>${(b[textKey] || '').replace(/\n\n/g, '</p><p>')}</p></div>`;
    }
  });

  container.querySelector('#e-body').innerHTML = `
    <div class="e-section active" id="etab-bio">
      <p class="e-sec-title">Biografia completa e contesto storico</p>
      ${bioHtml}
    </div>
    <div class="e-section" id="etab-ver">
      <p class="e-sec-title">Versioni nelle diverse culture</p>
      ${_versionCards(d.versions)}
    </div>
    <div class="e-section" id="etab-inf">
      <p class="e-sec-title">Influenza su culture successive e letteratura moderna</p>
      ${_influenceList(d.influence)}
    </div>
    <div class="e-section" id="etab-testi">
      <p class="e-sec-title">Testi originali tradotti</p>
      ${_textTablets(d.texts)}
    </div>
  `;
}

function switchEntityTab(id, btn) {
  const body = document.getElementById('e-body');
  const nav  = document.getElementById('e-nav-tabs');
  nav.querySelectorAll('.snav-btn').forEach(b => b.classList.remove('active'));
  body.querySelectorAll('.e-section').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
  const sec = document.getElementById('etab-' + id);
  if (sec) sec.classList.add('active');
}
