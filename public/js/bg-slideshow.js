(function () {
  const images = [
    'images/Skjermbilde1.png',
    'images/Skjermbilde2.png',
    'images/Skjermbilde3.png'
  ];

  const el = document.getElementById('bg-slideshow');
  if (!el) {
    console.warn('bg-slideshow element not found.');
    return;
  }

  const slides = Array.from(el.querySelectorAll('.slide'));
  if (slides.length < 2) {
    // ensure there are two slide layers
    while (slides.length < 2) {
      const d = document.createElement('div');
      d.className = 'slide';
      el.appendChild(d);
      slides.push(d);
    }
  }

  // preload
  images.forEach(src => { const img = new Image(); img.src = src; });

  let idx = 0;
  const INTERVAL_MS = 5000;
  const FADE_MS = 400;
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // initialize first slide
  slides.forEach(s => s.style.opacity = '0');
  slides[0].style.backgroundImage = `url("${images[0]}")`;
  slides[0].classList.add('visible');

  function showNext() {
    const nextIdx = (idx + 1) % images.length;
    const currentSlide = slides[idx % 2];
    const nextSlide = slides[(idx + 1) % 2];

    // prepare next slide
    nextSlide.style.backgroundImage = `url("${images[nextIdx]}")`;
    nextSlide.classList.add('visible');

    // after fade, hide the previous
    setTimeout(() => {
      currentSlide.classList.remove('visible');
      // advance pointer
      idx = nextIdx;
    }, FADE_MS);
  }

  if (!prefersReduced && images.length > 1) {
    setInterval(showNext, INTERVAL_MS);
  } else {
    // no animation: show first and stop
    slides.forEach(s => s.classList.remove('visible'));
    slides[0].style.backgroundImage = `url("${images[0]}")`;
    slides[0].classList.add('visible');
  }
})();