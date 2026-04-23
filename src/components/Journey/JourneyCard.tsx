import type { JourneyType } from "../../types/journey";

type JourneyCardType = JourneyType & {
  backgroundColor: string;
  isEven: boolean;
};

function JourneyCard({
  image,
  title,
  tag,
  content,
  backgroundColor,
  isEven,
}: JourneyCardType) {
  return (
    <div className="flex flex-row relative w-full">
      <div
        className={`absolute -bottom-20 w-40 h-60 md:w-96 md:h-100  transition-transform animate-bounce-up ${isEven ? "-right-5 md:-right-10 " : "-left-10 md:-left-20 "}`}
      >
        <img
          className="w-full h-full object-fill"
          src={image}
          alt={`${image}.png`}
        />
      </div>
      <div
        className={` rounded-4xl w-full h-85.25 flex flex-col gap-3 md:gap-8 p-10 text-text-white ${isEven ? "items-start" : "items-end"} ${backgroundColor}`}
      >
        <div
          className={`flex flex-col gap-2.5 ${isEven ? "items-start" : "items-end"}`}
        >
          <h2 className="font-nohemi text-2xl md:text-[2rem] font-bold leading-normal">
            {title}
          </h2>
          <h4 className="font-outfit text-xl md:text-2xl leading-normal">
            {tag}
          </h4>
        </div>
        <p
          className={`w-60 md:w-87.75 font-outfit text-base md:text-lg leading-normal ${isEven ? "text-left" : "text-right"}`}
        >
          {content}
        </p>
      </div>
    </div>
  );
}

export default JourneyCard;
