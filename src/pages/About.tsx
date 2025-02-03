import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "@/integrations/supabase/client"; // Import the Supabase client

const About = () => {
  const [queryForm, setQueryForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Insert the form data into the Supabase table
    const { data, error } = await supabase
      .from("contact_queries") // Replace "messages" with your table name
      .insert([
        { name: queryForm.name, email: queryForm.email, message: queryForm.message },
      ]);

    if (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your message.",
        variant: "destructive",
      });
      console.error("Error inserting data:", error);
    } else {
      toast({
        title: "Query Submitted",
        description: "We'll get back to you soon!",
      });
      setQueryForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-secondary-dark mb-8">About Us</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Name:</span> Vitthal Sawant</p>
              <p><span className="font-medium">Email:</span> vitthalsawant300@gmail.com</p>
              <p><span className="font-medium">Phone:</span> 8308075485</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input
                  type="text"
                  value={queryForm.name}
                  onChange={(e) => setQueryForm({ ...queryForm, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  type="email"
                  value={queryForm.email}
                  onChange={(e) => setQueryForm({ ...queryForm, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  className="w-full rounded-md border border-input px-3 py-2 min-h-[100px]"
                  value={queryForm.message}
                  onChange={(e) => setQueryForm({ ...queryForm, message: e.target.value })}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;