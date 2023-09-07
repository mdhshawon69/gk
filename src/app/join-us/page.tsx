import React from 'react';

import { HeroSection, WorkTogether } from '@/shared/components';
import { CareerForm, CulturalPriorities } from '@/components/JoinUs';
import { useFetch } from '@/shared/hook';
import joinUsImage from '@/assets/images/joinUs/join-us-hero.jpg';

const JoinUs = async () => {
  const departmentsData = await useFetch({ url: '/departments' });
  const departments = departmentsData?.data;

  return (
    <>
      <HeroSection heroFor='join-us' backgroundImage={joinUsImage}/>
      <CulturalPriorities/>
      <CareerForm departmentsData={departments}/>
      <WorkTogether/>
    </>
  );
};

export default JoinUs;
