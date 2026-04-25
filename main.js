/* =====================
   FOOTER YEAR
   ===================== */
document.getElementById('footer-year').textContent = new Date().getFullYear();

/* =====================
   GSAP SETUP
   ===================== */
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Loader out
  const loader = document.querySelector('.loader');
  if (loader) {
    gsap.to(loader, {
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
      ease: 'power2.out',
      onComplete: () => loader.remove()
    });
  }

  // Header
  gsap.from('.header', { opacity: 0, y: -16, duration: 0.7, ease: 'power2.out', delay: 0.5 });

  // Hero elements
  const heroTl = gsap.timeline({ delay: 0.6 });
  heroTl
    .from('.hero-top-bar', { opacity: 0, y: 12, duration: 0.5, ease: 'power2.out' })
    .from('.name-line', { opacity: 0, y: 40, duration: 0.7, ease: 'power2.out', stagger: 0.1 }, '-=0.2')
    .from('.hero-aside', { opacity: 0, x: 20, duration: 0.6, ease: 'power2.out' }, '-=0.4')
    .from('.hero-scroll', { opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
    .from('.deco-ring', { opacity: 0, scale: 0.9, duration: 1, ease: 'power2.out' }, '-=0.6');

  // Sections on scroll
  document.querySelectorAll('.section').forEach((section) => {
    gsap.from(section.querySelector('.section-header'), {
      scrollTrigger: { trigger: section, start: 'top 80%' },
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out'
    });
  });

  // Sobre
  gsap.from('.sobre-text', {
    scrollTrigger: { trigger: '.sobre', start: 'top 75%' },
    opacity: 0, x: -20, duration: 0.7, ease: 'power2.out', delay: 0.15
  });
  gsap.from('.stat-item', {
    scrollTrigger: { trigger: '.sobre', start: 'top 75%' },
    opacity: 0, y: 16, duration: 0.5, stagger: 0.1, ease: 'power2.out', delay: 0.25
  });

  // Skills
  gsap.from('.skill-item', {
    scrollTrigger: { trigger: '.habilidades', start: 'top 80%' },
    opacity: 0, x: -16, duration: 0.4, stagger: 0.07, ease: 'power2.out', delay: 0.15
  });

  // Projects
  gsap.from('.project-item', {
    scrollTrigger: { trigger: '.projetos', start: 'top 80%' },
    opacity: 0, y: 24, duration: 0.5, stagger: 0.12, ease: 'power2.out', delay: 0.1
  });

  // Contato
  gsap.from('.contato-headline', {
    scrollTrigger: { trigger: '.contato', start: 'top 80%' },
    opacity: 0, y: 20, duration: 0.7, ease: 'power2.out'
  });
  gsap.from('.contact-item', {
    scrollTrigger: { trigger: '.contato', start: 'top 80%' },
    opacity: 0, y: 12, duration: 0.4, stagger: 0.1, ease: 'power2.out', delay: 0.2
  });
});

/* =====================
   PROJECT DATA
   ===================== */
const projectsData = {
  landing: {
    index: '01',
    title: 'Landing Page de Conversão',
    subtitle: 'UX · Performance · Design',
    description: 'Projeto moderno com foco em conversão. Estrutura visual clara, CTAs estratégicos e animações sutis produzidas com GSAP para melhorar o engajamento.',
    tech: 'HTML5 · CSS3 · JavaScript · GSAP',
    demo: 'https://lukaszwx.github.io/landing-page/',
    code: 'https://github.com/lukaszwx/landing-page'
  },
  dashboard: {
    index: '02',
    title: 'Aplicação JavaScript',
    subtitle: 'Interatividade · Lógica · Animações',
    description: 'Sistema interativo com manipulação avançada do DOM, microinterações e animações suaves. Foco em lógica de programação e experiência do usuário.',
    tech: 'HTML5 · CSS3 · JavaScript · GSAP',
    demo: 'https://lukaszwx.github.io/projeto-dashboard/',
    code: 'https://github.com/lukaszwx/projeto-dashboard'
  },
  institucional: {
    index: '03',
    title: 'Site Institucional',
    subtitle: 'Corporativo · Elegante · Funcional',
    description: 'Site corporativo com animações refinadas, cards de serviços e equipe, depoimentos e formulário de contato funcional. Visual limpo e profissional.',
    tech: 'HTML5 · CSS3 · JavaScript · GSAP',
    demo: 'https://lukaszwx.github.io/projeto-institucional/',
    code: 'https://github.com/lukaszwx/projeto-institucional'
  },
  aurora: {
  index: '04',
  title: 'Aurora Headphones',
  subtitle: 'Produto · Premium · Apple Style',
  description: 'Landing page de produto premium inspirada no design da Apple. Interface minimalista com storytelling visual, animações suaves com GSAP e foco em experiência de produto real.',
  tech: 'HTML5 · CSS3 · JavaScript · GSAP · ScrollTrigger',
  demo: 'https://lukaszwx.github.io/aurora-headphones/',
  code: 'https://github.com/lukaszwx/aurora-headphones.git'
}
};

/* =====================
   MODAL
   ===================== */
const modal       = document.getElementById('projectModal');
const modalIndex  = modal.querySelector('.modal-index');
const modalTitle  = modal.querySelector('.modal-title');
const modalSub    = modal.querySelector('.modal-subtitle');
const modalDesc   = modal.querySelector('.modal-description');
const modalTech   = modal.querySelector('.modal-tech');
const modalDemo   = modal.querySelector('.modal-demo');
const modalCode   = modal.querySelector('.modal-code');
const closeBtn    = modal.querySelector('.modal-close');

function buildTech(str) {
  modalTech.innerHTML = '';
  str.split(' · ').forEach(t => {
    const span = document.createElement('span');
    span.textContent = t.trim();
    modalTech.appendChild(span);
  });
}

function openModal(key) {
  const p = projectsData[key];
  if (!p) return;

  modalIndex.textContent  = p.index;
  modalTitle.textContent  = p.title;
  modalSub.textContent    = p.subtitle;
  modalDesc.textContent   = p.description;
  buildTech(p.tech);
  modalDemo.href = p.demo;
  modalCode.href = p.code;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  if (typeof gsap !== 'undefined') {
    gsap.fromTo('.modal',
      { scale: 0.94, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.3, ease: 'power3.out' }
    );
  }

  closeBtn.focus();
}

function closeModal() {
  if (typeof gsap !== 'undefined') {
    gsap.to('.modal', {
      scale: 0.94, opacity: 0, duration: 0.2, ease: 'power3.in',
      onComplete: () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  } else {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

document.querySelectorAll('.btn-details').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.project));
});

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

/* =====================
   SMOOTH SCROLL
   ===================== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
