import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home container animate-slide-up">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Build. Test. Deploy.<br/><span className="text-accent">Repeat.</span></h1>
          <p className="hero-subtitle">
            Streamline your CI/CD workflow with automated pipelines, stunning real-time monitoring, and glassmorphic aesthetics.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              Get Started <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary">
              <Play size={16} /> View Pipeline
            </button>
          </div>
        </div>
        <div className="hero-animation glass-card">
          <iframe 
            src="https://defxharsh.github.io/logo_link/cicd-animation.html" 
            title="CI/CD Animation"
            className="animation-frame"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
export default Home;
