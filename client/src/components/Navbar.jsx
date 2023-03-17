import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <nav
        class="navbar navbar-expand-lg"
        style={{ backgroundColor: '#e3f2fd' }}
      >
        <div class="container-fluid">
          <Link to="/" className="navbar-brand">
            Meeting Package
          </Link>

          <div class="d-flex" role="search">
            {user ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <span className="nav-link">{user.email}</span>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
