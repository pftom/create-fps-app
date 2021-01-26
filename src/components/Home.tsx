import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

const ListItem = styled.li`
  color: palevioletred;
  margin: 0.5em 2em;
  padding: 0.25em 2em;
  background: transparent;
`;

function Home() {
  return (
    <ol className="home">
      <ListItem>再见</ListItem>
      <ListItem>我来了</ListItem>
      <ListItem>猪笨笨</ListItem>
    </ol>
  );
}

export default Home;
