import React, { useState } from 'react';

import AutosizeTextarea from './AutosizeTextarea';
import { LinkButton } from '../styled-components/Button';

export default function EditComment({ content, onSave, onCancel }) {
  const [editContent, setEditContent] = useState(content);

  const handleChange = e => {
    setEditContent(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSave(editContent);
  }

  return (
    <form onSubmit={handleSubmit}>
      <AutosizeTextarea
        minRows={3}
        maxRows={10}
        value={editContent}
        onChange={handleChange}
      />
      <LinkButton as="input" type="submit" value="save"></LinkButton>
      <LinkButton onClick={onCancel}>cancel</LinkButton>
    </form>
  );
}