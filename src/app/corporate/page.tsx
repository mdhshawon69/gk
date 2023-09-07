import React from 'react';

import {
  HeroSection, TeamGrid, TeamGroup, WorkTogether
} from '@/shared/components';
import { PeopleCulture } from '@/components/Corporate';
import { useFetch } from '@/shared/hook';
import { filterDataByDepartment } from '@/shared/utils/pageHelpers/filterData.helper';
import managementImg from '@/assets/images/corporate/management-leadership.jpg';
import accountImg from '@/assets/images/corporate/account-finance.jpg';
import hrImg from '@/assets/images/corporate/resource-full.jpg';
import servicesImg from '@/assets/images/corporate/procurement.jpg';
import auditImg from '@/assets/images/corporate/audit-internal.jpg';
import brandingImg from '@/assets/images/corporate/brand-full.jpg';
import trainingImg from '@/assets/images/corporate/training_section_banner.jpg';
import itImg from '@/assets/images/corporate/information_technology.jpg';
import corporateHero from '@/assets/images/common/corporate-hero.png';

const Corporate = async () => {
  const corporate = await useFetch({ url: '/peoples', revalidateIn: 86400 });

  const filterManagementData = filterDataByDepartment(corporate?.data, 'Management');
  const filterAccountAndFinanceData = filterDataByDepartment(corporate?.data, 'Account & Finance');
  const filterHumanResourceData = filterDataByDepartment(corporate?.data, 'Human Resources & Administration');
  const filterServicesAndProcurementData = filterDataByDepartment(corporate?.data, 'Services & Procurement');
  const filterAuditData = filterDataByDepartment(corporate?.data, 'Audit & Internal Compliance');
  const filterBrandingAndSecretariatData = filterDataByDepartment(corporate?.data, 'Branding & Secretariat');
  const filterTrainingData = filterDataByDepartment(corporate?.data, 'Training');
  const filterTechnologyData = filterDataByDepartment(corporate?.data, 'Information Technology (IT)');

  return (
    <>
      <HeroSection titleOne='Serving Bottom of the' titleTwo='Pyramid with Utmost' titleThree='Care and Sincerity' backgroundImage={corporateHero}/>
      <PeopleCulture/>
      <TeamGroup headingTextOne='Management' headingTextTwo='Leadership' image={managementImg}/>
      <TeamGrid datas={filterManagementData}/>
      <TeamGroup headingTextOne='Accounts & Finance' marginTop image={accountImg}/>
      <TeamGrid datas={filterAccountAndFinanceData}/>
      <TeamGroup headingTextOne='Human Resources &' headingTextTwo='Administration' marginTop image={hrImg}/>
      <TeamGrid datas={filterHumanResourceData}/>
      <TeamGroup headingTextOne='Services & Procurement' marginTop image={servicesImg}/>
      <TeamGrid datas={filterServicesAndProcurementData}/>
      <TeamGroup headingTextTwo='Audit & Internal Compliance' marginTop image={auditImg}/>
      <TeamGrid datas={filterAuditData}/>
      <TeamGroup headingTextOne='M&E, Branding & Communications' headingTextTwo='and Secretariate' marginTop image={brandingImg}/>
      <TeamGrid datas={filterBrandingAndSecretariatData}/>
      <TeamGroup headingTextTwo='Training' marginTop image={trainingImg}/>
      <TeamGrid datas={filterTrainingData}/>
      <TeamGroup headingTextTwo='Information Technology (IT)' marginTop image={itImg}/>
      <TeamGrid datas={filterTechnologyData}/>
      <WorkTogether/>
    </>
  );
};

export default Corporate;
