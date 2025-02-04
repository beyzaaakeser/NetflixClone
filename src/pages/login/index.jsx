import './login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleFinish = () => {
    navigate('/home');
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img src="/logo1.png" className="logo" alt="Netflix Logo" />
        </div>
      </div>

      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton" onClick={handleFinish}>
            Sign In
          </button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more.</b>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
