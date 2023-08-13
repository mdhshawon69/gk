import React from 'react';

import { HeroSection, DetailSection } from '@/components/MedicalCare';
import { useFetch } from '@/shared/hook';
import { IMedicalCare } from '@/shared/types/medicalCare';

const MedicalCare = async ({ params }: { params: { medicalCare: string } }) => {
  const id = Number(params.medicalCare);

  const services = await useFetch({ url: '/disease-specific-medicare' });

  const detailData = services && services.data.find((data: IMedicalCare) => (data.id === id));

  const heroSectionData = {
    title: detailData?.title,
    SubTitle: detailData?.sub_title,
    image: detailData?.banner_image
  };
  const medicalCareDescription = detailData?.description;
  const medicalCareImage = detailData?.body_image;

  return (
    <>
      <HeroSection data={heroSectionData}/>
      <DetailSection detail={medicalCareDescription} image={medicalCareImage}/>
    </>
  );
};

export default MedicalCare;
