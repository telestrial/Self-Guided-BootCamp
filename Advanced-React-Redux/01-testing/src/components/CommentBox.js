import { useState } from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState('');

  const onChangeHandler = (event) => {
    setComment(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Call an action creater and save a comment

    setComment('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h4>Add a comment</h4>
      <textarea value={comment} onChange={onChangeHandler} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
};

export default CommentBox;
