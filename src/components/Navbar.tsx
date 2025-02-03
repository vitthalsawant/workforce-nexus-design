import { Menu, Home, LayoutGrid, Book, Users } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-xl">WDA</span>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <div className="flex flex-col items-center">
              <a href="/" className="text-secondary-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                <Home className="h-5 w-5" />
                <span className="mt-1">Home</span>
              </a>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-secondary-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex flex-col items-center">
                <LayoutGrid className="h-5 w-5" />
                <span className="mt-1">Services</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuItem onClick={() => navigate('/workforce-main')}>
                  Workforce Main
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/workforce-insights')}>
                  Workforce Insights
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="/blog" className="text-secondary-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex flex-col items-center">
              <Book className="h-5 w-5" />
              <span className="mt-1">Blog</span>
            </a>
            
            <a href="/about" className="text-secondary-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex flex-col items-center">
              <Users className="h-5 w-5" />
              <span className="mt-1">About Us</span>
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
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-dark hover:text-primary">
              Home
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-secondary-dark hover:text-primary">
                Services
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => navigate('/workforce-main')}>
                  Workforce Main
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/workforce-insights')}>
                  Workforce Insights
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-dark hover:text-primary">
              Blog
            </a>
            <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-dark hover:text-primary">
              About Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;