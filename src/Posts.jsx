import React from "react";

import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 100%;
  flex-direction: column;
`;

const Posts = (props) => {
  const { posts } = props;

  console.log("We are in Posts dumb component", { posts });

  const mapData = posts?.map((item) => <p key={item.id}>{item.title}</p>);
  return <Container>{mapData}</Container>;
};

export default Posts;
