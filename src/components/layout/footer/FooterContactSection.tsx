import { motion } from "framer-motion";
import { Mail, Phone, User } from "lucide-react";
import { ConferenceDetails } from "@/lib/constants/contact";
import { FooterSectionHeader, ContactItem } from "./FooterShared";

const fadeUpVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hidden: { y: 20, opacity: 0 },
};

export const FooterContactSection = () => (
  <motion.div variants={fadeUpVariant} className="space-y-5">
    <FooterSectionHeader icon={User} title="Contact Us" />
    <div className="space-y-5">
      <ContactItem icon={Phone}>
        <a
          href={ConferenceDetails.contact.phoneHref}
          className="hover:text-primary transition-colors"
        >
          {ConferenceDetails.contact.phone}
        </a>
      </ContactItem>
      <ContactItem icon={Mail}>
        <a
          href={ConferenceDetails.contact.emailHref}
          className="hover:text-primary transition-colors break-words"
        >
          {ConferenceDetails.contact.email}
        </a>
      </ContactItem>
    </div>
  </motion.div>
);
