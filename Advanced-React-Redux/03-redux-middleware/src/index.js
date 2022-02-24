import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Root from 'Root';
import App from 'components/App';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
);
