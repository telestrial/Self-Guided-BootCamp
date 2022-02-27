import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Header.css';

const Header = () => {
  const authed = useSelector((state) => state.auth.authenticated);

  const renderLinks = () => {
    if (authed) {
      return (
        <div>
          {' '}
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      );
    }
  };

  return (
    <div className="header">
      <Link to="/">Redux Auth</Link>
      {renderLinks()}
    </div>
  );
};

export default Header;
