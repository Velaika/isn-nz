"use client";

import { TouristAttractionsSection } from "@/components/attractions/TouristCarousel";
import { ImportantInformationSection } from "@/components/conference/InformationSection";
import { HeroCarousel } from "@/components/hero/HeroCarousel";
import { InfoBar } from "@/components/hero/HeroInfoBar";
import Layout from "@/components/layout/Layout";
import { VenueSection } from "@/components/venue/VenueSection";
import WelcomePage from "@/components/welcome/WelcomePage";

export default function Home() {
  return (
    <Layout>
      <HeroCarousel />
      <InfoBar />
      <WelcomePage />
      <ImportantInformationSection />
      {/* <ConferenceHighlightsSection /> */}
      <VenueSection />
      <TouristAttractionsSection />
    </Layout>
  );
}
