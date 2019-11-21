import React, { } from 'react';

import PageContainer from './page-container/PageContainer';
import PageSidebar from '../components/page-sidebar/PageSidebar';
import PageHeader from '../components/page-header/PageHeader';
import ExclusivesContainer from '../components/exclusives-page/exclusives-container/ExclusivesContainer';

// *************************** EXCLUSIVES PAGE *************************** //
const ExclusivesPage = () => {
  return (
    <PageContainer>

      <PageSidebar linkOne='Exclusives' linkTwo='Beanies' linkThree='Gloves' />
      <PageHeader>Exclusives</PageHeader>
      <ExclusivesContainer />
      
    </PageContainer>
  )
};

export default ExclusivesPage;