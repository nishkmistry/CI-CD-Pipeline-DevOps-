// ─── STAGE BREAKDOWN DATA ─────────────────────────────────────
const stages = [
    { name: 'Source Checkout',    rate: 0.7,  color: '#32e6e2' },
    { name: 'Dependency Install', rate: 1.4,  color: '#32e6e2' },
    { name: 'Build',              rate: 2.8,  color: '#32e6e2' },
    { name: 'Unit Tests',         rate: 4.1,  color: '#ffa500' },
    { name: 'Security Scan',      rate: 1.2,  color: '#32e6e2' },
    { name: 'Deploy',             rate: 0.5,  color: '#32e6e2' },
];

// ─── RECENT RUNS DATA ─────────────────────────────────────────
const runs = [
    {
        id: '#1047', branch: 'feat/auth-refactor', by: 'harshdev', ago: '8 minutes ago',
        commit: '3f9a1b2', status: 'Running',
        stages: [
            { name: 'Checkout',     state: 'pass'    },
            { name: 'Install',      state: 'pass'    },
            { name: 'Build',        state: 'pass'    },
            { name: 'Unit Tests',   state: 'running' },
            { name: 'Security Scan',state: 'skipped' },
            { name: 'Deploy',       state: 'skipped' },
        ],
        chips: ['Duration so far: 3m 21s', 'Environment: Staging', 'Tests passed: 148 / ?'],
    },
    {
        id: '#1046', branch: 'main', by: 'CI bot', ago: '2 hours ago',
        commit: 'a1c4e88', status: 'Passed',
        stages: [
            { name: 'Checkout',      state: 'pass' },
            { name: 'Install',       state: 'pass' },
            { name: 'Build',         state: 'pass' },
            { name: 'Unit Tests',    state: 'pass' },
            { name: 'Security Scan', state: 'pass' },
            { name: 'Deploy',        state: 'pass' },
        ],
        chips: ['Duration: 6m 14s', 'Environment: Production', 'Tests passed: 312 / 312', 'Coverage: 87.4%'],
    },
    {
        id: '#1045', branch: 'feat/payment-v2', by: 'patelrohan', ago: '5 hours ago',
        commit: 'd8b72f1', status: 'Failed',
        stages: [
            { name: 'Checkout',      state: 'pass'    },
            { name: 'Install',       state: 'pass'    },
            { name: 'Build',         state: 'pass'    },
            { name: 'Unit Tests',    state: 'fail'    },
            { name: 'Security Scan', state: 'skipped' },
            { name: 'Deploy',        state: 'skipped' },
        ],
        chips: ['Duration: 4m 03s', 'Environment: Staging', 'Tests failed: 7 / 289', 'Failed at: Unit Tests'],
    },
    {
        id: '#1044', branch: 'main', by: 'CI bot', ago: '8 hours ago',
        commit: 'b3d19cc', status: 'Passed',
        stages: [
            { name: 'Checkout',      state: 'pass' },
            { name: 'Install',       state: 'pass' },
            { name: 'Build',         state: 'pass' },
            { name: 'Unit Tests',    state: 'pass' },
            { name: 'Security Scan', state: 'pass' },
            { name: 'Deploy',        state: 'pass' },
        ],
        chips: ['Duration: 6m 58s', 'Environment: Production', 'Tests passed: 312 / 312', 'Coverage: 86.9%'],
    },
];

// ─── HISTORY TABLE DATA ───────────────────────────────────────
const history = [
    { run: '#1047', branch: 'feat/auth-refactor', status: 'Running', duration: '3m 21s+', failed: '—'         },
    { run: '#1046', branch: 'main',               status: 'Passed',  duration: '6m 14s',  failed: '—'         },
    { run: '#1045', branch: 'feat/payment-v2',    status: 'Failed',  duration: '4m 03s',  failed: 'Unit Tests' },
    { run: '#1044', branch: 'main',               status: 'Passed',  duration: '6m 58s',  failed: '—'         },
    { run: '#1043', branch: 'fix/null-ptr',        status: 'Passed',  duration: '5m 39s',  failed: '—'         },
    { run: '#1042', branch: 'feat/payment-v2',    status: 'Failed',  duration: '3m 17s',  failed: 'Build'      },
    { run: '#1041', branch: 'main',               status: 'Passed',  duration: '6m 22s',  failed: '—'         },
];

// ─── CHARTS ──────────────────────────────────────────────────
let donutChart, barChart;

