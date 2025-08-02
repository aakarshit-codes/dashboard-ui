import { setupSidebarToggle } from "./layout/sidebar.js";
import { setupHeader } from "./layout/header.js";
import { loadDashboardCards } from "./components/cards.js"; 

document.addEventListener("DOMContentLoaded", () => {
    setupSidebarToggle();
    setupHeader();
    loadDashboardCards();
});