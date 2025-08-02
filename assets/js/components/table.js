export async function loadProjectTable() {
    const container = document.getElementById('project-table');
    if (!container) return;

    try {
        const response = await fetch('../data/projects.json');
        const data = await response.json();

        const rows = data.map((item) => `
        <tr class="border-b">
            <td class="px-4 py-3">${item.name}</td>
            <td class="px-4 py-3">${item.owner}</td>
            <td class="px-4 py-3">
            <span class="inline-block px-2 py-1 text-xs rounded-full font-medium
                ${item.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">
                ${item.status}
            </span>
            </td>
            <td class="px-4 py-3 text-sm text-gray-500">${item.updated}</td>
        </tr>
    `).join('');

        const html = `
        <h2 class="text-lg font-semibold mb-4">Project Overview</h2>
        <div class="overflow-x-auto bg-white shadow rounded-lg">
        <table class="min-w-full text-sm">
            <thead class="bg-gray-100">
                <tr>
                    <th class="px-4 py-2 text-left">Project Name</th>
                    <th class="px-4 py-2 text-left">Owner</th>
                    <th class="px-4 py-2 text-left">Status</th>
                    <th class="px-4 py-2 text-left">Last Updated</th>
                </tr>
            </thead>
        <tbody>${rows}</tbody>
        </table>
        </div>
        `;
        container.innerHTML = html;
    } catch (error) {
        console.error('Failed to load project table:', error);
    }
}
