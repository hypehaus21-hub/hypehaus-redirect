import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'

function PrivacyPolicy() {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1>Privacy Policy – Hypehaus</h1>
        
        <section className="info-section">
          <h2>1. INFORMATION WE COLLECT</h2>
          <ul>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Username</li>
            <li>Age and gender</li>
            <li>Transaction and payment details (processed by Razorpay)</li>
            <li>User ID</li>
            <li>Optional device/usage data</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>2. HOW WE USE INFORMATION</h2>
          <ul>
            <li>OTP authentication</li>
            <li>Account creation</li>
            <li>Personalization</li>
            <li>Secure payments</li>
            <li>Fraud prevention</li>
            <li>App functionality</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>3. SHARING OF INFORMATION</h2>
          <p>
            We share data only with:
          </p>
          <ul>
            <li>Supabase (auth + database)</li>
            <li>Razorpay (payments)</li>
            <li>Legal requirements</li>
          </ul>
          <p>
            We do not sell personal data.
          </p>
        </section>

        <section className="info-section">
          <h2>4. DATA RETENTION</h2>
          <p>
            We retain information as long as your account is active or required by law.
          </p>
        </section>

        <section className="info-section">
          <h2>5. SECURITY</h2>
          <p>
            We use industry-standard measures to protect data.
          </p>
        </section>

        <section className="info-section">
          <h2>6. CHILDREN'S PRIVACY</h2>
          <p>
            App not intended for users under 13.
          </p>
        </section>

        <section className="info-section">
          <h2>7. CHANGES TO POLICY</h2>
          <p>
            We may update this policy and update the date above.
          </p>
        </section>

        <section className="info-section">
          <h2>8. CONTACT</h2>
          <p>
            For questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy

