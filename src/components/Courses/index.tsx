import LightRedCard from "../../components/Courses/LightRedCard";
import RedCard from "../../components/Courses/RedCard";
import { courses } from "../../constants/courses";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function Courses() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-10 mt-20">
      <div className="flex flex-col gap-6">
        <p className="text-2xl font-normal font-outfit text-[#404040]">
          Explore our classes and master trending skills!
        </p>

        <h2 className="font-nohemi text-4xl font-bold">
          Dive Into{" "}
          <span className="text-[#1da177]">What's Hot Right Now! </span>
          🔥
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 overflow-hidden">
        {/* first card */}
        <AnimatePresence mode="wait">
          {activeIndex === 0 ? (
            <motion.div
              key="red-0"
              initial={{ clipPath: "circle(0% at 100% 0%)" }}
              animate={{ clipPath: "circle(150% at 100% 0%)" }}
              exit={{ clipPath: "circle(0% at 100% 0%)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <RedCard {...courses[0]} />
            </motion.div>
          ) : (
            <motion.div
              key="light-0"
              initial={{ clipPath: "circle(150% at 100% 0%)" }}
              animate={{ clipPath: "circle(150% at 100% 0%)" }}
              exit={{ clipPath: "circle(0% at 0% 100%)" }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <LightRedCard
                {...courses[0]}
                setIsActive={() => setActiveIndex(0)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* other card */}
        {courses.slice(1).map((course, index) => {
          const actualIndex = index + 1;

          return (
            <AnimatePresence mode="wait" key={index}>
              {activeIndex === actualIndex ? (
                <motion.div
                  key={`red-${index}`}
                  initial={{ clipPath: "circle(0% at 100% 0%)" }}
                  animate={{ clipPath: "circle(150% at 100% 0%)" }}
                  exit={{ clipPath: "circle(0% at 100% 0%)" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <RedCard key={course.title} {...course} />
                </motion.div>
              ) : (
                <motion.div
                  key={`light-${index}`}
                  initial={{ clipPath: "circle(150% at 100% 0%)" }}
                  animate={{ clipPath: "circle(150% at 100% 0%)" }}
                  exit={{ clipPath: "circle(0% at 0% 100%)" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <LightRedCard
                    key={course.title}
                    {...course}
                    setIsActive={() => setActiveIndex(actualIndex)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
