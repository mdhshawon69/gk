import React from 'react';

import {
  HeroSection, TeamGrid, TeamGroup, WorkTogether
} from '@/shared/components';
import { PeopleCulture } from '@/components/Corporate';
import { useFetch } from '@/shared/hook';
import { filterDataByDepartment } from '@/shared/utils/pageHelpers/filterData.helper';

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
      <HeroSection titleOne='Serving Bottom of the' titleTwo='Pyramid with Utmost' titleThree='Care and Sincerity'/>
      <PeopleCulture/>
      <TeamGroup headingTextOne='Management' headingTextTwo='Leadership'/>
      <TeamGrid datas={filterManagementData}/>
      <TeamGroup headingTextTwo='Accounts & Finance' marginTop/>
      <TeamGrid datas={filterAccountAndFinanceData}/>
      <TeamGroup headingTextOne='Human Resources &' headingTextTwo='Administration' marginTop/>
      <TeamGrid datas={filterHumanResourceData}/>
      <TeamGroup headingTextTwo='Services & Procurement' marginTop/>
      <TeamGrid datas={filterServicesAndProcurementData}/>
      <TeamGroup headingTextTwo='Audit & Internal Compliance' marginTop/>
      <TeamGrid datas={filterAuditData}/>
      <TeamGroup headingTextOne='M&E, Branding & Communications' headingTextTwo='and Secretariate' marginTop/>
      <TeamGrid datas={filterBrandingAndSecretariatData}/>
      <TeamGroup headingTextTwo='Training' marginTop/>
      <TeamGrid datas={filterTrainingData}/>
      <TeamGroup headingTextTwo='Information Technology (IT)' marginTop/>
      <TeamGrid datas={filterTechnologyData}/>
      <WorkTogether/>
    </>
  );
};

export default Corporate;
