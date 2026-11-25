import styled from "styled-components";
import {
  CampaignRounded,
  CelebrationRounded,
  CoffeeRounded,
  DinnerDiningRounded,
  EmojiEventsRounded,
  FastfoodRounded,
  FlagRounded,
  GroupsRounded,
  HeadphonesRounded,
  HowToRegRounded,
  MusicNoteRounded,
  RestaurantRounded,
  RocketLaunchRounded,
  TheaterComedyRounded,
  TrackChangesRounded,
  WbSunnyRounded,
} from "@mui/icons-material";
import { experiences } from "../../data/constants";
import { Section, PageTitle, PageDescription } from "./PageElements";

const eventIcons = {
  "check-in": HowToRegRounded,
  inaugural: CampaignRounded,
  "hackathon-starts": RocketLaunchRounded,
  lunch: RestaurantRounded,
  mentoring: GroupsRounded,
  "tea-break": CoffeeRounded,
  "first-checkpoint": FlagRounded,
  swara: MusicNoteRounded,
  dinner: DinnerDiningRounded,
  natya: TheaterComedyRounded,
  snacks: FastfoodRounded,
  jamming: HeadphonesRounded,
  breakfast: WbSunnyRounded,
  "second-checkpoint": TrackChangesRounded,
  "hackathon-ends": EmojiEventsRounded,
  valedictory: CelebrationRounded,
};

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: clamp(18px, 3vw, 34px);
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Day = styled.section`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border_color};
  border-radius: 8px;
  background:
    radial-gradient(ellipse at 92% 0%, rgba(35, 122, 161, 0.1), transparent 40%),
    ${({ theme }) => theme.card};
  box-shadow: 0 22px 54px rgba(0, 0, 0, 0.18);
  header {
    padding: clamp(18px, 2.4vw, 28px);
    border-bottom: 1px solid rgba(85, 217, 244, 0.13);
    background: linear-gradient(110deg, rgba(17, 47, 66, 0.28), transparent);
  }
  header small {
    display: block;
    margin-bottom: 7px;
    color: ${({ theme }) => theme.accent};
    font-family: "IBM Plex Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  header h2 {
    font-size: clamp(20px, 2.2vw, 28px);
    line-height: 1.15;
    letter-spacing: -0.035em;
  }
  header p {
    margin-top: 8px;
    color: ${({ theme }) => theme.text_secondary};
    font-size: 13px;
  }
  ol {
    position: relative;
    display: grid;
    gap: 12px;
    list-style: none;
    margin: 0;
    padding: 22px clamp(14px, 2vw, 24px) 28px;
  }
  ol::before {
    content: "";
    position: absolute;
    left: 38px;
    top: 28px;
    bottom: 34px;
    width: 3px;
    border-radius: 2px;
    background: repeating-linear-gradient(
      to bottom,
      rgba(85, 217, 244, 0.55) 0,
      rgba(85, 217, 244, 0.55) 9px,
      transparent 9px,
      transparent 17px
    );
    box-shadow: 0 0 12px rgba(85, 217, 244, 0.12);
  }
  li {
    position: relative;
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr);
    align-items: center;
    gap: 16px;
    min-height: 66px;
    animation: roadmap-stop-in 0.38s ease-out both;
    animation-delay: calc(var(--stop-index) * 28ms);
  }
  @keyframes roadmap-stop-in {
    from {
      opacity: 0;
      transform: translateX(9px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .marker {
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    color: #b6f6ff;
    border: 1px solid rgba(85, 217, 244, 0.36);
    border-radius: 50%;
    background: #0b1826;
    box-shadow: 0 0 0 5px rgba(7, 13, 23, 0.92);
  }
  .stop {
    display: grid;
    grid-template-columns: minmax(86px, auto) 1fr;
    align-items: baseline;
    gap: 10px;
    min-height: 54px;
    padding: 14px 16px;
    border: 1px solid rgba(101, 152, 177, 0.12);
    border-radius: 5px;
    background: rgba(10, 18, 30, 0.64);
    transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
  }
  li:hover .stop {
    transform: translateX(3px);
    border-color: rgba(85, 217, 244, 0.34);
    background: rgba(13, 31, 45, 0.88);
  }
  time {
    color: ${({ theme }) => theme.accent};
    font-family: "IBM Plex Mono", monospace;
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }
  .stop strong {
    color: ${({ theme }) => theme.text_primary};
    font-size: 14px;
    line-height: 1.35;
  }
  li[data-major="true"] .marker {
    color: #07121b;
    border-color: #7ceeff;
    background: #7ceeff;
    box-shadow: 0 0 0 5px rgba(7, 13, 23, 0.92), 0 0 16px rgba(85, 217, 244, 0.45);
  }
  li[data-major="true"] .stop {
    border-color: rgba(85, 217, 244, 0.3);
    background: linear-gradient(100deg, rgba(22, 89, 113, 0.22), rgba(10, 18, 30, 0.82));
  }
  li[data-major="true"] .stop strong {
    font-size: 15px;
  }
  @media (max-width: 480px) {
    ol::before {
      left: 29px;
    }
    li {
      grid-template-columns: 28px minmax(0, 1fr);
      gap: 12px;
    }
    .marker {
      width: 28px;
      height: 28px;
    }
    .marker svg {
      font-size: 17px;
    }
    .stop {
      grid-template-columns: 1fr;
      gap: 5px;
      padding: 11px 12px;
    }
  }
`;

const dates = [...new Set(experiences.map((event) => event.date))];
const major = new Set([
  "hackathon-starts",
  "first-checkpoint",
  "second-checkpoint",
  "hackathon-ends",
]);

export default function Experience() {
  return (
    <Section>
      <PageTitle>Event roadmap</PageTitle>
      <PageDescription>
        Follow the 24-hour build from check-in to the final showcase. All times
        are in India Standard Time (IST).
      </PageDescription>
      <Days>
        {dates.map((date, dayIndex) => (
          <Day key={date} aria-labelledby={`roadmap-day-${dayIndex + 1}`}>
            <header>
              <small>Roadmap · Day {String(dayIndex + 1).padStart(2, "0")}</small>
              <h2 id={`roadmap-day-${dayIndex + 1}`}>{date}</h2>
              <p>{dayIndex === 0 ? "Check-in, kickoff & overnight build" : "Final checkpoint & closing"}</p>
            </header>
            <ol>
              {experiences
                .filter((event) => event.date === date)
                .map((event, index) => {
                  const Icon = eventIcons[event.id];
                  return (
                    <li
                      key={event.id}
                      data-major={major.has(event.id)}
                      style={{ "--stop-index": index }}
                    >
                      <span className="marker" aria-hidden="true">
                        <Icon fontSize="small" />
                      </span>
                      <div className="stop">
                        <time>{event.company} IST</time>
                        <strong>{event.role}</strong>
                      </div>
                    </li>
                  );
                })}
            </ol>
          </Day>
        ))}
      </Days>
    </Section>
  );
}
