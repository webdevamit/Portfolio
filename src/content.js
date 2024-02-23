const logotext = "Amit Chauhan";
const meta = {
  title: "Amit Chauhan",
  description:
    "I’m Amit Chauhan Senior FrontEnd devloper,currently working in Natwest Group",
};

const introdata = {
  title: "I’m Amit Chauhan",
  animated: {
    first: "I am a passionate FrontEnd Developer",
    second:
      "I am building eCommerce and Currency Trading web application since years",
    third: "I am a proud father",
  },
  description:
    "Innovative developer offering 8 years of expertise in web technologies. Skilled in directing development with creative and performance-oriented approach. Quickly learns and master’s new technologies while working in both team and independent settings. Having huge experience in frontend development and has developed a passion for coding, primarily using React. Experience in working Ecommerce based applications and making responsive web application.",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "About my self",
  aboutme:
    "Proud father who is building frontend application since years of experience. Driven by a passion for continuous learning, Stays up to date with the latest industry trends and emerging technologies. Always eager to explore new tools and techniques that can elevate my work and push the boundaries of what is possible in frontend development. This dedication to staying at the cutting edge enables myself to deliver innovative and forward-thinking solutions.",
};
const worktimeline = [
  {
    jobtitle: "Technical Lead",
    where: "Natwest Group",
    date: "2022 to current",
  },
  {
    jobtitle: "Specialist software engineer",
    where: "Larsen & Toubro Infotech",
    date: "2020-2021",
  },
  {
    jobtitle: "Project Manager",
    where: "Webkul Software Pvt Ltd",
    date: "2015-2020",
  },
];

const skills = [
  {
    name: "JavaScript",
    value: 90,
  },
  {
    name: "React",
    value: 90,
  },
  {
    name: "Redux",
    value: 60,
  },
  {
    name: "Redux Thunk",
    value: 85,
  },
  {
    name: "TypeScript",
    value: 80,
  },
  {
    name: "NextJs",
    value: 60,
  },
  {
    name: "React Native",
    value: 60,
  },
];

const services = [
  {
    title: "Enterprise Application",
    description:
      "Ability to create Enterprise UI applications using tools like React, Redux, Thunk, NextJs, Typescript, WebSockets, WebPack etc",
  },
  {
    title: "Mobile Apps",
    description: "Ability to create mobile application using react native.",
  },
  {
    title: "Wordpress Design",
    description:
      "Ability to create WordPress Websites, Plugins, Woocommerce Plugins etc.",
  },
];

const dataportfolio = [
  {
    img: "https://picsum.photos/400/?grayscale",
    description: "Threads clone built with Next js 14 for personal learning.",
    link: "https://github.com/webdevamit/threads",
  },
  {
    img: "https://picsum.photos/400/800/?grayscale",
    description:
      "Next js 14 Dashboard with authentication - https://nextjs-dashboard-rho-olive-92.vercel.app/ ",
    link: "https://github.com/webdevamit/nextjs-dashboard",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description: "React based calender application",
    link: "https://github.com/webdevamit/calendar",
  },
  {
    img: "https://picsum.photos/400/600/?grayscale",
    description: "React based nested comment system.",
    link: "https://github.com/webdevamit/comment-box",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description:
      "Enterprise currency trading application for traders which is used in organization",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    description: "Ecommerce Point of sale system used by outlets.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "amituk546@gmail.com",
  YOUR_PHONE: "+91-8448170602",
  description:
    "In case you want any of the services, help, or you want to hire me as an individual don't hesitate to contact me via email or contact number. ",
  // create an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
  YOUR_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
  YOUR_PUBLIC_KEY: process.env.REACT_APP_PUBLIC_KEY,
};

const socialprofils = {
  github: "https://github.com/webdevamit",
  facebook: "https://www.facebook.com/amy202020",
  linkedin: "https://www.linkedin.com/in/amit-chauhan-a2a26290/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
