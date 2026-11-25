import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Section, PageTitle, PageDescription } from "./PageElements";

const Domains = styled.div`
  display: grid;
  gap: 14px;
`;

const DomainCard = styled.article`
  position: relative;
  overflow: hidden;
  perspective: 900px;
  border: 1px solid ${({ theme }) => theme.border_color};
  border-radius: 8px;
  background:
    radial-gradient(ellipse at 92% 8%, rgba(35, 122, 161, 0.11), transparent 48%),
    ${({ theme }) => theme.card};
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.15);
  transition: border-color 0.22s ease, box-shadow 0.22s ease;
  &[data-open="true"] {
    border-color: rgba(85, 217, 244, 0.46);
    box-shadow: 0 22px 54px rgba(0, 0, 0, 0.24), 0 0 28px rgba(34, 157, 189, 0.08);
  }
  .trigger {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto auto;
    align-items: center;
    gap: clamp(14px, 2.8vw, 36px);
    width: 100%;
    min-height: 114px;
    padding: clamp(18px, 3vw, 34px);
    border: 0;
    color: ${({ theme }) => theme.text_primary};
    text-align: left;
    font: inherit;
    background: linear-gradient(110deg, rgba(14, 26, 42, 0.94), rgba(9, 17, 29, 0.9));
    cursor: pointer;
    transform-origin: top center;
    transition: transform 0.28s ease, box-shadow 0.28s ease;
  }
  .trigger[aria-expanded="true"] {
    transform: perspective(900px) rotateX(-5deg);
    box-shadow: 0 9px 22px rgba(0, 0, 0, 0.22);
  }
  .number {
    color: ${({ theme }) => theme.accent};
    font-family: "IBM Plex Mono", monospace;
    font-size: clamp(28px, 4vw, 48px);
    line-height: 1;
  }
  .heading {
    display: grid;
    gap: 6px;
  }
  .heading strong {
    font-size: clamp(20px, 2.8vw, 36px);
    letter-spacing: -0.045em;
    line-height: 1.12;
  }
  .heading small,
  .hint {
    color: ${({ theme }) => theme.text_secondary};
    font-family: "IBM Plex Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }
  .toggle {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border: 1px solid rgba(85, 217, 244, 0.32);
    border-radius: 50%;
    color: ${({ theme }) => theme.accent};
    font-family: "IBM Plex Mono", monospace;
    font-size: 19px;
    transition: transform 0.25s ease, background 0.25s ease;
  }
  .trigger[aria-expanded="true"] .toggle {
    transform: rotate(45deg);
    background: rgba(85, 217, 244, 0.1);
  }
  .panel {
    overflow: hidden;
    transform-origin: top center;
    backface-visibility: hidden;
    background: linear-gradient(145deg, rgba(9, 20, 33, 0.96), rgba(7, 13, 23, 0.94));
  }
  .panel-inner {
    padding: clamp(20px, 3vw, 34px);
    border-top: 1px solid rgba(85, 217, 244, 0.14);
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(220px, 0.9fr);
    gap: clamp(20px, 4vw, 54px);
    align-items: start;
  }
  .panel p {
    max-width: 62ch;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.75;
  }
  .focus-label {
    display: block;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.accent};
    font-family: "IBM Plex Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .focus-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
  }
  .focus-list li {
    padding: 7px 10px;
    border: 1px solid rgba(85, 217, 244, 0.2);
    border-radius: 3px;
    color: ${({ theme }) => theme.text_primary};
    background: rgba(25, 71, 91, 0.18);
    font-size: 13px;
  }
  @media (max-width: 680px) {
    .trigger {
      min-height: 88px;
      grid-template-columns: auto minmax(0, 1fr) auto auto;
      gap: 14px;
    }
    .hint {
      display: none;
    }
    .panel-inner {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
`;

export default function Skills() {
  const [openDomain, setOpenDomain] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <Section>
      <PageTitle>Hackathon domains</PageTitle>
      <PageDescription>
        Open a domain to explore its focus areas and choose the direction for
        your team’s problem statement.
      </PageDescription>
      <Domains>
        {skills.map((domain, i) => {
          const isOpen = openDomain === i;
          const panelId = `domain-details-${i + 1}`;
          return (
            <DomainCard key={domain.title} data-open={isOpen}>
              <button
                className="trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenDomain(isOpen ? null : i)}
              >
                <span className="number">{String(i + 1).padStart(2, "0")}</span>
                <span className="heading">
                  <small>Domain {String(i + 1).padStart(2, "0")}</small>
                  <strong>{domain.title}</strong>
                </span>
                <span className="hint">{isOpen ? "Close" : "Open details"}</span>
                <span className="toggle" aria-hidden="true">+</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="panel"
                    id={panelId}
                    initial={reduceMotion ? false : { height: 0, opacity: 0, rotateX: -16 }}
                    animate={{ height: "auto", opacity: 1, rotateX: 0 }}
                    exit={reduceMotion ? undefined : { height: 0, opacity: 0, rotateX: -12 }}
                    transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.2, 0.75, 0.25, 1] }}
                  >
                    <div className="panel-inner">
                      <p>{domain.description}</p>
                      <div>
                        <span className="focus-label">Explore within this domain</span>
                        <ul className="focus-list">
                          {domain.focusAreas.map((area) => (
                            <li key={area}>{area}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </DomainCard>
          );
        })}
      </Domains>
    </Section>
  );
}
