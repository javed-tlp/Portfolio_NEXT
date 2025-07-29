// /src/pages/Projects.tsx

import Section from "../components/Section";
import ContentItem from "../components/ContentItem";

const Projects = () => (
  <>
    <Section id="projects" title="Featured Projects">
      <div className="content-list">
        {/* Portfolio Website Project */}
        <ContentItem 
          title="Portfolio Website" 
          details={[
            "<strong>Technologies Used:</strong> Next.js, Tailwind CSS, HTML, JavaScript",
            "• This is my personal portfolio, showcasing my skills and projects built with Next.js.",
            "• The site is optimized for performance and responsiveness, making it accessible across various devices.",
            "• Utilizes dynamic routing to showcase projects efficiently.",
            "• Features contact forms for direct communication and inquiries.",
            "• It serves as a comprehensive showcase of my work and accomplishments."
          ]} 
          link="https://javedportfolio.vercel.app/" 
          image="port.png" // Replace with actual image path
        />

        {/* Contact Form Project */}
        <ContentItem 
          title="Contact Form" 
          details={[
            "<strong>Technologies Used:</strong> Angular, Node.js, Express, Nodemailer, TypeScript",
            "• A simple contact form that utilizes Nodemailer for sending emails.",
            "• The backend is deployed on Vercel, while the frontend is hosted on Netlify, seamlessly integrated.",
            "• SMTP settings are generated from Gmail using an app password for secure email sending.",
            "• The recipient email can be dynamically set, allowing flexibility in communication.",
            "• This project demonstrates efficient handling of form submissions and email notifications."
          ]} 
          link="https://backend-repo-gamma.vercel.app" 
          image="contactform.png" // Replace with actual image path
        />

        {/* Dedicated Sales Force Automation (SFA) Project at SimollBath */}
        <ContentItem 
          title="Dedicated Sales Force Automation (SFA) Project at SimollBath" 
          details={[
            "<strong>Technologies Used:</strong> Angular, Node.js, Express.js, XLSX",
            "• Developed a sales force automation system for SimollBath that enhances sales operations and provides advanced reporting capabilities.",
            "• The system enables effective management of sales data and tracking of field sales activities.",
            "• It also features Excel report generation for data analysis, streamlining workflow and improving productivity."
          ]} 
          link="http://simoll.theloyaltypartner.co.in/" 
          image="simoll.png" // Replace with actual image path
        />

        {/* Dedicated Sales Force Automation (SFA) Project at Marmo Solutions */}
        <ContentItem 
          title="Dedicated Sales Force Automation (SFA) Project at Marmo Solutions" 
          details={[
            "<strong>Technologies Used:</strong> Angular, Node.js, Express.js, XLSX",
            "• Created a comprehensive sales force automation tool for Marmo Solutions, leveraging the power of Angular and Node.js.",
            "• This project focuses on automating sales workflows and tracking team performance effectively.",
            "• It integrates with Excel for detailed reporting, facilitating data analysis and decision-making."
          ]} 
          link="http://marmo.theloyaltypartner.co.in/" 
          image="Marmo.jpg" // Replace with actual image path
        />
        {/* Idemitsu Engage App Project */}
        <ContentItem 
          title="Idemitsu Engage App – Sales Force Automation (SFA)" 
          details={[
            "<strong>Technologies Used:</strong> Angular, Node.js, Express.js, MongoDB",
            "• Developed a robust SFA module for Idemitsu, a leading Japanese lubricant company.",
            "• Integrated features for automated order assignment, daily issue resolution workflows, and DMS (Dealer Management System) order processing.",
            "• Implemented multiple administrative provisions to streamline daily operations and field force management.",
            "• The system significantly reduced manual errors, improved turnaround time, and enhanced operational transparency."
          ]}
          link="http://idemitsu.basiq360.com/" // Replace with actual if exists
          image="idemitsu.jpg" // Replace with actual image path
        />
      </div>
    </Section>
  </>
);

export default Projects;
