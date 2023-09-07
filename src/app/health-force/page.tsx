import React from 'react';

import { useFetch } from '@/shared/hook';
import { AboutSection } from '@/components/HealthForce';
import {
  HeroSection, TeamGrid, TeamGroup, WorkTogether
} from '@/shared/components';
import { filterDataByDepartment } from '@/shared/utils/pageHelpers/filterData.helper';

import healthForceHero from '@/assets/images/healthForce/health-force-bg.jpg';
import doctorsImg from '@/assets/images/healthForce/our-doctors-full.jpg';
import dmfsImg from '@/assets/images/healthForce/dmfs-full.jpg';
import communityImg from '@/assets/images/healthForce/assistants-full.jpg';

const HealthForce = async () => {
  const corporate = await useFetch({ url: '/peoples', revalidateIn: 86400 });

  const filterDoctorsData = filterDataByDepartment(corporate?.data, 'Doctors');
  const filterDMFsData = filterDataByDepartment(corporate?.data, 'DMFs');
  const filterCommunityHealthAssistantsData = filterDataByDepartment(corporate?.data, 'Community Health Assistants');

  return (
    <>
      <HeroSection titleOne='Serving Bottom of the' titleTwo='Pyramid with Utmost' titleThree='Care and Sincerity' backgroundImage={healthForceHero}/>
      <AboutSection/>
      <TeamGroup headingTextTwo='Our Doctors' image={doctorsImg}/>
      <TeamGrid datas={filterDoctorsData}/>
      <TeamGroup headingTextTwo='Our DMFs' marginTop image={dmfsImg}/>
      <TeamGrid datas={filterDMFsData}/>
      <TeamGroup headingTextOne='Our Community' headingTextTwo='Health Assistants' marginTop image={communityImg}/>
      <TeamGrid datas={filterCommunityHealthAssistantsData}/>
      <WorkTogether/>
    </>
  );
};

export default HealthForce;
