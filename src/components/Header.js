import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 32, height: 40, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Container>
      <nav className="header-wrapper">
        <Link to="/" className="logo-link">
          i
          <Img fixed={data.file.childImageSharp.fixed} className="logo" />
        </Link>
        <ul className="right-nav">
          <li>
            <Link to="/images">Images</Link>
          </li>
          <li>
            <Link to="/pics">Pics</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
export default Header;

const Container = styled.div`
  max-width: 1920px;
  padding-left: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #24232a;

  .header-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    margin: auto;
    z-index: 2;
    padding: 5px 0;
    transition: all 0.5s;
    margin: auto;
  }
  .logo-link {
    display: flex;
    color: #000;
    font-size: 1px;
  }
  .right-nav {
    margin-left: 3em;
    display: flex;
    align-items: center;
  }
  li {
    margin: 0 1em;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    font-weight: 500;
    font-size: 13px;
    text-decoration: underline;
  }
  @media only screen and (max-width: 360px) {
    padding-left: 2em;
  }
`;
