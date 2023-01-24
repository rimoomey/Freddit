import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from '../styled-components/Button';
import { TextArea } from '../styled-components/TextArea';

const PostButton = styled(Button)`
  margin: 0.5em;
`;

const MIN_ROWS = 3;
const MAX_ROWS = 10;
const LINE_HEIGHT = 24;

export default function CreateComment() {
  const handleChange = e => {
    e.target.rows = MIN_ROWS;
    const numRows = Math.max((e.target.scrollHeight / LINE_HEIGHT), MIN_ROWS);
    e.target.rows = numRows < MAX_ROWS ? numRows : MAX_ROWS;
  }

  return (
    <form>
      <TextArea
        cols="100"
        rows={MIN_ROWS}
        onChange={handleChange}
      />
      <PostButton as='input' type='submit' value='Post' />
    </form>
  );
}