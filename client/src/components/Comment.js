import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Votes from './Votes';
import EditComment from './EditComment';
import { HDiv } from '../styled-components/Divs';
import { LinkButton } from '../styled-components/Button';

const CommentDiv = styled(HDiv)`
  border-bottom: 1px solid var(--grey);
`;

export default function Comment({ comment, onEdit, onDelete }) {
  const { id, content, created_at: postDate, num_likes: votes, user, 'voted?': userHasVoted } = comment;
  const currentUser = useSelector(state => state.user);
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  }

  const saveEdit = editContent => {
    fetch(`/api/users/${currentUser.id}/comments/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: editContent
      })
    })
      .then(r => {
        if (r.ok) {
          r.json().then(editedComment => {
            onEdit(editedComment);
            setEditing(false);
          });
        } else {
          r.json().then(console.log);
        }
      })
  }

  const handleDelete = e => {
    fetch(`/api/users/${currentUser.id}/comments/${id}`, {
      method: 'DELETE'
    })
      .then(r => {
        if (r.ok) {
          onDelete(id);
        } else {
          r.json().then(console.log);
        }
      })
  }

  return (
    <CommentDiv>
      <Votes votes={votes} userHasVoted={userHasVoted} parent={{type: 'comment', id}}/>
      <div>
        <h5>{user.username} - {postDate.substring(0, 10)}</h5>
        {
          editing
          ? <EditComment content={content} onSave={saveEdit} onCancel={() => setEditing(false)} />
          : (
          <>
            <p>{content}</p>
            {user.id === currentUser.id
              ? (
                <>
                  <LinkButton onClick={handleEdit}>edit</LinkButton>
                  <LinkButton onClick={handleDelete}>delete</LinkButton>
                </>
              )
              : null
            }
          </>
          )
        }
        
        
      </div>
    </CommentDiv>
  );
}