import Layout from "@/components/layout/Layout";
import { BrochureCtaSection } from "@/components/pages/brochure/BrochureCtaSection";
import { BrochurePageHeroSection } from "@/components/pages/brochure/BrochurePageHeroSection";
import { BrochureHighlightsSection } from "@/components/pages/brochure/BrochureHighlightsSection";
import { BrochureOverviewSection } from "@/components/pages/brochure/BrochureOverviewSection";
import { BrochureResourcesSection } from "@/components/pages/brochure/BrochureResourcesSection";

/**
 * Renders the main Conference Brochure page.
 * This page provides a comprehensive overview of the event.
 */
export default function ConferenceBrochurePage() {
  return (
    <Layout>
      <div className="flex flex-col">
        <BrochurePageHeroSection />
        <BrochureOverviewSection />
        <BrochureHighlightsSection />
        <BrochureResourcesSection />
        <BrochureCtaSection />
      </div>
    </Layout>
  );
}
