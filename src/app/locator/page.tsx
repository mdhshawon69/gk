import Map from '@/components/Locator/Map/Map';
import OfficeLocations from '@/components/Locator/OfficeLocations/OfficeLocations';
import { WorkTogether } from '@/shared/components';
import React from 'react';

const LocatorPage = () => {
  return (
    <div>
      <Map />
      <OfficeLocations />
      <WorkTogether />
    </div>
  );
};

export default LocatorPage;
