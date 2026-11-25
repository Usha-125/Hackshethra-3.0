import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { event, experiences, skills } from "../../data/constants";
import Hero from "./Hero";
import { PrimaryLink, Section } from "./PageElements";

const Body = styled.div`
  @keyframes programme-enter {
    from {
      transform: translateY(14px);
      opacity: 0.85;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @supports (animation-timeline: view()) {
    @media (prefers-reduced-motion: no-preference) {
      > section > div,
      > section > h2,
      > section > dl,
      > section > ol {
        animation: programme-enter linear both;
        animation-timeline: view();
        animation-range: entry 0% entry 70%;
      }
    }
  }

  position: relative;
  padding: 0 max(16px, 4vw) clamp(32px, 4vw, 64px);
  h2 {
    font-size: clamp(30px, 4vw, 60px);
    line-height: 1.02;
    letter-spacing: -0.055em;
  }
  p {
    line-height: 1.55;
  }
`;
const Spread = styled(Section)`
  width: min(100%, 1320px);
  margin-block: clamp(28px, 5vw, 72px);
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: clamp(24px, 5vw, 80px);
  align-items: center;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;
const TextLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: inherit;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 5px;
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
  transition: color 0.18s ease;
`;
const Intro = styled.div`
  p {
    font-size: clamp(18px, 1.7vw, 26px);
    letter-spacing: -0.025em;
    margin: 18px 0 8px;
    max-width: 50ch;
  }
`;
const Facts = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: clamp(18px, 2.4vw, 30px);
  border: 1px solid ${({ theme }) => theme.border_color};
  border-radius: 8px;
  background:
    radial-gradient(ellipse at 100% 0%, rgba(35, 122, 161, 0.12), transparent 58%),
    ${({ theme }) => theme.card};
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.14);
  gap: 24px 16px;
  div {
    display: flex;
    flex-direction: column-reverse;
  }
  dt {
    color: ${({ theme }) => theme.text_secondary};
  }
  dd {
    font-weight: 650;
    font-size: clamp(25px, 3.5vw, 54px);
    letter-spacing: -0.06em;
    line-height: 1.1;
  }
  @media (max-width: 760px) {
    border: 0;
    padding: 16px 0;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    dd {
      font-size: clamp(17px, 5vw, 28px);
    }
    dt {
      font-size: 13px;
    }
  }
`;
const Index = styled(Spread)`
  padding: 0;
  background: ${({ theme }) => theme.card_light};
  grid-template-columns: 1.1fr 1fr;
  gap: 0;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border_color};
  border-radius: 8px;
  box-shadow: 0 24px 56px rgba(0, 0, 0, 0.2);
  > div:first-child {
    padding: clamp(22px, 3.6vw, 52px);
  }

  align-items: stretch;
  button {
    display: block;
    width: 100%;
    text-align: left;
    background: none;
    border: 0;
    color: ${({ theme }) => theme.text_secondary};
    font: inherit;
    font-weight: 550;
    font-size: clamp(18px, 1.7vw, 27px);
    padding: 12px;
    border-radius: 4px;
    border-left: 2px solid transparent;
    transition: background 0.2s, border-color 0.2s, color 0.2s;
    &:hover {
      background: ${({ theme }) => theme.bgLight};
    }
    cursor: pointer;
  }
  button[aria-pressed="true"] {
    background: rgba(85, 217, 244, 0.08);
    border-left-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.white};
  }
  button[aria-pressed="true"]::before {
    content: "→ ";
    color: ${({ theme }) => theme.accent};
  }
  h2 {
    margin-bottom: 14px;
  }
  .preview {
    perspective: 900px;
    background:
      radial-gradient(ellipse at 82% 16%, rgba(26, 142, 171, 0.22), transparent 48%),
      linear-gradient(145deg, #0d1b2c, #091323);
    padding: clamp(22px, 3.6vw, 52px);
    border-left: 2px dashed rgba(19, 173, 199, 0.38);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 22px;
  }
  .preview-panel {
    width: 100%;
    transform-origin: top center;
    backface-visibility: hidden;
  }
  .preview-panel .focus-areas {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    list-style: none;
    margin-top: 16px;
  }
  .preview-panel .focus-areas li {
    padding: 6px 9px;
    border: 1px solid rgba(85, 217, 244, 0.2);
    border-radius: 3px;
    color: ${({ theme }) => theme.text_primary};
    font-size: 12px;
  }
  h3 {
    font-size: clamp(25px, 3.2vw, 48px);
    line-height: 1.05;
    letter-spacing: -0.05em;
    margin-bottom: 16px;
  }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    .preview {
      border-left: 0;
      border-top: 2px dashed rgba(19, 173, 199, 0.38);
    }
  }
