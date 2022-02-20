import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
  const div = document.create('div');

  ReactDOM.render(<App />, div);

  ReactDOM.unmountComponentAtNode(div);
});
