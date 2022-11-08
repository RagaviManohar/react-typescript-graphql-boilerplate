/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Routes, Route } from 'react-router-dom';

import { ROUTES } from 'utils/constants';

// Components
import { PrivateRoute } from 'app/components';
import { LoginPage, HomePage } from 'app/pages';

// Slice
import { useAuthSlice } from 'store/auth';

export const App = () => {
  // To inject 'auth' slice for all the pages(containers)
  useAuthSlice();

  return (
    <Routes>
      {/* LOGIN PAGE */}
      <Route path={ROUTES.loginPage} element={<LoginPage />} />

      {/* HOME PAGE */}
      <Route
        path={ROUTES.homePage}
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
