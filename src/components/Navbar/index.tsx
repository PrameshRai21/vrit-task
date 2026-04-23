// components/Navbar.tsx
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { path: "/taskOne", label: "TaskOne" },
  { path: "/taskTwo", label: "TaskTwo" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-row items-center justify-between px-4 md:px-10 py-4 shadow-sm bg-white sticky top-0 z-50">
      <NavLink to="/" className="font-nohemi font-bold text-2xl text-[#1da177]">
        Vrit Task
      </NavLink>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-row gap-8">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `font-outfit text-lg transition-colors duration-200 ${
                  isActive
                    ? "text-[#1da177] font-semibold border-b-2 border-[#1da177]"
                    : "text-[#404040] hover:text-[#1da177]"
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <motion.span
          animate={isOpen ? { rotateZ: 45, y: 8 } : { rotateZ: 0, y: 0 }}
          className="block w-6 h-0.5 bg-[#404040]"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-0.5 bg-[#404040]"
        />
        <motion.span
          animate={isOpen ? { rotateZ: -45, y: -8 } : { rotateZ: 0, y: 0 }}
          className="block w-6 h-0.5 bg-[#404040]"
        />
      </button>

      {/*  Menu for Mobille*/}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-16 left-0 right-0 bg-white shadow-md flex flex-col gap-4 px-5 py-6 md:hidden"
          >
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-outfit text-lg transition-colors duration-200 ${
                      isActive
                        ? "text-[#1da177] font-semibold"
                        : "text-[#404040] hover:text-[#1da177]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
