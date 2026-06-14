import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

 const person: Person = {
  firstName: "Ali",
  lastName: "Monzer",
  name: `Ali Nemer Monzer`,
  role: "Electrical & Electronics Engineering Student",
  avatar: "/images/avatar.png",
  email: "alimonzer904@gmail.com",
  location: "Asia/Beirut",
  languages: ["Arabic", "English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Stay Updated</>,
  description: <>Follow my latest projects and research in power electronics.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/alimonzereee",
    essential: false,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ali-monzer-5b9635282",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/projects/project-01/WHOME2",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio of ${person.name}, ${person.role} specializing in Power Electronics and Control Systems`,
  headline: <>Powering the future with power electronics</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Buck Converter</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: <></>,
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Beirut, Lebanon`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ali Nemer Monzer is an Electrical & Electronics Engineering student in Beirut specializing
        in Power Electronics and Control Systems. He focuses on DC/DC converter design, MPPT,
        motor control, and microcontroller-based system actively turning theoretical concepts
        into practical engineering solutions.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Freelancer",
        timeframe: "Sep 2025 – Present",
        role: "Power Electronics Research and Design Assistant",
        achievements: [
          <>
            Conducting independent research and design work in power electronics, focusing on
            DC/DC converter topologies and control strategies.
          </>,
          <>
            Designing, simulating, and validating power conversion circuits using LTspice,
            LTspice and MATLAB.
          </>,
        ],
        images: [],
      },
      {
        company: "Naim Electric",
        timeframe: "Aug 2025 – Sep 2025",
        role: "Electronics Technician Assistant Intern",
        achievements: [
          <>
            Assisted senior technicians in troubleshooting and maintaining electrical and
            electronic systems.
          </>,
          
        ],
        images: [],
      },
      {
        company: "Marvel Tech",
        timeframe: "Aug 2024",
        role: "Electronics Technician Assistant Intern",
        achievements: [
          <>
            Supported the engineering team in electronics prototyping and component testing.
          </>,
         
        ],
        images: [],
      },
      {
        company: "Our Easy Game Tutoring",
        timeframe: "Sep 2025 – Present",
        role: "Online Tutor",
        achievements: [
          <>
            Delivering online tutoring sessions in engineering and technical subjects,
            helping students build strong foundations in electronics and mathematics.
          </>,
        ],
        images: [],
      },
      {
        company: "Launch Company",
        timeframe: "Sep 2025 – Present",
        role: "Online Tutor",
        achievements: [
          <>
            Providing structured online instruction in electronics and engineering fundamentals
            to a diverse student base.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Al-Maaref University",
        description: (
          <>
            Bachelor of Electrical & Electronics Engineering · Beirut · 2022–Present
            <br />
            Cumulative GPA: 3.92 / 4.0
            <br />
            <ul>
              <li>President, Engineering Club </li>
              <li>Vice-President, IEEE Student Branch </li>
              <li>Delivering tutoring sessions in engineering subjects</li>
            </ul>
          </>
        ),
      },
      {
        name: "Additional Courses",
        description: (
          <>
            <ul>
              <li>Introduction to Power Electronics </li>
              <li>Converter Circuits </li>
              <li>Converter Control </li>
              <li>Electrical Distribution Design </li>
              <li>Practical electronics design series</li>
              <li>Professional electronics design series</li>
              <li>MATLAB OnRamp </li>
              <li>Introduction to C </li>
            </ul>
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Analog Electronics Design",
        description: (
          <>
            <ul>
              <li>Design and implement analog circuits using active and passive components.</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Power Electronics Design",
        description: (
          <>
            <ul>
              <li>Design and analyze different topologies of DC/DC converters.</li>
              <li>Analyze and Simulation single and three phase inverters</li>
              <li>Design and analyze EMC filters.</li>
              </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Control Systems Design",
        description: (
          <>
            <ul>
              <li>Design and implement control strategies for power electronics applications.</li>
              <li>Use MATLAB for control system modeling, analysis, and design.</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Embedded Systems & Microcontrollers",
        description: (
          <>
            <ul>
              <li>Program microcontrollers for control and automation applications.</li>
              <li>Work with Arduino and STM32 platforms for rapid prototyping.</li>
              <li>Integrate firmware with power electronics and sensor interfaces.</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Electronics Analysis & Troubleshooting",
        description: (
          <>
            <ul>
              <li>Diagnose circuit issues with systematic testing and simulation.</li>
              <li>Resolve design and implementation problems in electronics systems.</li>
              <li>Use measurement tools to verify performance and quality.</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Simulation & Analysis Tools",
        description: (
          <>
            <ul>
              <li>LTspice,Pspice and PLECS for power electronics simulation.</li>
              <li>MATLAB for control system modeling and data analysis.</li>
              <li>Logisim and Altium Designer for digital circuits simulation and PCB Design.</li>
            </ul>
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about electronics and engineering...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Engineering projects by ${person.name} in power electronics, control systems, and PCB design`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
