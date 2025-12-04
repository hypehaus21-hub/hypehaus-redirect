import { Link } from 'react-router-dom'
import './Terms.css'

function Terms() {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1>Terms & Conditions – Hypehaus</h1>
        
        <p className="intro">
          These Terms & Conditions govern your use of the Hypehaus mobile application.
        </p>

        <section className="info-section">
          <h2>1. AGREEMENT TO TERMS</h2>
          <p>
            By using the app, you agree to these Terms.
          </p>
        </section>

        <section className="info-section">
          <h2>2. USER ACCOUNTS</h2>
          <p>
            You must provide accurate information including phone number, email, username, age, and gender.
          </p>
        </section>

        <section className="info-section">
          <h2>3. PAYMENTS</h2>
          <p>
            All payments are processed securely through Razorpay. We do not store card information.
          </p>
        </section>

        <section className="info-section">
          <h2>4. USER CONDUCT</h2>
          <p>
            You may not misuse the app, attempt fraud, or violate laws.
          </p>
        </section>

        <section className="info-section">
          <h2>5. CONTENT OWNERSHIP</h2>
          <p>
            All app content belongs to Hypehaus. Users may not copy or distribute any proprietary content.
          </p>
        </section>

        <section className="info-section">
          <h2>6. DISCLAIMER</h2>
          <p>
            The app is provided "as is" without warranties.
          </p>
        </section>

        <section className="info-section">
          <h2>7. LIMITATION OF LIABILITY</h2>
          <p>
            Hypehaus is not liable for damages from misuse or third-party issues.
          </p>
        </section>

        <section className="info-section">
          <h2>8. CHANGES TO TERMS</h2>
          <p>
            We may update these terms at any time.
          </p>
        </section>

        <section className="info-section">
          <h2>9. CONTACT</h2>
          <p>
            For questions about these Terms, please contact us at:
          </p>
          <p className="email-link">
            <a href="mailto:hypehaus21@gmail.com">hypehaus21@gmail.com</a>
          </p>
        </section>

        <div className="back-link">
          <Link to="/">← Back to HypeHaus</Link>
        </div>
      </div>
    </div>
  )
}

export default Terms

