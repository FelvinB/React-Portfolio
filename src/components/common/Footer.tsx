import { Button } from "@/components/design/button";
import { cn } from "@/lib/cn";

export function Footer() {
  return (
    <footer
      className={cn(
        "mt-auto border-t border-gray-200",
        "bg-gradient-to-r from-gray-50 via-white to-gray-50"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl flex-col",
          "items-center justify-between gap-4",
          "px-4 py-6",
          "sm:px-6",
          "md:flex-row",
          "lg:px-8"
        )}
      >
        {/* Copyright */}
        <p className="text-center text-sm font-medium text-gray-500 md:text-left">
          Copyright © Felvin Baguio 2026. All rights reserved.
        </p>

        {/* Back to Top */}
        <a href="#top">
          <Button
            variant="primary"
            className={cn(
              "px-5 py-2",
              "text-sm",
              "transition-all duration-300",
              "hover:-translate-y-1"
            )}
          >
            Back to Top ↑
          </Button>
        </a>

        {/* Founded */}
        <p className="text-center text-sm font-medium text-gray-500 md:text-right">
          Founded by{" "}
          <span className="font-bold text-gray-700">
            Felvin Baguio
          </span>
        </p>
      </div>
    </footer>
  );
}