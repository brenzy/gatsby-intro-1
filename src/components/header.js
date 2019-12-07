import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const NavLink = styled(Link)`
  color: #222;
  font-size: 16px;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid #222;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <header
    css={css`
      margin: 0px;
      background: #eee;
      border-bottom: 1px solid #ddd;
    `}
  >
    <nav
      css={css`
        margin: 0 auto;
        padding: 8px;
        display: flex;
        max-width: 600px;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/mdx-demo" activeClassName="current-page">
        MDX Demo
      </NavLink>
      <NavLink to="/about" activeClassName="current-page">
        About
      </NavLink>
    </nav>
  </header>
);

export default Header;
