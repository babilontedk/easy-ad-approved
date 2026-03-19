import Layout from "@/components/Layout";

const PrivacyPolicyPage = () => (
  <Layout>
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: March 19, 2026</p>
      <div className="mt-8 space-y-6 text-foreground/85 leading-relaxed">
        <p>At Smart Income Hub, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
        <h2 className="font-heading text-xl font-bold text-foreground">Information We Collect</h2>
        <p>We may collect personal information such as your name and email address when you voluntarily provide it through our contact form or newsletter signup. We also collect non-personal data automatically through cookies and similar technologies, including your browser type, operating system, referring URLs, and pages viewed.</p>
        <h2 className="font-heading text-xl font-bold text-foreground">How We Use Your Information</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li>To operate and maintain our website</li>
          <li>To improve your browsing experience</li>
          <li>To respond to your inquiries and communications</li>
          <li>To analyze website usage and improve our content</li>
          <li>To display relevant advertisements</li>
        </ul>
        <h2 className="font-heading text-xl font-bold text-foreground">Cookies</h2>
        <p>Our website uses cookies to enhance your experience. Cookies are small data files stored on your device that help us understand how you interact with our site. You can choose to disable cookies through your browser settings, but some features of the website may not function properly.</p>
        <h2 className="font-heading text-xl font-bold text-foreground">Third-Party Advertising</h2>
        <p>We may use third-party advertising companies to serve ads when you visit our website. These companies may use cookies and similar technologies to collect information about your visits to this and other websites in order to provide relevant advertisements. These third-party ad servers or ad networks use technology for the advertisements and links that appear on Smart Income Hub. We do not provide personally identifiable information to these advertisers.</p>
        <h2 className="font-heading text-xl font-bold text-foreground">Third-Party Links</h2>
        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
        <h2 className="font-heading text-xl font-bold text-foreground">Data Security</h2>
        <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
        <h2 className="font-heading text-xl font-bold text-foreground">Children's Privacy</h2>
        <p>Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will promptly remove it.</p>
        <h2 className="font-heading text-xl font-bold text-foreground">Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
        <h2 className="font-heading text-xl font-bold text-foreground">Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us through our Contact page.</p>
      </div>
    </div>
  </Layout>
);

export default PrivacyPolicyPage;
