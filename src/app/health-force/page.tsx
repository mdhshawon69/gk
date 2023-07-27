import React from 'react';

import { HeroSection, TeamGrid, TeamGroup } from '@/shared/components';
import { AboutSection } from '@/components/HealthForce';

const page = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <TeamGroup headingTextOne='Management' headingTextTwo='Leadership'/>
      <TeamGrid/>
      <TeamGroup headingTextOne='Management' headingTextTwo='Leadership' marginTop/>
    </>
  );
};

export default page;
