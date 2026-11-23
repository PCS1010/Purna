import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Purna Chandra Sekhar",
  description: "Privacy Policy for Purna Chandra Sekhar's portfolio website.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-[#f3f4f6] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold font-['Poppins'] mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-white/40 text-sm mb-12 font-['Space_Grotesk']">
          Last updated: November 23, 2026
        </p>

        <div className="space-y-8 text-white/70 leading-relaxed font-['Space_Grotesk']">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Introduction</h2>
            <p>
              Welcome to purnachandrasekhar.dev (&quot;the Website&quot;). This Privacy Policy explains how I, Purna Chandra Sekhar, collect, use, and protect your personal information when you visit this website. I am committed to ensuring your privacy is protected and I take data security seriously.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Information I Collect</h2>
            <p className="mb-3">I may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong className="text-white">Contact Form Data:</strong> When you use the contact form on this website, I collect your name, email address, and the message you submit. This information is used solely to respond to your inquiry.</li>
              <li><strong className="text-white">Usage Data:</strong> I automatically collect certain information about how you interact with the Website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits.</li>
              <li><strong className="text-white">Cookies:</strong> The Website uses cookies and similar tracking technologies to enhance your browsing experience and to analyze website traffic.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Google AdSense</h2>
            <p className="mb-3">
              This website uses Google AdSense, an advertising service provided by Google LLC. Google AdSense uses cookies and web beacons to serve advertisements based on your prior visits to this website or other websites on the internet. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your browsing behavior.
            </p>
            <p className="mb-3">
              You may opt out of personalized advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Google Ads Settings
              </a>. Alternatively, you can opt out of third-party vendor cookies by visiting the{" "}
              <a href="https://www.aboutads.info/choices/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Network Advertising Initiative opt-out page
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">How I Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>To respond to inquiries submitted through the contact form</li>
              <li>To improve the Website&apos;s content, layout, and functionality</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To display relevant advertisements through Google AdSense</li>
              <li>To comply with applicable legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Data Security</h2>
            <p>
              I take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of electronic transmission or storage is 100% secure, and I cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Third-Party Links</h2>
            <p>
              This Website may contain links to external websites such as GitHub, LinkedIn, and other platforms. I am not responsible for the privacy practices or content of these third-party sites. I encourage you to review the privacy policies of any website you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
              <li>Request access to the personal data I hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Opt out of personalized advertising</li>
              <li>Withdraw consent for data processing at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Changes to This Policy</h2>
            <p>
              I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. I encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, you can contact me at{" "}
              <a href="mailto:chpurna506@gmail.com" className="text-cyan-400 hover:underline">
                chpurna506@gmail.com
              </a>.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <a href="/" className="text-cyan-400 hover:underline font-['Space_Grotesk'] text-sm">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
