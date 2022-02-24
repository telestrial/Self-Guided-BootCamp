import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import asyncResolver from 'middlewares/asyncResolver';
import stateValidator from 'middlewares/stateValidator';

import reducers from 'reducers';

const Root = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(asyncResolver, stateValidator)
  );

  return <Provider store={store}>{children}</Provider>;
};

export default Root;
