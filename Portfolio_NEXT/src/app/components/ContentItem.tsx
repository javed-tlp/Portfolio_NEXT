// /src/components/ContentItem.tsx

import './ContentItem.css';

interface ContentItemProps {
  title: string;
  details?: string;
}

const ContentItem = ({ title, details }: ContentItemProps) => (
  <div className="content-item">
    <div className="title">
      <h3>{title}</h3>
    </div>
    {details && <p>{details}</p>}
  </div>
);

export default ContentItem;
