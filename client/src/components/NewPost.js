import React from "react";
import styled from 'styled-components';

import PostForm from "./PostForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function NewPost() {

  return (
    <Container>
      <h2>Create a new Post</h2>
      <PostForm />
    </Container>
  );
}