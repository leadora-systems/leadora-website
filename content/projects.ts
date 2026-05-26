export type ProjectStatus = "Completed" | "Ongoing" | "Enterprise" | "Startup";

export interface TeamMember {
  name: string;
  role: string;
  avatar?: string;
}

export interface Project {
  id: string;
  clientName: string;
  clientLogo?: string;
  title: string;
  summary: string;
  description: string;
  industry: string;
  status: ProjectStatus;
  technologies: string[];
  mainImage: string;
  gallery?: string[];
  features: string[];
  timeline: string;
  challenges: string;
  impact: string;
  visitUrl?: string;
  team: TeamMember[];
}

export const projects: Project[] = [
  {
    id: "abc-fashion",
    clientName: "ABC Fashion Global",
    title: "Modern Ecommerce Platform",
    summary: "A high-performance, scalable ecommerce solution with seamless payment integration.",
    description: "We built a comprehensive ecommerce ecosystem for ABC Fashion, focusing on performance, user experience, and global scalability. The platform handles thousands of concurrent users and integrates with multiple third-party logistics and payment providers.",
    industry: "Ecommerce",
    status: "Completed",
    technologies: ["React", "Next.js", "Spring Boot", "MongoDB", "Azure"],
    mainImage: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600",
    features: [
      "Real-time inventory management",
      "Multi-currency support",
      "AI-driven product recommendations",
      "One-click checkout process",
      "Advanced analytics dashboard"
    ],
    timeline: "6 Months",
    challenges: "Handling high traffic spikes during seasonal sales and ensuring sub-second page load times across different continents.",
    impact: "35% increase in conversion rate and 50% reduction in server costs through optimized cloud infrastructure.",
    visitUrl: "https://example.com",
    team: [
      { name: "Alex Chen", role: "Backend Developer" },
      { name: "Sarah Miller", role: "Frontend Developer" },
      { name: "David Park", role: "UI/UX Designer" }
    ]
  },
  {
    id: "health-track",
    clientName: "HealthTrack AI",
    title: "Enterprise Health Monitoring",
    summary: "Cloud-native patient monitoring system with real-time AI diagnostics.",
    description: "An enterprise-grade healthcare platform designed for hospitals to monitor patient vitals in real-time using AI to predict potential health risks before they become critical.",
    industry: "Healthcare",
    status: "Enterprise",
    technologies: ["Python", "TensorFlow", "Azure IoT", "React", "PostgreSQL"],
    mainImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600",
    features: [
      "Real-time vital sign tracking",
      "Predictive health alerts",
      "HIPAA-compliant data storage",
      "Doctor-patient communication portal",
      "Automated reporting"
    ],
    timeline: "12 Months",
    challenges: "Ensuring 99.99% uptime and processing massive streams of IoT data with minimal latency.",
    impact: "Reduced emergency response time by 20% and improved patient outcomes through early detection.",
    team: [
      { name: "James Wilson", role: "Azure Engineer" },
      { name: "Emily Blunt", role: "AI Specialist" },
      { name: "Michael Ross", role: "QA Engineer" }
    ]
  },
  {
    id: "fintech-flow",
    clientName: "FinFlow Systems",
    title: "Next-Gen Payment Gateway",
    summary: "Secure and lightning-fast payment processing for modern fintech startups.",
    description: "A robust payment infrastructure that allows businesses to accept payments globally with built-in fraud detection and automated reconciliation.",
    industry: "Fintech",
    status: "Ongoing",
    technologies: ["Go", "Kubernetes", "Redis", "Azure Functions", "TypeScript"],
    mainImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    features: [
      "Global payment processing",
      "Advanced fraud detection",
      "Automated tax calculation",
      "Developer-friendly API",
      "Real-time transaction monitoring"
    ],
    timeline: "Ongoing",
    challenges: "Maintaining strict security standards while providing a seamless developer experience.",
    impact: "Processing over $10M in transactions monthly with 0% downtime since launch.",
    team: [
      { name: "Robert Fox", role: "DevOps Engineer" },
      { name: "Sophia Lee", role: "Backend Developer" },
      { name: "Kevin Hart", role: "Security Lead" }
    ]
  },
  {
    id: "smart-logistics",
    clientName: "LogiSmart Inc.",
    title: "AI Logistics Optimizer",
    summary: "Optimizing supply chain routes using advanced machine learning algorithms.",
    description: "A smart logistics platform that helps companies reduce delivery times and fuel costs by optimizing routes in real-time based on traffic, weather, and vehicle capacity.",
    industry: "Logistics",
    status: "Startup",
    technologies: ["Python", "FastAPI", "Docker", "Azure Maps", "React"],
    mainImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
    features: [
      "Dynamic route optimization",
      "Fleet tracking and management",
      "Fuel consumption analytics",
      "Driver performance monitoring",
      "Automated dispatching"
    ],
    timeline: "8 Months",
    challenges: "Integrating complex geographical data and providing real-time updates to thousands of drivers simultaneously.",
    impact: "15% reduction in fuel costs and 22% improvement in on-time delivery rates.",
    team: [
      { name: "Linda Gray", role: "UI/UX Designer" },
      { name: "Tom Hardy", role: "Fullstack Developer" },
      { name: "Anna Bell", role: "Data Scientist" }
    ]
  }
];

export const portfolioStats = [
  { label: "Projects Completed", value: "150+" },
  { label: "Happy Clients", value: "80+" },
  { label: "Cloud Deployments", value: "200+" },
  { label: "Applications Built", value: "120+" },
  { label: "Active Solutions", value: "45+" }
];
