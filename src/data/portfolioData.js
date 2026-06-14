export const personalInfo = {
  name: "PRAVEEN KUMAR KUSHWAHA",
  title: "Full Stack Developer",
  description: "Full Stack Developer specializing in cloud-based solutions, FinOps, and AI-integrated applications. Currently working at Cloudkeeper on enterprise cloud cost forecasting across AWS, Azure, and GCP",
  skills: ['Spring Boot', 'React.js', 'Java', 'AWS', 'Azure', 'GCP', 'Snowflake', 'Docker'],
  email: "praveen20005kumar@gmail.com",
  phone: "+91 9366539798",
  location: "Noida, India",
  resumeUrl: `${import.meta.env.BASE_URL}resumepr.pdf`,
  profileImage: `${import.meta.env.BASE_URL}profile.png`,
  portfolio: "pravportfolio.me",
  social: {
    github: "https://github.com/PraveenGithubAccnt",
    linkedin: "https://www.linkedin.com/in/pravkrk",
    facebook: "https://www.facebook.com/praveen.kushwaha.3720?mibextid=ZbWKwL",
    instagram: "https://www.instagram.com/praveen_did_not?igsh=MXdmaG5raXEwNHl6NA=="
  }
};

export const experience = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Cloudkeeper (FinOps)",
    location: "Noida, India",
    period: "Jan 2025 – Present",
    type: "Full-time",
    responsibilities: [
      "Engineered full-stack features to forecast enterprise cloud expenditure across AWS, Azure, and GCP using Spring Boot and Snowflake, delivering real-time cost visibility",
      "Designed optimised SQL schemas on Amazon RDS and built Spring Boot REST APIs connecting React dashboards to Snowflake data pipelines, improving report accuracy and speed",
      "Developed responsive React.js interfaces with Tailwind CSS for multi-cloud spend analytics, enabling intuitive data exploration for enterprise clients",
      "Delivered features supporting all three major cloud providers (AWS, Azure, GCP), ensuring cross-platform compatibility across the product suite"
    ],
    technologies: ["Spring Boot", "React.js", "Snowflake", "AWS", "Azure", "GCP", "RDS", "Tailwind CSS", "REST APIs", "Redis", "Docker", "Jenkins", "RabbitMQ"],
    current: true
  }
];

export const education = [
  {
    id: 1,
    degree: "Master Degree",
    year: "2023 - 2025",
    institution: "Roorkee Institute of Technology",
    description: "Pursued my Master of Computer Applications (MCA) from Roorkee Institute of Technology, affiliated with Veer Madho Singh Bhandari Uttarakhand Technical University, Dehradun."
  },
  {
    id: 2,
    degree: "Bachelor Degree",
    year: "2020 - 2023",
    institution: "Rajiv Gandhi University",
    description: "Pursued my Bachelor of Computer Applications (BCA) from Rajiv Gandhi University, a prestigious Central University in Arunachal Pradesh."
  },
  {
    id: 3,
    degree: "Higher Secondary Education",
    year: "2016 - 2019",
    institution: "Kendriya Vidyalaya Tezu",
    description: "Pursued my higher secondary education (10+2) in the Science stream at Kendriya Vidyalaya Tezu, located in the Arunachal Pradesh."
  }
];

export const technicalSkills = [
  { name: "Java", level: 65, icon: "java" },
  { name: "Spring Boot", level: 60, icon: "spring" },
  { name: "React.js", level: 50, icon: "react" },
  { name: "JavaScript", level: 55, icon: "javascript" },
  { name: "React Native", level: 50, icon: "react" },
  { name: "HTML", level: 70, icon: "html5" },
  { name: "CSS", level: 60, icon: "css3" }
];

export const professionalSkills = [
  { name: "Creativity", level: 80 },
  { name: "Communication", level: 75 },
  { name: "Problem Solving", level: 75 },
  { name: "Teamwork", level: 75 }
];

export const projects = [
  {
    id: 1,
    title: "AI Study Companion App",
    subtitle: "React Native, Node.js, Express.js, Firebase, Gemini API",
    github: "https://github.com/PraveenGithubAccnt/Study-Buddy",
    download: "https://github.com/PraveenGithubAccnt/Study-Buddy/releases/tag/v1.0.0",
    shortDesc: "AI-powered mobile application to help students enhance their learning experience using intelligent search and AI-powered tools",
    fullDesc: "Integrated Gemini API with custom prompt engineering for topic explanations and doubt-solving, improving student learning efficiency by 35%. Built content discovery pipeline using YouTube Data & Google Custom Search APIs (50+ videos, 100+ PDFs/topic) with a LangSearch ranking filter to surface top 5 results, boosting accuracy by 40%. Secured all external API calls via Node.js + Express.js backend, supporting 1,000+ requests/day with scalable architecture.",
    technologies: ["React Native", "Gemini API", "Node.js", "Express.js", "Firebase", "YouTube API", "Google Custom Search API"]
  },
  {
    id: 2,
    title: "Voice Assistant For Websites Automation",
    subtitle: "Using Python & NLP",
    github: "https://github.com/PraveenGithubAccnt/voice_assistant_in-_Hindi_English.git",
    shortDesc: "AI-driven multilingual voice assistant for website automation using Python",
    fullDesc: "Built an AI-driven multilingual voice assistant (English/Hindi) leveraging Google Web Speech API for speech recognition, achieving 90% accuracy in voice-based navigation. Automated query responses for 100+ course details and admission FAQs, reducing manual support workload by 45%. Leveraged the NLP module's speech-to-text (speech_recognition) and text-to-speech (pyttsx3) capabilities to process over 100 daily chatbot-query interactions, enhancing college website accessibility by 30%.",
    technologies: ["Python", "NLP", "Google Web Speech API", "pyttsx3", "speech_recognition"]
  },
  {
    id: 3,
    title: "Fitmate App",
    subtitle: "Fitness & Nutrition Tracker",
    github: "https://github.com/PraveenGithubAccnt/Fitmate-App",
    shortDesc: "Mobile fitness application built with React Native Expo for personalized fitness and nutrition support",
    fullDesc: "The app offers customized exercise recommendations based on individual fitness goals, allowing users to explore a wide range of exercise variations. FitMate generates tailored diet plans to complement workout routines, helping users achieve their health objectives effectively. With a responsive and user-friendly interface, the app enables users to track their daily fitness progress and stay consistent on their journey, whether their goal is to build muscle, lose weight, or maintain an active lifestyle.",
    technologies: ["React Native Expo", "ExerciseDB API", "Fitness Tracking"]
  }
];
