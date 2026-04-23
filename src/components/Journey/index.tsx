import { useState } from "react";
import { journeys } from "../../constants/journey";
import JourneyCard from "./JourneyCard";
import { carousels } from "../../constants/carousel";
import JourneyCarousel from "./JourneyCarousel";
import { AnimatePresence, motion } from "motion/react";

const backgroundColor: string[] = [
  "bg-[#F45B5B]",
  "bg-[#5493a1]",
  "bg-[#6c64a8]",
  "bg-[#a88964]",
];

function Journey() {
  // const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <p className="text-2xl font-normal font-outfit text-[#404040]">
          Your SkillShikshya Journey
        </p>

        <h2 className="font-nohemi text-4xl font-bold">
          <span className="text-[#1da177]">Step </span> In.{" "}
          <span className="text-[#1da177]">Skill </span> Up.{" "}
          <span className="text-[#1da177]">Stand </span> Out. 🚀
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        {journeys.map((journey, index) => {
          const carousel = carousels[index];

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="w-full "
            >
              <AnimatePresence mode="wait">
                {hoveredIndex === index && carousel ? (
                  <motion.div
                    key="carousel"
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 60, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {Array.isArray(carousel) ? (
                      <JourneyCarousel images={carousel} />
                    ) : (
                      <JourneyCarousel images={[carousel]} />
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="card"
                    initial={{ x: 0, opacity: 1 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -60, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <JourneyCard
                      image={journey.image}
                      title={journey.title}
                      tag={journey.tag}
                      content={journey.content}
                      backgroundColor={backgroundColor[index]}
                      isEven={(index + 1) % 2 === 0}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Journey;
