// Project Data (easily extendable)
const projects = [
  {
    title: "Nebula Flow",
    desc: "Real-time dashboard for cloud infrastructure metrics with WebSocket + D3.js.",
    tags: ["React", "Node.js", "Socket.io", "Tailwind"],
    icon: "fa-chart-line",
    link: "#"
  },
  {
    title: "Artemis AI",
    desc: "Generative AI tool that transforms sketches into production-ready components.",
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    icon: "fa-brain",
    link: "#"
  },
  {
    title: "DevMarket",
    desc: "Open-source marketplace for developers to buy/sell UI templates & snippets.",
    tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    icon: "fa-store",
    link: "#"
  }
];

const skillsList = [
  "JavaScript (ES6+)", "TypeScript", "React / Next.js", "Node.js", "Express", 
  "Python", "Django", "Tailwind CSS", "MongoDB", "PostgreSQL", 
  "Docker", "GitHub Actions", "AWS (EC2, S3)", "GraphQL"
];

// Render projects
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;
  container.innerHTML = projects.map(proj => `
    <div class="project-card">
      <div class="project-icon"><i class="fas ${proj.icon}"></i></div>
      <h3>${proj.title}</h3>
      <p>${proj.desc}</p>
      <div class="project-tags">
        ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <a href="${proj.link}" class="project-link">Case study <i class="fas fa-arrow-right"></i></a>
    </div>
  `).join('');
}

// Render skills
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;
  container.innerHTML = skillsList.map(skill => `<div class="skill-item">${skill}</div>`).join('');
}

// Mobile menu toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
    // Close menu on link click
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      if (href === "#" || href === "") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// Simple contact form handler (demo)
function initContactForm() {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      feedback.textContent = "⚠️ Please fill all fields.";
      feedback.style.color = "#F87171";
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      feedback.textContent = "📧 Enter a valid email address.";
      feedback.style.color = "#FBBF24";
      return;
    }
    feedback.textContent = "✨ Thanks! I'll get back to you soon.";
    feedback.style.color = "#34D399";
    form.reset();
    setTimeout(() => {
      feedback.textContent = "";
    }, 3500);
  });
}

// Additional: subtle scroll animation for nav active highlight (optional)
function highlightActiveNav() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.style.color = "";
      if (link.getAttribute("href") === `#${current}`) {
        link.style.color = "#3B82F6";
      }
    });
  });
}

// Initialize everything when DOM ready
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  initMobileMenu();
  initSmoothScroll();
  initContactForm();
  highlightActiveNav();
});
