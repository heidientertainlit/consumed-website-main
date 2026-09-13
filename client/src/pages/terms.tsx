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
            <Link href="/">
              <img src={logoPurple} alt="Consumed" className="h-8 w-auto cursor-pointer" />
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-[#1a0a2e] mb-2" data-testid="text-terms-title">Terms of Service</h1>
          <p className="text-sm text-zinc-400 mb-8">Entertainlit Inc. (dba Consumed) &middot; Effective Date: September 13, 2026</p>

          <div className="space-y-8 text-zinc-600 text-base leading-relaxed">
            <p>
              These Terms of Service (“Terms”) are an agreement between you and Entertainlit Inc., doing business as Consumed (“Consumed,” “we,” “us,” or “our”). They govern your access to and use of the Consumed mobile application, website, and related features and services (collectively, the “Service”). By accessing or using the Service, you agree to these Terms. If you do not agree, do not access or use the Service.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">1. Eligibility</h2>
              <p>You must be at least 18 years old to use the Service. By using the Service, you represent that you meet this requirement. If we learn that an account is being used by someone under 18, we may close the account and handle associated information as described in our <a href="https://www.consumedapp.com/privacy" className="text-[#2d1b4e] font-medium hover:underline">Privacy Policy</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">2. Accounts and Account Security</h2>
              <p>Some features require an account. You agree to provide information that is accurate and current, keep your account credentials confidential, and accept responsibility for activity conducted through your account. Do not share your credentials, impersonate another person or entity, or use an account that you are not authorized to use. Tell us promptly if you believe your account or credentials have been compromised.</p>
              <p className="mt-4">You may delete your account through the available in-app account controls. Account deletion does not necessarily remove information that we may retain for legal, security, fraud-prevention, backup, or other legitimate operational purposes, as described in the <a href="https://www.consumedapp.com/privacy" className="text-[#2d1b4e] font-medium hover:underline">Privacy Policy</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">3. The Service</h2>
              <p>Consumed is a social entertainment platform for tracking media consumption and participating in entertainment-related features, which may include ratings, lists, predictions, trivia, games, leaderboards, and connections with other fans. Features, information, and availability may change, and portions of the Service may be unavailable from time to time. We do not promise that the Service will be uninterrupted, error-free, or available in every location.</p>
              <p className="mt-4">The Service and information available through it are provided for entertainment and informational purposes. They are not legal, financial, medical, or other professional advice. You are responsible for your own decisions and use of the Service.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">4. User Content</h2>
              <p>You retain ownership of content and information you submit to the Service (“User Content”), including media tracking activity, ratings, lists, predictions, trivia participation, profile information, posts, comments, and other material you provide.</p>
              <p className="mt-4">You grant Consumed a non-exclusive, worldwide, royalty-free license to host, store, reproduce, format, display, and distribute your User Content through the Service, and to make technically necessary changes to it, solely to operate, maintain, secure, improve, and provide the Service. This license permits our service providers to perform those functions for us. It does not transfer ownership of your User Content to Consumed.</p>
              <p className="mt-4">You are responsible for the User Content you submit and represent that you have the rights and permissions needed to submit it and grant the license above. Social features may make User Content visible to other users according to the feature and any available settings.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">5. Community Standards and Acceptable Use</h2>
              <p className="mb-2">Consumed has no tolerance for objectionable content or abusive users. You may not use the Service to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>harass, bully, stalk, threaten, target, intimidate, or otherwise abuse another person, or encourage harm;</li>
                <li>post or transmit hateful, discriminatory, sexually exploitative, sexually explicit, non-consensual intimate, or gratuitously violent content;</li>
                <li>post unlawful, defamatory, fraudulent, misleading, invasive, privacy-violating, or infringing content;</li>
                <li>impersonate a person or entity, misrepresent your affiliation, or use the Service to scam, spam, solicit, or defraud others;</li>
                <li>upload malware, interfere with the Service, or access accounts or systems without authorization;</li>
                <li>use bots or other automated means to access the Service, scrape data, or collect information about other users without authorization;</li>
                <li>manipulate games, predictions, ratings, leaderboards, or other features; or</li>
                <li>reverse engineer, decompile, disassemble, or attempt to discover the source code of the Service except where applicable law expressly permits it.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">6. Reporting, Blocking, and Moderation</h2>
              <p>Where available, you can report posts, comments, or users through the in-app reporting controls and can block users through the available blocking controls. You may also contact us at <a href="mailto:support@consumedapp.com" className="text-[#2d1b4e] font-medium hover:underline">support@consumedapp.com</a> about a safety or policy concern. Blocking is a user control that can limit interactions and visibility in the Service; it is not a guarantee of complete separation across every feature or third-party service.</p>
              <p className="mt-4">We may review, restrict, remove, preserve, or decline to act on User Content and may use automated or manual measures to enforce these Terms. We may suspend or terminate accounts, with or without notice where permitted by law, when we believe they violate these Terms, harm others, or create risk for the Service or its users.</p>
              <p className="mt-4">We do not promise that every report will result in action or that any report will be reviewed or resolved within a particular timeframe. We do not undertake a duty to monitor all User Content, and we are not responsible for the conduct or content of users or third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">7. Games and Entertainment Features</h2>
              <p>Games, predictions, ratings, rankings, leaderboards, and similar features are for entertainment only. They are non-wagering, carry no monetary value, and do not provide gambling, financial wagering, or real-money gaming services. Results, rankings, and recommendations are not guaranteed.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">8. Intellectual Property</h2>
              <p>The Service, including its software, design, branding, logos, original text, features, and other materials provided by Consumed, is owned by Entertainlit Inc. or its licensors and is protected by intellectual-property and other applicable laws. Except for the limited right to use the Service under these Terms, no ownership or other license is granted to you. You may not copy, modify, distribute, sell, lease, or create derivative works from the Service or its materials without our prior written permission.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">9. Third-Party Services and Content</h2>
              <p>The Service may link to or work with third-party services, content, or data sources. Those third parties may have their own terms and privacy policies, which govern your use of their services. We do not control and are not responsible for third-party services, content, availability, or practices.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">10. Privacy and Communications</h2>
              <p>Our <a href="https://www.consumedapp.com/privacy" className="text-[#2d1b4e] font-medium hover:underline">Privacy Policy</a> explains how we collect, use, retain, and disclose information in connection with the Service. These Terms do not constitute blanket consent to marketing communications. If marketing communications are offered, any required consent and your communication choices are handled separately and subject to applicable law.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">11. Apple Licensed Software</h2>
              <p>If you use the licensed iOS software, that software is also subject to <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula" target="_blank" rel="noreferrer" className="text-[#2d1b4e] font-medium hover:underline">Apple’s Standard Licensed Application End User License Agreement</a>. Apple’s standard EULA applies to the licensed iOS software and is separate from these Service Terms. The linked document is Apple’s standard EULA; it is not a custom Consumed EULA or a replacement for these Terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">12. Suspension and Termination</h2>
              <p>You may stop using the Service or delete your account at any time. We may suspend or terminate your access, remove User Content, or discontinue all or part of the Service at any time, including when necessary to enforce these Terms, protect users or the Service, comply with law, or address security or abuse concerns. We may do so with or without notice where permitted by law.</p>
              <p className="mt-4">When access ends, your right to use the Service ends. Provisions that by their nature should continue, including provisions about User Content, intellectual property, disclaimers, limitations of liability, governing law, and disputes, will continue to apply.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">13. Disclaimers and Limitation of Liability</h2>
              <p className="uppercase">To the fullest extent permitted by law, the Service is provided “as is” and “as available,” without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that the Service will be secure, uninterrupted, accurate, or free of harmful content or code.</p>
              <p className="mt-4 uppercase">To the fullest extent permitted by law, Entertainlit Inc. and Consumed will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, data, goodwill, or revenue, arising from or relating to the Service or these Terms. Our total liability for all claims relating to the Service will not exceed the greater of $100 or the amounts, if any, that you paid directly to us for the Service during the 12 months before the event giving rise to the claim.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">14. Changes to These Terms</h2>
              <p>We may revise these Terms from time to time. When we do, we will update the Effective Date above and post the revised Terms in the Service. Where appropriate, we may provide additional notice of material changes. Your continued use of the Service after revised Terms become effective means you accept them, to the extent permitted by law. If you do not agree to revised Terms, stop using the Service.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">15. Governing Law and Consumer Rights</h2>
              <p>These Terms are governed by the laws of the State of Delaware, without regard to its conflict-of-law rules. This governing-law provision does not waive, limit, or require you to give up any nonwaivable consumer-protection rights or other mandatory rights that apply where you live.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1a0a2e] mb-3">16. Contact</h2>
              <p>Questions about these Terms may be sent to <a href="mailto:support@consumedapp.com" className="text-[#2d1b4e] font-medium hover:underline">support@consumedapp.com</a>.</p>
              <p className="mt-4">Entertainlit Inc., doing business as Consumed</p>
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
