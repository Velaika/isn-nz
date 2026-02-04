import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";
import { ConferenceDetails } from "@/lib/constants/contact";
import { FooterSectionHeader, ContactItem } from "./FooterShared";

const fadeUpVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hidden: { y: 20, opacity: 0 },
};

export const FooterConferenceDetailsSection = () => (
  <motion.div variants={fadeUpVariant} className="space-y-6">
    <FooterSectionHeader icon={MapPin} title={ConferenceDetails.title} />

    <div className="flex items-center group">
      <div className="relative h-16 w-16 flex-shrink-0 rounded-2xl flex items-center justify-center p-1 overflow-hidden border border-border/50 bg-card/50 shadow-lg">
        <Image
          src={ConferenceDetails.logoSrc}
          alt={ConferenceDetails.logoAlt}
          width={48}
          height={48}
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="ml-4">
        <h4 className="font-bold text-foreground">
          {ConferenceDetails.eventName}
        </h4>
        <p className="text-sm text-muted-foreground">
          {ConferenceDetails.eventSubtitle}
        </p>
      </div>
    </div>

    <div className="space-y-4">
      <ContactItem icon={Calendar}>
        <div className="text-sm">
          <div className="font-medium text-foreground">
            {ConferenceDetails.eventDetails.dates}
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1.5" />
            {ConferenceDetails.eventDetails.timing}
          </div>
        </div>
      </ContactItem>
      <ContactItem icon={Phone}>
        <a
          href={ConferenceDetails.contact.phoneHref}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {ConferenceDetails.contact.phone}
        </a>
      </ContactItem>
      <ContactItem icon={Mail}>
        <a
          href={ConferenceDetails.contact.emailHref}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {ConferenceDetails.contact.email}
        </a>
      </ContactItem>
    </div>
  </motion.div>
);
