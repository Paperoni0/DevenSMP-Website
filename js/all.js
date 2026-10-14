(() => {
    const theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
})();

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('contextmenu', event => event.preventDefault());
    window.oncontextmenu = (event) => {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

const menuToggle = document.querySelector("#menuToggle");
const menu = document.querySelector("#menu");
const menuBackdrop = document.querySelector("#menuBackdrop");
const menuLinks = document.querySelectorAll("#links a");

if (!menuToggle || !menu) {
    return;
}

function setMenuState(isOpen) {
  menu.classList.toggle("is-open", isOpen);
  if (menuBackdrop) {
    menuBackdrop.classList.toggle("is-visible", isOpen);
  }

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menu.setAttribute("aria-hidden", String(!isOpen));

  menuLinks.forEach((link) => {
    link.tabIndex = isOpen ? 0 : -1;
  });
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuState(!isOpen);
});

if (menuBackdrop) {
  menuBackdrop.addEventListener("click", () => {
    setMenuState(false);
  });
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setMenuState(false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
  }
});

setMenuState(false);
});
