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
  const [text, setText] = useState('');

  const handleChange = e => {
    e.target.rows = MIN_ROWS;
    const numRows = Math.max((e.target.scrollHeight / LINE_HEIGHT), MIN_ROWS);
    e.target.rows = numRows < MAX_ROWS ? numRows : MAX_ROWS;
    setText(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextArea
        cols="100"
        rows={MIN_ROWS}
        value={text}
        onChange={handleChange}
      />
      <PostButton as='input' type='submit' value='Post' />
    </form>
  );
}