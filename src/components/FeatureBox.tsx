import { LucideIcon } from "lucide-react";

interface FeatureBoxProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const FeatureBox = ({ title, description, Icon }: FeatureBoxProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-primary mr-3" />
        <h3 className="text-xl font-semibold text-secondary-dark">{title}</h3>
      </div>
      <p className="text-secondary">{description}</p>
    </div>
  );
};

export default FeatureBox;