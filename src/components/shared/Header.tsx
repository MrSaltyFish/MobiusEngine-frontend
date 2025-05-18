import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons (install lucide-react)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#111111] shadow-md">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 text-[#fefefe]">
        <div className="text-xl font-bold">Your Logo</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar (appears when menu button clicked) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-gray-800 bg-opacity-75">
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col">
            <button
              onClick={() => setIsOpen(false)}
              className="self-end p-2 mb-4"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-lg hover:text-blue-500">
                Home
              </a>
              <a href="#" className="text-lg hover:text-blue-500">
                About
              </a>
              <a href="#" className="text-lg hover:text-blue-500">
                Services
              </a>
              <a href="#" className="text-lg hover:text-blue-500">
                Contact
              </a>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">
                Sign In
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Header (hidden on mobile) */}
      <div className="hidden md:flex items-center justify-between px-8 py-4">
        <div className="text-2xl font-bold">Your Logo</div>
        <nav className="flex items-center space-x-8">
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
          <a href="#" className="hover:text-blue-500">
            About
          </a>
          <a href="#" className="hover:text-blue-500">
            Services
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
}
