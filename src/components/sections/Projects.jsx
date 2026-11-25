import React from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import { Section, PageTitle, PageDescription, InfoCard } from "./PageElements";
const Group = styled.section`
  width: 100%;
  padding: 22px 0;
  h2 {
    padding: 16px;
    background: ${({ theme }) => theme.primaryDark};
    align-self: start;
  }
  display: grid;
  grid-template-columns: minmax(160px, 1fr) 3fr;
  gap: 18px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
  h2 {
    font-size: 22px;
    margin-bottom: 18px;
    color: ${({ theme }) => theme.text_primary};
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 205px), 1fr));
  gap: 16px;
`;
const Person = styled(InfoCard)`
  padding: 16px 20px;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-size: 17px;
    font-weight: 600;
  }
  p,
  a {
    font-size: 14px;
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 8px;
  }
  a:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
export default function Projects() {
  return (
    <Section>
      <PageTitle>Organizing Team</PageTitle>
      <PageDescription>
        Department of Computer Science and Engineering, Vidyavardhaka College of
        Engineering
      </PageDescription>
      {[
        ["patron", "Patron"],
        ["convenor", "Convenor"],
        ["faculty", "Faculty Coordinators"],
        ["student", "Student Coordinators"],
      ].map(([category, label]) => (
        <Group key={category}>
          <h2>{label}</h2>
          <Grid>
            {projects
              .filter((p) => p.category === category)
              .map((p) => (
                <Person key={p.id}>
                  <h3>{p.title.split("\n")[0]}</h3>
                  {p.title.includes("\n") && <p>{p.title.split("\n")[1]}</p>}
                  {p.description && (
                    <a href={"tel:" + p.description.replace(/\s/g, "")}>
                      {p.description}
                    </a>
                  )}
                </Person>
              ))}
          </Grid>
        </Group>
      ))}
    </Section>
  );
}
