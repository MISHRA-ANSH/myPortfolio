import styles from "./Home.module.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Button from "../../components/ui/Button";

function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Build Scalable React Applications</h1>
        <p>Modern UI, clean architecture, production-ready code</p>
        <Button label="Get Started" />
      </section>

      {/* FEATURES */}
      <section className={styles.features}>
        <div className={styles.card}>
          <h3>Clean Architecture</h3>
          <p>Industry-level folder & code structure.</p>
        </div>
        <div className={styles.card}>
          <h3>Responsive Design</h3>
          <p>Mobile-first, tablet & desktop friendly.</p>
        </div>
        <div className={styles.card}>
          <h3>Reusable Components</h3>
          <p>UI elements designed for scalability.</p>
        </div>
        <div className={styles.card}>
          <h3>Production Ready</h3>
          <p>Easy to extend for real-world apps.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.about}>
        <h2>About Us</h2>
        <p>
          We design and build modern web applications using React with
          enterprise-level coding standards.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to Build Something Great?</h2>
        <Button label="Contact Us" variant="secondary" />
      </section>

      <Footer />
    </>
  );
}

export default Home;
