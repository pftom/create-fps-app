import React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';

const ListItem = styled.li`
  color: palevioletred;
  margin: 0.5em 2em;
  padding: 0.25em 2em;
  background: transparent;
`;

function App() {
  return (
    <div>
      <header>Tuture Design</header>
      <section>
        <ListItem>Happy Hacking :)</ListItem>
      </section>
      <footer>@2021 Tuture Inc.</footer>
    </div>
  );
}

export default App;
