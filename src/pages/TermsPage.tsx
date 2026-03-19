import Layout from "@/components/Layout";

const TermsPage = () => (
  <Layout>
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Terms and Conditions</h1>
      <p className="mt-2 text-sm text-muted-foreground">Effective Date: March 19, 2026</p>
      <div className="mt-8 space-y-6 text-foreground/85 leading-relaxed">

        <p>Welcome to Smart Income Hub ("we," "us," or "our"). These Terms and Conditions ("Terms") govern your access to and use of our website located at smartincomehub.com (the "Site"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use the Site.</p>

        <h2 className="font-heading text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
        <p>By accessing this Site, you confirm that you are at least 18 years of age (or the age of majority in your jurisdiction) and that you have the legal capacity to enter into these Terms. If you are accessing the Site on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.</p>

        <h2 className="font-heading text-xl font-bold text-foreground">2. Use of the Site</h2>
        <p>You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
        <ul className="ml-6 list-disc space-y-2">
          <li>Use the Site in any way that violates any applicable local, state, national, or international law or regulation</li>
          <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Site without our express written permission</li>
          <li>Attempt to gain unauthorized access to any part of the Site, other accounts, computer systems, or networks</li>
          <li>Use any automated system, including bots, crawlers, or scrapers, to access the Site for any purpose without our express written permission</li>
          <li>Introduce viruses, malware, or other harmful material to the Site</li>
          <li>Interfere with or disrupt the integrity or performance of the Site</li>
        </ul>

        <h2 className="font-heading text-xl font-bold text-foreground">3. Intellectual Property Rights</h2>
        <p>All content on this Site — including but not limited to text, articles, graphics, logos, images, audio clips, digital downloads, data compilations, and software — is the property of Smart Income Hub or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.</p>
        <p>You may not modify, publish, transmit, distribute, perform, participate in the transfer or sale of, create derivative works from, or in any way exploit any of the content, in whole or in part, without our prior written consent.</p>

        <h2 className="font-heading text-xl font-bold text-foreground">4. Disclaimer of Warranties</h2>
        <p>The Site and all content, materials, information, and services provided on the Site are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. To the fullest extent permissible under applicable law, we disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.</p>
        <p>We do not warrant that the Site will be uninterrupted, error-free, secure, or free of viruses or other harmful components.</p>

        <h2 className="font-heading text-xl font-bold text-foreground">5. Financial and Earnings Disclaimer</h2>
        <p>The information provided on this Site is for general informational and educational purposes only. It should not be construed as professional financial, investment, tax, or legal advice. Always consult a qualified professional before making financial decisions.</p>
        <p>Any references to income, earnings, or revenue on this Site are estimates or examples only. There is no guarantee that you will earn any money using the techniques, ideas, or strategies discussed here. Your level of success in attaining similar results depends on many factors, including your background, experience, work ethic, dedication, and market conditions. We do not guarantee or promise income or financial success of any kind.</p>

        <h2 className="font-heading text-xl font-bold text-foreground">6. Affiliate Links and Advertising</h2>
        <p>Our Site may contain affiliate links. When you click on an affiliate link and make a purchase, we may receive a commission at no additional cost to you. We only recommend products and services that we believe offer value to our readers. Our affiliate relationships do not influence the content or opinions expressed on this Site.</p>
        <p>We also display advertisements on our Site through third-party advertising networks, including Google AdSense. These advertisements are clearly distinguishable from our editorial content. We are not responsible for the content or accuracy of third-party advertisements.</p>

        <h2 className="font-heading text-xl font-bold text-foreground">7. Third-Party Links</h2>
        <p>Our Site may contain links to websites or services operated by third parties. These links are provided for your convenience and reference only. We do not control, endorse, or assume responsibility for the content, privacy policies, or practices of any third-party websites. You access third-party websites at your own risk.</p>

        <h2 className="font-heading text-xl font-bold text-foreground">8. User-Submitted Content</h2>
        <p>If you submit any content to us (such as comments, messages through our contact form, or any other communication), you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and display such content in connection with the operation of the Site. You represent that you own or have the necessary rights to submit such content and that it does not violate any third-party rights.</p>

        <h2 className="font-heading text-xl font-bold text-foreground">9. Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law, Smart Income Hub, its owners, authors, contributors, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunities, or goodwill, arising out of or related to your use of or inability to use the Site, regardless of the cause of action or the theory of liability, even if we have been advised of the possibility of such damages.</p>
        <p>In no event shall our total liability to you for all claims arising from or relating to these Terms or the Site exceed the amount you paid to us, if any, in the twelve (12) months preceding the claim.</p>

        <h2 className="font-heading text-xl font-bold text-foreground">10. Indemnification</h2>
        <p>You agree to indemnify, defend, and hold harmless Smart Income Hub, its owners, officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from your use of the Site, your violation of these Terms, or your violation of any rights of a third party.</p>

        <h2 className="font-heading text-xl font-bold text-foreground">11. Privacy</h2>
        <p>Your use of the Site is also governed by our <a href="/privacy-policy" className="text-primary underline">Privacy Policy</a> and <a href="/cookie-policy" className="text-primary underline">Cookie Policy</a>, which are incorporated into these Terms by reference. Please review those policies to understand how we collect, use, and protect your information.</p>

        <h2 className="font-heading text-xl font-bold text-foreground">12. Modifications to Terms</h2>
        <p>We reserve the right to update, change, or replace any part of these Terms at our sole discretion by posting updates on this page. The "Effective Date" at the top of this page indicates when these Terms were last revised. Your continued use of the Site following the posting of any changes constitutes your acceptance of those changes. It is your responsibility to check this page periodically for updates.</p>

        <h2 className="font-heading text-xl font-bold text-foreground">13. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Smart Income Hub operates, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.</p>

        <h2 className="font-heading text-xl font-bold text-foreground">14. Severability</h2>
        <p>If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.</p>

        <h2 className="font-heading text-xl font-bold text-foreground">15. Entire Agreement</h2>
        <p>These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and Smart Income Hub regarding your use of the Site and supersede all prior agreements, communications, and proposals, whether oral or written.</p>

        <h2 className="font-heading text-xl font-bold text-foreground">16. Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
        <ul className="ml-6 list-none space-y-1">
          <li><strong>Website:</strong> Smart Income Hub</li>
          <li><strong>Email:</strong> contact@smartincomehub.com</li>
          <li><strong>Contact Page:</strong> <a href="/contact" className="text-primary underline">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default TermsPage;
