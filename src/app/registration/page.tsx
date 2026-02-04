"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { RegisterationHeroSection } from "@/components/pages/registration/RegisterationHeroSection";
import { RegisterationDetailsSection } from "@/components/pages/registration/RegisterationDetailsSection";
import { RegisterationFeesSection } from "@/components/pages/registration/RegisterationFeesSection";
import { RegisterationHighlightsSection } from "@/components/pages/registration/RegisterationHighlightsSection";

/**
 * Renders the conference registration page.
 * It determines if early bird pricing is active and displays registration details and fees.
 */
export default function RegistrationPage() {
  const [isEarlyBird, setIsEarlyBird] = useState(true);

  // Set the early bird deadline for the 2026 conference (31st December 2025)
  useEffect(() => {
    const earlyBirdEndDate = new Date("2025-12-31T23:59:59");
    setIsEarlyBird(new Date() < earlyBirdEndDate);
  }, []);

  return (
    <Layout>
      <RegisterationHeroSection />
      <RegisterationDetailsSection />
      <RegisterationFeesSection isEarlyBird={isEarlyBird} />
      <RegisterationHighlightsSection />
    </Layout>
  );
}
