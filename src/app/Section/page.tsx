// src/app/Section/page.tsx
import React from 'react';
import Section from '../components/Section'; // Adjust the import path as necessary

const Page: React.FC = () => {
  return (
    <Section id="section-1" title="Section Title">
      {/* Your content goes here */}
      <p>This is the content for this section.</p>
    </Section>
  );
};

export default Page;
