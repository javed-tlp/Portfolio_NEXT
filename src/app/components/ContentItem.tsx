import './ContentItem.css';

interface ContentItemProps {
  title: string;
  details?: string[]; // Details will contain HTML strings
  link?: string; // Make link optional
  image?: string; // Add image prop
}

const ContentItem = ({ title, details = [], link, image }: ContentItemProps) => (
  <div className="content-item">
    <div className="content-text">
      <div className="title">
        <h3>{title}</h3>
      </div>
      {Array.isArray(details) && details.map((detail, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: detail }} />
      ))}
    </div>
    {image ? ( // Conditional rendering of the image
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="content-image" />
      </a>
    ) : null}
  </div>
);

export default ContentItem;
