// /src/components/Section.tsx
interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
  }
  
  const Section = ({ id, title, children }: SectionProps) => (
    <>
    <section id={id} className="section">
      <h2>{title}</h2>
    </section>
      {children}
    </>
  );
  
  export default Section;
  