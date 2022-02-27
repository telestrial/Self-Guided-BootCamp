import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const authed = useSelector((state) => state.auth.authenticated);
  let navigate = useNavigate();

  useEffect(() => {
    if (!authed) {
      return navigate('/');
    }
  }, [authed, navigate]);
};

export default useAuth;
