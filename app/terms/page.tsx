import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Purna Chandra Sekhar",
  description: "Terms of Use for Purna Chandra Sekhar's portfolio website.",
};

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-[#f3f4f6] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold font-['Poppins'] mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Terms of Use
        </h1>
        <p className="text-white/40 text-sm mb-12 font-['Space_Grotesk']">
          Last updated: November 23, 2026
        </p>

        <div className="space-y-8 text-white/70 leading-relaxed font-['Space_Grotesk']">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Agreement to Terms</h2>
            <p>
              By accessing and using purnachandrasekhar.dev (&quot;the Website&quot;), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use this Website. These terms apply to all visitors, users, and others who access or use the Website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Intellectual Property</h2>
            <p>
              All content on this Website, including but not limited to text, graphics, logos, images, code snippets, project descriptions, and design elements, is the intellectual property of Purna Chandra Sekhar unless otherwise stated. Unauthorized reproduction, distribution, or modification of any content without prior written consent is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Use of the Website</h2>
            <p className="mb-3">You agree to use this Website only for lawful purposes. You shall not:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Use the Website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the Website</li>
              <li>Use automated tools to scrape, crawl, or extract data from the Website without permission</li>
              <li>Transmit any malicious code, viruses, or harmful software</li>
              <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Portfolio Projects</h2>
            <p>
              The projects showcased on this Website are presented for informational and demonstration purposes. Some projects may be open-source and governed by their respective licenses. Please refer to individual project repositories for specific licensing information. Project descriptions and demonstrations represent work completed at the time of posting and may not reflect current states of those projects.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact Form</h2>
            <p>
              When using the contact form, you agree to provide accurate and truthful information. I reserve the right not to respond to messages that are spam, abusive, or irrelevant. Information submitted through the contact form will be handled in accordance with the Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Advertisements</h2>
            <p>
              This Website may display advertisements served by Google AdSense or other advertising partners. These advertisements are provided by third parties and I am not responsible for the content, accuracy, or availability of products or services advertised. Clicking on advertisements may redirect you to third-party websites governed by their own terms and policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Disclaimer</h2>
            <p>
              This Website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties of any kind, either express or implied. I do not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components. Any reliance you place on information available on this Website is strictly at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Purna Chandra Sekhar shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Changes to These Terms</h2>
            <p>
              I reserve the right to update or modify these Terms of Use at any time. Changes will be posted on this page with an updated revision date. Your continued use of the Website after changes are posted constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              If you have any questions about these Terms of Use, please contact me at{" "}
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
