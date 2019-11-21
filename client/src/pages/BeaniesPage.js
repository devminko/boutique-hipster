import React, { } from 'react';

import PageContainer from './page-container/PageContainer';
import PageSidebar from '../components/page-sidebar/PageSidebar';
import PageHeader from '../components/page-header/PageHeader';
import BeaniesContainer from '../components/beanies-page/beanies-container/BeaniesContainer';

// *************************** BEANIES PAGE *************************** //
const BeaniesPage = () => {
  return (
    <PageContainer>

      <PageSidebar linkOne='Beanies' linkTwo='Gloves' linkThree='Exclusives' />
      <PageHeader>Beanies</PageHeader>
      <BeaniesContainer />

    </PageContainer>
  )
};

export default BeaniesPage;