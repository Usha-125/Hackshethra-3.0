import React from "react";
import { Link } from "react-router-dom";
import { PageDescription, PageTitle, PrimaryLink, Section } from "./PageElements";

const NotFound = () => (
  <Section>
    <PageTitle>Page not found</PageTitle>
    <PageDescription>The requested HACKKSHETRA 3.0 page does not exist.</PageDescription>
    <PrimaryLink as={Link} to="/">Return Home</PrimaryLink>
  </Section>
);

export default NotFound;
