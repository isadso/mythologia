/* js/celtica.js — Hub delle tradizioni celtiche
   La pagina #celtica è una griglia di selezione che porta alle 4
   sotto-mitologie: irlandese, gallese, gallica, insulare.
   Usa le stesse classi CSS delle card della home (.myth-card, .myth-bg,
   .myth-overlay, .myth-region, .myth-name, .myth-desc). */

window.initPage_celtica = function() {
  _buildCelticHub();
};

function _buildCelticHub() {
  const grid = document.getElementById('celtic-hub-grid');
  if (!grid || grid.dataset.built) return;
  grid.dataset.built = '1';

  const traditions = [
    {
      route: 'celtica-irlandese',
      region: "Irlanda — Ciclo Mitologico, dell'Ulster, Fiann",
      name:   'Irlandese',
      desc:   "Tuatha Dé Danann, Cú Chulainn, Fionn mac Cumhaill, il Sidhe e i quattro cicli della letteratura gaelica.",
      bg:     'linear-gradient(160deg,#0a1a08 0%,#1f3a1a 30%,#2d5a2d 60%,#5ab55a 85%,#8ed4a0 100%)',
      color1: '#8ed4a0',
      color2: '#c8f0c0',
      color3: '#90d090',
    },
    {
      route: 'celtica-gallese',
      region: 'Galles — Mabinogion, Ciclo Brittonico',
      name:   'Gallese',
      desc:   "Il Mabinogion e i suoi Quattro Rami. Gwydion il mago, Rhiannon dei cavalli, l'Annwn e l'Artù gallese arcaico.",
      bg:     'linear-gradient(160deg,#140a1a 0%,#2a1f3a 30%,#4a3a6a 60%,#8a7ab5 85%,#c8b5d8 100%)',
      color1: '#c8b5d8',
      color2: '#e0d0ee',
      color3: '#b0a0d0',
    },
    {
      route: 'celtica-gallica',
      region: 'Gallia, Iberia, Europa Continentale',
      name:   'Gallica',
      desc:   "La religione celtica continentale — Cesare, Lucano, il calderone di Gundestrup. Taranis, Cernunnos, Epona.",
      bg:     'linear-gradient(160deg,#0a140a 0%,#1a2a14 30%,#3a4a2a 60%,#6a7a4a 85%,#a8b580 100%)',
      color1: '#a8b580',
      color2: '#d8d5a8',
      color3: '#90a060',
    },
    {
      route: 'celtica-insulare',
      region: 'Scozia, Isola di Man, Ebridi',
      name:   'Gaelica Scozzese',
      desc:   "La Cailleach dell'inverno, Scáthach la maestra guerriera, selkie e kelpie delle Highlands, l'Isola di Man.",
      bg:     'linear-gradient(160deg,#06101a 0%,#0f2030 30%,#1a3850 60%,#3a6a8a 85%,#8ab5d0 100%)',
      color1: '#8ab5d0',
      color2: '#c8dcea',
      color3: '#70a0c0',
    },
  ];

  grid.innerHTML = traditions.map(t => `
    <a href="#${t.route}" class="myth-card">
      <div class="myth-bg" style="background:${t.bg}"></div>
      <div class="myth-overlay">
        <div class="myth-region" style="color:${t.color1}">${t.region}</div>
        <div class="myth-name"   style="color:${t.color2}">${t.name}</div>
        <div class="myth-desc"   style="color:${t.color3}">${t.desc}</div>
      </div>
    </a>
  `).join('');
}
