import React from 'react';

import { HeroSection, WorkTogether } from '@/shared/components';
import {
  HealthcareService, MapSection, MedicalCare, MedicalCareList
} from '@/components/Healthcare';
import { useFetch } from '@/shared/hook';
import { IMedicalCare } from '@/shared/types/medicalCare';

const Healthcare = async () => {
  const healthcareService = await useFetch({ url: '/healthcare-services' });
  const medicalCare = await useFetch({ url: '/disease-specific-medicare' });

  const medicalCareCategoryData = medicalCare?.data?.map((data: IMedicalCare) => ({
    id: data.id, name: data.title, banner_image: data.thumb_image, dataType: 'medical'
  }));

  return (
    <>
      <HeroSection heroFor='healthcare'/>
      <HealthcareService servicesData={healthcareService?.data}/>
      <MapSection/>
      <MedicalCare/>
      <MedicalCareList medicalCareCategory={medicalCareCategoryData}/>
      <WorkTogether/>
    </>
  );
};

export default Healthcare;
