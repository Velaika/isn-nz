import { motion } from "framer-motion";
import Image from "next/image";
import { OrganizerContactData } from "@/lib/constants/contact";

const fadeUpVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hidden: { y: 20, opacity: 0 },
};

export const FooterPartnerLogo = () => (
  <motion.div variants={fadeUpVariant} className="flex-shrink-0">
    <div className="flex flex-col items-center gap-4 text-center">
      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
        Event Partner
      </p>
      <div className="rounded-lg bg-background/50 p-4 shadow-sm transition-transform hover:scale-105">
        <Image
          src={OrganizerContactData.eventPartner.logoSrc}
          alt={OrganizerContactData.eventPartner.logoAlt}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
    </div>
  </motion.div>
);
