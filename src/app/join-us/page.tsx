import React from 'react';

import { HeroSection, WorkTogether } from '@/shared/components';
import { CareerForm, CulturalPriorities } from '@/components/JoinUs';
import { useFetch } from '@/shared/hook';

const JoinUs = async () => {
  const bgImage = 'https://res.cloudinary.com/dboyf6lad/image/upload/q_auto:good/v1690783090/joinus-bg_rst7hy.webp';

  const departmentsData = await useFetch({ url: '/departments' });
  const departments = departmentsData?.data;

  return (
    <>
      <HeroSection heroFor='join-us' backgroundImage={bgImage}/>
      <CulturalPriorities/>
      <CareerForm departmentsData={departments}/>
      <WorkTogether/>
    </>
  );
};

export default JoinUs;
