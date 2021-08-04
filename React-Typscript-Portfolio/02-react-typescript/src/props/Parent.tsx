import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="green" onClick={() => console.log('Clicked!')}>
      This is children prop text.
    </ChildAsFC>
  );
};

export default Parent;
