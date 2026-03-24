document.addEventListener("DOMContentLoaded", () => {
  // Animação de Scroll (Reveal) para Seções
  const revealElements = document.querySelectorAll(".reveal");
  const revealCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(revealCallback, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });
  revealElements.forEach((element) => {
    observer.observe(element);
  });

  // Menu Mobile
  const menuToggle = document.getElementById("mobile-menu");
  const mobileNav = document.getElementById("mobile-nav-menu");
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("is-active");
      mobileNav.classList.toggle("is-active");
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("is-active");
        mobileNav.classList.remove("is-active");
      });
    });
  }

  // Smooth Scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Header Shadow
  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (header) {
      header.style.boxShadow =
        window.scrollY > 50 ? "0 10px 30px -10px rgba(2, 12, 27, 0.7)" : "none";
    }
  });

  // Botão Voltar ao Topo
  const backToTopButton = document.getElementById("backToTop");
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    });
  }

  // Observador para animação dos Cards de Projeto
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  // Configuração dos Cards de Projetos (Estáticos no HTML)
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    // Aplica delay na animação apenas nos primeiros itens para efeito cascata
    if (index < 12) card.style.transitionDelay = `${index * 100}ms`;

    // Observa o card para animação de scroll
    cardObserver.observe(card);

    // Adiciona evento de clique para abrir a imagem
    card.addEventListener("click", () => {
      const img = card.querySelector("img");
      if (img) window.open(img.src, "_blank");
    });
  });

  // Efeito de Partículas
  const initParticles = () => {
    const canvas = document.getElementById("hero-particles");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particlesArray;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.directionX = Math.random() * 0.4 - 0.2;
        this.directionY = Math.random() * 0.4 - 0.2;
        this.size = Math.random() * 2 + 1;
        this.color = "#64ffda";
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        if (this.x > canvas.width || this.x < 0)
          this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0)
          this.directionY = -this.directionY;
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      let numberOfParticles = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance =
            (particlesArray[a].x - particlesArray[b].x) *
              (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) *
              (particlesArray[a].y - particlesArray[b].y);
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;
            ctx.strokeStyle = "rgba(100, 255, 218," + opacityValue + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    init();
    animate();
  };
  initParticles();
});
