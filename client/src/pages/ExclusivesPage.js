import React, { } from 'react';

import PageSidebar from '../components/page-sidebar/PageSidebar';
import PageHeader from '../components/page-header/PageHeader';
import ExclusivesContainer from '../components/exclusives-page/exclusives-container/ExclusivesContainer';

import PageContainer from './page-container/PageContainer';

// *************************** EXCLUSIVES PAGE *************************** //
const ExclusivesPage = () => {
  return (
    <PageContainer>

      <PageSidebar linkOne='Exclusives' linkTwo='Men' linkThree='Women' />
      <PageHeader>Exclusives</PageHeader>
      <ExclusivesContainer />
      
    </PageContainer>
  )
};

export default ExclusivesPage;