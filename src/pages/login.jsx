import { Helmet } from 'react-helmet-async';
import LoginView from 'src/sections/login/LoginView';

const LoginPage = () => {
  return (
    <>
      <Helmet title="Login | Minimal UI" />
      <LoginView />
    </>
  );
};

export default LoginPage;

