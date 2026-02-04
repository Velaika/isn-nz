"use client";

import { OrganizerSection } from "./OrganizerSection";
import { SurgicalFeatures } from "./NephrologyFeatures";
import { WelcomeMessage } from "./WelcomeMessage";
import Beams from "../backgrounds/Beams";
import { CountdownSection } from "../shared/CountdownTimer";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <WelcomeSection />
      <div className="py-12 bg-primary/5">
        <div className="container mx-auto px-6">
          <CountdownSection />
        </div>
      </div>
      {/* <FeaturesSection /> */}
      <CommitteeSection />
    </div>
  );
}

/**
 * ✨ The hero section, now with the essential title, description, and CTA added.
 * The original background and ambient effects structure is preserved.
 */
const HeroSection = () => (
  <section className="relative py-20 md:py-24 border-b border-white/10 overflow-hidden min-h-[85vh] flex items-center justify-center">
    <HeroBackground />

    <div className="relative z-20 container mx-auto px-6 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Countdown timer */}
        <div className="mt-12">
          <CountdownSection />
        </div>
      </div>
    </div>
  </section>
);

// --- All other components remain exactly as you designed them ---

const HeroBackground = () => (
  <>
    <div className="absolute inset-0 z-0">
      <Beams
        beamWidth={2}
        beamHeight={15}
        beamNumber={12}
        lightColor="#d4af37"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={45}
      />
    </div>
  </>
);
const WelcomeSection = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-[5%] w-64 h-64 bg-white/5 backdrop-blur-sm rounded-full opacity-60" />
      <div className="absolute bottom-1/4 right-[5%] w-48 h-48 bg-primary/5 backdrop-blur-sm rounded-full opacity-50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-40 bg-gradient-to-b from-transparent via-primary/10 to-transparent rotate-30" />
    </div>
    <div className="relative z-10">
      <WelcomeMessage />
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/8 via-primary/3 to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-primary/6 via-primary/2 to-transparent opacity-50" />
      <div className="absolute top-1/3 left-[8%] w-56 h-56 border border-white/8 rounded-full opacity-40" />
      <div className="absolute bottom-1/3 right-[8%] w-72 h-72 border border-primary/6 rounded-full opacity-30" />
      <div className="absolute top-1/4 right-1/4 w-2 h-32 bg-gradient-to-b from-transparent via-white/15 to-transparent rotate-45" />
      <div className="absolute bottom-1/4 left-1/4 w-1 h-24 bg-gradient-to-b from-transparent via-primary/20 to-transparent rotate-12" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
    </div>
    <div className="relative z-10">
      <SurgicalFeatures />
    </div>
  </section>
);

const CommitteeSection = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-[5%] w-96 h-96 bg-primary/5 rounded-full blur-[140px] opacity-70" />
      <div className="absolute bottom-1/4 right-[5%] w-80 h-80 bg-primary/7 rounded-full blur-[120px] opacity-60" />
      <div className="absolute top-1/3 right-[10%] w-64 h-64 border border-white/6 rounded-full opacity-40" />
      <div className="absolute bottom-1/3 left-[10%] w-48 h-48 border border-primary/8 rounded-full opacity-35" />
      <div className="absolute top-1/2 left-1/3 w-1 h-28 bg-gradient-to-b from-transparent via-primary/15 to-transparent rotate-60" />
      <div className="absolute top-2/3 right-1/3 w-1 h-36 bg-gradient-to-b from-transparent via-white/10 to-transparent rotate-30" />
      <div className="absolute top-16 left-16 w-24 h-24 pointer-events-none hidden lg:block">
        <div className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-primary/30 to-transparent"></div>
        <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
      </div>
      <div className="absolute bottom-16 right-16 w-24 h-24 pointer-events-none hidden lg:block">
        <div className="absolute bottom-0 right-0 w-px h-16 bg-gradient-to-t from-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-16 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
    </div>
    <div className="relative z-10">
      <OrganizerSection />
    </div>
  </section>
);
