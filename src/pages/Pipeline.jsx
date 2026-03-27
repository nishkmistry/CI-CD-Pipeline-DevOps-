import React from 'react';
import Card from '../components/Card';
import StatusPill from '../components/StatusPill';
import ProgressBar from '../components/ProgressBar';
import { GitBranch, TrendingUp, TrendingDown } from 'lucide-react';
import './Dashboard.css';

const Pipeline = () => {
  return (
    <div className="container animate-slide-up">
      <header className="page-header">
        <h1>Pipeline Status</h1>
        <p>Track recent pipeline runs, stage-by-stage progress, and execution metrics across all branches.</p>
      </header>
      
      <div className="grid-cards mb-4">
        <Card>
          <div className="card-header">
            <h3>Total Runs (30d)</h3>
            <StatusPill status="success" text="Active" />
          </div>
          <div className="metric-value">284</div>
          <div className="metric-label">Pipeline executions</div>
          <p className="trend"><TrendingUp size={14} className="text-success" /> <span className="text-success">12%</span> vs last month</p>
        </Card>
        
        <Card>
          <div className="card-header">
            <h3>Success Rate</h3>
            <StatusPill status="success" text="Healthy" />
          </div>
          <div className="metric-value">94.3%</div>
          <div className="metric-label">Passed / Total runs</div>
          <ProgressBar value={94.3} color="var(--success-text)" />
          <p className="trend"><TrendingUp size={14} className="text-success" /> <span className="text-success">2.1%</span> vs last month</p>
        </Card>

        <Card>
          <div className="card-header">
            <h3>Avg Duration</h3>
            <StatusPill status="success" text="Normal" />
          </div>
          <div className="metric-value">6m 42s</div>
          <div className="metric-label">Per full pipeline run</div>
          <p className="trend"><TrendingDown size={14} className="text-success" /> <span className="text-success">18s</span> faster vs last month</p>
        </Card>

        <Card>
          <div className="card-header">
            <h3>Failed Runs (30d)</h3>
            <StatusPill status="warning" text="Monitor" />
          </div>
          <div className="metric-value">16</div>
          <div className="metric-label">Requires investigation</div>
          <p className="trend"><TrendingUp size={14} className="text-error" /> <span className="text-error">3 more</span> vs last month</p>
        </Card>
      </div>

      <h2 className="section-title">Recent Pipeline Runs</h2>
      <div className="pipeline-runs">
        <Card className="pipeline-run run-running">
          <div className="run-header">
            <div>
              <div className="run-title">
                #1047 <span className="branch-tag"><GitBranch size={12}/> feat/auth-refactor</span>
              </div>
              <div className="run-meta">Triggered by harshdev · 8m ago · Commit <code>3f9a1b2</code></div>
            </div>
            <StatusPill status="running" text="Running" />
          </div>
          <div className="run-stages">
            <span className="stage pass">Checkout</span>
            <span className="arrow">→</span>
            <span className="stage pass">Install</span>
            <span className="arrow">→</span>
            <span className="stage pass">Build</span>
            <span className="arrow">→</span>
            <span className="stage running animate-pulse">Unit Tests</span>
            <span className="arrow">→</span>
            <span className="stage pending">Security Scan</span>
            <span className="arrow">→</span>
            <span className="stage pending">Deploy</span>
          </div>
        </Card>
        
        <Card className="pipeline-run run-success">
          <div className="run-header">
            <div>
              <div className="run-title">
                #1046 <span className="branch-tag"><GitBranch size={12}/> main</span>
              </div>
              <div className="run-meta">Triggered by CI bot · 2h ago · Commit <code>a1c4e88</code></div>
            </div>
            <StatusPill status="success" text="Passed" />
          </div>
          <div className="run-stages">
            <span className="stage pass">Checkout</span>
            <span className="arrow">→</span>
            <span className="stage pass">Install</span>
            <span className="arrow">→</span>
            <span className="stage pass">Build</span>
            <span className="arrow">→</span>
            <span className="stage pass">Unit Tests</span>
            <span className="arrow">→</span>
            <span className="stage pass">Security Scan</span>
            <span className="arrow">→</span>
            <span className="stage pass">Deploy</span>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Pipeline;
