import styled from '@emotion/styled';
import Image from 'next/image';

const InverseImage = styled(Image)`
  filter: brightness(0) invert(1);
`;

export default InverseImage;
