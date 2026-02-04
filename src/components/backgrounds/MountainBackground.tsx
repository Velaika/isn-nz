"use client";

import { motion } from "framer-motion";

/**
 * Animated mountain silhouette background with parallax layers
 * Creates a serene Himalayan atmosphere
 */
export const MountainBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Sky gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

            {/* Animated gradient orbs */}
            <motion.div
                className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/10 via-primary/5 to-transparent blur-3xl"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-accent/10 via-accent/5 to-transparent blur-3xl"
                animate={{
                    x: [0, -30, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Mountain silhouettes - back layer */}
            <svg
                className="absolute bottom-0 left-0 right-0 w-full h-[40vh] opacity-[0.08]"
                viewBox="0 0 1440 400"
                preserveAspectRatio="xMidYMax slice"
                fill="currentColor"
            >
                <path
                    d="M0,400 L0,280 Q120,180 240,220 T480,180 T720,240 T960,160 T1200,200 T1440,180 L1440,400 Z"
                    className="fill-primary"
                />
            </svg>

            {/* Mountain silhouettes - front layer */}
            <svg
                className="absolute bottom-0 left-0 right-0 w-full h-[30vh] opacity-[0.05]"
                viewBox="0 0 1440 300"
                preserveAspectRatio="xMidYMax slice"
                fill="currentColor"
            >
                <path
                    d="M0,300 L0,200 Q180,100 360,150 T720,100 T1080,160 T1440,120 L1440,300 Z"
                    className="fill-foreground"
                />
            </svg>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-primary/20"
                    style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + (i % 3) * 25}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }}
            />
        </div>
    );
};

/**
 * Gradient mesh background for cards and sections
 */
export const GradientMesh = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-primary/10 via-transparent to-accent/10 blur-3xl opacity-50" />
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-conic from-accent/10 via-transparent to-primary/10 blur-3xl opacity-50" />
        </div>
    );
};
