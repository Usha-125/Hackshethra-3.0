import { useRef, useState } from "react";
import styled from "styled-components";
import { photos } from "../../data/gallery";
const Album = styled.section`
  display: grid;
  grid-template-columns: 1fr minmax(0, 2.3fr);
  background: ${({ theme }) => theme.card};
  margin: 24px 0;
  header {
    padding: clamp(22px, 3vw, 44px);
    flex-direction: column;
    align-items: flex-start !important;
  }
  .rail {
    min-width: 0;
  }
  figcaption {
    padding-inline: 16px !important;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    header {
      flex-direction: row;
    }
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 14px;
  }
  h2 {
    font-size: clamp(24px, 3vw, 34px);
    letter-spacing: -0.035em;
  }
  .controls {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  button {
    font: inherit;
    color: inherit;
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.border_color};
    border-radius: 6px;
    min-width: 44px;
    min-height: 44px;
    cursor: pointer;
  }
  button:disabled {
    opacity: 0.45;
    cursor: default;
  }
  .rail {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    overscroll-behavior-x: contain;
    scrollbar-width: thin;
    gap: 16px;
  }
  figure {
    flex: 0 0 min(86%, 700px);
    scroll-snap-align: start;
  }
  figure:last-child {
    margin-right: max(14%, calc(100% - 700px));
  }
  img {
    width: 100%;
    aspect-ratio: 2 / 1;
    object-fit: cover;
    display: block;
    border-radius: 0;
  }
  figcaption {
    font-size: 14px;
    padding: 8px 0 12px;
    color: ${({ theme }) => theme.text_secondary};
  }
  @media (prefers-reduced-motion: no-preference) {
    .rail {
      scroll-behavior: smooth;
    }
  }
`;
export default function Moments() {
  const rail = useRef(null);
  const [active, setActive] = useState(0);
  function go(index) {
    const el = rail.current,
      target = el.children[index];
    if (target)
      el.scrollTo({
        left: target.offsetLeft - el.firstElementChild.offsetLeft,
      });
  }
  function sync() {
    const el = rail.current;
    const stride = el.children[1].offsetLeft - el.firstElementChild.offsetLeft;
    setActive(
      Math.min(
        photos.length - 1,
        Math.max(0, Math.round(el.scrollLeft / stride)),
      ),
    );
  }
  return (
    <Album aria-labelledby="moments-heading">
      <header>
        <h2 id="moments-heading">Moments from HACKKSHETRA 2.0</h2>
        <div className="controls">
          <span aria-live="polite">
            {active + 1} / {photos.length}
          </span>
          <button
            aria-label="Previous photo"
            onClick={() => go(active - 1)}
            disabled={active === 0}
          >
            ←
          </button>
          <button
            aria-label="Next photo"
            onClick={() => go(active + 1)}
            disabled={active === photos.length - 1}
          >
            →
          </button>
        </div>
      </header>
      <div
        className="rail"
        role="region"
        aria-label="Event photos"
        tabIndex={0}
        ref={rail}
        onScroll={sync}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            e.preventDefault();
            go(active + (e.key === "ArrowLeft" ? -1 : 1));
          }
        }}
      >
        {photos.map((photo) => (
          <figure key={photo.thumbnail}>
            <img loading="lazy" src={photo.thumbnail} alt={photo.caption} />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </Album>
  );
}
