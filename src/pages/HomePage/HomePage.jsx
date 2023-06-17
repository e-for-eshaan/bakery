import React from "react";
import { PageSection } from "../../layout";
import "./HomePage.scss"
import { Categories, LandingSection } from "../../features";
const HomePage = () => {
  return (
    <PageSection>
      <LandingSection />
      <Categories />
    </PageSection>
  )
};

export default HomePage;
