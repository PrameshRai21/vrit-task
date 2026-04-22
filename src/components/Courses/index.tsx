import LightRedCard from "../../components/Courses/LightRedCard";
import RedCard from "../../components/Courses/RedCard";
import { courses } from "../../constants/courses";
import { useState } from "react";

function Courses() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-10 mt-10">
      <div className="flex flex-col gap-6">
        <p className="text-2xl font-normal font-outfit text-[#404040]">
          Explore our classes and master trending skills!
        </p>

        <h2 className="font-nohemi text-4xl font-bold">
          Dive Into{" "}
          <span className="text-[#1da177]">What's Hot Right Now! </span>
        </h2>
      </div>
      <div className="flex flex-row gap-8 ">
        {/* first section */}
        {activeIndex === 0 ? (
          <RedCard {...courses[0]} />
        ) : (
          <LightRedCard {...courses[0]} setIsActive={() => setActiveIndex(0)} />
        )}

        {/* second section */}
        {courses.slice(1).map((course, index) => {
          const actualIndex = index + 1;

          return activeIndex === actualIndex ? (
            <RedCard key={course.title} {...course} />
          ) : (
            <LightRedCard
              key={course.title}
              {...course}
              setIsActive={() => setActiveIndex(actualIndex)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
