import React from 'react';
import Card from '../components/Card';
import StatusPill from '../components/StatusPill';
import { AlertTriangle, Server, Database, Activity, HardDrive } from 'lucide-react';
import './Dashboard.css';

const Health = () => {
  return (
    <div className="container animate-slide-up">
      <header className="page-header">
        <h1>System Health</h1>
        <p>Real-time monitoring of infrastructure and application services.</p>
      </header>

      <div className="grid-cards mb-4">
        <Card>
          <div className="card-header">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Server size={18} color="var(--accent-primary)" /> API Gateway</h3>
            <StatusPill status="online" text="Online" />
          </div>
          <div className="metric-value">99.98%</div>
          <div className="metric-label">Uptime (Last 30d)</div>
          <p className="trend">Latency: 45ms avg</p>
        </Card>

        <Card>
          <div className="card-header">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Database size={18} color="var(--accent-primary)" /> Database Cluster</h3>
            <StatusPill status="active" text="Active" />
          </div>
          <div className="metric-value">12.5%</div>
          <div className="metric-label">CPU Utilization</div>
          <p className="trend">Connections: 124 active</p>
        </Card>

        <Card>
          <div className="card-header">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Activity size={18} color="var(--accent-primary)" /> Auth Service</h3>
            <StatusPill status="healthy" text="Healthy" />
          </div>
          <div className="metric-value">18ms</div>
          <div className="metric-label">Avg Response Time</div>
          <p className="trend"><span className="text-success">Status: All nodes operational</span></p>
        </Card>

        <Card>
          <div className="card-header">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><HardDrive size={18} color="var(--accent-primary)" /> Redis Cache</h3>
            <StatusPill status="warning" text="High Load" />
          </div>
          <div className="metric-value" style={{ color: 'var(--warning-text)' }}>88.2%</div>
          <div className="metric-label">Memory Usage</div>
          <p className="trend">Eviction rate: 2.1/s</p>
        </Card>
      </div>

      <h2 className="section-title">Active Alerts</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Card style={{ borderLeft: '4px solid var(--warning-text)' }}>
          <div className="card-header" style={{ marginBottom: '0.5rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><AlertTriangle size={18} color="var(--warning-text)" /> Cache Memory Threshold</h3>
            <StatusPill status="warning" text="Warning" />
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.8rem' }}>
            Redis-01 memory usage exceeded 85%. Scaling may be required.
          </p>
          <p className="metric-label" style={{ marginBottom: 0 }}>Detected: 15 minutes ago</p>
        </Card>
        
        <Card style={{ borderLeft: '4px solid var(--success-text)' }}>
          <div className="card-header" style={{ marginBottom: '0.5rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Activity size={18} color="var(--success-text)" /> Database Backup Complete</h3>
            <StatusPill status="info" text="Info" />
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.8rem' }}>
            Daily automated backup for DB-Cluster successfully archived to S3.
          </p>
          <p className="metric-label" style={{ marginBottom: 0 }}>Timestamp: 2026-02-21 04:00</p>
        </Card>
      </div>
    </div>
  );
};
export default Health;
