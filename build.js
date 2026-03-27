// ─── RAW BUILD DATA ──────────────────────────────────────────
const allBuilds = [
    { id: 119, branch: 'main',    status: 'Passed',  duration: 145 },
    { id: 120, branch: 'dev',     status: 'Passed',  duration: 160 },
    { id: 121, branch: 'main',    status: 'Failed',  duration: 170 },
    { id: 122, branch: 'feature', status: 'Passed',  duration: 130 },
    { id: 123, branch: 'main',    status: 'Running', duration: 150 },
    { id: 124, branch: 'dev',     status: 'Passed',  duration: 130 },
    { id: 125, branch: 'main',    status: 'Failed',  duration: 180 },
    { id: 126, branch: 'feature', status: 'Passed',  duration: 140 },
    { id: 127, branch: 'dev',     status: 'Passed',  duration: 160 },
    { id: 128, branch: 'main',    status: 'Passed',  duration: 70  },
];

// ─── CHARTS ──────────────────────────────────────────────────
let donutChart, barChart;

function initCharts(builds) {
    const passed  = builds.filter(b => b.status === 'Passed').length;
    const failed  = builds.filter(b => b.status === 'Failed').length;
    const running = builds.filter(b => b.status === 'Running').length;

    if (donutChart) donutChart.destroy();
    donutChart = new Chart(document.getElementById('donutChart'), {
        type: 'doughnut',
        data: {
            labels: ['Passed', 'Failed', 'Running'],
            datasets: [{
                data: [passed, failed, running],
                backgroundColor: ['#0ceb0c', '#ff4d4d', '#f5c518'],
                borderWidth: 2,
                borderColor: '#1a2535'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '55%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#ddd', font: { size: 12 }, padding: 12 }
                }
            }
        }
    });

    if (barChart) barChart.destroy();
    barChart = new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: {
            labels: builds.map(b => '#' + b.id),
            datasets: [{
                label: 'Duration (s)',
                data: builds.map(b => b.duration),
                backgroundColor: builds.map(b =>
                    b.status === 'Failed'  ? '#ff4d4d' :
                    b.status === 'Running' ? '#f5c518' : '#32e6e2'
                ),
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { color: '#aaa', font: { size: 12 } }, grid: { color: '#1e2a38' } },
                y: { ticks: { color: '#aaa', font: { size: 12 } }, grid: { color: '#1e2a38' } }
            }
        }
    });
}

// ─── KPI UPDATE ───────────────────────────────────────────────
function updateKPIs(builds) {
    document.getElementById('kpi-total').textContent = builds.length;
    document.getElementById('kpi-pass').textContent  = builds.filter(b => b.status === 'Passed').length;
    document.getElementById('kpi-fail').textContent  = builds.filter(b => b.status === 'Failed').length;
    document.getElementById('kpi-run').textContent   = builds.filter(b => b.status === 'Running').length;
}

// ─── TABLE — 4 columns only ───────────────────────────────────
function buildTable(builds) {
    const tbody = document.getElementById('buildTableBody');
    tbody.innerHTML = '';
    builds.forEach(b => {
        const pill = b.status === 'Passed'  ? 'status-success' :
                     b.status === 'Failed'  ? 'status-error'   : 'status-warning';

        // format duration as Xm Ys
        const mins = Math.floor(b.duration / 60);
        const secs = b.duration % 60;
        const dur  = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

        tbody.innerHTML += `
          <tr>
            <td>#${b.id}</td>
            <td><span class="branch-tag">${b.branch}</span></td>
            <td><span class="status-pill ${pill}">${b.status}</span></td>
            <td>${dur}</td>
          </tr>`;
    });
}

// ─── TOGGLE DETAIL PANEL ─────────────────────────────────────
function toggleDetail(btn) {
    const panel = document.getElementById('detailPanel');
    const open  = panel.classList.toggle('visible');
    btn.textContent = open ? '⬆ Hide Details' : '⬇ View Details';
}

// ─── INIT ─────────────────────────────────────────────────────
const latest10 = allBuilds.slice(-10);
initCharts(latest10);
updateKPIs(latest10);
buildTable(latest10);