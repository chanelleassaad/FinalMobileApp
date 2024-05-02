import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AuthContext from './AuthContext';
import * as Keychain from 'react-native-keychain';
import {restoreToken, signIn, signOut, updateAccessToken} from './AuthReducer';

const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const dispatch = useDispatch();
  const {userToken} = useSelector((state: any) => state.auth);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
          userToken = JSON.parse(credentials.password);
        }
      } catch (e) {
        throw e;
      }
      dispatch(restoreToken(userToken));
    };
    bootstrapAsync();
  }, [dispatch]);

  const authContext = useMemo(
    () => ({
      signIn: async (
        email: string,
        accessToken: string,
        refreshToken: string,
      ) => {
        const token = {email, accessToken, refreshToken};
        await Keychain.setGenericPassword('userToken', JSON.stringify(token));
        dispatch(signIn(token));
      },
      signOut: async () => {
        await Keychain.resetGenericPassword();
        dispatch(signOut());
      },
      updateAccessToken: async (accessToken: string) => {
        const {refreshToken} = userToken;
        const updatedToken = {accessToken, refreshToken};
        await Keychain.setGenericPassword(
          'userToken',
          JSON.stringify(updatedToken),
        );
        dispatch(updateAccessToken(accessToken));
      },
    }),
    [dispatch, userToken],
  );

  return (
    <AuthContext.Provider value={{...authContext}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
