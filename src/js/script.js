// Ano atual no footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Smooth scrolling para navegação
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navegação ativa
function updateActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-list a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// Animação on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("animate");
    }
  });
}

// Parallax effect para o background
function updateParallax() {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".animated-bg");
  const speed = scrolled * 0.5;
  parallax.style.transform = `translateY(${speed}px)`;
}

// Event listeners
window.addEventListener("scroll", () => {
  updateActiveNav();
  animateOnScroll();
  updateParallax();
});

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  animateOnScroll();
  updateActiveNav();
});

// Efeito de typing para o título
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Aplicar efeito de typing ao título principal
window.addEventListener("load", () => {
  const titulo = document.querySelector(".header-text h1");
  const textoOriginal = titulo.textContent;
  setTimeout(() => {
    typeWriter(titulo, textoOriginal, 80);
  }, 1000);
});

// Contador de habilidades (animação)
function animateSkills() {
  const skillItems = document.querySelectorAll(".habilidade-list li");

  skillItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "0";
      item.style.transform = "translateX(-20px)";

      setTimeout(() => {
        item.style.transition = "all 0.5s ease";
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
      }, 100);
    }, index * 100);
  });
}

// Intersection Observer para animações mais suaves
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");

      // Animação especial para seção de habilidades
      if (entry.target.id === "habilidades") {
        setTimeout(animateSkills, 500);
      }
    }
  });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll(".animate-on-scroll, section[id]").forEach((el) => {
  observer.observe(el);
});

// Efeito de cursor personalizado
const cursor = document.createElement("div");
cursor.className = "custom-cursor";
cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
            opacity: 0;
        `;
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX - 10 + "px";
  cursor.style.top = e.clientY - 10 + "px";
  cursor.style.opacity = "0.7";
});

document.addEventListener("mouseleave", () => {
  cursor.style.opacity = "0";
});

// Hover effects para cards
const cards = document.querySelectorAll(
  ".glass-card, .projeto-card, .habilidade-card, .formacao-card"
);

cards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Animação de partículas no fundo (sutil)
function createParticles() {
  const particlesContainer = document.createElement("div");
  particlesContainer.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
            `;
  document.body.appendChild(particlesContainer);

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: rgba(102, 126, 234, 0.3);
                    border-radius: 50%;
                    animation: float ${
                      Math.random() * 3 + 2
                    }s ease-in-out infinite;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation-delay: ${Math.random() * 2}s;
                `;
    particlesContainer.appendChild(particle);
  }
}

// Adicionar partículas após o carregamento
window.addEventListener("load", createParticles);

// Efeito de revelação para textos
function revealText() {
  const textElements = document.querySelectorAll("p, li");

  textElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

// Aplicar estilos iniciais para revelação de texto
document.addEventListener("DOMContentLoaded", () => {
  const textElements = document.querySelectorAll("p, li");
  textElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.6s ease";
  });
});

window.addEventListener("scroll", revealText);
window.addEventListener("load", revealText);
