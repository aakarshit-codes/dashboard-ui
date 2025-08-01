// Sidebar toggle logic (mobile)
export function setupSidebarToggle() {
    const button = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');

    if (!button || !sidebar) return;

    button.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });
}