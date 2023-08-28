import React, {createContext, useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useInfoViewActionsContext} from '@crema/utility/AppContextProvider/InfoViewContextProvider';
import jwtAxios, {setAuthToken} from './index';

const JWTAuthContext = createContext();
const JWTAuthActionsContext = createContext();

export const useJWTAuth = () => useContext(JWTAuthContext);

export const useJWTAuthActions = () => useContext(JWTAuthActionsContext);

const JWTAuthAuthProvider = ({children}) => {
  const [firebaseData, setJWTAuthData] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  const infoViewActionsContext = useInfoViewActionsContext();

  useEffect(() => {
    const getAuthUser = () => {
      
      const token = localStorage.getItem('token');
      console.log("token ",token)
      console.log("toen ",firebaseData)

      if (!token) {
        setJWTAuthData({
          user: undefined,
          isLoading: false,
          isAuthenticated: false,
        });
        return;
      }
      setAuthToken(token);
      setJWTAuthData({
                user: {},
                isLoading: false,
                isAuthenticated: true,
              })
    //   jwtAxios
    //     .get('/auth')
    //     .then(({data}) =>
    //       setJWTAuthData({
    //         user: data,
    //         isLoading: false,
    //         isAuthenticated: true,
    //       }),
    //     )
    //     .catch(() =>
    //       setJWTAuthData({
    //         user: undefined,
    //         isLoading: false,
    //         isAuthenticated: false,
    //       }),
    //     );
    };

    getAuthUser();
  }, []);

  const signInUser = async ({email, password}) => {
    infoViewActionsContext.fetchStart();
    try {
      const {data} = await jwtAxios.post('/api/employee/login', {email, password});
      console.log('qqq',data);
      localStorage.setItem('token', data.token);
      console.log('soos',data.token);

      localStorage.setItem('role', data.data.role);
      setAuthToken(data.token);
      setJWTAuthData({
        user: data.data,
        isAuthenticated: true,
        isLoading: false,
      });
      infoViewActionsContext.fetchSuccess();
    } catch (error) {
      setJWTAuthData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      infoViewActionsContext.fetchError(
        error?.response?.data?.error || 'Something went wrong',
      );
    }
  };

  // const signUpUser = async ({name, email, password}) => {
  //   infoViewActionsContext.fetchStart();
  //   try {
  //     const {data} = await jwtAxios.post('users', {name, email, password});
  //     localStorage.setItem('token', data.token);
  //     setAuthToken(data.token);
  //     const res = await jwtAxios.get('/auth');
  //     setJWTAuthData({
  //       user: res.data,
  //       isAuthenticated: true,
  //       isLoading: false,
  //     });
  //     infoViewActionsContext.fetchSuccess();
  //   } catch (error) {
  //     setJWTAuthData({
  //       ...firebaseData,
  //       isAuthenticated: false,
  //       isLoading: false,
  //     });
  //     console.log('error:', error.response.data.error);
  //     infoViewActionsContext.fetchError(
  //       error?.response?.data?.error || 'Something went wrong',
  //     );
  //   }
  // };

  const logout = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setAuthToken();
    setJWTAuthData({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  return (
    <JWTAuthContext.Provider
      value={{
        ...firebaseData,

      }}
    >
      <JWTAuthActionsContext.Provider
        value={{
          // signUpUser,
          signInUser,
          logout,
        }}
      >
        {children}
      </JWTAuthActionsContext.Provider>
    </JWTAuthContext.Provider>
  );
};
export default JWTAuthAuthProvider;

JWTAuthAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
