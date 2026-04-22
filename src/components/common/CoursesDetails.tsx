import type { CoursesDetailsType } from "../../types/courses";

function CoursesDetails({
  courseCount,
  title,
  description,
}: CoursesDetailsType) {
  return (
    <div className="flex flex-row gap-6">
      <div className="flex flex-row font-nohemi text-red-light font-bold">
        <h1 className="text-[9.375rem] leading-tight">{courseCount}</h1>
        <p className=" text-6xl ">+</p>
      </div>
      <div className="gap-3 font-nohemi text-red-light pt-6">
        <h3 className="text-4xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}

export default CoursesDetails;
