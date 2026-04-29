/* js/atlas.js — D3 world map with mythology pins */

window.initPage_atlante = function() {
  const container = document.getElementById('map-svg-container');
  if (!container) return;
  if (container.querySelector('svg')) return; // already built

  const W = 960, H = 500;

  d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .then(world => {
      const loadingEl = document.getElementById('map-loading');
      if (loadingEl) loadingEl.remove();

      const projection = d3.geoNaturalEarth1()
        .scale(160)
        .translate([W / 2, H / 2]);

      const path       = d3.geoPath().projection(projection);
      const graticule  = d3.geoGraticule()();

      const svg = d3.select('#map-svg-container')
        .insert('svg', '#map-popup')
        .attr('viewBox', `0 0 ${W} ${H}`)
        .style('display', 'block')
        .style('width', '100%');

      // ocean
      svg.append('path')
        .datum({ type: 'Sphere' })
        .attr('class', 'sphere')
        .attr('d', path);

      // graticule
      svg.append('path')
        .datum(graticule)
        .attr('class', 'graticule')
        .attr('d', path);

      // land
      const countries = topojson.feature(world, world.objects.countries);
      svg.append('g')
        .selectAll('path')
        .data(countries.features)
        .join('path')
        .attr('class', 'land')
        .attr('d', path);

      // borders
      svg.append('path')
        .datum(topojson.mesh(world, world.objects.countries, (a, b) => a !== b))
        .attr('fill', 'none')
        .attr('stroke', '#1e3014')
        .attr('stroke-width', '0.3')
        .attr('d', path);

      // pins
      const pinsG = svg.append('g');
      Object.entries(ATLAS_MYTHS).forEach(([id, m]) => {
        const [px, py] = projection([m.lon, m.lat]);
        const g = pinsG.append('g')
          .attr('class', 'myth-pin')
          .attr('transform', `translate(${px},${py})`)
          .on('click', e => { e.stopPropagation(); showMapPopup(id, px, py); });

        g.append('circle').attr('class', 'pin-ring1').attr('r', 9)
          .attr('fill', hexAlpha(m.color, 0.08)).attr('stroke', 'none');
        g.append('circle').attr('class', 'pin-ring2').attr('r', 9)
          .attr('fill', hexAlpha(m.color, 0.06)).attr('stroke', 'none');
        g.append('circle').attr('class', 'pin-body').attr('r', 5.5)
          .attr('fill', hexAlpha(m.color, 0.28))
          .attr('stroke', m.color)
          .attr('stroke-width', '1.2');
        g.append('circle').attr('r', 2.2).attr('fill', m.color);
      });

      svg.on('click', () => closeMapPopup());
    })
    .catch(err => {
      console.error('Map load error:', err);
      const el = document.getElementById('map-loading');
      if (el) el.textContent = 'Errore nel caricamento della mappa.';
    });
};

let _activePin = null;

function showMapPopup(id, svgX, svgY) {
  if (_activePin === id) { closeMapPopup(); return; }
  _activePin = id;
  const m = ATLAS_MYTHS[id];

  document.getElementById('popup-region').textContent = m.region;
  document.getElementById('popup-name').textContent   = m.name;
  document.getElementById('popup-desc').textContent   = m.desc;
  document.getElementById('popup-gods').textContent   = m.gods;

  const btn = document.getElementById('popup-btn');
  btn.href = '#' + (m.page || id);

  const svg     = document.querySelector('#map-svg-container svg');
  const rect    = svg.getBoundingClientRect();
  const scaleX  = rect.width  / 960;
  const scaleY  = rect.height / 500;
  const cx      = svgX * scaleX;
  const cy      = svgY * scaleY;

  const popup   = document.getElementById('map-popup');
  const popW    = 215;
  const mapW    = rect.width;

  let left = cx;
  if (left + popW / 2 > mapW - 8) left = mapW - popW / 2 - 8;
  if (left - popW / 2 < 8)        left = popW / 2 + 8;

  popup.style.left = left + 'px';

  const ad = document.getElementById('popup-arrow-down');
  const au = document.getElementById('popup-arrow-up');

  if (cy < 180) {
    popup.style.top       = (cy + 16) + 'px';
    popup.style.transform = 'translate(-50%, 0)';
    ad.style.display = 'none'; au.style.display = 'block';
  } else {
    popup.style.top       = (cy - 14) + 'px';
    popup.style.transform = 'translate(-50%, -100%)';
    ad.style.display = 'block'; au.style.display = 'none';
  }

  popup.classList.add('active');
}

function closeMapPopup() {
  const popup = document.getElementById('map-popup');
  if (popup) popup.classList.remove('active');
  _activePin = null;
}

function hexAlpha(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}
