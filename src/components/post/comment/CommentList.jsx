import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return (
    <>
      {comments &&
        comments.map((comment) => (
          <Comment key={comment.commentId} comment={comment} />
        ))}
    </>
  );
};

export default CommentList;
