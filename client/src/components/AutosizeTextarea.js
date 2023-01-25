import React from 'react';

import { TextArea } from '../styled-components/TextArea';

const LINE_HEIGHT = 20;

export default function AutosizeTextarea({ minRows, maxRows, onChange, value, name = null }) {
  const handleChange = e => {
    e.target.rows = minRows;
    const numRows = Math.max((e.target.scrollHeight / LINE_HEIGHT), minRows);
    e.target.rows = numRows < maxRows ? numRows : maxRows;
    onChange(e);
  }

  return (
    <TextArea
      name={name}
      cols="100"
      rows={minRows}
      value={value}
      onChange={handleChange}
    />
  );
}