import { ArrowRight } from "lucide-react";
import Icons from "../common/Icons";
import CoursesDetails from "../common/CoursesDetails";
import type { CoursesDetailsType } from "../../types/courses";

function RedCard({ courseCount, title, description }: CoursesDetailsType) {
  return (
    <>
      <div className="w-full h-110 md:w-170 md:h-115.25 bg-red-dark p-4 md:p-7 flex flex-col items-center rounded-4xl gap-6 md:gap-16">
        <div className="flex justify-end w-full">
          <button className="group font-outfit flex gap-2 text-red-light items-center hover:cursor-pointer">
            <p className="text-lg">View all Courses</p>{" "}
            <ArrowRight className="size-5 transition-transform group-hover:animate-slide-right-loop " />
          </button>
        </div>
        <div className="w-full md:w-[28.703rem] flex flex-col gap-6 md:gap-16">
          <Icons />
          <CoursesDetails
            courseCount={courseCount}
            title={title}
            description={description}
          />
        </div>
      </div>
    </>
  );
}

export default RedCard;
