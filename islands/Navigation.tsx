import { useState } from "preact/hooks";
import Icon360View from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/360-view.tsx";
import IconAlignRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/align-right.tsx";

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <Icon360View class="text-blue-700 w-9 h-9" />
            </a>
          </div>
          <div className="uppercase hidden sm:ml-6 sm:flex sm:items-center">
            <a
              href="/"
              className="px-3 py-2 text-green-500 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="/blog"
              className="px-3 py-2 text-green-500 hover:text-gray-900"
            >
              Blog
            </a>
            <a
              href="/login"
              className="px-3 py-2 text-green-500 hover:text-gray-900"
            >
              Login
            </a>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-green-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <IconAlignRight class="w-9 h-9" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/"
            className="block px-3 py-2 text-base font-medium text-green-500 hover:text-gray-900"
          >
            Home
          </a>
          <a
            href="/blog"
            className="block px-3 py-2 text-base font-medium text-green-500 hover:text-gray-900"
          >
            Blog
          </a>
          <a
            href="/login"
            className="block px-3 py-2 text-base font-medium text-green-500 hover:text-gray-900"
          >
            Login
          </a>
          <a
            href="/register"
            className="block px-3 py-2 text-base font-medium text-green-500 hover:text-gray-900"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
