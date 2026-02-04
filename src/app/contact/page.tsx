import Layout from "@/components/layout/Layout";
import { ContactDetails } from "@/components/pages/contact/ContactDetails";
import { ContactCtaSection } from "@/components/pages/contact/ContactCtaSection";
import { ContactHeroSection } from "@/components/pages/contact/ContactHeroSection";

/**
 * Renders the main contact page for the conference.
 */
export default function ContactPage() {
  return (
    <Layout>
      <ContactHeroSection />
      <ContactDetails />
      <ContactCtaSection />
    </Layout>
  );
}
