import { icons } from "../../constants/icons";
import { motion } from "motion/react";

function Icons() {
  return (
    <div className="flex gap-8 md:gap-11">
      {icons.map((icon) => (
        <motion.div
          key={icon}
          className="w-14 h-14 md:w-20 md:h-20 object-contain"
          initial={{ translateX: "100%", opacity: 0 }}
          animate={{ translateX: "0%", opacity: 1 }}
          exit={{ translateX: "0%", opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
        >
          <img src={icon} alt={`${icon}.png`} />
        </motion.div>
      ))}
    </div>
  );
}

export default Icons;
