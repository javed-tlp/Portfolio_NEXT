// /src/app/projects/page.tsx
import Section from "../components/Section";
import ContentItem from "../components/ContentItem";

const Projects = () => (
  <Section id="projects" title="Projects">
    <div className="content-list">
      <ContentItem title="Dedicated Sales Force Automation (SFA) Project at SimollBath" details="Technology used - Angular, Node.js, Express.js, XLSX" />
      <ContentItem title="Dedicated Sales Force Automation (SFA) Project at Marmo Solutions" details="Technology used - Angular, Node.js, Express.js, XLSX" />
    </div>
  </Section>
);

export default Projects;
