import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AuthRoutes from '@crema/utility/AuthRoutes';
import AppContextProvider from '@crema/utility/AppContextProvider';
import AppThemeProvider from '@crema/utility/AppThemeProvider';
import AppStyleProvider from '@crema/utility/AppStyleProvider';
import AppLocaleProvider from '@crema/utility/AppLocaleProvider';
import AppLayout from '@crema/core/AppLayout';
import {BrowserRouter} from 'react-router-dom';
import JWTAuthAuthProvider from '@crema/services/auth/jwt-auth/JWTAuthProvider';

const App = () => (
  <AppContextProvider>
    <AppThemeProvider>
      <AppStyleProvider>
        <AppLocaleProvider>
          <BrowserRouter>
            <JWTAuthAuthProvider>
              <AuthRoutes>
                <CssBaseline />
                <AppLayout />
              </AuthRoutes>
            </JWTAuthAuthProvider>
          </BrowserRouter>
        </AppLocaleProvider>
      </AppStyleProvider>
    </AppThemeProvider>
  </AppContextProvider>
);

export default App;