function initCharts() {
    // Donut
    if (donutChart) donutChart.destroy();
    donutChart = new Chart(document.getElementById('donutChart'), {
        type: 'doughnut',
        data: {
            labels: ['Passed', 'Failed', 'Running'],
            datasets: [{
                data: [267, 16, 1],
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

    // Bar — stage failure rates
    if (barChart) barChart.destroy();
    barChart = new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: {
            labels: stages.map(s => s.name),
            datasets: [{
                label: 'Failure Rate %',
                data: stages.map(s => s.rate),
                backgroundColor: stages.map(s => s.color),
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { color: '#aaa', font: { size: 11 } }, grid: { color: '#1e2a38' } },
                y: {
                    ticks: { color: '#aaa', font: { size: 12 }, callback: v => v + '%' },
                    grid: { color: '#1e2a38' },
                    max: 6
                }
            }
        }
    });
}

// ─── STAGE BREAKDOWN CARDS ────────────────────────────────────
function buildStageBreakdown() {
    const container = document.getElementById('stageBreakdown');
    container.innerHTML = '';
    stages.forEach(s => {
        const isHighest = s.rate === Math.max(...stages.map(x => x.rate));
        container.innerHTML += `
          <div class="stage-stat-card ${isHighest ? 'stage-stat-card--warn' : ''}">
              <div class="stage-stat-value" style="color:${isHighest ? '#ffa500' : '#ffffff'};">${s.rate}%</div>
              <div class="stage-stat-label">${s.name}</div>
          </div>`;
    });
}

// ─── PIPELINE RUN CARDS ───────────────────────────────────────
function buildRuns() {
    const container = document.getElementById('pipelineRuns');
    container.innerHTML = '';

    runs.forEach(r => {
        const borderColor = r.status === 'Passed'  ? '#0ceb0c' :
                            r.status === 'Failed'  ? '#ff4d4d' : '#ffa500';
        const pillClass   = r.status === 'Passed'  ? 'status-success' :
                            r.status === 'Failed'  ? 'status-error'   : 'status-warning';

        const stageHTML = r.stages.map((s, i) => {
            const boxClass = s.state === 'pass'    ? 'pl-stage-pass'    :
                             s.state === 'fail'    ? 'pl-stage-fail'    :
                             s.state === 'running' ? 'pl-stage-running' : 'pl-stage-skip';
            const icon     = s.state === 'pass'    ? '✓ ' :
                             s.state === 'fail'    ? '✗ ' :
                             s.state === 'running' ? '⟳ ' : '';
            const arrow    = i < r.stages.length - 1 ? '<span class="pl-arrow">→</span>' : '';
            return `<div class="pl-stage-box ${boxClass}">${icon}${s.name}</div>${arrow}`;
        }).join('');

        const chipsHTML = r.chips.map(c => {
            const [label, val] = c.split(': ');
            return `<div class="pl-chip">${label}: <span>${val}</span></div>`;
        }).join('');

        container.innerHTML += `
          <div class="pl-run-card" style="border-left-color:${borderColor};">
              <div class="pl-run-header">
                  <div>
                      <div class="pl-run-title">${r.id} &nbsp;<span class="pl-branch">${r.branch}</span></div>
                      <div class="pl-run-meta">Triggered by ${r.by} · ${r.ago} · Commit <code>${r.commit}</code></div>
                  </div>
                  <span class="status-pill ${pillClass}">${r.status}</span>
              </div>
              <div class="pl-stages">${stageHTML}</div>
              <div class="pl-chips">${chipsHTML}</div>
          </div>`;
    });
}

// ─── HISTORY TABLE ────────────────────────────────────────────
function buildHistory() {
    const tbody = document.getElementById('historyTableBody');
    tbody.innerHTML = '';
    history.forEach(h => {
        const pill = h.status === 'Passed'  ? 'status-success' :
                     h.status === 'Failed'  ? 'status-error'   : 'status-warning';
        tbody.innerHTML += `
          <tr>
              <td>${h.run}</td>
              <td><span class="branch-tag">${h.branch}</span></td>
              <td><span class="status-pill ${pill}">${h.status}</span></td>
              <td>${h.duration}</td>
              <td style="color:${h.failed !== '—' ? '#ff4d4d' : '#aaa'}">${h.failed}</td>
          </tr>`;
    });
}

// ─── TOGGLE — each panel independent ─────────────────────────
function togglePanel(panelId, btn, labelClose, labelOpen) {
    const panel = document.getElementById(panelId);
    const open  = panel.classList.toggle('visible');

    // preserve badge if present
    const badge = btn.querySelector('.run-badge');
    const badgeHTML = badge ? ' ' + badge.outerHTML : '';

    btn.innerHTML = (open ? labelOpen : labelClose) + badgeHTML;
}

// ─── INIT ─────────────────────────────────────────────────────
initCharts();
buildStageBreakdown();
buildRuns();
buildHistory();