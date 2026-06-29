// Tabbed concept widget (.concept-tabs).
// Each container manages its own buttons/panels, so multiple widgets can live
// on the same page independently. A .tab-btn[data-tab="x"] click activates the
// .tab-panel[data-panel="x"] inside the same .concept-tabs.
document.querySelectorAll('.concept-tabs').forEach(function (tabs) {
  var buttons = tabs.querySelectorAll('.tab-btn');
  var panels  = tabs.querySelectorAll('.tab-panel');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.dataset.tab;

      buttons.forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
      });
      panels.forEach(function (p) {
        p.classList.toggle('is-active', p.dataset.panel === target);
      });
    });
  });
});
