document.addEventListener('DOMContentLoaded', async () => {
  console.log('🚀 Main.js lastet - initialiserer komponenter');
  
  try {
    // Last header og footer komponenter
    await Promise.all([
      loadComponent('site-header', '/components/header.html'),
      loadComponent('site-footer', '/components/footer.html')
    ]);
    
    // Sett nåværende år i footer
    updateCopyrightYear();
    
    // Initialiser navigasjon
    initNavigation();
    
    // Marker aktiv side i navigasjon
    highlightCurrentPage();
    
    // Legg til smooth scroll for anchor lenker
    initSmoothScroll();
    
    // Initialiser eventuelle interaktive elementer
    initInteractiveElements();
    
    console.log('✅ Alle komponenter initialisert');
  } catch (error) {
    console.error('❌ Feil under initialisering:', error);
  }
});

// Funksjon for å laste HTML-komponenter
async function loadComponent(elementId, url) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`⚠️ Element med ID "${elementId}" ikke funnet`);
    return;
  }
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }
    
    const html = await response.text();
    element.innerHTML = html;
    
    console.log(`✅ Komponent "${elementId}" lastet fra ${url}`);
  } catch (error) {
    console.error(`❌ Kunne ikke laste ${url}:`, error);
    element.innerHTML = `
      <div style="padding: 1rem; background: #fed7d7; color: #9b2c2c; border-radius: 6px;">
        <strong>Feil:</strong> Kunne ikke laste ${elementId}. Sjekk at filen finnes.
      </div>
    `;
  }
}

// Oppdater copyright år
function updateCopyrightYear() {
  const yearElements = document.querySelectorAll('#year');
  const currentYear = new Date().getFullYear();
  
  yearElements.forEach(element => {
    element.textContent = currentYear;
  });
}

// Initialiser navigasjonsmeny
function initNavigation() {
  const toggleButton = document.getElementById('nav-toggle');
  const navigation = document.getElementById('main-nav');
  
  if (toggleButton && navigation) {
    // Toggle meny når knappen klikkes
    toggleButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const isExpanded = navigation.classList.toggle('show');
      
      // Oppdater ARIA-attributter for tilgjengelighet
      toggleButton.setAttribute('aria-expanded', isExpanded);
      toggleButton.setAttribute('aria-label', 
        isExpanded ? 'Lukk meny' : 'Åpne meny'
      );
      
      // Endre ikon basert på tilstand
      toggleButton.innerHTML = isExpanded ? '✕' : '☰';
    });
    
    // Lukk meny når det klikkes utenfor
    document.addEventListener('click', (event) => {
      if (navigation.classList.contains('show') && 
          !navigation.contains(event.target) && 
          event.target !== toggleButton) {
        navigation.classList.remove('show');
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleButton.setAttribute('aria-label', 'Åpne meny');
        toggleButton.innerHTML = '☰';
      }
    });
    
    // Lukk meny når en lenke klikkes (for mobil)
    navigation.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navigation.classList.remove('show');
          toggleButton.setAttribute('aria-expanded', 'false');
          toggleButton.setAttribute('aria-label', 'Åpne meny');
          toggleButton.innerHTML = '☰';
        }
      });
    });
  }
}

// Marker aktiv side i navigasjon
function highlightCurrentPage() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('#main-nav a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    // Fjern aktiv klasse fra alle lenker
    link.classList.remove('active');
    link.removeAttribute('aria-current');
    
    // Sjekk om denne lenken er aktiv
    if (currentPath === linkPath || 
        (currentPath === '/' && linkPath === '/index.html') ||
        (currentPath.includes(linkPath) && linkPath !== '/')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

// Initialiser smooth scroll for anchor lenker
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Lukk mobilmeny hvis åpen
        const nav = document.getElementById('main-nav');
        const toggle = document.getElementById('nav-toggle');
        if (nav && nav.classList.contains('show')) {
          nav.classList.remove('show');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.setAttribute('aria-label', 'Åpne meny');
          toggle.innerHTML = '☰';
        }
        
        // Smooth scroll til element
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialiser interaktive elementer
function initInteractiveElements() {
  // Legg til hover-effekter for kort
  document.querySelectorAll('.service-card, .project-card, .feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
  
  // Last prosjekter fra API hvis det finnes en container
  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer) {
    loadProjectsFromAPI();
  }
}

// Last prosjekter fra API
async function loadProjectsFromAPI() {
  try {
    const response = await fetch('/api/projects');
    if (!response.ok) throw new Error('API-feil');
    
    const projects = await response.json();
    const container = document.getElementById('projects-container');
    
    if (container && projects.length > 0) {
      container.innerHTML = projects.map(project => `
        <div class="project-card">
          <div class="project-icon">${project.icon}</div>
          <div class="project-category">${project.category}</div>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <a href="/projects.html#${project.id}" class="project-link">Se detaljer →</a>
        </div>
      `).join('');
      
      console.log(`✅ ${projects.length} prosjekter lastet fra API`);
    }
  } catch (error) {
    console.error('❌ Kunne ikke laste prosjekter:', error);
  }
}

// Eksponer funksjoner for debugging
window.siteComponents = {
  reloadHeader: () => loadComponent('site-header', '/components/header.html'),
  reloadFooter: () => loadComponent('site-footer', '/components/footer.html'),
  refreshProjects: loadProjectsFromAPI
};