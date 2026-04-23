import type { CoursesDetailsType } from "../../types/courses";
import { motion } from "motion/react";

type LightRedCardProps = CoursesDetailsType & {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function LightRedCard({
  courseCount,
  title,
  description,
  setIsActive,
}: LightRedCardProps) {
  return (
    <div
      className="group w-70 h-115.25 bg-red-light rounded-4xl flex flex-col justify-between gap-3 overflow-hidden px-2 py-4 hover:cursor-pointer"
      onClick={() => setIsActive((prev) => !prev)}
    >
      <div className="flex flex-row items-end max-h-64 justify-center gap-3">
        <motion.h3
          className="font-outfit font-bold text-4xl text-red-dark leading-11 [writing-mode:vertical-rl] rotate-180 text-start"
          initial={{ translateX: "-130%", opacity: 0 }}
          animate={{ translateX: "0%", opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="font-outfit text-lg text-red-dark leading-normal [writing-mode:vertical-rl] rotate-180 mt-auto"
          initial={{ translateX: "-130%", opacity: 0 }}
          animate={{ translateX: "0%", opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
        >
          {description}
        </motion.p>
      </div>

      <div className="text-red-dark font-nohemi flex flex-row items-start justify-center">
        <h1 className="text-[9.375rem] font-bold leading-none">
          {courseCount}
        </h1>
        <p className="text-5xl font-bold mb-4 -translate-y-4 group-hover:-translate-y-2 duration-400">
          +
        </p>
      </div>
    </div>
  );
}

export default LightRedCard;
