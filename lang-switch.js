// Language switcher — globe + dropdown
// Defaults to PT, persists choice in localStorage under 'lf-lang'.
// Convention: pair translatable text as
//   <span data-lang="pt">…</span><span data-lang="en">…</span>
// CSS in pages.css hides the non-matching sibling based on body[data-lang].
(function () {
  function init() {
    var root = document.getElementById('langSwitch');
    if (!root) return;
    var toggle = root.querySelector('.lang-switch__toggle');
    var current = document.getElementById('langCurrent');
    var options = root.querySelectorAll('.lang-switch__option');

    var stored = localStorage.getItem('lf-lang');
    setLang(stored === 'en' ? 'en' : 'pt');

    function setLang(lang) {
      document.body.dataset.lang = lang;
      if (current) current.textContent = lang.toUpperCase();
      options.forEach(function (o) {
        o.classList.toggle('is-active', o.dataset.langSet === lang);
      });
      toggle.setAttribute('aria-expanded', 'false');
      root.classList.remove('is-open');
      localStorage.setItem('lf-lang', lang);
    }

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = root.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    options.forEach(function (o) {
      o.addEventListener('click', function () { setLang(o.dataset.langSet); });
    });
    document.addEventListener('click', function (e) {
      if (!root.contains(e.target)) {
        root.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
