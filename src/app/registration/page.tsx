"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { RegistrationDetailsSection } from "@/components/pages/registration/RegistrationDetailsSection";
import { RegistrationFeesSection } from "@/components/pages/registration/RegistrationFeesSection";
import { RegistrationHeroSection } from "@/components/pages/registration/RegistrationHeroSection";
import { RegistrationHighlightsSection } from "@/components/pages/registration/RegistrationHighlightsSection";

/**
 * Renders the conference registration page.
 * It determines if early bird pricing is active and displays registration details and fees.
 */
export default function RegistrationPage() {
  const [isEarlyBird, setIsEarlyBird] = useState(true);

  useEffect(() => {
    const earlyBirdEndDate = new Date("2025-12-31T23:59:59");
    setIsEarlyBird(new Date() < earlyBirdEndDate);
  }, []);

  return (
    <Layout>
      <RegistrationHeroSection />
      <RegistrationDetailsSection />
      <RegistrationFeesSection isEarlyBird={isEarlyBird} />
      <RegistrationHighlightsSection />
    </Layout>
  );
}
