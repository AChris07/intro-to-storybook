import type { Context, Dispatch, FunctionComponent, ReactNode } from 'react';
import { createContext, useContext, useReducer } from 'react';
import { nanoid } from 'nanoid';

import { getTopPosts } from 'src/api/reddit';
import { Post, PostStatusEnum } from 'src/types/posts';

export interface PostState {
  status: PostStatusEnum;
  offset: number;
  nextToken?: string;
  entities: Record<string, Post>;
  ids: string[];
  selectedId?: string;
}

interface FetchPostsRequest {
  offset: number;
  nextToken?: string;
}

export interface FetchPostsPayload {
  after: string;
  entities: Record<string, Post>;
  ids: string[];
}

export const initialState: PostState = {
  status: PostStatusEnum.IDLE,
  offset: 0,
  entities: {},
  ids: [],
  selectedId: undefined,
};

enum PostActionType {
  FETCH_TOP_POSTS_PENDING = 'FETCH_TOP_POSTS_PENDING',
  FETCH_TOP_POSTS_FULFILLED = 'FETCH_TOP_POSTS_FULFILLED',
  FETCH_TOP_POSTS_REJECTED = 'FETCH_TOP_POSTS_REJECTED',
  SELECT_POST = 'SELECT_POST',
  DISMISS_POST = 'DISMISS_POST',
  DISMISS_ALL = 'DISMISS_ALL',
}

interface PostAction {
  type: PostActionType;
  selectedId?: string;
  payload?: FetchPostsPayload;
  error?: string;
}

const fetchTopPostsPending = (): PostAction => ({
  type: PostActionType.FETCH_TOP_POSTS_PENDING,
});

const fetchTopPostsFulfilled = (payload: FetchPostsPayload): PostAction => ({
  type: PostActionType.FETCH_TOP_POSTS_FULFILLED,
  payload,
});

const fetchTopPostsRejected = (error: string): PostAction => ({
  type: PostActionType.FETCH_TOP_POSTS_REJECTED,
  error,
});

export const fetchTopPosts =
  (dispatch: Dispatch<PostAction>) =>
  async ({ offset = 0, nextToken }: FetchPostsRequest) => {
    dispatch(fetchTopPostsPending());

    getTopPosts(offset, nextToken)
      .then((response) => {
        const initialPayload: FetchPostsPayload = {
          after: response.after,
          entities: {},
          ids: [],
        };
        const payload = response.children.reduce((acc, { data }) => {
          const uuid = nanoid();
          return {
            ...acc,
            entities: {
              ...acc.entities,
              [uuid]: {
                id: uuid,
                title: data.title,
                thumbnail: data.thumbnail,
                author: data.author,
                entryDate: data.created_utc,
                numComments: data.num_comments,
                isRead: false,
              },
            },
            ids: [...acc.ids, uuid],
          };
        }, initialPayload);
        dispatch(fetchTopPostsFulfilled(payload));
      })
      .catch((err) => dispatch(fetchTopPostsRejected(err)));
  };

export const fetchInitialPosts = (dispatch: Dispatch<PostAction>) => () => {
  dispatch(dismissAll());
  fetchTopPosts(dispatch)({ offset: 0 });
};

export const selectPost = (id: string): PostAction => ({
  type: PostActionType.SELECT_POST,
  selectedId: id,
});

export const dismissPost = (id: string): PostAction => ({
  type: PostActionType.DISMISS_POST,
  selectedId: id,
});

export const dismissAll = (): PostAction => ({
  type: PostActionType.DISMISS_ALL,
});

function postReducer(state: PostState, action: PostAction): PostState {
  switch (action.type) {
    case PostActionType.FETCH_TOP_POSTS_PENDING:
      return {
        ...state,
        status: PostStatusEnum.LOADING,
      };
    case PostActionType.FETCH_TOP_POSTS_FULFILLED:
      return {
        ...state,
        status: PostStatusEnum.IDLE,
        offset: action.payload?.ids.length || state.offset,
        nextToken: action.payload?.after || state.nextToken,
        entities: {
          ...state.entities,
          ...(action.payload?.entities || {}),
        },
        ids: [...state.ids, ...(action.payload?.ids || [])],
      };
    case PostActionType.FETCH_TOP_POSTS_REJECTED:
      return {
        ...state,
        status: PostStatusEnum.FAILED,
      };
    case PostActionType.SELECT_POST:
      const entities = Object.assign({}, state.entities);
      if (action.selectedId !== undefined) {
        entities[action.selectedId].isRead = true;
      }
      return {
        ...state,
        selectedId: action.selectedId,
        entities,
      };
    case PostActionType.DISMISS_POST:
      return {
        ...state,
        ids: state.ids.filter((id) => id !== action.selectedId),
      };
    case PostActionType.DISMISS_ALL:
      return {
        ...state,
        offset: 0,
        nextToken: undefined,
        ids: [],
      };
    default:
      return state;
  }
}

const PostContext: Context<{
  state: PostState;
  dispatch: Dispatch<PostAction>;
}> = createContext({
  state: initialState,
  /* tslint:disable:no-empty */
  dispatch: (_: PostAction) => {},
});

type Props = {
  children: ReactNode;
};

export const PostProvider: FunctionComponent<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>{children}</PostContext.Provider>
  );
};

export const getPosts = (state: PostState) => {
  const { ids, entities } = state;
  return ids.map((id) => entities[id]);
};
export const getPostSelected = (state: PostState) => {
  const { selectedId, entities } = state;
  if (selectedId === undefined) return undefined;
  return entities[selectedId];
};

export function usePostContext() {
  return useContext(PostContext);
}
