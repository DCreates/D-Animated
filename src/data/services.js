import {
  FaReact,
  FaNode,
  FaPython,
  FaAws,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaMobile,
  FaDatabase,
  FaServer,
  FaShieldAlt,
  FaCheckCircle,
  FaLightbulb,
  FaTrophy,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPostgresql, SiKubernetes } from "react-icons/si";

export const servicesDetail = [
  {
    id: "web-development",
    name: "Web Development",
    slug: "web-development",
    description: "Build scalable, high-performance web platforms with clean architecture and modern technologies.",
    heroSubtitle: "From concept to deployment, we create web applications that drive business growth.",
    
    whatWeOffer: [
      {
        title: "Full-Stack Web Apps",
        description: "End-to-end development using React, Next.js, Node.js, and modern databases.",
      },
      {
        title: "Performance Optimization",
        description: "Lightning-fast loading, SEO optimization, and responsive design across all devices.",
      },
      {
        title: "Scalable Architecture",
        description: "Built with microservices and cloud-native patterns for enterprise-grade reliability.",
      },
      {
        title: "API Integration",
        description: "Seamless third-party integrations and RESTful/GraphQL APIs for your ecosystem.",
      },
      {
        title: "Security & Compliance",
        description: "Enterprise security standards, GDPR compliance, and data protection best practices.",
      },
      {
        title: "Maintenance & Support",
        description: "24/7 monitoring, updates, and ongoing optimization to keep your app running flawlessly.",
      },
    ],

    technologies: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: FaNode },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "Git", icon: FaGitAlt },
    ],

    whyChooseUs: [
      {
        icon: FaCheckCircle,
        title: "Proven Track Record",
        description: "100+ web applications delivered with 98% client satisfaction and zero downtime commitments.",
      },
      {
        icon: FaLightbulb,
        title: "Innovation First",
        description: "We stay ahead of technology trends and implement cutting-edge solutions tailored to your needs.",
      },
      {
        icon: FaShieldAlt,
        title: "Security & Reliability",
        description: "Enterprise-grade security, automated testing, and CI/CD pipelines ensure production-ready code.",
      },
      {
        icon: FaTrophy,
        title: "Performance Obsessed",
        description: "Every millisecond matters. We optimize for speed, scalability, and user experience excellence.",
      },
    ],

    relatedProjects: [
      "Portfolio Website",
      "Restaurant Ordering System",
      "Growth Analytics Dashboard",
    ],
  },

  {
    id: "mobile-apps",
    name: "Mobile Apps",
    slug: "mobile-apps",
    description: "Create engaging, cross-platform mobile applications with refined UX and production-ready reliability.",
    heroSubtitle: "Native-quality apps built once, deployed everywhere with seamless user experiences.",
    
    whatWeOffer: [
      {
        title: "Cross-Platform Development",
        description: "React Native and Flutter apps that work flawlessly on iOS and Android with code reuse.",
      },
      {
        title: "Native Performance",
        description: "Optimized for speed and battery efficiency using platform-specific best practices.",
      },
      {
        title: "Offline Functionality",
        description: "Apps that work seamlessly with or without internet, syncing data intelligently.",
      },
      {
        title: "Push Notifications",
        description: "Real-time engagement with targeted, personalized push notification strategies.",
      },
      {
        title: "Analytics Integration",
        description: "Built-in tracking, crash reporting, and user behavior analytics for data-driven decisions.",
      },
      {
        title: "App Store Optimization",
        description: "Complete app store deployment, store listing optimization, and ongoing app analytics.",
      },
    ],

    technologies: [
      { name: "React Native", icon: FaReact },
      { name: "Flutter", icon: FaMobile },
      { name: "Firebase", icon: FaServer },
      { name: "Node.js", icon: FaNode },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "Git", icon: FaGitAlt },
    ],

    whyChooseUs: [
      {
        icon: FaCheckCircle,
        title: "Expert Mobile Teams",
        description: "Dedicated mobile developers with 50K+ combined app downloads and App Store success.",
      },
      {
        icon: FaLightbulb,
        title: "User-Centric Design",
        description: "Intuitive, beautiful interfaces that delight users and drive engagement and retention.",
      },
      {
        icon: FaShieldAlt,
        title: "Secure by Default",
        description: "End-to-end encryption, biometric authentication, and secure data storage built-in.",
      },
      {
        icon: FaTrophy,
        title: "App Store Management",
        description: "From submission to launch, we handle everything to get your app featured and promoted.",
      },
    ],

    relatedProjects: ["Mobile App Platform"],
  },

  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Design systems and interfaces that balance stunning visual impact with exceptional usability.",
    heroSubtitle: "Beautiful, functional design that converts users into loyal customers.",
    
    whatWeOffer: [
      {
        title: "User Research & Strategy",
        description: "Deep user insights through interviews, surveys, and analytics to inform design decisions.",
      },
      {
        title: "Wireframing & Prototyping",
        description: "Interactive prototypes that validate ideas and test user flows before development.",
      },
      {
        title: "Design Systems",
        description: "Scalable component libraries and design guidelines for consistent brand experiences.",
      },
      {
        title: "Visual Design",
        description: "Stunning, on-brand interfaces with thoughtful typography, color, and spacing.",
      },
      {
        title: "Interaction Design",
        description: "Smooth animations, micro-interactions, and delightful micro-moments throughout the experience.",
      },
      {
        title: "Design Handoff",
        description: "Complete design specifications, component documentation, and developer collaboration.",
      },
    ],

    technologies: [
      { name: "Figma", icon: FaFigma },
      { name: "Adobe XD", icon: FaFigma },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React Components", icon: FaReact },
      { name: "Animation", icon: FaLightbulb },
      { name: "User Testing", icon: FaCheckCircle },
      { name: "Accessibility", icon: FaShieldAlt },
      { name: "Brand Strategy", icon: FaTrophy },
    ],

    whyChooseUs: [
      {
        icon: FaCheckCircle,
        title: "Award-Winning Designers",
        description: "40+ design systems created with recognition for creativity and user impact.",
      },
      {
        icon: FaLightbulb,
        title: "Data-Driven Design",
        description: "Every design decision backed by research, testing, and measurable business outcomes.",
      },
      {
        icon: FaShieldAlt,
        title: "Accessibility First",
        description: "WCAG compliant designs ensuring your product is usable by everyone, everywhere.",
      },
      {
        icon: FaTrophy,
        title: "Brand Consistency",
        description: "Cohesive visual language across all touchpoints that strengthens brand recognition.",
      },
    ],

    relatedProjects: ["Design System Implementation"],
  },

  {
    id: "growth-strategy",
    name: "Growth Strategy",
    slug: "growth-strategy",
    description: "Data-led optimization to improve conversion, engagement, retention, and revenue.",
    heroSubtitle: "Transform your metrics through strategic analysis and continuous optimization.",
    
    whatWeOffer: [
      {
        title: "Analytics & Insights",
        description: "Deep-dive into user behavior, conversion funnels, and revenue metrics with advanced analytics.",
      },
      {
        title: "Conversion Rate Optimization",
        description: "A/B testing, funnel analysis, and user journey optimization to maximize conversions.",
      },
      {
        title: "User Retention Strategy",
        description: "Data-driven tactics to increase customer lifetime value and reduce churn.",
      },
      {
        title: "Growth Experimentation",
        description: "Systematic testing framework to identify and scale high-impact growth opportunities.",
      },
      {
        title: "Marketing Analytics",
        description: "Campaign tracking, attribution modeling, and ROI analysis across all channels.",
      },
      {
        title: "Dashboard & Reporting",
        description: "Real-time dashboards and weekly reports to track KPIs and measure progress.",
      },
    ],

    technologies: [
      { name: "Google Analytics", icon: FaServer },
      { name: "Python", icon: FaPython },
      { name: "Data Viz", icon: FaLightbulb },
      { name: "SQL", icon: SiPostgresql },
      { name: "Tableau", icon: FaServer },
      { name: "Mixpanel", icon: FaDatabase },
      { name: "Segment", icon: FaGitAlt },
      { name: "Amplitude", icon: FaCheckCircle },
    ],

    whyChooseUs: [
      {
        icon: FaCheckCircle,
        title: "Proven Results",
        description: "35% average engagement increase and 25%+ revenue growth for our clients.",
      },
      {
        icon: FaLightbulb,
        title: "Expert Growth Teams",
        description: "Former founders and data scientists who understand both strategy and execution.",
      },
      {
        icon: FaShieldAlt,
        title: "Transparent Reporting",
        description: "Weekly insights, monthly strategy reviews, and quarterly business reviews.",
      },
      {
        icon: FaTrophy,
        title: "Sustainable Growth",
        description: "Long-term strategies that compound over time, not quick fixes or short-term hacks.",
      },
    ],

    relatedProjects: ["Growth Analytics Dashboard"],
  },

  {
    id: "cloud-solutions",
    name: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "Enterprise-grade cloud infrastructure and deployment pipelines built for massive scale.",
    heroSubtitle: "Secure, scalable, and cost-optimized cloud solutions that grow with your business.",
    
    whatWeOffer: [
      {
        title: "Cloud Architecture",
        description: "AWS, Azure, and GCP design patterns optimized for cost, performance, and reliability.",
      },
      {
        title: "Infrastructure as Code",
        description: "Terraform and Cloudformation for reproducible, version-controlled infrastructure.",
      },
      {
        title: "CI/CD Pipelines",
        description: "Automated testing, building, and deployment for fast, safe releases.",
      },
      {
        title: "Kubernetes Orchestration",
        description: "Container orchestration for large-scale, distributed application deployment.",
      },
      {
        title: "Security & Compliance",
        description: "Network security, encryption, IAM, and compliance automation (SOC 2, HIPAA, GDPR).",
      },
      {
        title: "Monitoring & Optimization",
        description: "24/7 monitoring, alerting, and continuous cost optimization for maximum ROI.",
      },
    ],

    technologies: [
      { name: "AWS", icon: FaAws },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: FaGitAlt },
      { name: "Docker", icon: FaDocker },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Node.js", icon: FaNode },
      { name: "Python", icon: FaPython },
      { name: "Monitoring", icon: FaServer },
    ],

    whyChooseUs: [
      {
        icon: FaCheckCircle,
        title: "99.99% Uptime SLA",
        description: "Enterprise reliability backed by guarantees and dedicated support teams.",
      },
      {
        icon: FaLightbulb,
        title: "Cost Optimization",
        description: "Reduce cloud spend by 30-40% through intelligent architecture and resource management.",
      },
      {
        icon: FaShieldAlt,
        title: "Security Experts",
        description: "AWS certified architects ensuring best practices for data protection and compliance.",
      },
      {
        icon: FaTrophy,
        title: "DevOps Excellence",
        description: "Automated pipelines, fast deployments, and zero-downtime updates.",
      },
    ],

    relatedProjects: ["Cloud Infrastructure Pipeline"],
  },

  {
    id: "ai-automation",
    name: "AI & Automation",
    slug: "ai-automation",
    description: "Automation workflows and AI integrations that streamline operations and unlock new possibilities.",
    heroSubtitle: "Harness the power of AI to automate processes, improve decisions, and scale faster.",
    
    whatWeOffer: [
      {
        title: "AI Model Development",
        description: "Custom machine learning models for predictions, classifications, and recommendations.",
      },
      {
        title: "LLM Integration",
        description: "ChatGPT, Claude, and other LLMs integrated for content generation and analysis.",
      },
      {
        title: "Workflow Automation",
        description: "Robotic process automation (RPA) to eliminate manual tasks and improve efficiency.",
      },
      {
        title: "Computer Vision",
        description: "Image recognition, object detection, and document processing solutions.",
      },
      {
        title: "Natural Language Processing",
        description: "Text analysis, sentiment analysis, and intelligent document understanding.",
      },
      {
        title: "AI Consulting",
        description: "Strategic guidance on AI adoption, responsible AI, and ethical implementation.",
      },
    ],

    technologies: [
      { name: "Python", icon: FaPython },
      { name: "TensorFlow", icon: FaLightbulb },
      { name: "OpenAI", icon: FaServer },
      { name: "LangChain", icon: FaGitAlt },
      { name: "Node.js", icon: FaNode },
      { name: "Cloud AI", icon: FaAws },
      { name: "Data Pipeline", icon: SiPostgresql },
      { name: "FastAPI", icon: FaServer },
    ],

    whyChooseUs: [
      {
        icon: FaCheckCircle,
        title: "AI Expertise",
        description: "PhDs and engineers with deep experience in machine learning and LLMs.",
      },
      {
        icon: FaLightbulb,
        title: "Responsible AI",
        description: "Implementing AI ethically with bias detection, transparency, and human oversight.",
      },
      {
        icon: FaShieldAlt,
        title: "Privacy & Security",
        description: "On-premise or private cloud options for sensitive data and compliance requirements.",
      },
      {
        icon: FaTrophy,
        title: "Measurable Impact",
        description: "30%+ efficiency gains and ROI improvements through intelligent automation.",
      },
    ],

    relatedProjects: [],
  },
];

export function getServiceBySlug(slug) {
  return servicesDetail.find((service) => service.slug === slug);
}
