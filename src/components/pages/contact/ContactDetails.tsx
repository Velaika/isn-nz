"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  OrganizerContactData,
  ConferenceDetails,
} from "@/lib/constants/contact";
import { venueDetails } from "@/lib/constants/venueDetails";

/**
 * Displays detailed contact information with a redesigned, integrated UI.
 */
export const ContactDetails = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-bl from-primary/10 via-transparent to-primary/5 py-20 md:py-28"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <Tabs defaultValue="secretariat" className="w-full">
          <TabsList className="mx-auto grid h-auto max-w-lg grid-cols-2">
            <TabsTrigger value="secretariat">Conference Venue</TabsTrigger>
            <TabsTrigger value="organizers">Organizing Team</TabsTrigger>
          </TabsList>

          {/* ✨ 1. Redesigned Secretariat Tab */}
          <TabsContent value="secretariat" className="mt-10">
            <Card className="overflow-hidden py-0">
              <div className="relative h-64 w-full md:h-96">
                <iframe
                  src={venueDetails.mapEmbedUrl}
                  className="h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Conference Location"
                ></iframe>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <ContactInfoItem icon={MapPin} title="Address">
                    <address className="not-italic leading-relaxed">
                      {ConferenceDetails.address.line1},{" "}
                      {ConferenceDetails.address.line2},{" "}
                      {ConferenceDetails.address.line3},{" "}
                      {ConferenceDetails.address.line4}
                    </address>
                    <Button
                      variant="link"
                      size="sm"
                      asChild
                      className="-ml-3 mt-1 h-auto p-0"
                    >
                      <a
                        href={venueDetails.mapDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions{" "}
                        <ExternalLink className="ml-1.5 size-3.5" />
                      </a>
                    </Button>
                  </ContactInfoItem>
                  <ContactInfoItem icon={Mail} title="Email">
                    <a
                      href={ConferenceDetails.contact.emailHref}
                      className="hover:underline"
                    >
                      {ConferenceDetails.contact.email}
                    </a>
                  </ContactInfoItem>
                  <ContactInfoItem icon={Phone} title="Phone">
                    <a
                      href={ConferenceDetails.contact.phoneHref}
                      className="hover:underline"
                    >
                      {ConferenceDetails.contact.phone}
                    </a>
                  </ContactInfoItem>
                  <ContactInfoItem icon={Clock} title="Office Hours">
                    <p>Monday - Friday, 9:00 AM to 5:00 PM (IST)</p>
                  </ContactInfoItem>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ✨ 2. Redesigned Organizers Tab */}
          <TabsContent value="organizers" className="mt-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <OrganizationCard
                title="Organized By"
                data={OrganizerContactData.organizer}
              />
              <OrganizationCard
                title="Event Partner"
                data={OrganizerContactData.eventPartner}
              />
              <ManagerCard
                title={OrganizerContactData.conferenceManager.title}
                data={OrganizerContactData.conferenceManager.contact}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
};

// ✨ Helper component for the Secretariat contact list
const ContactInfoItem = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <div className="flex items-center gap-3">
      <Icon className="size-5 text-primary" />
      <h4 className="font-semibold">{title}</h4>
    </div>
    <div className="pl-8 pt-1 text-sm text-muted-foreground">{children}</div>
  </div>
);

// ✨ New, specific card for organizations
const OrganizationCard = ({
  title,
  data,
}: {
  title: string;
  data: { logoSrc: string; logoAlt: string; name: string };
}) => (
  <Card className="h-full">
    <CardContent className="flex h-full flex-col items-center justify-between p-6 text-center">
      <div className="text-sm font-semibold text-muted-foreground">{title}</div>
      <div className="my-6">
        <Image
          src={data.logoSrc}
          alt={data.logoAlt}
          width={150}
          height={150}
          className="h-24 w-auto object-contain"
        />
      </div>
      <div className="font-bold text-foreground">{data.name}</div>
    </CardContent>
  </Card>
);

// ✨ New, specific card for the conference manager
const ManagerCard = ({
  title,
  data,
}: {
  title: string;
  data: { phone: string; phoneHref: string; email: string; emailHref: string };
}) => (
  <Card className="h-full">
    <CardContent className="flex h-full flex-col items-center justify-between p-6 text-center">
      <div className="text-sm font-semibold text-muted-foreground">{title}</div>
      <div className="my-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
        <Phone className="size-10 text-primary" />
      </div>
      <div className="space-y-1">
        <a
          href={data.phoneHref}
          className="block text-sm font-medium hover:underline"
        >
          {data.phone}
        </a>
        <a
          href={data.emailHref}
          className="block break-all text-sm font-medium hover:underline"
        >
          {data.email}
        </a>
      </div>
    </CardContent>
  </Card>
);
