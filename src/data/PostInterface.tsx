import {IRoot} from './RootInterface';

export interface IPostsState {
  posts: IRoot[];
  loading: boolean;
  error: string | null;
}
