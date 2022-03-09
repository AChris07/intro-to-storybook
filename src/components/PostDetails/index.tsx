import { FunctionComponent } from 'react';

import { PostDetailsContainer, PostDetailsTitle, PostDetailsAuthor } from './styles';
import { PostTitle } from '../../styles/posts';
import { Post } from '../../types/posts';

type Props = {
  post?: Post;
};

const PostDetails: FunctionComponent<Props> = ({ post }) => {
  return (
    <PostDetailsContainer>
      {post ? (
        <>
          <PostDetailsTitle>Selected Post</PostDetailsTitle>
          <PostDetailsAuthor>{post.author}</PostDetailsAuthor>
          <img src={post.thumbnail} alt="" />
          <PostTitle>{post.title}</PostTitle>
        </>
      ) : (
        <h3>Please select a post</h3>
      )}
    </PostDetailsContainer>
  );
};

export default PostDetails;
