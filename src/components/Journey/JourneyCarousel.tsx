import { useState } from "react";
import type { CarouselType } from "../../types/journey";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface CarouselPropsType {
  images: CarouselType[];
}

function JourneyCarousel({ images }: CarouselPropsType) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full h-72 md:h-85.25  rounded-xl overflow-hidden transition-all duration-500">
      <img
        src={images[current].image}
        className="w-full h-full object-fit"
        alt=""
      />
      <>
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full w-10 h-10 md:w-16 md:h-16 flex items-center justify-center shadow shadow-gray-400 transition"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-0 md:right-3 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full w-10 h-10 md:w-16 md:h-16 flex items-center justify-center  shadow shadow-gray-400 transition"
        >
          <ArrowRight />
        </button>
      </>
    </div>
  );
}

export default JourneyCarousel;
