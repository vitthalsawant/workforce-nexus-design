import { useState } from "react";
import { Upload } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WorkforceInsights = () => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "text/csv") {
      console.log("CSV file uploaded:", file);
      toast({
        title: "File uploaded successfully",
        description: `${file.name} has been uploaded.`,
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a CSV file.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-secondary-dark mb-6">Workforce Insights</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Upload Analytics Data</h2>
          <label className="flex flex-col items-center p-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
            <Upload className="w-12 h-12 text-gray-400 mb-2" />
            <span className="text-sm text-gray-500">Click to upload CSV file</span>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Analytics Features</h2>
            <ul className="space-y-2">
              <li>• Advanced data visualization</li>
              <li>• Predictive analytics</li>
              <li>• Trend analysis</li>
              <li>• Custom reporting</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Insights Benefits</h2>
            <ul className="space-y-2">
              <li>• Strategic workforce planning</li>
              <li>• Performance optimization</li>
              <li>• Risk management</li>
              <li>• Future-ready workforce</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkforceInsights;