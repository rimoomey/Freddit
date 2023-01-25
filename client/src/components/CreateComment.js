import React, { useState } from 'react';

import AutosizeTextarea from './AutosizeTextarea';
import { PostButton } from '../styled-components/Button';

export default function CreateComment() {
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <AutosizeTextarea
        minRows={3}
        maxRows={10}
        value={text}
        onChange={handleChange}
      />
      <PostButton as='input' type='submit' value='Post' />
    </form>
  );
}