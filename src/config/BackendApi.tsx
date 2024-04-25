import axios from 'axios';
import {Dispatch} from 'react';
import {
  getPostsStart,
  getPostsSuccess,
  getPostsFailure,
} from '../store/PostsReducer';

const baseUrl = 'https://backend-practice.euriskomobility.me/';

const api = axios.create({
  baseURL: baseUrl,
});

export interface IUser {
  email: string;
  password: string;
}

export const loginUser = async ({email, password}: IUser) => {
  try {
    const response = await api.post('/login', {email, password});
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to login');
  }
};

export const signUpUser = async ({email, password}: IUser) => {
  try {
    const response = await api.post('/signup', {email, password});
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to sign up');
  }
};

export const refreshAccessToken = async ({
  refreshToken,
}: {
  refreshToken: string;
}) => {
  try {
    const response = await api.post('/refresh-token', {refreshToken});
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to refresh token');
  }
};

export const getPosts =
  (userToken, page, updateAccessToken: (accessToken: string) => void) =>
  async (dispatch: Dispatch<any>) => {
    try {
      dispatch(getPostsStart());
      const response = await api.get(`/posts?page=${page}&limit=${15}`, {
        headers: {
          Authorization: `Bearer ${userToken.accessToken}`,
        },
      });
      dispatch(getPostsSuccess(response.data));
    } catch (error) {
      if (error.response && error.response.status === 403) {
        try {
          const refreshedTokenData = await refreshAccessToken({
            refreshToken: userToken.refreshToken,
          });
          const refreshedToken = refreshedTokenData.accessToken;
          updateAccessToken(refreshedToken);
          // Retry the original request with the new token
          const response = await api.get(`/posts?page=${1}&limit=${15}`, {
            headers: {
              Authorization: `Bearer ${refreshedToken}`,
            },
          });
          dispatch(getPostsSuccess(response.data));
        } catch (refreshError) {
          dispatch(getPostsFailure(refreshError.message));
        }
      } else {
        dispatch(getPostsFailure(error.message));
      }
    }
  };
