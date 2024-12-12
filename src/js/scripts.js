const toggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

toggle.addEventListener('change', () => {
  document.body.classList.toggle('light', toggle.checked);
});

if (localStorage.getItem('theme') === 'light') {
  toggle.checked = true;
  htmlElement.setAttribute('data-theme', 'light');
} else {
  htmlElement.setAttribute('data-theme', 'dakr');
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    htmlElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    htmlElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});


const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
  })
});

const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
});