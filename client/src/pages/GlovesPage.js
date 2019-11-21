import React, { } from 'react';

import PageContainer from './page-container/PageContainer';
import PageSidebar from '../components/page-sidebar/PageSidebar';
import PageHeader from '../components/page-header/PageHeader';
import GlovesContainer from '../components/gloves-page/gloves-container/GlovesContainer';

// *************************** GLOVES PAGE *************************** //
const GlovesPage = () => {
  return (
    <PageContainer>

      <PageSidebar linkOne='Gloves' linkTwo='Exclusives' linkThree='Beanies' />
      <PageHeader>Gloves</PageHeader>
      <GlovesContainer />

    </PageContainer>
  )
};

export default GlovesPage;