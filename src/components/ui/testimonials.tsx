"use client";

import { ArrowIcon } from "@/components/icons/arrow-icon";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const WAIT_TIME = 5000;

const DATA = [
  {
    image: "/testimonials/james.jpg",
    name: "James",
    text: "I have tested out your app and I really liked how simple, detailed and easy to use it is.",
  },
  {
    image: "/testimonials/emilie.jpg",
    name: "Emilie",
    text: "I appreciate the feedback regarding my investments. It's concise and straight to he point. This is a great tool!",
  },
  {
    image: "/testimonials/anderson.jpg",
    name: "Anderson",
    text: "Your app really helped me better understand the dynamics of the stock market",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + DATA.length) % DATA.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, WAIT_TIME);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="flex w-full flex-col items-center justify-center gap-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[230px] w-full overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2"
          >
            <Image
              src={DATA[currentIndex].image}
              alt={DATA[currentIndex].name}
              width={62}
              height={62}
              className="rounded-full"
              priority
            />
            <div className="text-center font-serif text-[24px] text-black">
              {DATA[currentIndex].name}
            </div>
            <p className="text-dimmed text-center text-lg">
              {DATA[currentIndex].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Preload images with `priority` for instant display on slower connections */}
      <div className="hidden">
        {DATA.map((item) => (
          <Image
            key={item.name}
            src={item.image}
            alt={item.name}
            width={62}
            height={62}
            priority
          />
        ))}
      </div>

      <div className="flex items-center space-x-3">
        <button
          className="flex h-[43px] w-[43px] cursor-pointer items-center justify-center rounded-full border border-[#434343] transition-colors duration-200 hover:bg-gray-200 focus:outline-none"
          onClick={handlePrev}
        >
          <ArrowIcon dir="left" />
        </button>
        <button
          className="flex h-[43px] w-[43px] cursor-pointer items-center justify-center rounded-full bg-[#434343] transition-colors duration-200 hover:bg-black focus:outline-none"
          onClick={handleNext}
        >
          <ArrowIcon dir="right" variant="white" />
        </button>
      </div>
    </div>
  );
}
