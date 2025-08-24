import type {
    TNavLink,
    TService,
    TTechnology,
    TExperience,
    TTestimonial,
    TProject,
    TCertification,
  } from "../types";
  
  import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    figma,
    tailwind,
    nodejs,
    mongodb,
    git,
    powerbi,
    R,
    amrdo,
    snoonu,
    betterhelp,
    mindmender,
    chatlounge,
    scikit,
    python,
    tensorflow,
    sql,
    mysql,
  } from "../assets";
  
  export const navLinks: TNavLink[] = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    { 
      id: "certifications", 
      title: "Certifications" }, 
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services: TService[] = [
    {
      title: "Data Analyst",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "ML Engineer",
      icon: creator,
    },
  ];
  
  const technologies: TTechnology[] = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "powerbi",
      icon: powerbi,
    },
    {
      name: "R",
      icon: R,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "scikit-learn",
      icon: scikit,
    },
    {
      name: "tensorflow",
      icon: tensorflow,
    },
    {
      name: "git",
      icon: git,
    },

  ];
  
  const experiences: TExperience[] = [
    {
      title: "Operations Executive",
      companyName: "Snoonu",
      icon: snoonu,
      iconBg: "#383E56",
      date: "March 2025 - August 2025",
      points: [
        "Manage high-volume inbound and outbound call operations, coordinating task flow across live delivery operations via tools including Slack, Falcon Flex, Snoonu Action Center, and Maqsam.",
        "Oversee coordination between delivery drivers, logistics teams, and internal support to ensure accurate and timely order fulfilment.",
        "Monitor and optimize performance metrics—such as response times, call resolution rates, and order completion—to drive continuous operational improvements.",
        "Triage and escalate incidents, resolving delivery disruptions, system issues, and customer inquiries efficiently.",
        "Support onboarding and training of team members on operational tools and communication protocols for smoother workflow execution."
      ]
    },
    {
      title: "Data Analyst",
      companyName: "AMRDO Pakistan",
      icon: amrdo,
      iconBg: "#E6DEDD",
      date: "March 2023 - Febraury 2025",
      points: [
        "Collected, cleaned, and analyzed large datasets to uncover trends and insights that supported strategic decision-making.",
        "Developed interactive dashboards and reports using tools like Excel, Power BI, and SQL to monitor KPIs and project performance.",
        "Automated recurring data processes to improve operational efficiency and reduce reporting time.",
        "Collaborated with cross-functional teams to identify data needs, design custom reports, and provide actionable insights.",
        "Conducted ad-hoc analysis and prepared data visualizations for senior leadership to guide business strategies."
      ],
    },
  ];
  
  const testimonials: TTestimonial[] = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rahim proved me wrong.",
      name: "Musadiq",
      designation: "Assoc. Software Developer",
      company: "Hudson Pharma",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQH7YHLL40l3Sw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718792925760?e=1758758400&v=beta&t=y1hIAYcb2HVEHtyz11p1DLO4YCpIIaSxuY8Bvj5o6xk",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rahim does.",
      name: "Sehba Navaid",
      designation: "Software Engineer",
      company: "SZABIST",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGX6RYHMOtmOA/profile-displayphoto-shrink_200_200/B56ZYhosnuGsAY-/0/1744321040322?e=1758758400&v=beta&t=lYwHgoGh3vnGBWiPHkeS0cEY5XMh2C7t-edYCjrndSc",
    },
    {
      testimonial:
        "After Rahim optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Abdul Hadi",
      designation: "CS Graduate",
      company: "SZABIST",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects: TProject[] = [
    {
      name: "Mind Mender",
      description:
        "An AI-powered web app that detects emotions from text, voice, and video in real time, visualizing results in a clean, easy-to-read dashboard.",
      tags: [
        {
          name: "Python-Flask",
          color: "blue-text-gradient",
        },
        {
          name: "CNN/LSTM & Xception",
          color: "pink-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
      ],
      image: mindmender,
      sourceCodeLink: "https://github.com/rahimalee1",
    },
    {
      name: "Better Help",
      description:
        "A MERN Stack Web application that enables users to search for best doctors, book appointments, receive and share reports, and search for nearby pharmacies.",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "React & Node.js",
          color: "green-text-gradient",
        },
      ],
      image: betterhelp,
      sourceCodeLink: "https://github.com/rahimalee1",
    },
    {
      name: "Chat Lounge",
      description:
        "A MERN real-time chat app with secure auth, 1-to-1 & group chats, message history, and emoji/media sharing—React+SCSS UI, Socket.IO for instant updates..",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "React & Node.js",
          color: "green-text-gradient",
        },
      ],
      image: chatlounge,
      sourceCodeLink: "https://github.com/rahimalee1",
    },
  ];

  const certifications: TCertification[] = [
    {
      name: "Google Advanced Data Analytics",
      provider: "Google",
      image:
        "https://images.credly.com/size/340x340/images/9267a387-1a51-4ebe-8c05-976a5ec4c3d0/image.png",
      description:
        "Completed the Google Advanced Data Analytics Professional Certificate.",
      credentialUrl: "https://www.credly.com/badges/04f1be18-af49-44d3-b371-33195cc8b769",
    },
    {
      name: "Google IT Automation with Python",
      provider: "Google",
      image:
        "https://images.credly.com/size/340x340/images/efbdc0d6-b46e-4e3c-8cf8-2314d8a5b971/GCC_badge_python_1000x1000.png",
      description:
        "Earned the Google IT Automation with Python Professional Certificate.",
      credentialUrl: "https://www.credly.com/badges/800a3d37-748e-4efa-b024-3598a69142cb",
    },
    {
      name: "Google Business Intelligence",
      provider: "Google",
      image:
        "https://images.credly.com/size/340x340/images/cbe961ef-3536-47a1-be43-14c461a3216e/image.png",
      description:
        "Completed the Google Business Intelligence Certificate.",
      credentialUrl: "https://www.credly.com/badges/dcd65569-ec45-4a80-b761-d876a0aa1919",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects , certifications };