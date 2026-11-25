import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.border_color};
  border-radius: 12px;
  padding: 16px;
  max-width: ${({ detailed }) => (detailed ? '320px' : '200px')};
  text-align: center;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: ${({ clickable }) => (clickable ? 'translateY(-4px)' : 'none')};
    box-shadow: ${({ clickable }) => (clickable ? 'rgba(23, 92, 230, 0.3) 0px 6px 24px' : 'none')};
  }
`;

const Image = styled.img`
  width: 150px;
  height: ${({ square }) => (square ? '150px' : '120px')};
  border-radius: 8px;
  object-fit: ${({ square }) => (square ? 'cover' : 'contain')};
  background-color: rgba(255, 255, 255, 0.05);
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  white-space: pre-line;
`;

const Description = styled.div`
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text_secondary};
`;

const ProjectCard = ({ project, square }) => {
  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <CardContainer 
      onClick={handleClick} 
      clickable={!!project.link}
      detailed={!!project.description}
    >
      {/* Only render the image if it exists */}
      {project.image && (
        <Image
          src={project.image}
          alt={project.title || "Project Image"}
          square={square}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      )}
      {/* Always render the title */}
      {project.title && <Title>{project.title}</Title>}
      {project.description && <Description>{project.description}</Description>}
    </CardContainer>
  );
};

export default ProjectCard;
