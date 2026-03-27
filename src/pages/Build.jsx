import React from 'react';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import { GitBranch } from 'lucide-react';
import './Dashboard.css';

const Build = () => {
  return (
    <div className="container animate-slide-up">
      <header className="page-header">
        <h1>Build Status & Performance</h1>
        <p>Real-time overview of your build pipeline health and metrics</p>
      </header>

      <div className="grid-cards mb-4">
        <Card>
          <div className="metric-label">Total Builds</div>
          <div className="metric-value">128</div>
        </Card>
        <Card>
          <div className="metric-label">Passed</div>
          <div className="metric-value text-success">109</div>
        </Card>
        <Card>
          <div className="metric-label">Failed</div>
          <div className="metric-value text-error">14</div>
        </Card>
        <Card>
          <div className="metric-label">Running</div>
          <div className="metric-value" style={{ color: 'var(--warning-text)' }}>5</div>
        </Card>
        <Card>
          <div className="metric-label">Avg Duration</div>
          <div className="metric-value" style={{ color: 'var(--accent-secondary)' }}>2m 34s</div>
        </Card>
      </div>

      <div className="grid-cards" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <Card>
          <h2 className="section-title" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Recent Build History</h2>
          <div className="table-container" style={{ marginTop: 0 }}>
            <table>
              <thead>
                <tr>
                  <th>Build</th>
                  <th>Branch</th>
                  <th>Status</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#128</td>
                  <td><span className="branch-tag"><GitBranch size={12}/> main</span></td>
                  <td style={{ color: 'var(--warning-text)' }}>Running</td>
                  <td>1m 12s</td>
                </tr>
                <tr>
                  <td>#127</td>
                  <td><span className="branch-tag"><GitBranch size={12}/> feature/auth</span></td>
                  <td className="text-success">Success</td>
                  <td>2m 48s</td>
                </tr>
                <tr>
                  <td>#126</td>
                  <td><span className="branch-tag"><GitBranch size={12}/> main</span></td>
                  <td className="text-success">Success</td>
                  <td>2m 20s</td>
                </tr>
                <tr>
                  <td>#125</td>
                  <td><span className="branch-tag"><GitBranch size={12}/> fix/login-bug</span></td>
                  <td className="text-error">Failed</td>
                  <td>3m 05s</td>
                </tr>
                <tr>
                  <td>#124</td>
                  <td><span className="branch-tag"><GitBranch size={12}/> dev</span></td>
                  <td className="text-success">Success</td>
                  <td>2m 10s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="section-title" style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Build Performance</h2>
          <div>
            <ProgressBar label="Test Coverage (87%)" value={87} color="var(--accent-primary)" height="10px" />
            <ProgressBar label="Code Quality Score (92%)" value={92} color="var(--success-text)" height="10px" />
            <ProgressBar label="Build Success Rate (85%)" value={85} color="var(--accent-secondary)" height="10px" />
            <ProgressBar label="Deploy Frequency (68%)" value={68} color="var(--warning-text)" height="10px" />
            <ProgressBar label="Overall Health (85%)" value={85} color="var(--success-text)" height="10px" />
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Build;
