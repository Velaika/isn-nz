import Layout from "@/components/layout/Layout";
import { SponsorshipBenefitsSection } from "@/components/pages/sponsorship/SponsorshipBenefitsSection";
import { SponsorshipCtaSection } from "@/components/pages/sponsorship/SponsorshipCtaSection";
import { SponsorshipHeroSection } from "@/components/pages/sponsorship/SponsorshipHeroSection";
import { SponsorshipTiersSection } from "@/components/pages/sponsorship/SponsorshipTiersSection";

/**
 * Renders the Sponsorship page, showcasing partnership opportunities.
 */
export default function SponsorshipPage() {
  return (
    <Layout>
      <SponsorshipHeroSection />
      <SponsorshipTiersSection />
      <SponsorshipBenefitsSection />
      <SponsorshipCtaSection />
    </Layout>
  );
}
