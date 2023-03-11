import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

const Container = styled.div`
  text-align: center;
  margin: auto;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 1em 1em 3.75em 1em;
  background-color: #fef5e6;

  .infinite-scroll-component {
    display: grid;
    margin: auto;
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
    grid-gap: 1em;
    overflow: unset !important;
  }
  .insta-img {
    height: 290px;
    width: 100%;
  }
  .insta {
    width: 100%;
    height: 290px;
    box-sizing: border-box;
    box-shadow: 1px 1px 10px #444;
  }
  span {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    font-weight: 500;
    font-size: 13px;
    margin-top: 3em;
  }
  @media only screen and (max-width: 1035px) {
    padding-left: 10px;
  }
`;

const Page = ({ subreddit }) => {
  const [images, setImages] = useState([]);
  const [after, setAfter] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);
  const fetchImages = async () => {
    const url = `https://api.reddit.com/r/${subreddit}/new.json?limit=15&after=${after}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        const imageUrls = result.data.children
          .filter((child) => child.data.post_hint === "image")
          .map((child) => child.data.url);

        const arr = images.concat(imageUrls);
        setAfter(result.data.after);
        setImages(arr);
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore
        loader={<span>Loading ...</span>}
      >
        {images.map((node) => (
          <a
            href={node}
            target="_blank"
            rel="noopener noreferrer"
            key={node}
            className="insta"
          >
            <img src={node} alt="instagram" className="insta-img" />
          </a>
        ))}
      </InfiniteScroll>
    </Container>
  );
};

export default Page;
