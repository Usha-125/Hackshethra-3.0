import { useEffect, useRef } from "react";
import styled from "styled-components";
import { PrimaryLink } from "./sections/PageElements";

const Frame = styled.dialog`
  margin: auto;
  width: ${({ $photo }) =>
    $photo ? "fit-content" : "min(560px, calc(100% - 32px))"};
  max-width: calc(100% - 32px);
  max-height: 90dvh;
  padding: clamp(18px, 3vw, 32px);
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border_color};
  border-radius: 12px;
  &::backdrop {
    background: rgba(0, 0, 0, 0.85);
  }
  p,
  ul {
    margin-block: 14px;
    line-height: 1.65;
  }
  ul {
    padding-left: 22px;
  }
  img {
    display: block;
    max-width: 100%;
    max-height: 66dvh;
    object-fit: contain;
  }
`;
export default function Modal({ title, children, onClose, photo }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const overflow = document.body.style.overflow;
    const trigger = document.activeElement;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      trigger?.focus({ preventScroll: true });
    };
  }, []);
  return (
    <Frame
      ref={ref}
      $photo={photo}
      aria-label={title}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target !== ref.current) return;
        const box = ref.current.getBoundingClientRect();
        if (
          e.clientX < box.left ||
          e.clientX > box.right ||
          e.clientY < box.top ||
          e.clientY > box.bottom
        )
          onClose();
      }}
    >
      {children}
      <PrimaryLink as="button" type="button" onClick={onClose}>
        Close
      </PrimaryLink>
    </Frame>
  );
}
