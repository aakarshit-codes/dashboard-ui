import { setupSidebarToggle } from "./layout/sidebar.js";
import { setupHeader } from "./layout/header.js";

document.addEventListener("DOMContentLoaded", () => {
    setupSidebarToggle();
    setupHeader();
});