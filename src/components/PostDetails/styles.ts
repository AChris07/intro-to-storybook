import styled from '@emotion/styled';

export const PostDetailsContainer = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  text-align: center;
`;

export const PostDetailsTitle = styled.h3`
  margin-bottom: 1.5em;
`;

export const PostDetailsAuthor = styled.h2`
  margin-bottom: 15px;
`;
