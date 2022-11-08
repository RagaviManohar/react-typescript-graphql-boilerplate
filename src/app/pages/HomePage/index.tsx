/**
 * HomePage
 */

import { memo } from 'react';

import { HelmetWrapper } from 'app/components';

const HomePage = () => {
  return (
    <>
      <HelmetWrapper title="Home" description="Home Page" />
      <div>
        <p>Home Page</p>
      </div>
    </>
  );
};

export default memo(HomePage);
