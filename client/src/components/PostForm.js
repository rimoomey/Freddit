import React, { useState } from 'react';
import styled from 'styled-components';

import { FormInput } from '../styled-components/FormInput';
import { PostButton } from '../styled-components/Button';
import AutosizeTextarea from './AutosizeTextarea';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: 50%;
  min-width: 200px;
`;

const ImgPreview = styled.img`
  display: block;
  width: 80%;
  min-width: 150px;
`;

const DEFAULT_FORM_DATA = {
  topic: '',
  title: '',
  img: '',
  text: '',
}

export default function PostForm() {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    setFormData(DEFAULT_FORM_DATA);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor='topic-name'>Topic Name</label>
      <FormInput
        type="text"
        name="topic"
        id="topic-name"
        placeholder="i.e. duck_pictures"
        value={formData.topic}
        onChange={handleChange}
        required
      />
      <label htmlFor='title'>Title</label>
      <FormInput
        type="text"
        name="title"
        id="title"
        placeholder="Best Duck Picture Ever."
        value={formData.title}
        onChange={handleChange}
        required
      />
      <label htmlFor='img-url'>Image URL</label>
      <FormInput
        type="text"
        name="img"
        id="img-url"
        placeholder="example.com/images/duck.png"
        value={formData.img}
        onChange={handleChange}
      />
      <figure>
        <ImgPreview src={formData.img} alt="Image Preview" />
        <figcaption>Preview of Image</figcaption>
      </figure>
      <label htmlFor='textarea'>Post Body</label>
      <AutosizeTextarea
        id="textarea"
        name="text"
        minRows={5}
        maxRows={15}
        value={formData.text}
        onChange={handleChange}
      />
      <PostButton as="input" type="submit" value="Publish" />
    </Form>
  );
}