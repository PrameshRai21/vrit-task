import type { CoursesDetailsType } from "../../types/courses";
import { motion } from "motion/react";

function CoursesDetails({
  courseCount,
  title,
  description,
}: CoursesDetailsType) {
  return (
    <div className="flex flex-col  md:flex-row gap-0 md:gap-6">
      <div className="flex flex-row font-nohemi text-red-light font-bold">
        <h1 className="text-8xl md:text-[9.375rem] leading-tight">
          {courseCount}
        </h1>
        <p className=" text-6xl ">+</p>
      </div>
      <div className=" gap-1 pl-3 md:gap-3 font-nohemi text-red-light md:pt-6">
        <motion.h3
          className="text-2xl md:text-4xl font-bold"
          initial={{ translateY: "-100%", opacity: 0 }}
          animate={{ translateY: "0%", opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-lg"
          initial={{ translateY: "-100%", opacity: 0 }}
          animate={{ translateY: "0%", opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}

export default CoursesDetails;
