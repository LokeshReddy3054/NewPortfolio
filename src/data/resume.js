import { FaMobileAlt, FaServer, FaDatabase, FaMapMarkedAlt, FaWallet, FaCode } from 'react-icons/fa';

export const resumeData = {
  personalInfo: {
    name: "Lokesh Reddy Polu",
    role: "Flutter, Go & PostgreSQL Developer",
    location: "Nellore, Andhra Pradesh",
    phone: "+91 7287035589",
    email: "lokeshreddypolu@gmail.com",
    linkedin: "https://www.linkedin.com/in/lokesh-reddy-polu-a35bb7233",
    summary: "Flutter and Go developer with 2+ years of experience building end-to-end e-commerce and delivery applications for Android and iOS. Expert in payment gateway integration (PhonePe, Razorpay), custom wallet systems, and REST API integrations using Dio and Go/PostgreSQL backends. Skilled in state management (GetX, Provider), real-time delivery tracking, and high-engagement mobile experiences."
  },
  skills: [
    {
      category: "Mobile Development",
      icon: FaMobileAlt,
      items: ["Flutter", "Dart", "GetX", "Provider", "Streams", "Android", "iOS"]
    },
    {
      category: "Backend & Database",
      icon: FaServer,
      items: ["Go (Golang)", "PostgreSQL", "REST APIs", "Firebase Cloud Messaging"]
    },
    {
      category: "Tools & Integrations",
      icon: FaCode,
      items: ["Git", "Payment Gateways (PhonePe, Razorpay)", "WebSockets", "Apache Pulsar"]
    },
    {
      category: "Maps & Location",
      icon: FaMapMarkedAlt,
      items: ["OpenStreetMap", "OSRM", "MapTiler", "Live Tracking"]
    }
  ],
  experience: [
    {
      company: "Billion Bright Solutions LLP",
      role: "Software Developer",
      location: "Nellore, India",
      period: "June 2023 – Present",
      description: "Developed and maintained multiple fully functional e-commerce and delivery apps for Android and iOS.",
      achievements: [
        "Built end-to-end e-commerce flows with payment gateway integrations (PhonePe, Razorpay).",
        "Designed backend services in Go and PostgreSQL for managing Products, Orders, and Payments.",
        "Implemented real-time delivery tracking using OpenStreetMap, OSRM, and WebSockets.",
        "Created 6+ reusable e-commerce app templates to reduce time to market."
      ]
    }
  ],
  projects: [
    {
      title: "Delivery App",
      description: "Delivery partner app with live order tracking, navigation, and proof of delivery.",
      tech: ["Flutter", "Go", "PostgreSQL", "OpenStreetMap", "WebSockets"],
      image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=1000" // Placeholder
    },
    {
      title: "Business App",
      description: "Merchant app for managing products, orders, and payouts with push notifications.",
      tech: ["Flutter", "Go", "PostgreSQL", "FCM"],
      image: null
    },
    {
      title: "E-commerce Template Suite",
      description: "Collection of reusable app templates with modular architecture and custom packages.",
      tech: ["Flutter", "GetX", "Provider", "Dio"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" // Placeholder
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in ECE",
      school: "PONNIYAH RAMAJAYAM INSTITUTE OF SCIENCE & TECHNOLOGY",
      location: "Thanjavur",
      year: "2023"
    }
  ]
};
