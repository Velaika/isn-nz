"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { attractionsData } from "@/lib/constants/touristAttractions";
import { TouristAttraction } from "@/lib/types";

// --- Main Section Component ---

/**
 * A refined section showcasing tourist attractions with a unified, interactive carousel.
 */
export function TouristAttractionsSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [selectedAttraction, setSelectedAttraction] =
    React.useState<TouristAttraction | null>(null);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      id="tourist-attractions"
      className="relative w-full overflow-hidden py-20 md:py-28"
      aria-labelledby="attractions-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <AttractionsHeader />

        <motion.div variants={itemVariants}>
          <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {attractionsData.map((attraction) => (
                <CarouselItem
                  key={attraction.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <AttractionCard
                    attraction={attraction}
                    onSelect={() => setSelectedAttraction(attraction)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNavigation api={api} />
          </Carousel>
          <CarouselDots count={count} current={current} api={api} />
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedAttraction && (
          <AttractionDetailsDialog
            attraction={selectedAttraction}
            onClose={() => setSelectedAttraction(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}

// --- Sub-components ---

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AttractionsHeader = () => (
  <motion.div variants={itemVariants} className="mb-16 text-center">
    <h2
      id="attractions-heading"
      className="text-4xl font-extrabold tracking-tighter sm:text-5xl"
    >
      Explore Dehradun
    </h2>
    <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
      Take some time to explore these beautiful attractions in and around
      Dehradun during your visit for NZ-ISNCON 2026.
    </p>
  </motion.div>
);

const AttractionCard = ({
  attraction,
  onSelect,
}: {
  attraction: TouristAttraction;
  onSelect: () => void;
}) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="group h-full cursor-pointer"
    onClick={onSelect}
  >
    <div className="relative h-full overflow-hidden rounded-2xl border bg-card/80 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/10">
      <div className="relative h-64 w-full">
        <Image
          src={attraction.image}
          alt={attraction.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold drop-shadow-md">
            {attraction.name}
          </h3>
        </div>
        <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          <MapPin className="size-3 text-primary" />
          {attraction.distance}
        </div>
      </div>
      <div className="p-6">
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {attraction.description}
        </p>
      </div>
    </div>
  </motion.div>
);

const CarouselNavigation = ({ api }: { api: CarouselApi }) => (
  <>
    <Button
      onClick={() => api?.scrollPrev()}
      variant="outline"
      size="icon"
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-card/80 backdrop-blur-sm hidden md:flex"
    >
      <ChevronLeft className="h-4 w-4" />
    </Button>
    <Button
      onClick={() => api?.scrollNext()}
      variant="outline"
      size="icon"
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-card/80 backdrop-blur-sm hidden md:flex"
    >
      <ChevronRight className="h-4 w-4" />
    </Button>
  </>
);

const CarouselDots = ({
  count,
  current,
  api,
}: {
  count: number;
  current: number;
  api: CarouselApi;
}) => (
  <div className="mt-8 flex justify-center gap-2">
    {Array.from({ length: count }).map((_, i) => (
      <button
        key={i}
        onClick={() => api?.scrollTo(i)}
        className={cn(
          "h-2 w-2 rounded-full transition-all duration-300",
          i === current
            ? "w-6 bg-primary"
            : "bg-border hover:bg-muted-foreground",
        )}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </div>
);

/**
 * ✨ A cleaner, more focused dialog for displaying attraction details.
 */
const AttractionDetailsDialog = ({
  attraction,
  onClose,
}: {
  attraction: TouristAttraction;
  onClose: () => void;
}) => (
  <Dialog open onOpenChange={(open) => !open && onClose()}>
    <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-transparent shadow-2xl">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative grid grid-cols-1 md:grid-cols-2 rounded-2xl bg-card/90 backdrop-blur-xl border"
      >
        <DialogTitle className="sr-only">{attraction.name}</DialogTitle>
        <div className="relative h-64 md:h-full min-h-[300px] md:min-h-full">
          <Image
            src={attraction.image}
            alt={attraction.name}
            fill
            className="object-cover md:rounded-l-2xl"
          />
        </div>
        <div className="relative flex flex-col p-8">
          <h2 className="text-2xl font-bold">{attraction.name}</h2>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            {attraction.distance}
          </div>
          <p className="mt-4 flex-1 text-muted-foreground leading-relaxed">
            {attraction.fullDescription || attraction.description}
          </p>
          <Button asChild className="mt-6 group">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(attraction.name + ", Dehradun")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Map
              <ExternalLink className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </motion.div>
    </DialogContent>
  </Dialog>
);
