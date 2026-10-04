import React, { useState } from "react";
import Brand from "../Components/Brand";

interface LandingPageProps {
  onLogin: () => void;
}

function LandingPage({ onLogin }: LandingPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main id="home" className="site-shell">
      <div className="announcement">
        <span className="announcement-dot" /> Science for a more sustainable
        tomorrow <span className="announcement-arrow">↗</span>
      </div>
      <header className="site-header">
        <Brand />
        <nav
          className={`main-nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#products" onClick={() => setMenuOpen(false)}>
            Products
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact us
          </a>
          <button
            className="button button-mobile-login"
            onClick={() => onLogin()}
          >
            Login <span>→</span>
          </button>
        </nav>
        <div className="header-actions">
          <a href="#contact" className="header-contact">
            Let’s talk <span>↗</span>
          </a>
          <button
            className="button button-primary header-login"
            onClick={() => onLogin()}
          >
            Login <span>→</span>
          </button>
        </div>
        <button
          className={`menu-toggle ${menuOpen ? "menu-active" : ""}`}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </header>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-line" /> BIOTECHNOLOGY, WITH PURPOSE
          </span>
          <h1>
            Nature’s wisdom.
            <br />
            <em>Science’s precision.</em>
          </h1>
          <p className="hero-description">
            We blend the best of nature and science to create thoughtful biotech
            solutions for a better, more sustainable future.
          </p>
          <div className="hero-actions">
            <a href="#products" className="button button-primary">
              Discover our products <span>↗</span>
            </a>
            <a className="quiet-link" href="#about">
              Our approach <span>↓</span>
            </a>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars">
              <span>✳</span>
              <span>✦</span>
              <span>❋</span>
            </div>
            <p>
              <b>Rooted in research.</b>
              <br />
              Made for real-world impact.
            </p>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract botanical illustration">
          <div className="art-grid" />
          <div className="art-circle circle-back" />
          <div className="art-circle circle-front" />
          <div className="plant plant-left">
            <i />
            <i />
            <i />
            <i />
            <i />
            <b />
          </div>
          <div className="plant plant-right">
            <i />
            <i />
            <i />
            <i />
            <i />
            <b />
          </div>
          <div className="molecule molecule-one">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="molecule molecule-two">
            <span />
            <span />
            <span />
          </div>
          <div className="art-label">
            <span className="status-dot" /> ROOTED IN NATURE
            <br />
            <b>REFINED BY SCIENCE</b>
          </div>
          <div className="art-stamp">
            S<br />
            <small>·</small>
            <br />B
          </div>
        </div>
        <div className="hero-index">
          <span>01</span>
          <span className="index-rule" /> A DIFFERENT KIND OF BLEND
        </div>
      </section>
      <section id="products" className="products-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-line" /> WHAT WE DO
            </span>
            <h2>
              Good science.
              <br />
              <em>Better by nature.</em>
            </h2>
          </div>
          <p>
            Solutions designed around the things that matter: people, planet,
            and progress.
          </p>
        </div>
        <div className="product-grid">
          <article className="product-card">
            <div className="product-top">
              <span className="product-number">01</span>
              <span className="product-symbol symbol-green">✳</span>
            </div>
            <h3>Bio-based solutions</h3>
            <p>
              Harnessing nature’s building blocks to create smarter, more
              responsible alternatives.
            </p>
            <a href="#contact" className="card-link">
              Explore solutions <span>↗</span>
            </a>
            <div className="card-orb orb-green" />
          </article>
          <article className="product-card">
            <div className="product-top">
              <span className="product-number">02</span>
              <span className="product-symbol symbol-blue">◉</span>
            </div>
            <h3>Research &amp; development</h3>
            <p>
              From a promising idea to a proven application, we turn research
              into progress.
            </p>
            <a href="#contact" className="card-link">
              How we work <span>↗</span>
            </a>
            <div className="card-orb orb-blue" />
          </article>
          <article className="product-card">
            <div className="product-top">
              <span className="product-number">03</span>
              <span className="product-symbol symbol-orange">⌁</span>
            </div>
            <h3>Custom formulations</h3>
            <p>
              Purpose-built blends tailored to your needs, backed by thoughtful
              science.
            </p>
            <a href="#contact" className="card-link">
              Start a conversation <span>↗</span>
            </a>
            <div className="card-orb orb-orange" />
          </article>
        </div>
      </section>
      <section id="about" className="about-section">
        <div className="about-art">
          <div className="about-leaf">✳</div>
          <div className="about-caption">
            GROW WITH PURPOSE <span>·</span> BUILD WITH SCIENCE
          </div>
        </div>
        <div className="about-copy">
          <span className="eyebrow">
            <span className="eyebrow-line" /> A LITTLE ABOUT US
          </span>
          <h2>
            We believe better
            <br />
            is <em>within reach.</em>
          </h2>
          <p>
            StabiBlend brings nature and biotechnology together with one clear
            purpose: to create solutions that work in harmony with the world
            around us.
          </p>
          <p>
            Curiosity drives our research. Care guides our choices. And
            collaboration helps us make a difference that lasts.
          </p>
          <a href="#contact" className="button button-dark">
            Get to know us <span>↗</span>
          </a>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div>
          <span className="eyebrow">
            <span className="eyebrow-line" /> LET’S MAKE SOMETHING BETTER
          </span>
          <h2>
            Have a good idea?
            <br />
            <em>Let’s blend.</em>
          </h2>
        </div>
        <div className="contact-cta">
          <p>
            Tell us what you’re working on. We’ll bring the science and
            curiosity.
          </p>
          <a
            className="button button-primary"
            href="https://stabiblendbiotechsolutions.com"
          >
            Contact our team <span>↗</span>
          </a>
        </div>
        <div className="contact-decor" aria-hidden="true">
          ✳
        </div>
      </section>
      <footer className="site-footer">
        <Brand />
        <p>Better blends for a better tomorrow.</p>
        <span>© 2026 StabiBlend Biotech Solutions</span>
      </footer>
    </main>
  );
}

export default LandingPage;
