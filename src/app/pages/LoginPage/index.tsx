/**
 * LoginPage
 */

import { memo } from 'react';

import { HelmetWrapper } from 'app/components';

const LoginPage = () => {
  return (
    <>
      <HelmetWrapper title="Login" description="Login Page" />
      <div>
        <p>Login Page</p>
      </div>
    </>
  );
};

export default memo(LoginPage);
