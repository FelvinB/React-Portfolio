import { Button } from "@/components/design/button";


export function Footer() {

  const toggleMenu = () => {
      ((prev) => !prev);
  };

  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:px-8 md:flex-row">

        {/* Copyright */}
        <p className="text-center text-sm font-medium text-gray-500 md:text-left">
          Copyright © Felvin Baguio 2026. All rights reserved.
        </p>

        {/* Back to Top */}
        <a
              href="#top"
              onClick={toggleMenu}
              className="text-xl font-bold text-gray-900"
        >
        <Button variant="primary" className="p-4">
        Back to Top
        </Button>
        </a>

        {/* Founded */}
        <p className="text-center text-sm font-medium text-gray-500 md:text-right">
          Founded by <span className="font-bold text-gray-700">Felvin Baguio</span>
        </p>

      </div>
    </footer>
  );
}