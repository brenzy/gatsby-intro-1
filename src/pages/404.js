import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import { Link } from 'gatsby';

export default () => {
  return (
    <>
      <Hero />
      <Layout>
        <h3>Oops!</h3>
        <p>The page that you are looking for was not found.</p>
        <Link to="/">&larr; back to home</Link>
      </Layout>
    </>
  );
};
