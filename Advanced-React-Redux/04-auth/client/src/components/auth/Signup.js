import { reduxForm, Field } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions';

import { useNavigate } from 'react-router-dom';

const Signup = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const navigate = useNavigate();

  const onSubmitHandler = (formProps) => {
    dispatch(
      actions.signup(formProps, () => {
        navigate('/feature');
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <fieldset>
        <label>Email</label>
        <Field
          name="email"
          type="text"
          component="input"
          autoCapitalize="none"
        />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <div>{errorMessage}</div>
      <button>Sign Up!</button>
    </form>
  );
};

export default reduxForm({ form: 'signup' })(Signup);
