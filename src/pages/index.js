import React from "react";
import styled from "styled-components";
import Layout from "../layouts/DefaultLayout";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 700px;
  margin: auto;
  min-height: calc(100vh - 94px);
  padding-bottom: 4em;
  h1 {
    color: #111111;
    font-family: Montserrat, sans-serif !important;
    margin-bottom: 2em;
    font-size: 2.2em;
    max-width: 400px;
    text-align: center;
    font-weight: 700;
  }
  p {
    color: #111111;
    font-family: Montserrat, sans-serif !important;
    font-size: 12px;
    text-align: center;
    font-weight: 400;
    line-height: 1.5em;
  }
`;

const Page = () => {
  return (
    <Layout>
      <Container>
        <h1>
          Welcome To My <span>Image</span> Gallery
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </Container>
    </Layout>
  );
};

export default Page;
