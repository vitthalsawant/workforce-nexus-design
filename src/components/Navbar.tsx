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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, service: string) => {
    const file = e.target.files?.[0];
    if (file && file.type === "text/csv") {
      console.log(`CSV file uploaded for ${service}:`, file);
      // Handle file upload logic here
    }
  };

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
            <div className="flex flex-col items-center">
              <a href="#" className="text-secondary-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                <Home className="h-5 w-5" />Home
              </a>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-secondary-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <LayoutGrid className="h-5 w-5 mr-2" />
                Services
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuItem>
                  <label className="cursor-pointer w-full">
                    Workforce Main
                    <input
                      type="file"
                      accept=".csv"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, 'workforce-main')}
                    />
                  </label>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <label className="cursor-pointer w-full">
                    Workforce Insights
                    <input
                      type="file"
                      accept=".csv"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, 'workforce-insights')}
                    />
                  </label>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="#" className="text-secondary-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              <Book className="h-5 w-5 mr-2" />
              Resources
            </a>
            <a href="#" onClick={() => navigate('/blog')} className="text-secondary-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              <Book className="h-5 w-5 mr-2" />
              Blog
            </a>
            <a href="#" onClick={() => navigate('/about')} className="text-secondary-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
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
            <div className="flex flex-col items-center">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-dark hover:text-primary">
                <Home className="h-5 w-5" />
              </a>
              <span className="text-xs text-secondary-dark">Home</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-secondary-dark hover:text-primary flex items-center">
                <LayoutGrid className="h-5 w-5 mr-2" />
                Services
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <label className="cursor-pointer w-full">
                    Workforce Main
                    <input
                      type="file"
                      accept=".csv"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, 'workforce-main')}
                    />
                  </label>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <label className="cursor-pointer w-full">
                    Workforce Insights
                    <input
                      type="file"
                      accept=".csv"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, 'workforce-insights')}
                    />
                  </label>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-dark hover:text-primary flex items-center">
              <Book className="h-5 w-5 mr-2" />
              Resources
            </a>
            <a href="#" onClick={() => navigate('/blog')} className="block px-3 py-2 rounded-md text-base font-medium text-secondary-dark hover:text-primary flex items-center">
              <Book className="h-5 w-5 mr-2" />
              Blog
            </a>
            <a href="#" onClick={() => navigate('/about')} className="block px-3 py-2 rounded-md text-base font-medium text-secondary-dark hover:text-primary flex items-center">
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