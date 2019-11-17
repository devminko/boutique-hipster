import React, { } from 'react';

import PageSidebar from '../components/page-sidebar/PageSidebar';
import PageHeader from '../components/page-header/PageHeader';

import PageContainer from './page-container/PageContainer';

// *************************** EXCLUSIVES PAGE *************************** //
const ExclusivesPage = () => {
  return (
    <PageContainer>

      {/* <PageSidebar>SIDEBAR</PageSidebar> */}
      <PageSidebar linkOne='Exclusives' linkTwo='Men' linkThree='Women' />
      <PageHeader>Exclusives</PageHeader>
      
    </PageContainer>
  )
};

export default ExclusivesPage;