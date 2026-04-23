import clarity2 from "../assets/images/journey/clarity2.png";
import learn2 from "../assets/images/journey/learn2.png";
import learn3 from "../assets/images/journey/learn3.png";
import type { CarouselType } from "../types/journey";

export const carousels: (CarouselType | CarouselType[])[] = [
  { image: clarity2 },
  [{ image: learn2 }, { image: learn3 }],
];
