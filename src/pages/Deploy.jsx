import React from 'react';
import Card from '../components/Card';
import StatusPill from '../components/StatusPill';
import ProgressBar from '../components/ProgressBar';
import './Dashboard.css';

const Deploy = () => {
  return (
    <div className="container animate-slide-up">
      <header className="page-header">
        <h1>Deployment Status</h1>
        <p>Monitor and manage your application deployments across environments.</p>
      </header>

      <div className="grid-cards mb-4">
        <Card>
          <div className="card-header">
            <h3>Production</h3>
            <StatusPill status="live" text="Live" />
          </div>
          <div className="metric-value" style={{ fontSize: '2rem' }}>v2.4.0</div>
          <div className="metric-label" style={{ marginBottom: '0.8rem' }}>Last deployed: 2 hours ago</div>
          <ProgressBar value={100} color="var(--success-text)" />
          <p className="trend"><span className="text-success">Health: 100% stable</span></p>
        </Card>

        <Card>
          <div className="card-header">
            <h3>Staging</h3>
            <StatusPill status="deploying" text="Deploying" />
          </div>
          <div className="metric-value" style={{ fontSize: '2rem' }}>v2.5.0-rc1</div>
          <div className="metric-label" style={{ marginBottom: '0.8rem' }}>Deployment in progress...</div>
          <ProgressBar value={65} color="var(--warning-text)" />
          <p className="trend"><span>Traffic: Internal Only</span></p>
        </Card>

        <Card>
          <div className="card-header">
            <h3>QA Environment</h3>
            <StatusPill status="ready" text="Ready" />
          </div>
          <div className="metric-value" style={{ fontSize: '2rem' }}>v2.5.0-beta</div>
          <div className="metric-label" style={{ marginBottom: '0.8rem' }}>Last deployed: 1 day ago</div>
          <ProgressBar value={100} color="var(--success-text)" />
          <p className="trend"><span className="text-success">Tests: 100% Passed</span></p>
        </Card>
      </div>

      <h2 className="section-title">Recent Deployments</h2>
      <Card>
        <div className="table-container" style={{ marginTop: 0 }}>
          <table>
            <thead>
              <tr>
                <th>Environment</th>
                <th>Version</th>
                <th>Status</th>
                <th>Duration</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Production</strong></td>
                <td>v2.4.0</td>
                <td><StatusPill status="success" text="Success" /></td>
                <td>4m 12s</td>
                <td>2026-02-21 13:30</td>
              </tr>
              <tr>
                <td><strong>Staging</strong></td>
                <td>v2.4.0</td>
                <td><StatusPill status="success" text="Success" /></td>
                <td>3m 45s</td>
                <td>2026-02-21 12:15</td>
              </tr>
              <tr>
                <td><strong>Production</strong></td>
                <td>v2.3.9</td>
                <td><StatusPill status="success" text="Success" /></td>
                <td>4m 05s</td>
                <td>2026-02-20 18:45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
export default Deploy;
