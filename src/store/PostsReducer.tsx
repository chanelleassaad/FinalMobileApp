import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsStart: state => {
      state.loading = true;
      state.error = null;
    },
    getPostsSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    getPostsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetPosts: state => {
      state.posts = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const {getPostsStart, getPostsSuccess, getPostsFailure, resetPosts} =
  postsSlice.actions;

export default postsSlice.reducer;
