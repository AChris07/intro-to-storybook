import styled from '@emotion/styled';

export const IconButtonContainer = styled('button')`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  color: ${(props) => props.theme.colors.tertiary};
  border: none;
  border-radius: 5px;

  :hover {
    background-color: ${(props) => props.theme.colors.backgroundTertiary};
    color: ${(props) => props.theme.colors.tertiary};
  }
`;