`;
const Agenda = styled(Section)`
  width: min(100%, 1320px);
  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 12px;
  }
  .days {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 14px;
    margin-top: 22px;
  }
  .day {
    background: ${({ theme }) => theme.card_light};
    padding: clamp(16px, 2vw, 28px);
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.border_color};
  }
  .day:last-child {
    background: ${({ theme }) => theme.bgLight};
  }
  h3 {
    font-size: clamp(20px, 2vw, 30px);
    letter-spacing: -0.045em;
    margin-bottom: 18px;
  }
  ol {
    display: flex;
    list-style: none;
    gap: 16px;
  }
  li {
    flex: 1;
    min-width: 0;
    border-top: 2px solid ${({ theme }) => theme.primary};
    padding-top: 12px;
  }
  time {
    display: block;
    font-size: 14px;
    color: ${({ theme }) => theme.text_secondary};
  }
  strong {
    font-size: clamp(16px, 1.4vw, 21px);
    line-height: 1.25;
    display: block;
    margin-top: 8px;
  }
  @media (max-width: 900px) {
    .days {
      grid-template-columns: 1fr 1fr;
    }
    ol {
      flex-direction: column;
    }
    li {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    strong {
      margin: 0;
    }
  }
  @media (max-width: 680px) {
    .days {
      grid-template-columns: 1fr;
    }
  }
`;
const Archive = styled(Spread)`
  h2 {
    font-size: clamp(22px, 2vw, 32px);
    margin-bottom: 12px;
  }
  h3 {
    font-size: clamp(40px, 6.8vw, 106px);
    font-weight: 600;
    letter-spacing: -0.075em;
    line-height: 1.1;
  }
  h3 span {
    color: ${({ theme }) => theme.accent};
  }
  p {
    max-width: 44ch;
    font-size: 18px;
  }
`;
const End = styled(Spread)`
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(85, 217, 244, 0.28);
  background:
    radial-gradient(ellipse at 85% 50%, rgba(25, 129, 158, 0.28), transparent 52%),
    linear-gradient(120deg, #0b1c31, #0a1322);
  padding: clamp(26px, 4vw, 64px);
  margin-bottom: 0;
  border-radius: 10px;
  grid-template-columns: 1fr auto;
  > div {
    min-width: 0;
  }
  > div p {
    margin-top: 12px;
    color: ${({ theme }) => theme.text_secondary};
  }
  a {
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.bg};
  }
  a:hover {
    background: ${({ theme }) => theme.text_primary};
  }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    justify-items: start;
  }
`;
const milestones = new Set([
  "check-in",
  "hackathon-starts",
  "first-checkpoint",
  "second-checkpoint",
  "hackathon-ends",
]);
const previewEvents = experiences.filter((e) => milestones.has(e.id));
const agendaDays = [...new Set(previewEvents.map((e) => e.date))].map(
  (date) => ({ date, items: previewEvents.filter((e) => e.date === date) }),
);
export default function Home() {
  const [selected, setSelected] = useState(0);
  const reduceMotion = useReducedMotion();
  return (
    <>
      <Hero />
      <Body>
        <Spread>
          <Intro>
            <h2>Event overview</h2>
            <p>
              Choose an AI domain, define your own problem and build with your
              team in Mysuru.
            </p>
            <p style={{ fontSize: "1rem" }}>
              Organized by the Department of Computer Science and Engineering at
              Vidyavardhaka College of Engineering.
            </p>
            <TextLink to="/about">About the event →</TextLink>
          </Intro>
          <Facts aria-label="Hackathon highlights">
            {[
              ["Hours to build", "24"],
              ["Team size", event.teamSize.replace(" members", "")],
              ["Format", "Offline"],
              ["AI domains", "3"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </Facts>
        </Spread>
        <Index>
          <div>
            <h2>Explore the domains</h2>
            {skills.map((s, i) => (
              <button
                key={s.title}
                aria-label={s.title}
                aria-controls="domain-preview"
                aria-pressed={selected === i}
                onClick={() => setSelected(i)}
              >
                {s.title}
              </button>
            ))}
          </div>
          <div className="preview" id="domain-preview">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                className="preview-panel"
                key={skills[selected].title}
                aria-live="polite"
                initial={reduceMotion ? false : { opacity: 0, rotateX: -16, y: -8 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, rotateX: 12, y: 6 }}
                transition={{ duration: reduceMotion ? 0 : 0.32 }}
              >
                <h3>{skills[selected].title}</h3>
                <p>{skills[selected].description}</p>
                <ul className="focus-areas">
                  {skills[selected].focusAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
            <TextLink to="/domains">View all domains →</TextLink>
          </div>
        </Index>
        <Agenda>
          <header>
            <h2>Schedule preview</h2>
            <TextLink to="/schedule">Full schedule →</TextLink>
          </header>
          <div className="days">
            {agendaDays.map(({ date, items }) => (
              <section className="day" key={date}>
                <h3>{date}</h3>
                <ol>
                  {items.map((e) => (
                    <li key={e.id}>
                      <time>{e.company} IST</time>
                      <strong>{e.role}</strong>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </Agenda>
        <Archive>
          <div>
            <h2>Previous editions</h2>
            <h3>
              2024 <span>→</span> 2025
            </h3>
          </div>
          <div>
            <p>
              HACKKSHETRA began in 2024. Revisit the second edition through
              photographs of the opening ceremony, team projects and awards.
            </p>
            <TextLink to="/glimpses">Explore the 2025 gallery →</TextLink>
          </div>
        </Archive>
        <End>
          <div>
            <h2>Registrations are free for everyone</h2>
            <p>Bring a team of 3–4 members and turn your idea into impact.</p>
          </div>
          <PrimaryLink as={Link} to="/register">
            View registration steps →
          </PrimaryLink>
        </End>
      </Body>
    </>
  );
}
