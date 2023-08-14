import React from 'react';

import { HeroSection } from '@/shared/components';
import { AreaWeServe, ServiceSection } from '@/components/Services';
import { useFetch } from '@/shared/hook';

const Services = async () => {
  const services = await useFetch({ url: '/service-contents/services', revalidateIn: 86400 });

  return (
    <>
      <HeroSection titleOne='Serving Bottom of the' titleTwo='Pyramid with Utmost' titleThree='Care and Sincerity'/>
      <AreaWeServe/>
      <ServiceSection servicesData={services?.data}/>
    </>
  );
};

export default Services;
