import type { JourneyType } from "../types/journey";
import clarity from "../assets/images/journey/clarity.png";
import learn from "../assets/images/journey/learn.png";
import mentor from "../assets/images/journey/mentored.png";
import achieve from "../assets/images/journey/achieve.png";

export const journeys: JourneyType[] = [
  {
    image: clarity,
    title: "Start with Clarity",
    tag: "Step into a better learning path.",
    content:
      "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
  },
  {
    image: learn,
    title: "Learn by Doing",
    tag: "Practical skills, real projects.",
    content:
      "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
  },
  {
    image: mentor,
    title: "Get Mentored & Supported",
    tag: "You're not learning alone.",
    content:
      "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
  },
  {
    image: achieve,
    title: "Achieve & Showcase",
    tag: "Build your portfolio, get job-ready.",
    content:
      "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
  },
];
