import { Menu, Home, Services, Book, Users } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-xl">WDA</span>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="#" className="text-secondary-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              <Home className="h-5 w-5" />
            </a>
            <a href="#" className="text-secondary-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              <Services className="h-5 w-5 mr-2" />
              Services
            </a>
            <a href="#" className="text-secondary-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Resources
            </a>
            <a href="#" className="text-secondary-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              <Book className="h-5 w-5 mr-2" />
              Blog
            </a>
            <a href="#" className="text-secondary-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              <Users className="h-5 w-5 mr-2" />
              About Us
            </a>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-dark hover:text-primary p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-dark hover:text-primary">
              <Home className="h-5 w-5" />
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-dark hover:text-primary flex items-center">
              <Services className="h-5 w-5 mr-2" />
              Services
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-dark hover:text-primary">
              Resources
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-dark hover:text-primary flex items-center">
              <Book className="h-5 w-5 mr-2" />
              Blog
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-dark hover:text-primary flex items-center">
              <Users className="h-5 w-5 mr-2" />
              About Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;