import { useState } from "react";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been sent successfully.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Contact Us</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Have a question, suggestion, or partnership inquiry? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground">Full Name</label>
            <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground">Email Address</label>
            <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
            <textarea id="message" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your message..." />
          </div>
          <button type="submit" className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
