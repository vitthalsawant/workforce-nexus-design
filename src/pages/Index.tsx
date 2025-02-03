import { Brain, TrendingUp, Users, Heart, Lightbulb } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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

  const researchFindings = [
    {
      author: "Dr. Sarah Johnson",
      finding: "Organizations with data-driven workforce development programs show 35% higher employee retention rates.",
      year: 2023
    },
    {
      author: "Prof. Michael Chen",
      finding: "Predictive analytics in workforce planning can reduce hiring costs by up to 25% and improve job fit by 40%.",
      year: 2023
    },
    {
      author: "Dr. Emily Rodriguez",
      finding: "Companies implementing skill gap analysis programs see a 45% increase in employee productivity within 12 months.",
      year: 2022
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-secondary-light to-white">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-dark mb-4">
              Workforce Development Analysis
            </h1>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Empower your organization with data-driven workforce insights and strategic development planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => (
              <FeatureBox
                key={feature.title}
                title={feature.title}
                description={feature.description}
                Icon={feature.Icon}
              />
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-secondary-dark mb-8 text-center">
              Latest Research Findings
            </h2>
            <div className="space-y-8">
              {researchFindings.map((research, index) => (
                <div 
                  key={index}
                  className="p-6 bg-secondary-light rounded-lg hover:shadow-md transition-shadow"
                >
                  <p className="text-lg mb-2 text-secondary-dark">{research.finding}</p>
                  <div className="flex justify-between text-sm text-secondary">
                    <span>- {research.author}</span>
                    <span>{research.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;