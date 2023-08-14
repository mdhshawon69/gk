import React from 'react';

import { useFetch } from '@/shared/hook';
import { AboutSection } from '@/components/HealthForce';
import {
  HeroSection, TeamGrid, TeamGroup, WorkTogether
} from '@/shared/components';
import { filterDataByDepartment } from '@/shared/utils/pageHelpers/filterData.helper';

const HealthForce = async () => {
  const corporate = await useFetch({ url: '/peoples', revalidateIn: 86400 });

  const filterDoctorsData = filterDataByDepartment(corporate?.data, 'Doctors');
  const filterDMFsData = filterDataByDepartment(corporate?.data, 'DMFs');
  const filterCommunityHealthAssistantsData = filterDataByDepartment(corporate?.data, 'Community Health Assistants');

  return (
    <>
      <HeroSection titleOne='Serving Bottom of the' titleTwo='Pyramid with Utmost' titleThree='Care and Sincerity'/>
      <AboutSection/>
      <TeamGroup headingTextTwo='Our Doctors'/>
      <TeamGrid datas={filterDoctorsData}/>
      <TeamGroup headingTextTwo='Our DMFs' marginTop/>
      <TeamGrid datas={filterDMFsData}/>
      <TeamGroup headingTextOne='Our Community' headingTextTwo='Health Assistants' marginTop/>
      <TeamGrid datas={filterCommunityHealthAssistantsData}/>
      <WorkTogether/>
    </>
  );
};

export default HealthForce;
