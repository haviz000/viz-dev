import { AssetPasar, GolangLogo, Spotiviz } from "@/assets";

export const TimelineData = [
  {
    company: "Dans Multi Pro",
    jobRole: "Frontend Engineer",
    period: "Mar 2024 - Present",
    reports: [
      "Developed and maintained modern JavaScript (ES6+) applications, leveraging advanced syntax and features to build scalable and efficient codebases.",
      "Architected React.js applications by utilizing component lifecycle methods, hooks, and advanced design patterns such as Higher-Order Components (HOCs) and render props.",
      "Designed dynamic and reusable UI components using Styled-Components, enhancing development efficiency and maintaining a consistent design system.",
      "Implemented Micro-Frontend Architecture using frameworks like Module Federation and Single-SPA to deliver scalable and modular front-end solutions.",
      "Optimized application performance and build processes by configuring and managing bundlers such as Webpack, Vite, and Parcel.",
      "Collaborated effectively on team projects by leveraging Git for version control, ensuring smooth codebase management and peer collaboration.",
      "Enhanced application reliability by writing and maintaining comprehensive test suites using Jest, React Testing Library, and Cypress.",
      "Promoted accessibility by implementing ARIA roles, semantic HTML, and keyboard navigation, ensuring inclusive user experiences for all audiences.",
    ],
  },
  {
    company: "RubyH",
    jobRole: "Software Engineer",
    period: "Dec 2023 - Mar 2024",
    reports: [
      "Collaborated with cross-functional teams to understand software requirements and translate them into technical solutions.",
      "Developed web applications using Next.js for front-end development.",
      "Built server-side applications and microservices using Golang.",
      "Designed and optimized database schemas using PostgreSQL, ensuring data integrity and performance.",
      "Implemented Pub/Sub systems for real-time data processing and communication.",
      "Created comprehensive Technical Specification Documents (TSD) to outline project requirements, architecture, and implementation details for frontend development.",
      "Optimized marketplace connections to enhance performance and scalability.",
      "Conducted code reviews to ensure code quality, adherence to coding standards, and implementation of best practices.",
      "Participated in PRD reviews, other TSD reviews, project estimation, daily stand-ups, and retrospective meetings to facilitate efficient project management and collaboration.",
      "Resolved technical issues and bugs in a timely manner, maintaining the stability and reliability of software applications.",
      "Served as the Scrum Master for a single team, facilitating Agile ceremonies including daily stand-ups and retrospectives.",
      "Managed and maintained Storybook for UI component development, ensuring consistency and reusability across projects.",
    ],
  },
  {
    company: "Efishery",
    jobRole: "Jr. Security Analyst",
    period: "Sep 2023 - Dec 2023",
    reports: [
      "Assisted in managing user identities and access rights within the organization's IAM system.",
      "Participated in the implementation and maintenance of security protocols and procedures.",
      "Conducted security assessments and audits to identify vulnerabilities and recommend remediation measures.",
      "Supported incident response activities and performed forensic analysis when security incidents occurred.",
      "Assisted in the development and delivery of security awareness training programs for employees.",
    ],
  },
  {
    company: "Hypefast",
    jobRole: "Software Engineer",
    period: "May 2023 - Nov 2023",
    reports: [
      "Collaborated with cross-functional teams to understand software requirements and translate them into technical solutions.",
      "Developed web applications using Next.js for front-end development.",
      "Built server-side applications and microservices using Golang.",
      "Designed and optimized database schemas using PostgreSQL, ensuring data integrity and performance.",
      "Implemented Pub/Sub systems for real-time data processing and communication.",
      "Conducted code reviews to ensure code quality, adherence to coding standards, and implementation of best practices.",
      "Served as the Scrum Master for a single team, facilitating Agile ceremonies including daily stand-ups and retrospectives.",
    ],
  },
  {
    company: "Prifat",
    jobRole: "Penetration Tester",
    period: "Nov 2022 - Jan 2023",
    reports: [
      "Automated Scanning: Utilize automated tools like Burp Suite, OWASP ZAP, Nessus, or Acunetix for vulnerability discovery.",
      "Mobile App Security: Analyze mobile applications for security flaws, including reverse engineering APK/IPA files, and testing APIs.",
      "Manual Testing: Perform in-depth manual penetration testing to uncover business logic flaws and advanced security issues.",
      "API Security Testing: Assess REST and GraphQL APIs for misconfigurations, injection attacks, and other vulnerabilities.",
      "Reporting: Create detailed penetration testing reports that include findings, risk levels, and actionable recommendations.",
      "Compliance Testing: Ensure that applications comply with standards like OWASP ASVS, OWASP Mobile Top 10, PCI DSS, or GDPR.",
    ],
  },
  {
    company:
      "Ministry of Communication and Information Technology of the Republic of Indonesia",
    jobRole: "Cyber Security Analyst",
    period: "Aug 2022 - Dec 2022",
    reports: [
      "Threat Analysis: Monitor and analyze security incidents to identify vulnerabilities and mitigate risks.",
      "Incident Response: Respond to security breaches and incidents, conducting root cause analysis and creating incident reports.",
      "Network Security: Protect network infrastructure by implementing access controls and securing communication protocols.",
    ],
  },
  {
    company: "GOJEK",
    jobRole: "Frontend Engineer",
    period: "Feb 2022 - Aug 2022",
    reports: [
      "Migration GoPlay web from client-side rendering to server-side rendering with ReactJS & NextJS.",
      "Learned how to improve Software Development Life Cycle (SDLC) processes.",
      "Collaborated with other teams such as product/project managers to exchange ideas and design applications/websites.",
    ],
  },
];

export const ProjectsData = [
  {
    projectName: "E-pasar",
    desc: "Build by react js as frontend and express as backend",
    liveUrl: "https://pasar-jaya.vercel.app/",
    date: "Jul 2021",
    codeUrl: "https://github.com/haviz000/i-learning",
    Image: AssetPasar,
  },
  {
    projectName: "SpotivizApp",
    desc: "Spotiviz is a web app built using React, Tailwind, Axios, and Spotify API which provides personalised data using your Spotify account and Make a playlist",
    liveUrl: "http://spotiviz.vercel.app/",
    codeUrl: "https://github.com/haviz000/SpotivizApp",
    date: "Jul 2022",
    Image: Spotiviz,
  },
  {
    projectName: "Instagram Rest API with GO",
    desc: "Create instagram API clone with golang",
    codeUrl: "https://github.com/haviz000/SpotivizApp",
    date: "Apr 2023",
    Image: GolangLogo,
  },
  {
    projectName: "API multi level user Golang",
    desc: "Create iAPI multi level user Golang",
    codeUrl: "https://github.com/haviz000/API-multi-level-user-golang",
    date: "Apr 2023",
    Image: GolangLogo,
  },
];
