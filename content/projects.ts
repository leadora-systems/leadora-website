export type ProjectStatus = "Completed" | "Ongoing" | "Enterprise" | "Startup";

export interface TeamMember {
  name: string;
  role: string;
  avatar?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
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
  metrics?: ProjectMetric[];
  testimonial?: ProjectTestimonial;
}

// Global crew members from the careers page
const leadoraCrew: TeamMember[] = [
  { name: "Akash Bandla", role: "Backend Developer" },
  { name: "Sathya Thota", role: "Frontend Developer" },
  { name: "Gopireddy Manvitha", role: "Frontend Developer" },
  { name: "Matangi Varshini", role: "Backend Developer" }
];

export const projects: Project[] = [
  {
    id: "zipcart-grocery",
    clientName: "ZipCart Grocery",
    clientLogo: "/images/zipcart-logo.png",
    title: "On-Demand Quick Commerce Ecosystem",
    summary: "A sub-15 minute grocery delivery platform built with high-throughput micro-fulfillment and real-time inventory algorithms.",
    description: "We designed, architected, and engineered ZipCart's quick-commerce infrastructure, enabling hyper-local delivery services at scale. The platform features an automated dark store dispatch system, optimized delivery partner routing modules, and a highly responsive, sub-second latency grocery catalog app. The system handles hundreds of concurrent order requests per dark store, syncing inventory quantities across micro-fulfillment centers in real-time to guarantee 99.9% product availability.",
    industry: "Quick Commerce",
    status: "Completed",
    technologies: ["Next.js", "React Native", "Go", "Redis", "Azure"],
    mainImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1600",
    features: [
      "Automated Micro-Fulfillment Dispatch System",
      "Real-Time Inventory State Synchronization",
      "Geofenced Partner Dispatch & Routing",
      "Sub-Second Latency Product Catalog Search",
      "High-Throughput Payments Pipeline Integration"
    ],
    timeline: "2 Months",
    challenges: "Syncing absolute item quantities across hundreds of dark stores simultaneously under high concurrency, and maintaining catalog search times under 400ms.",
    impact: "Drove average order-to-delivery dispatch times to under 12 minutes, and processed over 150,000 monthly successful deliveries across metropolitan clusters.",
    visitUrl: "https://zipcartgroceries.com/",
    team: leadoraCrew,
    metrics: [
      { label: "Dispatch Speed", value: "<12 min" },
      { label: "Monthly Orders", value: "150k+" },
      { label: "Search Latency", value: "380ms" }
    ],
    testimonial: {
      quote: "Leadora has built us a world-class on-demand logistics system. Their real-time inventory engine handles our high-traffic spikes without a single hiccup, keeping our customers exceptionally happy.",
      author: "K Nagaraju",
      role: "CEO, ZipCart India"
    }
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
    timeline: "2 Months",
    challenges: "Ensuring 99.99% uptime and processing massive streams of IoT data with minimal latency.",
    impact: "Reduced emergency response time by 20% and improved patient outcomes through early detection.",
    team: leadoraCrew,
    metrics: [
      { label: "System Uptime", value: "99.99%" },
      { label: "Response Delay", value: "-20%" },
      { label: "Patients Tracked", value: "15k+" }
    ],
    testimonial: {
      quote: "The real-time predictive alerting system is a life-saver. The platform has run flawlessly since deployment, ensuring our doctors are always informed.",
      author: "Dr. Arthur Pendelton",
      role: "Chief Medical Officer, HealthTrack AI"
    }
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
    timeline: "2 Months",
    challenges: "Maintaining strict security standards while providing a seamless developer experience.",
    impact: "Processing over $10M in transactions monthly with 0% downtime since launch.",
    team: leadoraCrew,
    metrics: [
      { label: "Monthly Volume", value: "$10M+" },
      { label: "Added Latency", value: "0ms" },
      { label: "Fraud Intercepted", value: "99.9%" }
    ],
    testimonial: {
      quote: "FinFlow needed a bulletproof payment system. Leadora built a gateway that easily processes millions in volume with absolute security and zero downtime.",
      author: "Marcus Thorne",
      role: "Chief Technology Officer, FinFlow Systems"
    }
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
    timeline: "2 Months",
    challenges: "Integrating complex geographical data and providing real-time updates to thousands of drivers simultaneously.",
    impact: "15% reduction in fuel costs and 22% improvement in on-time delivery rates.",
    team: leadoraCrew,
    metrics: [
      { label: "Fuel Saved", value: "-15%" },
      { label: "On-Time Delivery", value: "+22%" },
      { label: "Optimized Routes", value: "2.4M" }
    ],
    testimonial: {
      quote: "Our fleet optimization reached new levels of efficiency. Leadora's route prediction algorithms saved us millions of dollars in gas in under a year.",
      author: "Linda Rostova",
      role: "Head of Operations, LogiSmart Inc."
    }
  },
  {
    id: "kaushik-nursery",
    clientName: "Kaushik Nursery Private Limited",
    clientLogo: "/images/kaushik-nursery-logo.png",
    title: "Premium GreenTech Digital Storefront",
    summary: "A high-performance digital presence and plant catalog with real-time stock and soil diagnostics.",
    description: "We designed, architected, and engineered a premium web-based storefront and catalog management system for Kaushik Nursery. The platform blends state-of-the-art web performance with complex inventory algorithms, enabling local and wholesale buyers to view botanical classifications, check live stock status across regional nurseries, and request specialized landscaping audits. To deliver a comprehensive green-tech solution, the platform incorporates plant care calculators and basic soil pH mapping modules to educate users and convert casual visitors into lifetime commercial partners.",
    industry: "Agriculture & Retail",
    status: "Completed",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
    mainImage: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1600",
    features: [
      "Botanical Taxonomy Cataloging System",
      "Live Greenhouse Inventory Synchronization",
      "Interactive Soil & pH Diagnostic Advisories",
      "Bulk Landscaping B2B Order Procurement",
      "Automated WhatsApp Consultation Integration"
    ],
    timeline: "2 Months",
    challenges: "Developing a highly visual botanical catalog with complex multi-criteria filters while keeping mobile page loading latency below 1.2 seconds in rural network areas.",
    impact: "Boosted localized B2B organic lead generation by 48% and successfully converted over 3,00,000 botanical consultations within the first quarter.",
    team: leadoraCrew,
    metrics: [
      { label: "Organic Leads", value: "+48%" },
      { label: "Consultations", value: "3,000+" },
      { label: "Page Load Time", value: "0.8s" }
    ],
    testimonial: {
      quote: "Leadora transformed our family nursery into a nationwide brand. The digital botanical catalog and automated consultant line have tripled our wholesale inquiries.",
      author: "Kaushik Patel",
      role: "Managing Director, Kaushik Nursery Pvt. Ltd."
    }
  },
  {
    id: "ganapathi-singh-tax",
    clientName: "Ganapathi Singh & Co. (GSC)",
    title: "Omnichannel Digital Marketing 360 Campaign",
    summary: "Full-funnel digital marketing campaign driving a 280% expansion in tax audit and financial advisory leads.",
    description: "We designed, executed, and managed a comprehensive Digital Marketing 360 campaign for Ganapathi Singh & Co. (GSC), a premium Chartered Accountancy and financial consulting firm. By modernizing their visual branding assets—including high-converting ad creative poster sets, optimized campaign copy, and localized landing interfaces—we built an elite online customer acquisition pipeline. Our multi-channel strategy incorporated hyper-targeted paid media (Google and Meta Ads), localized SEO optimization to capture commercial compliance keywords, and automated WhatsApp CRM pipelines to nurture inbound filers and maximize client retention ahead of critical fiscal deadlines.",
    industry: "Digital Marketing 360",
    status: "Completed",
    technologies: ["Google Ads", "Meta Ads", "SEO", "Figma", "WhatsApp Business"],
    mainImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1600",
    features: [
      "High-Converting Compliance Ad Posters",
      "Hyper-Targeted Local Google Search Ads",
      "Strategic Meta Lead Generation Funnels",
      "Localized CA & Financial Advisory SEO",
      "Automated WhatsApp Business CRM Workflows"
    ],
    timeline: "2 Months",
    challenges: "Reaching high-income business owners and corporate entities in dense urban areas while navigating strict financial advertising regulations and compliance frameworks.",
    impact: "Slashed customer acquisition costs (CAC) by 42% on search campaigns and registered a 280% surge in qualified monthly income tax and company audit inquiries.",
    team: leadoraCrew,
    metrics: [
      { label: "Inbound Leads", value: "+280%" },
      { label: "Acquisition Cost", value: "-42%" },
      { label: "Filing Prospects", value: "10k+" }
    ],
    testimonial: {
      quote: "Leadora's Digital Marketing 360 strategy took our firm's digital reach to another level. The premium ad creatives and targeted campaigns completely filled our consultation calendar during our busiest tax season.",
      author: "CA Ganapathi Singh",
      role: "Founder, Ganapathi Singh & Co. (GSC)"
    }
  },
  {
    id: "greenpro-landscaping",
    clientName: "Green Pro Landscaping Design",
    clientLogo: "/images/greenpro-campaign.png",
    title: "High-Growth Digital Marketing 360 Campaign",
    summary: "Built a localized multi-channel customer acquisition engine driving massive qualified commercial and residential inquiries.",
    description: "We executed an elite, end-to-end Digital Marketing 360 program for Green Pro Landscaping Design, focusing on establishing them as the premier sustainable landscaping service. Our campaign assets modernised their service offerings—ranging from luxury garden installations and softscape layouts to large-scale commercial design. By targeting high-net-worth individuals and corporate land developers with stunning visual ad creative sets, and deploying localized SEO strategies, we successfully scaled their inbound lead pipelines while positioning their green, sustainable brand guidelines at the forefront of the market.",
    industry: "Digital Marketing 360",
    status: "Completed",
    technologies: ["Google Ads", "Meta Ads", "Figma", "Local SEO", "WhatsApp Automation"],
    mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600",
    features: [
      "High-Impact Visual Identity & Promotional Creative Designs",
      "Hyper-Targeted High-Net-Worth Demographics Paid Media",
      "Localized Organic Search Dominance for Premium Landscaping",
      "Automated WhatsApp CRM & Instant Inquiry Routing",
      "Full-Funnel Analytical attribution & Conversion Rate Optimization"
    ],
    timeline: "2 Months",
    challenges: "Capturing high-intent commercial and estate-level residential leads in competitive urban circles, requiring hyper-precise visual storyboarding and creative direction.",
    impact: "Drove organic brand visibility by 350%, generated over 4,500 qualified landscaping inquiries, and reduced the average customer acquisition cost (CAC) by 45% within 60 days.",
    visitUrl: "https://www.greenprolandscaping.com",
    team: leadoraCrew,
    metrics: [
      { label: "Lead Increase", value: "+350%" },
      { label: "Conversion Rate", value: "+3.2x" },
      { label: "Cost-per-Lead", value: "-45%" }
    ],
    testimonial: {
      quote: "Leadora's Digital Marketing 360 team did wonders with our campaign. The stunning posters and localized lead-generation funnels transformed our inquiry rates, keeping our design and installation teams booked out months in advance.",
      author: "Sanjay Kumar",
      role: "Marketing Director, Green Pro Landscaping Design"
    }
  }
];

export const portfolioStats = [
  { label: "Projects Completed", value: "150+" },
  { label: "Happy Clients", value: "80+" },
  { label: "Cloud Deployments", value: "200+" },
  { label: "Applications Built", value: "120+" },
  { label: "Active Solutions", value: "45+" }
];
