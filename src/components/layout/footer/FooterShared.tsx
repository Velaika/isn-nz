// components/layout/FooterShared.tsx

import { LucideIcon } from "lucide-react";
import Link from "next/link";

export const FooterSectionHeader = ({
  icon: Icon,
  title,
}: {
  icon: LucideIcon;
  title: string;
}) => (
  <div className="flex items-center gap-2 mb-5">
    {Icon && <Icon className="size-5 text-primary" />}
    <h3 className="text-base font-semibold uppercase tracking-wider text-foreground">
      {title}
    </h3>
  </div>
);

export const ContactItem = ({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-3 text-base text-muted-foreground">
    <Icon className="size-5 flex-shrink-0 text-primary mt-0.5" />
    <div className="flex-1 leading-relaxed">{children}</div>
  </div>
);

export const FooterLink = ({ href, name }: { href: string; name: string }) => (
  <Link
    href={href}
    className="text-base text-muted-foreground transition-all duration-200 hover:text-primary hover:translate-x-1 inline-block py-1"
  >
    {name}
  </Link>
);
