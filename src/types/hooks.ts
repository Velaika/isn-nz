import { Dispatch, SetStateAction } from "react";

export interface CarouselControlsReturnType {
  currentIndex: number;
  direction: -1 | 0 | 1; // More specific type for direction
  isAnimating: boolean;
  isPaused: boolean;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
  setIsPaused: Dispatch<SetStateAction<boolean>>; // More precise type for a state setter
}

/**
 * The shape of the options object for the useCarouselControls hook.
 */
export interface UseCarouselControlsOptionsType {
  totalSlides: number;
  animationDuration?: number;
  enableKeyboardNavigation?: boolean;
  autoplay?: boolean; // Added for autoplay functionality
  autoplayInterval?: number; // Added for custom interval
}

/**
 * Defines the callback functions for the useSwipeGestures hook.
 */
export interface SwipeHandlers {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}
