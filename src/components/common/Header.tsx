import { useState } from "react";

import Logo from '@/assets/Logo.png';
import { NavLink } from "react-router";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";
import { Section } from "@/components/common/Section";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" }, 
  { label: "Services", to: "/Services" },
  { label: "Works", to: "/Works" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const getLinkClass = (isActive: boolean) => {
    if(isActive){
      return "text-gray-900 underline underline-offset-4"
    }else{
      return "text-gray-600 hover:text-gray-900";
    }
  }
  return (
    <header className="backdrop-blur transparent border-b border-gray-200 sticky top-0 z-50">
      <div
        className={cn(
          "fixed inset-0 bg-black/40 transition-opacity duration-300 md:hidden z-40",
          isMenuOpen ? "opacity-100 pointer-events-auto" : " opacity-0 pointer-events-none"
        )}
        onClick={toggleMenu}
      />

      <Section className="py-0 mt-5 mb-5" containerClassName="relative z-50 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              src={Logo}
              alt="Logo"
              className="w-40 h-auto md:w-50 lg:w-60"
            />
          </div>

          <nav className="hidden md:flex transparent items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn("text-xl text-gray-500 font-bold transition-colors", getLinkClass(isActive))}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex md:hidden ">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Section>

      <div
        className={cn(
          "md: hidden border-t border-gray-200 mt-10 bg-black/30 backdrop-blur transition-all duration-300 ease-in-out grid overflow-hidden absolute top-16 left-0 right-0 border-b shadow-lg z-50",
          isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
        )}>
        <div className="overflow-hidden">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn("text-l font-bold py-2 transition-colors", getLinkClass(isActive))}
                onClick={toggleMenu}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}