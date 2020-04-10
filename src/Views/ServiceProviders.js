// Dependencies
import React from 'react';
import Helmet from 'react-helmet';
import '../ServiceProviders.css';

// Components
import PageContent from '../Components/ServiceProvidersPageContent';

export default () => (
  <div id="service-providers-page">
    {<PageContent />}
    <Helmet title='Platform' />
  </div>
)