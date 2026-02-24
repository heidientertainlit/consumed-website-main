import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoPurple from "@assets/consumed_logo_purple_crop_1769629036769.png";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] font-body">
      <header className="py-8 px-6">
        <div className="container mx-auto max-w-2xl">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#2d1b4e] transition-colors text-sm" data-testid="link-back-home">
              <ArrowLeft className="w-4 h-4" />
              Back
          </Link>
        </div>
      </header>

      <main className="px-6 pb-20">
        <div className="container mx-auto max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <img src={logoPurple} alt="Consumed" className="h-8 w-auto" />
          </div>

          <h1 className="text-3xl font-bold text-[#1a0a2e] mb-2" data-testid="text-terms-title">Terms of Service</h1>
          <p className="text-sm text-zinc-400 mb-8">EntertainLit, LLC (dba Consumed) &middot; Effective Date: February 23, 2026</p>

          <div className="space-y-8 text-zinc-600 text-base leading-relaxed">
            <p>
              These Terms of Service ("Terms") are entered into between you and EntertainLit, LLC, doing business as Consumed ("Consumed," "we," "us," or "our").
            </p>
            <p>
              By accessing or using the Consumed mobile application, you agree to these Terms. If you do not agree, please do not use the app.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">1. Eligibility</h2>
              <p>You must be at least 18 years old to use Consumed. By using the app, you confirm that you meet this age requirement. If we become aware that a user is under 18, we will promptly terminate their account and delete any associated data.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">2. User Accounts</h2>
              <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to provide accurate information and not impersonate any other person or entity. We reserve the right to suspend or terminate accounts that violate these Terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">3. User Content</h2>
              <p className="mb-2">You retain ownership of content you submit to Consumed, including:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Media tracking activity</li>
                <li>Ratings</li>
                <li>Lists</li>
                <li>Predictions</li>
                <li>Trivia participation</li>
                <li>Profile content</li>
              </ul>
              <p>By submitting content, you grant Consumed a non-exclusive, worldwide, royalty-free license to display and use that content within the app and its features. We may remove content that violates our policies at our discretion.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">4. Acceptable Use</h2>
              <p className="mb-2">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Harass, threaten, or harm other users</li>
                <li>Upload unlawful, infringing, or offensive content</li>
                <li>Attempt to manipulate leaderboards, games, or prediction features</li>
                <li>Reverse engineer, decompile, or otherwise exploit the platform</li>
                <li>Use automated tools or bots to interact with the app</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">5. Intellectual Property</h2>
              <p>All branding, software, design, and platform content provided by Consumed are owned by EntertainLit, LLC and protected by applicable intellectual property laws. You may not copy, reproduce, modify, or distribute any part of the app or its content without our prior written permission.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">6. Entertainment Disclaimer</h2>
              <p>Consumed provides entertainment tracking, interactive games, and prediction features for informational and entertainment purposes only. All games, predictions, and leaderboard features are non-wagering and carry no monetary value. Consumed does not provide gambling, financial wagering, or real-money gaming services of any kind.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">7. Third-Party Services</h2>
              <p>Consumed integrates with third-party services to deliver certain features. Your use of the app may be subject to the terms and privacy policies of those providers. We are not responsible for the practices or content of any third-party services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">8. Limitation of Liability</h2>
              <p>The app is provided "as is" without warranties of any kind, express or implied. To the fullest extent permitted by law, EntertainLit, LLC shall not be liable for any service interruptions, data loss, unauthorized access, or incidental, indirect, or consequential damages arising from your use of the app.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">9. Account Termination</h2>
              <p>You may delete your account at any time within the app settings. We may suspend or terminate accounts at our discretion for violations of these Terms, with or without notice.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">10. Changes to Terms</h2>
              <p>We may update these Terms periodically. When we do, we will update the Effective Date above. Continued use of the app after any changes constitutes your acceptance of the revised Terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">11. Governing Law</h2>
              <p>These Terms are governed by the laws of the State of [Your State], without regard to its conflict of law provisions.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">12. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us:</p>
              <p className="mt-2">
                EntertainLit, LLC (dba Consumed)<br />
                Email: <a href="mailto:support@consumedapp.com" className="text-[#2d1b4e] font-medium hover:underline">support@consumedapp.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-zinc-400 bg-[#f8f8f8]">
        <p>&copy; {new Date().getFullYear()} Consumed.</p>
      </footer>
    </div>
  );
}
