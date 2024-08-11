import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/landing.module.css';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>FormBot</div>
        <nav>
          <Link to="/login">Sign In</Link>
          <Link to="/register" className={styles.ctaButton}>Create Free Form</Link>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <h1>Build advanced chatbots visually</h1>
          <p>Transform your data collection process with AI-powered chatbots. Easy to build, deploy, and analyze.</p>
          <Link to="/register" className={styles.ctaButton}>Create Free Form</Link>
        </section>

        <section className={styles.features}>
          <div className={styles.feature}>
            <h2>Replace your old school forms with chatbots</h2>
            <p>Engage users with interactive conversations instead of static forms.</p>
            <img src="/path-to-chatbot-image.png" alt="Chatbot interface" />
          </div>

          <div className={styles.feature}>
            <h2>Easy building experience</h2>
            <p>Intuitive drag-and-drop interface for creating complex chatbot flows.</p>
            <img src="/path-to-builder-image.png" alt="Form builder interface" />
          </div>

          <div className={styles.feature}>
            <h2>Embed it in a click</h2>
            <p>Seamlessly integrate your chatbots into any website or application.</p>
            <img src="/path-to-embed-image.png" alt="Embed demonstration" />
          </div>
        </section>

        <section className={styles.integrations}>
          <h2>Integrate with any platform</h2>
          <div className={styles.integrationLogos}>
            {/* Add integration logos here */}
          </div>
        </section>

        <section className={styles.realTimeResults}>
          <h2>Collect results in real-time</h2>
          <p>Instantly access and analyze user responses as they come in.</p>
          <img src="/path-to-results-image.png" alt="Real-time results dashboard" />
        </section>

        <section className={styles.additionalFeatures}>
          <h2>And many more features</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <img src="/path-to-feature-icon.png" alt="Feature icon" />
              <h3>Feature 1</h3>
              <p>Description of feature 1</p>
            </div>
            {/* Repeat for other features */}
          </div>
        </section>

        <section className={styles.testimonials}>
          <h2>Loved by teams and creators from all around the world</h2>
          <div className={styles.testimonialLogos}>
            {/* Add testimonial logos here */}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Improve conversion and user engagement with FormBot</h2>
          <Link to="/register" className={styles.ctaButton}>Create Free Form</Link>
        </div>
        <div className={styles.footerInfo}>
          {/* Add footer information, links, etc. */}
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;