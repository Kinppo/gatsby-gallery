import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <Container>
      <span className="copyright">&copy; 2023</span>

      <div className="flex">
        <Link className="footer-item" to="https://twitter.com/" target="_blank">
          Twitter
        </Link>
        <Link className="footer-item" to="https://reddit.com/" target="_blank">
          Reddit
        </Link>
        <Link className="footer-item" to="https://github.com/" target="_blank">
          Github
        </Link>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #fff;
  position: fixed;
  bottom: 0;
  background-color: #24232a;

  a {
    margin: 0.3em 2em;
    font-weight: 500;
    font-size: 13px;
    text-decoration: underline;
  }
  .flex {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }
  .footer-top-item {
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    padding-right: 10px;
  }
  span {
    margin: 0.3em 0;
    font-weight: 500;
    font-size: 13px;
    white-space: nowrap;
  }

  @media only screen and (max-width: 360px) {
    a {
      margin: 0.5em 1em;
    }
  }
`;
