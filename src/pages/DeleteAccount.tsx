import './DeleteAccount.css'

function DeleteAccount() {
  return (
    <div className="delete-account-container">
      <div className="delete-account-content">
        <h1>Delete Your Account</h1>
        
        <section className="info-section">
          <h2>How to Delete Your Account</h2>
          <p>
            To delete your HypeHaus account and all associated data, please send an email to:
          </p>
          <p className="email-link">
            <a href="mailto:admin@hypearchy.in">admin@hypearchy.in</a>
          </p>
          <p>
            Include your account email address in the request. Once we receive your request, 
            we will process the deletion of your account and all associated data within a 
            reasonable timeframe.
          </p>
        </section>

        <section className="info-section">
          <h2>What Gets Deleted</h2>
          <ul>
            <li>Your user profile and account information</li>
            <li>Your event preferences and wishlist</li>
            <li>Your purchase history and ticket information</li>
            <li>All personal data associated with your account</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Important Information</h2>
          <ul>
            <li>
              <strong>Data Deletion:</strong> All your personal data will be permanently 
              deleted from our systems. This action cannot be undone.
            </li>
            <li>
              <strong>Active Tickets:</strong> If you have active tickets for upcoming events, 
              please note that account deletion may affect your ability to access these tickets. 
              Please contact us before deleting if you have concerns.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may retain certain information as required 
              by law or for legitimate business purposes (e.g., transaction records for tax purposes).
            </li>
            <li>
              <strong>Processing Time:</strong> Account deletion requests are typically processed 
              within 30 days of receipt.
            </li>
          </ul>
        </section>

        <section className="info-section">
          <h2>App Store & Play Store Compliance</h2>
          <p>
            This account deletion process complies with the requirements set forth by:
          </p>
          <ul>
            <li>
              <strong>Apple App Store:</strong> We provide a clear mechanism for users to delete 
              their accounts and all associated data, as required by App Store Review Guidelines.
            </li>
            <li>
              <strong>Google Play Store:</strong> We comply with Google Play's User Data Policy, 
              which requires apps to provide users with the ability to delete their accounts and 
              associated data.
            </li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Need Help?</h2>
          <p>
            If you have any questions about account deletion or need assistance, please contact us at:
          </p>
          <p className="email-link">
            <a href="mailto:admin@hypearchy.in">admin@hypearchy.in</a>
          </p>
        </section>

        <div className="back-link">
          <a href="/">← Back to HypeHaus</a>
        </div>
      </div>
    </div>
  )
}

export default DeleteAccount

