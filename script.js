const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const sender = contactForm.querySelector("#sender").value.trim();
  const email = contactForm.querySelector("#email").value.trim();
  const message = contactForm.querySelector("#message").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  const finalMessage = `${sender} (${email}):\n${message.replace(/\n/g, "\n")}`;
  const encodedMessage = encodeURIComponent(finalMessage);
  const whatsappUrl = `https://wa.me/6283802598364?text=${encodedMessage}`;
  document.location.href = whatsappUrl;
});

function isTopOfElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.top <= 0.5 * window.innerHeight;
}
let sectionLocation = "home";
const menuItems = {
  home: "abbr[title='Home'] a",
  about: "abbr[title='About'] a",
  skills: "abbr[title='Skills'] a",
  projects: "abbr[title='Projects'] a",
  certifications: "abbr[title='Certifications'] a",
  contact: "abbr[title='Contact'] a",
};
const navbar = document.querySelector("header nav");
let deviceWidth = window.innerWidth;
let navbarHeight = 0;

window.addEventListener("resize", function () {
  deviceWidth = window.innerWidth;
  if (deviceWidth < 1020) {
    navbarHeight = 66;
  } else if (deviceWidth < 561) {
    navbarHeight = 58;
  } else {
    navbarHeight = 0;
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > navbarHeight) navbar.style.bottom = "0";
  else navbar.style.bottom = `-${navbarHeight}px`;
  const sections = document.querySelectorAll("main .container");
  sections.forEach((section) => {
    if (isTopOfElementInViewport(section)) {
      sectionLocation = section.id.trim();
      for (const item in menuItems) {
        const menuItem = document.querySelector(menuItems[item]);
        if (item === sectionLocation) {
          menuItem.classList.add("active");
        } else {
          menuItem.classList.remove("active");
        }
      }
    }
  });
});
