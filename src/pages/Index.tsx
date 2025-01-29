import { Brain, TrendingUp, Users, Heart, Lightbulb } from "lucide-react";
import Navbar from "../components/Navbar";
import FeatureBox from "../components/FeatureBox";

const Index = () => {
  const features = [
    {
      title: "Skill Gap Analysis",
      description: "Identify and bridge crucial skill gaps in your workforce",
      Icon: Brain
    },
    {
      title: "Predictive Analytics",
      description: "Forecast workforce trends and make data-driven decisions",
      Icon: TrendingUp
    },
    {
      title: "Employee Retention",
      description: "Develop strategies to retain top talent effectively",
      Icon: Users
    },
    {
      title: "Job Satisfaction",
      description: "Monitor and improve employee satisfaction levels",
      Icon: Heart
    },
    {
      title: "Future Skills",
      description: "Prepare for tomorrow's skill requirements today",
      Icon: Lightbulb
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-light to-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary-dark mb-4">
            Workforce Development Analysis
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Empower your organization with data-driven workforce insights and strategic development planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureBox
              key={feature.title}
              title={feature.title}
              description={feature.description}
              Icon={feature.Icon}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;