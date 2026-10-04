import React from "react";
import Brand from "./Components/Brand";

interface DashboardProps {
  username: string;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ username, onLogout }) => (
  <main className="dashboard-page">
    <header className="dashboard-nav">
      <Brand />
      <button className="button button-outline" onClick={onLogout}>
        Log out <span aria-hidden="true">↗</span>
      </button>
    </header>
    <section className="dashboard-content">
      <span className="eyebrow">STABILBLEND WORKSPACE</span>
      <h1>Good to have you here, {username || "there"}.</h1>
      <p className="muted">Your dashboard is ready. Choose a space to get started.</p>
      <div className="dashboard-cards">
        <article className="workspace-card">
          <span className="card-icon">✳</span>
          <span className="eyebrow">01 / EXPLORE</span>
          <h2>Our products</h2>
          <p>Discover biotechnology solutions made with care and precision.</p>
          <a className="text-link" href="/#products">Explore products <span>→</span></a>
        </article>
        <article className="workspace-card green-card">
          <span className="card-icon">⌘</span>
          <span className="eyebrow">02 / CONNECT</span>
          <h2>Talk to our team</h2>
          <p>Have a question or a project in mind? We’d love to hear from you.</p>
          <a className="text-link" href="https://stabiblendbiotechsolutions.com">Get in touch <span>→</span></a>
        </article>
      </div>
      <div className="dashboard-foot"><span className="status-dot" /> You’re signed in to your demo workspace</div>
    </section>
  </main>
);

export default Dashboard;
