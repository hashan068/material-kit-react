import React from 'react';
import { Helmet } from 'react-helmet-async';

import AppView from 'src/sections/overview/view';

// ----------------------------------------------------------------------

const AppPage = () => (
  <>
    <Helmet>
      <title>Dashboard | Minimal UI</title>
    </Helmet>
    <AppView />
  </>
);

export default AppPage;
