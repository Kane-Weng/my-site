// Image carousel for project pages (styles in _sass/_carousel.scss).
//
// Markup: <div class="project-carousel" id="NAME-carousel"> holding
// #NAME-track (slides), #NAME-dots, and prev/next buttons that call
// carouselStep('NAME', ±1) / carouselGoTo('NAME', i). Every carousel on the
// page is initialized automatically. If a slide has data-caption, the
// carousel's .project-caption is swapped to it when that slide is shown.
(function () {
  var _idx = {}, _timers = {};

  function getTrack(id)  { return document.getElementById(id + '-track'); }
  function getInner(id)  { return getTrack(id).parentElement; }
  function getSlides(id) { return getTrack(id).querySelectorAll('.carousel-slide'); }
  function getDots(id)   { return document.querySelectorAll('#' + id + '-dots .carousel-dot'); }

  function render(id) {
    var i  = _idx[id];
    var ss = getSlides(id);
    var offset = 0;
    for (var k = 0; k < i; k++) offset += ss[k].offsetWidth;
    getTrack(id).style.transform = 'translateX(-' + offset + 'px)';
    getInner(id).style.width     = ss[i].offsetWidth + 'px';
    getDots(id).forEach(function (d, j) { d.classList.toggle('active', j === i); });

    var text = ss[i].getAttribute('data-caption');
    var cap  = document.querySelector('#' + id + '-carousel .project-caption');
    if (text && cap) cap.textContent = text;
  }

  window.carouselGoTo = function (id, idx) {
    var n = getSlides(id).length;
    _idx[id] = ((idx % n) + n) % n;
    render(id);
  };
  window.carouselStep = function (id, dir) {
    carouselGoTo(id, (_idx[id] || 0) + dir);
  };

  function startAuto(id) {
    clearInterval(_timers[id]);
    _timers[id] = setInterval(function () { carouselStep(id, 1); }, 4000);
  }

  function initCarousel(id) {
    _idx[id] = 0;
    var inn  = getInner(id);
    var imgs = inn.querySelectorAll('img');
    var pending = imgs.length;
    function onLoad() {
      if (--pending > 0) return;
      render(id);
      startAuto(id);
      inn.addEventListener('mouseenter', function () { clearInterval(_timers[id]); });
      inn.addEventListener('mouseleave', function () { startAuto(id); });
    }
    imgs.forEach(function (img) {
      if (img.complete && img.naturalWidth > 0) onLoad();
      else { img.addEventListener('load', onLoad); img.addEventListener('error', onLoad); }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.project-carousel[id$="-carousel"]').forEach(function (el) {
      initCarousel(el.id.replace(/-carousel$/, ''));
    });
  });
})();
