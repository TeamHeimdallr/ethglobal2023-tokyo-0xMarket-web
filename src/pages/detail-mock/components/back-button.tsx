import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import { IconBack } from '~/components/icons';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Button onClick={() => navigate('/')}>
        <IconBack width={24} height={24} color="#6D7684" />
        Back
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div(() => [
  tw`
    flex items-center justify-start clickable
  `,
  css`
    &:hover > svg path {
      fill: #adb3be;
    }
  `,
]);

const Button = tw.div`
  flex-center pt-2 pr-12 pb-2 pl-8 gap-4 rounded-8 bg-transparent
  text-grayscale-3 font-r-12
  hover:bg-grayscale-6 hover:text-grayscale-2
`;
