"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CommitteeTabsProps } from "@/types/ui";
import { TABS } from "@/lib/constants/committeeData";
import CircularGallery from "@/components/ui/circular-gallery/CircularGallery";

const FALLBACK_AVATAR_URL = "/images/avatar-fallback.png";

/**
 * A component that displays committee members in the provided WebGL CircularGallery.
 */
export const CommitteeTabs = ({
  activeTab,
  setActiveTab,
  committeeDataMap,
}: CommitteeTabsProps) => {
  const committeeData = committeeDataMap[activeTab];
  const galleryItems = committeeData.map((member) => ({
    image: member.image || FALLBACK_AVATAR_URL,
    text: member.name,
    role: member.role,
    institution: member.institution,
  }));
  const activeTabConfig = TABS.find((tab) => tab.id === activeTab)!;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-bl from-primary/10 via-transparent to-primary/5 text-foreground"
    >
      <div className="container mx-auto px-4 py-20 md:py-28 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Meet The Committee
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Our conference is shaped by a dedicated team of leading experts and
          professionals. Select a committee to view its members.
        </p>

        <div className="my-12 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveTab(tab.id)}
                className="hover:text-white duration-300 ease-in-out"
              >
                <Icon className="mr-2 size-4" />
                {tab.label}
              </Button>
            );
          })}
        </div>

        <div className="mx-auto max-w-2xl">
          <h3 className="text-2xl font-bold">{activeTabConfig.label}</h3>
          <p className="mt-2 text-muted-foreground">
            {activeTabConfig.description}
          </p>
        </div>
      </div>
      <div className="relative -mt-16 h-[40vh] w-full xl:h-[90vh]">
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </motion.section>
  );
};
