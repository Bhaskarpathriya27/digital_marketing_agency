"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { TruckIcon } from "@heroicons/react/24/solid";

const menu = [
  { name: "Homepages", href: "#" },
  {
    name: "Features",
    subMenu: [
      {
        name: "Post Headers",
        subItems: ["Standard", "Split", "Overlay"],
      },
      {
        name: "Layout",
        subItems: ["Classic", "Grid", "Masonry"],
      },
      { name: "Auto Load Next Post" },
      { name: "Categories" },
    ],
  },
  { name: "About", href: "#" },
  { name: "Contacts", href: "#" },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeout = useRef();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ⏳ MouseLeave delay for dropdown: prevents flicker
  const handleMenuEnter = (i) => {
    clearTimeout(dropdownTimeout.current);
    setActiveMenu(i);
  };
  const handleMenuLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveMenu(null);
      setActiveSubMenu(null);
    }, 120); // 120ms: enough for smooth submenu hover
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "bg-white/80 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-blue-700 font-bold text-xl">
          <TruckIcon className="w-6 h-6" />
          <span>AutoGen</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm text-gray-800 font-medium relative">
          {menu.map((item, i) =>
            item.subMenu ? (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => handleMenuEnter(i)}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  className={`flex items-center gap-1 hover:text-blue-600 transition ${
                    activeMenu === i ? "text-blue-700" : ""
                  }`}
                  tabIndex={0}
                  type="button"
                >
                  {item.name} <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeMenu === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-8 left-0 bg-white shadow-xl  rounded-xl p-3 w-60 z-50"
                    >
                      {item.subMenu.map((sub, j) => (
                        <div
                          key={j}
                          className="relative group"
                          onMouseEnter={() => setActiveSubMenu(j)}
                          onMouseLeave={() => setActiveSubMenu(null)}
                        >
                          <div className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
                            <span>{sub.name}</span>
                            {sub.subItems && (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </div>
                          {/* Sub Dropdown */}
                          <AnimatePresence>
                            {sub.subItems && activeSubMenu === j && (
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.18 }}
                                className="absolute left-full top-0 bg-white shadow-xl  rounded-xl p-3 w-48 z-50"
                              >
                                {sub.subItems.map((subItem, k) => (
                                  <div
                                    key={k}
                                    className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                                  >
                                    {subItem}
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={i}
                href={item.href}
                className="hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
