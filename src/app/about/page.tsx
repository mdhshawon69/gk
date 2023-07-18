import React from 'react';

import {
  MissionVision,
  AboutUs,
  EmpoweringSection,
  OurProudSection,
  AboutGrameenKalyan,
  AchievementSection,
  BoardMemberSection
} from '@/components/About';
import {
  HeroSection, ServiceSection, AnnualReportSection, WorkTogether
} from '@/shared/components';

const page = () => {
  return (
    <>
      <HeroSection/>
      <MissionVision/>
      <ServiceSection/>
      <AboutUs/>
      <AnnualReportSection headingTop={true} headingText='Story of Inception'/>
      <EmpoweringSection/>
      <OurProudSection headingText='Our Proud Presence' subHeadingText='Across the Country'/>
      <AboutGrameenKalyan/>
      <AchievementSection/>
      <BoardMemberSection/>
      <WorkTogether/>
    </>
  );
};

export default page;
