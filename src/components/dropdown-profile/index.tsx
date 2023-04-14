import { HTMLAttributes, useRef, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import copy from 'copy-to-clipboard';
import tw from 'twin.macro';
import { useOnClickOutside } from 'usehooks-ts';

import { COLOR } from '~/assets/colors';

import { parseNumberCommaSeperator } from '~/utils/number';
import { shortenAddress } from '~/utils/string';

import { Balance, CURRENCY } from '~/types';

import { IconCopy, IconLogout } from '../icons';

interface Props extends HTMLAttributes<HTMLDivElement> {
  address: string;
  balances?: Balance[];
  disconnect?: () => void;
}

export const DropdownProfile = ({ address, balances, disconnect, ...rest }: Props) => {
  const [opened, open] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    open(false);
  };

  useOnClickOutside(wrapperRef, handleClickOutside);

  return (
    <Wrapper ref={wrapperRef} opened={opened} {...rest}>
      <AddressWrapper onClick={() => open(prev => !prev)}>
        <AddressText>{shortenAddress(address, 4)}</AddressText>
        <CopyIconWrapper>
          <IconCopy
            onClick={() => copy(address)}
            color={COLOR.GRAYSCALE_4().toHexString()}
            width={20}
            height={20}
          />
        </CopyIconWrapper>
      </AddressWrapper>
      {opened && (
        <ContentWrapper>
          {balances?.map(val => (
            <BalanceWrapper key={val.currency}>
              <Amount>
                {parseNumberCommaSeperator({ number: Number(val.balance), decimalPoint: 2 })}
              </Amount>
              <Symbol>{val.currency as CURRENCY}</Symbol>
            </BalanceWrapper>
          ))}
          <Divider />
          <DisconnectWrapper className="group" onClick={() => disconnect?.()}>
            <IconLogout color={COLOR.GRAYSCALE_4().toHexString()} width={16} height={16} />
            <DisconnectText>Disconnect</DisconnectText>
          </DisconnectWrapper>
        </ContentWrapper>
      )}
    </Wrapper>
  );
};

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  opened?: boolean;
}

const Wrapper = styled.div(({ opened }: WrapperProps) => [
  opened ? tw`bg-grayscale-6` : tw`bg-grayscale-6/50`,
  tw`
    flex flex-col items-start absolute rounded-8 w-163 hover:bg-grayscale-6 text-white
  `,
]);
const ContentWrapper = tw.div`
  flex flex-col flex-center p-8 gap-4 bg-grayscale-6 rounded-8 w-full 
`;

const AddressWrapper = tw.div`
  flex flex-center w-full py-4 pl-24 pr-16 gap-4 clickable
`;
const CopyIconWrapper = styled.div(() => [
  tw`w-28 h-28 flex flex-center`,
  css`
    &:hover svg path {
      fill: ${COLOR.GRAYSCALE_1().toHexString()};
    }
  `,
]);
const AddressText = tw.span`
  font-r-12
`;

const BalanceWrapper = styled.div(() => [
  css`
    &:hover > div {
      color: white;
    }
  `,
  tw`
    flex justify-between py-6 px-12 gap-4 w-full rounded-8 text-grayscale-2 hover:bg-grayscale-5 hover:text-white
  `,
]);
const Symbol = tw.div`
  text-grayscale-3 font-r-12 
`;
const Amount = tw.div`
  text-grayscale-2 font-r-12
`;

const Divider = tw.div`
  w-full h-1 bg-grayscale-5
`;

const DisconnectWrapper = styled.div(() => [
  tw`
    flex items-center px-8 py-6 gap-4 rounded-b-8 w-full clickable
  `,
  css`
    &:hover > div {
      color: ${COLOR.GRAYSCALE_2().toHexString()};
    }
  `,
  css`
    &:hover svg path {
      fill: ${COLOR.GRAYSCALE_3().toHexString()};
    }
  `,
]);
const DisconnectText = tw.div`
  text-grayscale-3 font-r-12
`;
