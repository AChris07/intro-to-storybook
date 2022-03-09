import styled from '@emotion/styled';

import IconButton from '../IconButton';

export const PostListContainer = styled.ul`
  list-style: none;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  margin: 0;
  padding: 10px;
  text-align: center;
`;

export const PostListDismissButton = styled(IconButton)`
  position: sticky;
  bottom: 15px;
`;
