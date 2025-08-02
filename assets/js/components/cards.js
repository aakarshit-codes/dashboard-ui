export async function loadDashboardCards() {
    const container = document.getElementById('dashboard-cards');
    if (!container) return;

    try {
        const response = await fetch('../data/dashboard.json');
        const data = await response.json();

        const html = data.map(card => `
            <div class="bg-white shadow rounded-xl p-4 flex items-center space-x-4">
                <div class="text-3xl>${card.icon}</div>
                <div>
                    <h3 class="text-sm text-gray-500">${card.label}</h3>
                    <p class="text-xl font-bold">${card.value}</p>
                </div>
            </div>
        `).join('');

        container.innerHTML = html;
    } catch (error) {
        console.error('Failed to load dashboard cards:', error);
    }
}