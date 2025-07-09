import React from "react";
// Şəkildəki ikonlara uyğun olaraq lazımi ikonları import edirik
import { Building2, FileSearch, Users, TrendingUp } from "lucide-react";

export interface Service {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  servicesTitle: string;
  services: string[];
}

export const servicesData: Service[] = [
  {
    icon: <Building2 />,
    title: "Green Transition Consulting",
    subtitle: "Guiding Your Journey to a Greener Future",
    description:
      "Green Transition Consulting is a strategic service that supports companies and organizations in shifting toward more sustainable and environmentally responsible business models. It provides tailored roadmaps for reducing carbon footprints, improving energy efficiency, and integrating green technologies. The goal is to help clients protect the environment while enhancing their competitiveness and brand value, guided by international standards and ESG principles.",
    servicesTitle: "Green Transition Consulting",
    services: [
      "Strategic advice on low-carbon energy planning",
      "Roadmaps for decarbonization and sustainable development",
      "ESG (Environmental, Social, Governance) integration strategies",
      "Policy design and regulatory analysis",
    ],
  },
  {
    icon: <FileSearch />,
    title: "Research & Analytics",
    subtitle: "Data-Driven Insights for Sustainable Decisions",
    description:
      "Our Research & Analytics service provides in-depth analysis and data-driven insights to support your green transition strategy. We conduct detailed assessments of climate impacts, socio-economic effects, and energy systems. By leveraging advanced modeling and forecasting techniques, we help you understand complex challenges and identify the most effective pathways to sustainability. Our interactive dashboards make complex data easy to understand and act upon.",
    servicesTitle: "Research & Analytics",
    services: [
      "Applied research on climate, energy, and sustainability",
      "Socio-economic impact assessments",
      "Energy transition modeling and forecasting",
      "Data visualization and interactive dashboards",
    ],
  },
  {
    icon: <Users />,
    title: "Stakeholder Engagement & Dialogue Facilitation",
    subtitle: "Building Bridges for Collaborative Action",
    description:
      "Effective green transition requires collaboration. Our service focuses on building strong partnerships between public institutions, private companies, and civil society. We design and facilitate multi-stakeholder workshops, create platforms for regional cooperation, and develop robust public-private partnership (PPP) frameworks. Our goal is to foster constructive dialogue and align diverse interests towards a common sustainable vision.",
    servicesTitle: "Stakeholder Engagement & Dialogue Facilitation",
    services: [
      "Public-private partnership frameworks",
      "Multi-stakeholder consultations and workshops",
      "Dialogue platforms for regional cooperation",
    ],
  },
  {
    icon: <TrendingUp />,
    title: "Capacity Building & Training",
    subtitle: "Empowering Your Team for a Green Future",
    description:
      "We empower your organization with the knowledge and skills needed to lead the green transition. We offer tailored training programs for both public and private sectors, covering everything from green technologies to sustainable policy implementation. Our services include curriculum design, hands-on workshops, and peer-learning programs to ensure your team is fully equipped to navigate the challenges and opportunities of a sustainable economy.",
    servicesTitle: "Capacity Building & Training",
    services: [
      "Tailored training programs for public institutions and private sector",
      "Curriculum design on green technologies and policy",
      "Study visits and peer learning programs",
    ],
  },
];