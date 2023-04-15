import { HTMLAttributes, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getYear } from 'date-fns';
import tw from 'twin.macro';

import { COLOR } from '~/assets/colors';
import { Logo } from '~/components/logo';

interface Props extends HTMLAttributes<HTMLDivElement> {
  date?: Date;
}
export const Footer = ({ date }: Props) => {
  const navigate = useNavigate();
  const redirectToMain = useCallback(() => navigate('/'), [navigate]);

  const currentYear = getYear(date ?? new Date());

  return (
    <Wrapper>
      <LogoWrapper onClick={redirectToMain}>
        <Logo color={COLOR.WHITE().toHexString()} />
      </LogoWrapper>
      <Caption>{`© ${currentYear} Team Heimdallr, Inc. All Rights Reserved`}</Caption>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex-center flex-col gap-8 w-full h-124 bg-grayscale-7 flex-shrink-0
`;

const LogoWrapper = tw.div`
  clickable
`;

const Caption = tw.div`
  font-r-12 text-grayscale-3 text-center
`;
