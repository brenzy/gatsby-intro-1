import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-image: url('/images/2019-november-001.jpg');
  background-position: top left center;
  background-size: cover;
  height: 20vh;
  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ffffffdd 2rem, #ffffff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding: 4px;
  h1 {
    font-size: 40px;
    margin: 0px;
  }
  h2 {
    font-size: 20px;
    margin: 0px;
  }
  @media only screen and (min-width: 960px) {
    h1 {
      font-size: 48px;
    }
    h2 {
      font-size: 24px;
    }
  }
  @media only screen and (max-width: 200px) {
    h1 {
      font-size: 16px;
    }
    h2 {
      font-size: 8px;
    }
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "2019-november-001.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>Learning Gatsby</h1>
        <h2>Sample Project One</h2>
      </TextBox>
    </ImageBackground>
  );
};
export default Hero;
