import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am a passionate Computer Science and Engineering student specializing in AI & ML at VIT Chennai. With a strong foundation in full-stack development and machine learning, I strive to create innovative solutions that leverage cutting-edge technologies. My goal is to contribute to projects that make a meaningful impact and drive technological advancements.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Computer Science and Engineering student with a specialization in AI & ML at VIT Chennai. With a CGPA of 9.4, I consistently rank in the top 20% of my department. My journey in technology began with a deep curiosity for how things work, and it has evolved into a passion for developing innovative solutions. I have hands-on experience with various technologies, including React, Node.js, Python, and machine learning libraries like TensorFlow and Scikit-learn. I thrive in collaborative environments and enjoy solving complex problems. Outside of coding, I'm actively involved in student clubs, taking on leadership roles to enhance my organizational and interpersonal skills.`;

export const EXPERIENCES = [
  {
    year: "January 2024 - Present",
    role: "General Secretary",
    company: "YUVA Club, VIT Chennai",
    description: `Spearheaded planning, coordination, and execution of multiple club events. Managed logistics, allocated resources, and ensured smooth event execution, enhancing overall efficiency and success of club activities.`,
    technologies: ["Event Management", "Leadership", "Resource Allocation"],
  },
  {
    year: "September 2023 - Present",
    role: "Marketing Lead",
    company: "NexSeed Club, VIT Chennai",
    description: `Pivotal in engaging students and promoting club activities. Implemented various marketing techniques to attract audience and increase event footfall.`,
    technologies: ["Marketing", "Student Engagement", "Event Promotion"],
  },
  {
    year: "2022 - 2026",
    role: "B.Tech Student",
    company: "VIT Chennai",
    description: `Pursuing B.Tech in CSE with specialization in AI&ML. Consistently improved performance every semester, maintaining a top 20% ranking within the department.`,
    technologies: ["AI", "ML", "Computer Science"],
  },
];

export const PROJECTS = [
  {
    title: "Kural - Tamil Transcription Service",
    image: project1,
    description:
      "Building a Tamil Speech to Text Transcriber using the Hugging-face faster-whisper model. It transcribes voice in real-time and we're working on implementing a Deep Learning model from scratch.",
    technologies: ["Python", "Hugging-face", "DeepL"],
  },
  {
    title: "NetIQ - Network Traffic Classifier",
    image: project2,
    description:
      "A GUI application for classifying network traffic based on application type. Supports CSV file upload, data preprocessing, and classification using algorithms like Random Forest, kNN, Naive Bayes, and SVM.",
    technologies: ["Python", "ML", "GUI"],
  },
  {
    title: "DocConnect - Appointment System",
    image: project3,
    description:
      "A MERN stack application that streamlines medical appointment scheduling. Features include user authentication, appointment booking, doctor availability management, and notification updates.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "EventVista - Event Recommendation and Mailing Bot",
    image: project4,
    description:
      "An automation bot that scrapes events from VIT Chennai's website, categorizes them using the Hugging-Face BART model, and emails them to students based on their preferred categories.",
    technologies: ["Python", "Hugging-Face", "SMTP"],
  },
  {
    title: "Supreme Court Hearings Binary Classifier",
    image: project5,
    description:
      "A machine learning project utilizing raw Indian Supreme Court hearing data to create a binary classifier. This classifier, developed using an LSTM model from TensorFlow, aims to predict outcomes with an accuracy of 60%. The project involved extensive data preprocessing and implementation from scratch.",
    technologies: ["Python", "TensorFlow", "LSTM"],
  },
];

export const CONTACT = {
  address: "VIT Chennai, Tamil Nadu, India - 600127",
  phoneNo: "+91-8106755771",
  email: "peyushgedela@gmail.com",
};
