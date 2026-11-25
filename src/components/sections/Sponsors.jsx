import styled from "styled-components";
import { collaborators } from "../../data/constants";
import {
  InfoCard,
  PageDescription,
  PageTitle,
  Section,
} from "./PageElements";

const CollaboratorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 370px), 1fr));
  gap: clamp(16px, 2.4vw, 26px);
  margin-top: clamp(28px, 5vw, 48px);
`;

const CollaboratorCard = styled(InfoCard)`
  min-height: 230px;
  display: grid;
  grid-template-columns: minmax(110px, 0.75fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(16px, 2vw, 24px);
  padding: clamp(18px, 2.8vw, 30px);
  border-radius: 10px;
  background:
    radial-gradient(ellipse at 5% 0%, rgba(85, 217, 244, 0.09), transparent 56%),
    ${({ theme }) => theme.card};
  .logo {
    display: grid;
    min-height: 124px;
    padding: 14px;
    place-items: center;
    border: 1px solid rgba(85, 217, 244, 0.16);
    border-radius: 8px;
    background: linear-gradient(145deg, #f8fbff, #e6edf6);
    img {
      display: block;
      width: min(100%, 160px);
      height: 82px;
      object-fit: contain;
    }
  }
  .index {
    color: ${({ theme }) => theme.accent};
    font: 600 11px/1.4 "IBM Plex Mono", monospace;
    letter-spacing: 0.14em;
  }
  h2 {
    margin: 8px 0 3px;
    font-size: clamp(19px, 2.4vw, 24px);
    letter-spacing: -0.035em;
  }
  .role {
    color: ${({ theme }) => theme.text_secondary};
    font-size: 14px;
  }
  .website {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    margin-top: 10px;
    color: ${({ theme }) => theme.accent};
    font-size: 14px;
    font-weight: 600;
    text-underline-offset: 4px;
  }
  &:hover .logo {
    border-color: rgba(85, 217, 244, 0.42);
  }
  @media (max-width: 480px) {
    min-height: 0;
    grid-template-columns: 90px minmax(0, 1fr);
    gap: 14px;
    .logo {
      min-height: 86px;
      padding: 9px;
      img {
        height: 62px;
      }
    }
  }
`;

export default function Sponsors() {
  return (
    <Section>
      <PageTitle>Our collaborators</PageTitle>
      <PageDescription>
        HACKKSHETRA 3.0 is made stronger by the organizations building this
        experience with us.
      </PageDescription>
      <CollaboratorGrid aria-label="HACKKSHETRA collaborators">
        {collaborators.map((collaborator, index) => (
          <CollaboratorCard key={collaborator.id}>
            <a
              className="logo"
              href={collaborator.website}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${collaborator.name} website`}
            >
              <img
                src={collaborator.logo}
                alt={`${collaborator.name} logo`}
                loading="lazy"
                decoding="async"
              />
            </a>
            <div>
              <span className="index">
                COLLABORATOR // {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{collaborator.name}</h2>
              <p className="role">{collaborator.role}</p>
              <a
                className="website"
                href={collaborator.website}
                target="_blank"
                rel="noreferrer"
              >
                Visit website ↗
              </a>
            </div>
          </CollaboratorCard>
        ))}
      </CollaboratorGrid>
    </Section>
  );
}
