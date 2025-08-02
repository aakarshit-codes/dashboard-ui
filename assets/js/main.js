import { setupSidebarToggle } from "./layout/sidebar.js";
import { setupHeader } from "./layout/header.js";
import { loadDashboardCards } from "./components/cards.js"; 
import { loadProjectTable } from "./components/table.js";

document.addEventListener("DOMContentLoaded", () => {
    setupSidebarToggle();
    setupHeader();
    loadDashboardCards();
    loadProjectTable();
});