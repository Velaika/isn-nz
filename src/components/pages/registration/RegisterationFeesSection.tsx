"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  Star,
  Users,
  UserCheck,
  ArrowRight,
  Smartphone,
  Building2,
  ExternalLink,
  QrCode,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  pricingOptions,
  EARLY_BIRD_END_DATE,
  REGULAR_END_DATE,
  bankDetails,
  REGISTRATION_LINK,
} from "@/lib/constants/registrationData";

type PricingPeriod = "early" | "regular" | "spot";

/**
 * Redesigned registration fees section with modern pricing table
 */
export const RegisterationFeesSection = ({
  isEarlyBird,
}: {
  isEarlyBird: boolean;
}) => {
  const currentDate = new Date();
  const isRegularPeriod =
    currentDate >= EARLY_BIRD_END_DATE && currentDate < REGULAR_END_DATE;
  const isSpotRegistration = currentDate >= REGULAR_END_DATE;

  const getActivePeriod = (): PricingPeriod => {
    if (isEarlyBird) return "early";
    if (isRegularPeriod) return "regular";
    return "spot";
  };

  const [selectedPeriod, setSelectedPeriod] =
    useState<PricingPeriod>(getActivePeriod());

  const pricingPeriods = [
    {
      id: "early" as PricingPeriod,
      title: "Early Bird",
      date: "Upto 15th Feb 2026",
      active: isEarlyBird,
    },
    {
      id: "regular" as PricingPeriod,
      title: "Regular",
      date: "16th Feb - 15th Mar 2026",
      active: isRegularPeriod,
    },
    {
      id: "spot" as PricingPeriod,
      title: "Spot",
      date: "After 15th Mar 2026",
      active: isSpotRegistration,
    },
  ];

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes("student")) return Users;
    if (category.toLowerCase().includes("accompanying")) return UserCheck;
    return Star;
  };

  const getPrice = (
    option: (typeof pricingOptions)[0],
    period: PricingPeriod,
  ) => {
    switch (period) {
      case "early":
        return option.earlyBird;
      case "regular":
        return option.regular;
      case "spot":
        return option.spotRegistration || option.regular;
      default:
        return option.earlyBird;
    }
  };

  const selectedPeriodData = pricingPeriods.find(
    (p) => p.id === selectedPeriod,
  )!;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full overflow-hidden py-20 md:py-28"
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Registration Fees
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            All fees are in Indian Rupees (INR) and include conference materials,
            lunch, and refreshments during the event.
          </motion.p>
        </div>

        {/* Period Tabs */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-full border border-border/50 bg-muted/30 p-1">
            {pricingPeriods.map((period) => (
              <button
                key={period.id}
                type="button"
                onClick={() => setSelectedPeriod(period.id)}
                className={cn(
                  "relative rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200",
                  selectedPeriod === period.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {period.title}
                {period.active && (
                  <span className="absolute -right-1 -top-1 flex size-3">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex size-3 rounded-full bg-accent" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Date Badge */}
        <div className="mb-8 text-center">
          <Badge variant="outline" className="px-4 py-1.5 text-sm">
            {selectedPeriodData.date}
          </Badge>
        </div>

        {/* Pricing Table */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPeriod}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-12"
          >
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 bg-muted/30">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Category
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">
                      Fee
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingOptions.map((option, index) => {
                    const CategoryIcon = getCategoryIcon(option.category);
                    const price = getPrice(option, selectedPeriod);
                    return (
                      <motion.tr
                        key={option.category}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                        className="border-b border-border/30 last:border-0"
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-4">
                            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                              <CategoryIcon className="size-5 text-primary" />
                            </div>
                            <span className="font-medium text-foreground">
                              {option.category}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <span className="text-2xl font-bold text-primary">
                            {price}
                          </span>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Registration Section */}
        <div className="mb-12 text-center">
          <h3 className="font-serif text-3xl font-bold tracking-tight">
            Register Now
          </h3>
          <p className="mt-2 text-muted-foreground">
            Complete your registration via form or scan QR code
          </p>
        </div>

        <RegistrationSection />

        {/* Payment Section */}
        <div className="mb-12 mt-20 text-center">
          <h3 className="font-serif text-3xl font-bold tracking-tight">
            Payment Options
          </h3>
          <p className="mt-2 text-muted-foreground">
            Choose your preferred payment method
          </p>
        </div>

        <PaymentSection />

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <Alert className="border-primary/30 bg-primary/5">
            <AlertCircle className="size-5 text-primary" />
            <AlertTitle className="font-semibold">Important</AlertTitle>
            <AlertDescription className="text-muted-foreground">
              After payment, please complete the registration form to confirm your spot.
              All fees are non-refundable. For any queries, contact the organizing committee.
            </AlertDescription>
          </Alert>
        </motion.div>
      </div>
    </motion.section>
  );
};

/**
 * Registration section with form link and QR code
 */
const RegistrationSection = () => {
  return (
    <Tabs defaultValue="online" className="w-full">
      <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
        <TabsTrigger value="online" className="gap-2">
          <ExternalLink className="size-4" />
          Online Form
        </TabsTrigger>
        <TabsTrigger value="qr" className="gap-2">
          <QrCode className="size-4" />
          Scan to Register
        </TabsTrigger>
      </TabsList>

      <TabsContent value="online" className="mt-8">
        <Card className="mx-auto max-w-md border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10">
              <ExternalLink className="size-7 text-primary" />
            </div>
            <CardTitle>Register Online</CardTitle>
            <CardDescription>
              Fill out our secure online registration form
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-10 px-8">
            <Button size="lg" className="h-12 w-full gap-2 rounded-xl shadow-lg shadow-primary/20" asChild>
              <Link href={REGISTRATION_LINK} target="_blank" rel="noopener noreferrer">
                Open Registration Form
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="qr" className="mt-8">
        <Card className="mx-auto max-w-md border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10">
              <QrCode className="size-7 text-primary" />
            </div>
            <CardTitle>Scan to Register</CardTitle>
            <CardDescription>
              Scan this QR code with your smartphone camera
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-10">
            <RegistrationQRCode />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

/**
 * Registration QR code display - Enlarged for better scanability
 */
const RegistrationQRCode = () => {
  return (
    <div className="overflow-hidden rounded-2xl border-4 border-white/10 bg-white p-6 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
      <Image
        src="/images/register_qr.png"
        alt="Registration Form QR Code"
        width={320}
        height={320}
        className="size-64 md:size-80 object-contain"
        priority
      />
    </div>
  );
};

/**
 * Payment section with UPI/Bank Transfer tabs
 */
const PaymentSection = () => {
  return (
    <Tabs defaultValue="upi" className="w-full">
      <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
        <TabsTrigger value="upi" className="gap-2">
          <Smartphone className="size-4" />
          UPI Payment
        </TabsTrigger>
        <TabsTrigger value="bank" className="gap-2">
          <Building2 className="size-4" />
          Bank Transfer
        </TabsTrigger>
      </TabsList>

      <TabsContent value="upi" className="mt-8">
        <Card className="mx-auto max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Scan to Pay</CardTitle>
            <CardDescription>
              Use any UPI app to scan and pay
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <PaymentQRCode />
            <p className="mt-4 text-center text-sm text-muted-foreground">
              After payment, take a screenshot and submit with your registration form.
            </p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="bank" className="mt-8">
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <Building2 className="size-5 text-primary" />
              </div>
              Bank Transfer Details
            </CardTitle>
            <CardDescription>
              Transfer the registration fee to the following account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BankDetailsContent />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

/**
 * Payment QR code display
 */
const PaymentQRCode = () => {
  return (
    <div className="overflow-hidden rounded-2xl border-4 border-white/10 bg-white p-6 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
      <Image
        src="/images/payment_qr.png"
        alt="UPI Payment QR Code"
        width={320}
        height={320}
        className="size-64 md:size-80 object-contain"
        priority
      />
    </div>
  );
};

/**
 * Bank details with copy functionality
 */
const BankDetailsContent = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const details = [
    { label: "Account Name", value: bankDetails.accountName },
    { label: "Bank Name", value: bankDetails.bankName },
    { label: "Branch", value: bankDetails.branch },
    { label: "Account Number", value: bankDetails.accountNumber },
    { label: "IFSC Code", value: bankDetails.ifscCode },
    { label: "PAN", value: bankDetails.pan || "AABAI0867P" },
    { label: "GSTIN", value: bankDetails.gstin || "07AABAI086P1Z9" },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {details.map((detail) => (
        <button
          key={detail.label}
          type="button"
          onClick={() => copyToClipboard(detail.value, detail.label)}
          className="group flex flex-col items-start rounded-lg border border-border/50 bg-muted/30 p-3 text-left transition-all hover:border-primary/30 hover:bg-muted/50"
        >
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {detail.label}
          </div>
          <div className="mt-0.5 font-semibold text-foreground">
            {detail.value}
          </div>
          <div className="mt-1 text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
            {copiedField === detail.label ? "Copied!" : "Click to copy"}
          </div>
        </button>
      ))}
    </div>
  );
};
