const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");

function closeMobileMenu() {
  if (!menuButton || !mobileNav) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  mobileNav.hidden = true;
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  mobileNav.hidden = isOpen;
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMobileMenu();
});

const publicationTabs = [...document.querySelectorAll(".tab-button")];
const publicationPanels = [...document.querySelectorAll(".publication-panel")];

publicationTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activatePublicationTab(tab));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextTab = publicationTabs[(index + direction + publicationTabs.length) % publicationTabs.length];
    activatePublicationTab(nextTab);
    nextTab.focus();
  });
});

function activatePublicationTab(activeTab) {
  publicationTabs.forEach((tab) => {
    const selected = tab === activeTab;
    tab.classList.toggle("is-active", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  publicationPanels.forEach((panel) => {
    panel.hidden = panel.id !== activeTab.getAttribute("aria-controls");
  });
}