import {
  Monitor,
  Smartphone,
  TabletSmartphone,
  Laptop,
  Plug,
  Database,
  Palette,
  Bot,
  Briefcase,
  Headphones,
  Megaphone,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
  technologies?: string[];
}

export const services: Service[] = [
  {
    icon: Monitor,
    title: 'Websites & Web Apps Development',
    description:
      'Custom, responsive websites and web applications built with modern technologies. From landing pages to complex SaaS platforms, we bring your vision to life.',
    features: [
      'Responsive & Mobile-First Design',
      'SEO Optimization',
      'Fast Loading Performance',
      'E-commerce Integration',
      'Content Management Systems',
      'Custom Functionality',
    ],
    color: 'blue',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
  },
  {
    icon: Smartphone,
    title: 'Android Apps Development',
    description:
      'Native Android applications that deliver exceptional user experiences. Built with Kotlin and Java for optimal performance on all Android devices.',
    features: [
      'Material Design UI/UX',
      'Play Store Deployment',
      'Push Notifications',
      'Offline Functionality',
      'Payment Gateway Integration',
      'Real-time Data Sync',
    ],
    color: 'green',
    technologies: ['Kotlin', 'Java', 'Android Studio', 'Firebase', 'Retrofit'],
  },
  {
    icon: TabletSmartphone,
    title: 'iOS Apps Development',
    description:
      'Elegant iOS applications following Apple Human Interface Guidelines. Swift-powered apps that users love on iPhone and iPad.',
    features: [
      'SwiftUI & UIKit',
      'App Store Optimization',
      'iCloud Integration',
      'Apple Pay Support',
      'Push Notifications',
      'Core Data Management',
    ],
    color: 'purple',
    technologies: ['Swift', 'SwiftUI', 'Xcode', 'Core Data', 'Combine'],
  },
  {
    icon: Laptop,
    title: 'Windows Apps Development',
    description:
      'Robust desktop applications for Windows platforms. From business tools to enterprise software, we build performant Windows apps tailored to your needs.',
    features: [
      'Native Windows UI',
      'Cross-platform Options',
      'Enterprise Integration',
      'Auto-update Support',
      'Offline Capabilities',
      'Microsoft Store Deployment',
    ],
    color: 'indigo',
    technologies: ['.NET', 'C#', 'WPF', 'WinUI', 'Electron'],
  },
  {
    icon: Plug,
    title: 'API Integrations',
    description:
      'Seamlessly connect your systems with third-party services and APIs. We build reliable integrations that automate workflows and unify your data.',
    features: [
      'REST & GraphQL APIs',
      'Third-party Service Integration',
      'Webhook Implementation',
      'Data Synchronization',
      'Authentication & Security',
      'API Documentation',
    ],
    color: 'cyan',
    technologies: ['Node.js', 'Python', 'Postman', 'OAuth 2.0', 'Webhooks'],
  },
  {
    icon: Database,
    title: 'Data Engineering & Data Analytics',
    description:
      'Transform raw data into actionable insights. We design data pipelines, warehouses, and analytics dashboards that drive smarter business decisions.',
    features: [
      'Data Pipeline Development',
      'ETL/ELT Processes',
      'Business Intelligence Dashboards',
      'Data Warehousing',
      'Real-time Analytics',
      'Reporting & Visualization',
    ],
    color: 'teal',
    technologies: ['Python', 'SQL', 'Apache Spark', 'Power BI', 'Tableau'],
  },
  {
    icon: Palette,
    title: 'UI/UX Designing',
    description:
      'User-centered design that delights and converts. We craft intuitive interfaces and seamless experiences that align with your brand and user needs.',
    features: [
      'User Research & Personas',
      'Wireframing & Prototyping',
      'Visual Design Systems',
      'Usability Testing',
      'Mobile & Web Design',
      'Design Handoff',
    ],
    color: 'pink',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
  },
  {
    icon: Bot,
    title: 'AI Agents Workflow',
    description:
      'Intelligent automation powered by AI agents. We design and deploy AI workflows that streamline operations, enhance productivity, and scale your business.',
    features: [
      'Custom AI Agent Development',
      'Workflow Automation',
      'LLM Integration',
      'Chatbot & Virtual Assistants',
      'Process Optimization',
      'AI Strategy Consulting',
    ],
    color: 'violet',
    technologies: ['OpenAI', 'LangChain', 'Python', 'RAG', 'Vector DBs'],
  },
  {
    icon: Briefcase,
    title: 'IT Consulting & Strategy',
    description:
      'Expert guidance to align technology with business goals. We help you plan, evaluate, and execute digital transformation initiatives with confidence.',
    features: [
      'Technology Assessment',
      'Digital Transformation Roadmaps',
      'Architecture Planning',
      'Vendor Evaluation',
      'Cost Optimization',
      'Risk Management',
    ],
    color: 'slate',
    technologies: ['Cloud Strategy', 'DevOps', 'Security Audits', 'Agile', 'ITIL'],
  },
  {
    icon: Headphones,
    title: 'Managed IT Services',
    description:
      'End-to-end IT support so you can focus on your business. We handle helpdesk, device management, and disaster recovery to keep your operations running smoothly.',
    features: [
      'Helpdesk Support',
      'Device Management',
      'Backup & Disaster Recovery',
      'Network Monitoring',
      'Security Management',
      'Proactive Maintenance',
    ],
    color: 'amber',
    technologies: ['MDM', 'Azure AD', 'Veeam', 'ServiceNow', 'Intune'],
  },
  {
    icon: Megaphone,
    title: 'Marketing & PR',
    description:
      'Grow your brand and reach your audience. From paid ads to SEO and social media, we deliver integrated marketing strategies that drive results.',
    features: [
      'Meta & Google Ads',
      'SEO Optimisation',
      'Content Creation',
      'Social Media Handling',
      'Video Editing',
      'Brand Strategy & PR',
    ],
    color: 'rose',
    technologies: ['Google Ads', 'Meta Ads', 'SEMrush', 'Canva', 'Adobe Premiere'],
  },
];

export const serviceTitles = services.map((s) => s.title);
