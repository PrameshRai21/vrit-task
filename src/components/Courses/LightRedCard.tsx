import type { CoursesDetailsType } from "../../types/courses";

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
      className="group w-70 h-115.25 bg-red-light rounded-4xl flex flex-col justify-between gap-3 overflow-hidden px-2 py-4"
      onClick={() => setIsActive((prev) => !prev)}
    >
      <div className="flex flex-row items-end max-h-64 justify-center gap-3 ">
        <h3 className="font-outfit font-bold text-4xl text-red-dark leading-normal [writing-mode:vertical-rl] rotate-180 text-center">
          {title}
        </h3>
        <p className="font-outfit text-lg text-red-dark leading-normal [writing-mode:vertical-rl] rotate-180 mt-auto">
          {description}
        </p>
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
