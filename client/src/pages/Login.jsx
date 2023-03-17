import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
      navigate('/');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="p-5 mt-5 w-40 border-2 rounded shadow text-primary">
        <h2 className="text-center fw-bold">Meeting Package</h2>
        <div className="form-outline mb-4">
          <label className="form-label fw-bold" for="form2Example1">
            Email address
          </label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label fw-bold">Password</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button
          type="button"
          disabled={loading}
          onClick={handleClick}
          class="btn btn-primary btn-block mb-4 ps-5 pe-5 fw-bold"
        >
          Sign in
        </button>

        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
