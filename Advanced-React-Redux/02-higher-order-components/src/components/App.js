import { Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'actions';

import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';

const App = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const renderButton = () => {
    if (auth) {
      return (
        <button
          onClick={() => {
            dispatch(actions.changeAuth(false));
          }}
        >
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            dispatch(actions.changeAuth(true));
          }}
        >
          Sign In
        </button>
      );
    }
  };

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  };

  return (
    <div>
      {renderHeader()}
      <Routes>
        <Route path="/post" element={<CommentBox />} />
        <Route path="/" element={<CommentList />} />
      </Routes>
    </div>
  );
};

export default App;
