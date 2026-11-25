import React, { useState } from "react";
import Modal from "../Modal";
import styled from "styled-components";
import { PageDescription, PageTitle, Section } from "./PageElements";
import { photos } from "../../data/gallery";

const Gallery = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 12px;
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-areas: "a a b" "a a c" "d f f" "e f f";
    figure:nth-child(1) {
      grid-area: a;
    }
    figure:nth-child(2) {
      grid-area: b;
    }
    figure:nth-child(3) {
      grid-area: c;
    }
    figure:nth-child(4) {
      grid-area: d;
    }
    figure:nth-child(5) {
      grid-area: e;
    }
    figure:nth-child(6) {
      grid-area: f;
    }
    figure {
      display: flex;
      flex-direction: column;
    }
    figure button {
      flex: 1;
    }
    figure img {
      height: 100%;
    }
  }
`;
const Figure = styled.figure`
  margin: 0;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border_color};
  border-radius: 0;
  background: ${({ theme }) => theme.card};
  box-shadow: rgba(23, 92, 230, 0.15) 0 4px 24px;
`;
const PhotoButton = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  cursor: zoom-in;
  img {
    width: 100%;
    aspect-ratio: 3/2;
    display: block;
    object-fit: cover;
    transition: transform 0.35s ease;
  }
  &:hover img,
  &:focus-visible img {
    transform: scale(1.035);
  }
`;
const Caption = styled.figcaption`
  padding: 14px 16px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: left;
`;
const ZoomOut = styled.button`
  display: block;
  border: 0;
  background: transparent;
  cursor: zoom-out;
`;

const Glimpses = () => {
  const [selected, setSelected] = useState(null);
  return (
    <Section>
      <PageTitle>Glimpses of HACKKSHETRA 2.0</PageTitle>
      <PageDescription>
        Revisit the opening ceremony, team projects and awards from the 2025
        edition.
      </PageDescription>
      <Gallery>
        {photos.map((photo) => (
          <Figure key={photo.src}>
            <PhotoButton
              type="button"
              onClick={() => setSelected(photo)}
              aria-label={`Open ${photo.caption}`}
            >
              <img
                src={photo.thumbnail}
                alt={photo.caption}
                loading="lazy"
                decoding="async"
              />
            </PhotoButton>
            <Caption>{photo.caption}</Caption>
          </Figure>
        ))}
      </Gallery>
      {selected && (
        <Modal photo title={selected.caption} onClose={() => setSelected(null)}>
          <ZoomOut
            type="button"
            aria-label="Close enlarged photograph"
            onClick={() => setSelected(null)}
          >
            <img src={selected.src} alt={selected.caption} />
          </ZoomOut>
          <p>{selected.caption}</p>
        </Modal>
      )}
    </Section>
  );
};

export default Glimpses;
