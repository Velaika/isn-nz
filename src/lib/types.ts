import { ComponentType, SVGProps } from "react";

export interface NavItem {
  href: string;
  label: string;
  featured?: boolean;
  children?: {
    href: string;
    label: string;
    badge?: string;
  }[];
}

export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
}

export interface MobileNavAccordionProps {
  items: NavItem[];
}

export type CarouselSlideType = {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  date?: string;
  venue?: string;
  description?: string;
};

export type OrganizerProps = {
  name: string;
  role: string;
  institution: string;
  image: string;
  className?: string;
};

export interface InfoCardProps {
  title: string;
  description?: string;
  disabled?: boolean;
  icon: React.ReactNode;
  href: string;
  className?: string;
}

export interface HighlightCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TouristAttraction {
  id: number;
  name: string;
  distance: string;
  image: string;
  description: string;
  fullDescription?: string;
}

export interface SurgicalFeatureProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface CarouselControlsProps {
  currentIndex: number;
  totalSlides: number;
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  isAnimating: boolean;
}

export interface SlideProps {
  slide: CarouselSlideType;
  index: number;
  currentIndex: number;
  direction: number;
  isVisible: boolean;
  totalSlides: number;
}
