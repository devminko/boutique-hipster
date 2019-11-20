import React, { } from 'react';

import PageContainer from './page-container/PageContainer';

// *************************** NOT FOUND (404) PAGE *************************** //
const NotFoundPage = () => {
  return (
    <PageContainer notfound>
        <h1>404</h1>
        <span>|</span>
        <h2>This page could not be found.</h2>
    </PageContainer>
  )
};

export default NotFoundPage;