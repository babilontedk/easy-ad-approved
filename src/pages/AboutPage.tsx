import Layout from "@/components/Layout";

const AboutPage = () => (
  <Layout>
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">About Smart Income Hub</h1>
      <div className="mt-8 space-y-6 text-foreground/85 leading-relaxed">
        <p>Welcome to <strong>Smart Income Hub</strong> — a trusted online resource dedicated to helping everyday people discover legitimate ways to earn money online, build sustainable side hustles, and make smarter financial decisions.</p>
        <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
        <p>We believe that financial freedom should be accessible to everyone, regardless of background, education, or starting point. Our mission is to provide clear, honest, and actionable guidance that empowers beginners and experienced earners alike to take control of their financial futures.</p>
        <h2 className="font-heading text-2xl font-bold text-foreground">What We Offer</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>In-depth articles</strong> covering proven online income strategies</li>
          <li><strong>Honest reviews</strong> of tools, platforms, and apps</li>
          <li><strong>Practical financial tips</strong> for saving, budgeting, and investing</li>
          <li><strong>Step-by-step guides</strong> for starting online businesses and side hustles</li>
        </ul>
        <h2 className="font-heading text-2xl font-bold text-foreground">Our Values</h2>
        <p>Every piece of content we publish is guided by three core principles: <strong>honesty</strong>, <strong>accuracy</strong>, and <strong>helpfulness</strong>. We never promote get-rich-quick schemes, misleading opportunities, or anything we wouldn't recommend to our own family and friends.</p>
        <p>Our team of writers and researchers has real-world experience in freelancing, digital marketing, personal finance, and entrepreneurship. We write from experience, not theory.</p>
        <h2 className="font-heading text-2xl font-bold text-foreground">Join Our Community</h2>
        <p>Smart Income Hub is more than a website — it's a growing community of people who believe in working smarter, not harder. Whether you're just starting out or looking to diversify your income streams, you'll find the guidance you need right here.</p>
        <p>Thank you for being part of our journey. We're excited to help you on yours.</p>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
