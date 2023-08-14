import React from 'react';
import nextBase64 from 'next-base64';

import { useFetch } from '@/shared/hook';

import { HeroSection, DetailSection } from '@/components/ServiceDetail';

const ServiceDetails = async ({ params }: { params: { service: string } }) => {
  const decodeParams = params.service;
  console.log('decodeParams: ', decodeParams);
  // const decodeParams = nextBase64.decode(params.service);
  // console.log('decodeParams: ', Number(decodeParams.trim()));
  // const decodeParamsNumber = Number(decodeParams);
  // console.log('decodeParamsNumber: ', decodeParamsNumber);
  // console.log('decodeParamsNumber: ', decodeParamsNumber);

  const services = await useFetch({ url: `/service-contents/details?id=${decodeParams}` });

  const service = services.split();

  const heroSectionData = {
    heroTitle: service.service_detail_slogan,
    heroImage: service.service_detail_banner_image
  };
  const serviceDescription = service.long_description;

  return (
    <>
      <HeroSection data={heroSectionData}/>
      <DetailSection detail={serviceDescription}/>
    </>
  );
};

export default ServiceDetails;
