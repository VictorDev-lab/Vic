(() => {
  'use strict';
  
  // Liste over bakgrunnsbilder
  const images = [
    "/images/Skjermbilde1.png",
    "/images/Skjermbilde2.png",
    "/images/Skjermbilde3.png"
  ];
  
  // Finner alle slideshow-elementer på siden
  const slideshows = document.querySelectorAll('.bg-slideshow');
  
  // Hvis ingen slideshows finnes, avslutt
  if (!slideshows.length || images.length < 1) return;
  
  // Gå gjennom hvert slideshow på siden
  slideshows.forEach(slideshow => {
    const slides = slideshow.querySelectorAll('.slide');
    
    // Hvis ikke nok slide-elementer, hopp over
    if (slides.length < 2) return;
    
    let currentIndex = 0;
    let isTransitioning = false;
    
    // Sett første bilde
    slides[0].style.backgroundImage = `url("${images[0]}")`;
    slides[0].classList.add('visible');
    
    // Funksjon for å bytte bilde
    const nextSlide = () => {
      if (isTransitioning) return;
      isTransitioning = true;
      
      const nextIndex = (currentIndex + 1) % images.length;
      const currentSlide = slides[currentIndex % 2];
      const nextSlide = slides[nextIndex % 2];
      
      // Forbered neste bilde
      nextSlide.style.backgroundImage = `url("${images[nextIndex]}")`;
      nextSlide.style.zIndex = '1';
      currentSlide.style.zIndex = '0';
      
      // Start overgang
      nextSlide.classList.add('visible');
      
      // Når overgangen er fullført, fjern visible fra forrige slide
      setTimeout(() => {
        currentSlide.classList.remove('visible');
        currentIndex = nextIndex;
        isTransitioning = false;
      }, 1200);
    };
    
    // Start automatisk slideshow
    const slideshowInterval = setInterval(nextSlide, 6000);
    
    // Pause slideshow når brukeren interagerer med siden
    const pauseSlideshow = () => {
      clearInterval(slideshowInterval);
      setTimeout(() => {
        slideshowInterval = setInterval(nextSlide, 6000);
      }, 10000);
    };
    
    // Legg til event listeners for pausing
    document.addEventListener('scroll', pauseSlideshow);
    document.addEventListener('mousemove', pauseSlideshow);
    document.addEventListener('touchstart', pauseSlideshow);
    
    // Eksponer funksjoner for debugging
    slideshow.nextSlide = nextSlide;
    slideshow.pause = () => clearInterval(slideshowInterval);
    slideshow.resume = () => setInterval(nextSlide, 6000);
  });
  
  // Debug logging
  console.log('✅ Bakgrunns slideshow initialisert med', images.length, 'bilder');
})();