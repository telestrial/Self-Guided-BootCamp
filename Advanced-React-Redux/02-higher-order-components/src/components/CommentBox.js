import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import * as actions from 'actions';
import useAuth from 'hooks/useAuth';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  useAuth();

  const onChangeHandler = (event) => {
    setComment(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(actions.saveComment(comment));

    setComment('');
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h4>Add a comment</h4>
        <textarea value={comment} onChange={onChangeHandler} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button
        onClick={() => {
          dispatch(actions.fetchComments());
        }}
        className="fetch-comments"
      >
        Fetch Comments
      </button>
    </div>
  );
};

export default connect(null, actions)(CommentBox);
