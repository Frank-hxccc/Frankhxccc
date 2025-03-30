// filepath: /birthday-greeting-app/birthday-greeting-app/src/pages/LoginPage.tsx
import React from 'react';
import LoginForm from '../components/Login';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>登录</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;