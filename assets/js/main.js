/* light and dark mode */
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const header = document.getElementById("header");
const logo = document.getElementById("nav_logo");
const home_nav_lists = document.getElementById("home");
const about_nav_lists = document.getElementById("about");
const skills_nav_lists = document.getElementById("skills");
const work_nav_lists = document.getElementById("work");
const contact_nav_lists = document.getElementById("contact");
const menu_bar = document.getElementById("menu-bar");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    header.style.backgroundColor = "#201f1f";
    logo.style.color = "#fff";
    home_nav_lists.style.color = "#fff";
    about_nav_lists.style.color = "#fff";
    skills_nav_lists.style.color = "#fff";
    work_nav_lists.style.color = "#fff";
    contact_nav_lists.style.color = "#fff";
    menu_bar.style.color = "#fff";

    themeToggle.classList.remove("fa-sun");
    themeToggle.classList.add("fa-moon");
  } else {
    header.style.backgroundColor = "#fff";
    logo.style.color = "var(--second-color)";
    home_nav_lists.style.color = "var(--second-color)";
    about_nav_lists.style.color = "var(--second-color)";
    skills_nav_lists.style.color = "var(--second-color)";
    work_nav_lists.style.color = "var(--second-color)";
    contact_nav_lists.style.color = "var(--second-color)";
    menu_bar.style.color = "var(--second-color)";

    themeToggle.classList.remove("fa-moon");
    themeToggle.classList.add("fa-sun");
  }
});

// Check the user's preference for dark mode
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  body.classList.remove("dark-mode");
  themeToggle.classList.remove("fa-sun");

  themeToggle.classList.add("fa-moon");
}

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
