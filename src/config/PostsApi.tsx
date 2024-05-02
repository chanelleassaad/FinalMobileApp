import {Dispatch} from 'react';
import {api, refreshAccessToken} from './UserApi';
import {
  getPostsStart,
  getPostsSuccess,
  getPostsFailure,
} from '../store/PostsReducer';
import {IUserToken} from '../data/UserTokenInterface';

export const getPosts =
  (
    userToken: IUserToken,
    page: number,
    updateAccessToken: (accessToken: string) => void,
  ) =>
  async (dispatch: Dispatch<any>) => {
    try {
      dispatch(getPostsStart());
      const response = await api.get(`/posts?page=${page}&limit=${15}`, {
        headers: {
          Authorization: `Bearer ${userToken.accessToken}`,
        },
      });
      dispatch(getPostsSuccess(response.data));
    } catch (error: any) {
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
        } catch (refreshError: any) {
          dispatch(getPostsFailure(refreshError.message));
        }
      } else {
        dispatch(getPostsFailure(error.message));
      }
    }
  };
