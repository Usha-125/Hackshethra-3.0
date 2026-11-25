import styled from "styled-components";

export const Section = styled.section`
  width: min(100%, 1280px);
  margin-inline: auto;
  position: relative;
  color: ${({ theme }) => theme.text_primary};
`;

export const PageTitle = styled.h1`
  font-size: clamp(2rem, 4.8vw, 3.8rem);
  line-height: 1.08;
  letter-spacing: -0.045em;
  text-wrap: balance;
  margin-bottom: 14px;
  &::after {
    content: "";
    display: block;
    width: clamp(42px, 6vw, 76px);
    height: 2px;
    margin-top: 20px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accent}, transparent);
    box-shadow: 0 0 16px rgba(85, 217, 244, 0.4);
  }
`;

export const PageDescription = styled.p`
  max-width: 70ch;
  margin-bottom: clamp(24px, 4vw, 44px);
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: clamp(14px, 2vw, 22px);
`;

export const InfoCard = styled.article`
  padding: clamp(18px, 2.4vw, 30px);
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border_color};
  border-radius: 8px;
  background:
    radial-gradient(ellipse at 100% 0%, rgba(35, 122, 161, 0.1), transparent 58%),
    ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.65;
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.14);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    transform: translateY(-4px);
    border-color: rgba(85, 217, 244, 0.48);
    box-shadow: 0 22px 54px rgba(0, 0, 0, 0.28), 0 0 26px rgba(35, 122, 161, 0.1);
  }
`;

export const CardTitle = styled.h2`
  margin-bottom: 10px;
  font-size: clamp(1.15rem, 2vw, 1.45rem);
  line-height: 1.3;
  letter-spacing: -0.025em;
`;

export const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 10px 22px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 6px;
  background: ${({ theme, $secondary }) =>
    $secondary ? theme.bg : theme.primary};
  color: ${({ theme }) => theme.white};
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    background 0.18s ease,
    border-color 0.18s ease,
    transform 0.18s ease,
    box-shadow 0.18s ease;
  &:hover {
    background: ${({ theme }) => theme.primaryDark};
    border-color: ${({ theme }) => theme.accent};
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(23, 92, 230, 0.24);
  }
  &:disabled {
    opacity: 0.65;
    cursor: wait;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
