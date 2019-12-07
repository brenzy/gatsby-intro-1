import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About The Learning Gatsby Website</h1>
    <p>
      This is a sample Gatsy project created for the purposes of learning
      Gatsby.
    </p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);
