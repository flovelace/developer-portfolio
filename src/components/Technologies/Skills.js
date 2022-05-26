import { DiBootstrap, DiCss3, DiGit, DiHtml5, DiJavascript1, DiJira, DiMongodb, DiMysql, DiPython, } from "react-icons/di";
import { SiNodeDotJs, SiGraphql, SiTypescript } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "JavaScript",
    Component: DiJavascript1,
    title: "JavaScript",
    Description: () => <>I program full stack web applications using JavaScript.</>,
  },
  {
    slug: "TypeScript",
    Component: SiTypescript,
    title: "TypeScript",
    Description: () => <>I also like to use TypeScript to program web stack web applications.</>

  },
  {
    slug: "react",
    Component: RiReactjsFill,
    title: "React",
    Description: () => <>I use React to build responsive single page web applications.</>,
  },
  {
    slug: "node",
    Component: SiNodeDotJs,
    title: "Node.JS",
    Description: () => <>Using Node.JS as my runtime environment is invaluable to my builds.</>,
  },
  {
    slug: "mongo",
    Component: DiMongodb,
    title: "MongoDB",
    Description: () => <>I am proficient in MongoDB, and use it as a freeform database for many applications.</>,
  },
  {
    slug: "graphQL",
    Component: SiGraphql,
    title: "GraphQL",
    Description: () => <>I have used graphQL to replace REST APIs.</>,
  },
  {
    slug: "SQL",
    Component: DiMysql,
    title: "MySQL2",
    Description: () => <>I am proficient with building MySQL databases, and performing CRUD operations.</>,
  },
  {
    slug: "HTML5",
    Component: DiHtml5,
    title: "HTML5",
    Description: () => <>HTML5 is the backbone for any web application!</>,
  },
  {
    slug: "CSS3",
    Component: DiCss3,
    title: "CSS3",
    Description: () => <>I love to style applications with CSS3.</>,
  },
  {
    slug: "Bootstrap",
    Component: DiBootstrap,
    title: "Bootstrap",
    Description: () => <>Bootstrap is one of my favourite libraries for manageable and maintainable web design.</>,
  },
  {
    slug: "Python",
    Component: DiPython,
    title: "Python",
    Description: () => <>As a developer, I am always learning. I am currently learning Python.</>,
  },
  {
    slug: "Git",
    Component: DiGit,
    title: "Git",
    Description: () => <>Git is mandatory for every developer; I push, pull, and code review.</>,
  },
  {
    slug: "JIRA",
    Component: DiJira,
    title: "JIRA",
    Description: () => <>I have practised workplace Agile software development using JIRA.</>,
  },
];
