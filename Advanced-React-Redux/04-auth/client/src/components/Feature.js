import useAuth from '../hooks/useAuth';

const Feature = () => {
  useAuth();
  return <div>This is the feature!</div>;
};

export default Feature;
