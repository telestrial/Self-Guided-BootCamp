import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../actions';

const Signout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.signout());
  }, [dispatch]);

  return <div>Sorry to see you go!</div>;
};

export default Signout;
