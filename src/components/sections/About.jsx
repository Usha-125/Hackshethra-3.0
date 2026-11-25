import Moments from "./Moments";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { event } from "../../data/constants";
import {
  Actions,
  CardGrid,
  CardTitle,
  InfoCard,
  PageDescription,
  PageTitle,
  PrimaryLink,
  Section,
} from "./PageElements";

const History = styled.div`
  margin: clamp(32px, 5vw, 64px) 0;
  h2 {
    font-size: clamp(24px, 3vw, 34px);
    margin-bottom: 10px;
  }
  p {
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.7;
  }
  dl {
    display: flex;
    flex-wrap: wrap;
    gap: 20px 8%;
    background: ${({ theme }) => theme.primaryDark};
    justify-content: space-around;
    margin-top: 20px;
    padding: 24px;
  }
  dt {
    font-size: 14px;
  }
  dd {
    font-size: clamp(26px, 4vw, 44px);
    font-weight: 600;
  }
`;
const Organizations = styled(CardGrid)`
  margin: clamp(24px, 4vw, 44px) 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
const Organization = styled(InfoCard)`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .eyebrow {
    color: ${({ theme }) => theme.accent};
    font-family: "IBM Plex Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  p {
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.7;
  }
  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    margin-top: auto;
    padding-top: 12px;
    color: ${({ theme }) => theme.accent};
    text-underline-offset: 4px;
  }
`;
export default function About() {
  return (
    <Section>
      <PageTitle>About HACKKSHETRA</PageTitle>
      <PageDescription>
        {event.name} is a {event.eventType.toLowerCase()} organized by the{" "}
        {event.organizedBy}.
      </PageDescription>
      <Organizations aria-label="About the host institution and organizing department">
        <Organization>
          <span className="eyebrow">Host institution · Mysuru</span>
          <CardTitle>About VVCE</CardTitle>
          <p>
            Vidyavardhaka College of Engineering (VVCE) is the host institution
            for HACKKSHETRA 3.0. The event brings student teams to the VVCE
            Sports Complex in Mysuru for an in-person 24-hour build.
          </p>
          <a href="https://vvce.ac.in/" target="_blank" rel="noreferrer">
            Visit VVCE ↗
          </a>
        </Organization>
        <Organization>
          <span className="eyebrow">Event organizers · CSE</span>
          <CardTitle>Department of Computer Science and Engineering</CardTitle>
          <p>
            The Department of CSE at VVCE organizes HACKKSHETRA. Its academic
            areas include programming, algorithms, artificial intelligence,
            cybersecurity, data science, and software development. The
            department offers undergraduate and postgraduate CSE programs.
          </p>
          <a
            href="https://vvce.ac.in/departments/department-of-computer-science-engineering/"
            target="_blank"
            rel="noreferrer"
          >
            Explore the CSE department ↗
          </a>
        </Organization>
      </Organizations>
      <Moments />
      <CardGrid>
        <InfoCard>
          <CardTitle>Meet in Mysuru</CardTitle>
          {event.dates}
          <br />
          {event.venue}
        </InfoCard>
        <InfoCard>
          <CardTitle>Build as a team</CardTitle>Work offline in teams of{" "}
          {event.teamSize}. Choose an AI domain and define the problem you want
          to solve.
        </InfoCard>
      </CardGrid>
      <History>
        <h2>Previous editions</h2>
        <p>
          HACKKSHETRA 1.0 took place in 2024, followed by HACKKSHETRA 2.0 in
          2025. The event brochure records these historical results.
        </p>
        <dl>
          {[
            ["Team registrations", "450+"],
            ["Participating teams", "50"],
            ["Website clicks", "8K+"],
          ].map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </History>
      <Actions>
        <PrimaryLink as={Link} to="/domains">
          Explore Domains
        </PrimaryLink>
        <PrimaryLink as={Link} $secondary to="/register">
          Registration
        </PrimaryLink>
      </Actions>
    </Section>
  );
}
