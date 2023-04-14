import { HTMLAttributes, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import copy from 'copy-to-clipboard';
import tw from 'twin.macro';

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

export const DropdownBalance = ({ address, balances, disconnect, ...rest }: Props) => {
  const [opened, open] = useState(false);

  return (
    <Wrapper {...rest}>
      <AddressWrapper onClick={() => open(prev => !prev)}>
        <AddressText>{shortenAddress(address, 4)}</AddressText>
        <CopyIconWrapper>
          <IconCopy
            onClick={() => copy(address)}
            color={COLOR.GRAYSCALE_5().toHexString()}
            width={20}
            height={20}
          ></IconCopy>
        </CopyIconWrapper>
      </AddressWrapper>
      {opened && (
        <BalanceContainer>
          {balances?.map(val => {
            return (
              <BalanceWrapper key={val.currency}>
                <Amount>{parseNumberCommaSeperator({ number: Number(val.balance) })}</Amount>
                <Symbol>{val.currency as CURRENCY}</Symbol>
              </BalanceWrapper>
            );
          })}
          <Divider />
          <LogOutWrapper className="group" onClick={() => disconnect?.()}>
            <IconLogout
              color={COLOR.GRAYSCALE_4().toHexString()}
              width={16}
              height={16}
            ></IconLogout>
            <LogOutText>{'Disconnect'}</LogOutText>
          </LogOutWrapper>
        </BalanceContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col items-start absolute rounded-8 top-45 w-163 bg-grayscale-6
`;

const Divider = tw.div`
  w-full h-1 bg-grayscale-5
`;

const BalanceContainer = tw.div`
  flex flex-col flex-center p-8 gap-4 bg-grayscale-6 rounded-8 w-full
`;

const BalanceWrapper = tw.div`
  flex justify-between py-6 px-12 gap-4 w-full
`;

const LogOutWrapper = styled.div(() => [
  tw`
    flex justify-start items-start px-8 py-6 gap-4 rounded-b-8 w-full clickable
  `,
  css`
    &:hover svg path {
      fill: #eaecef;
    }
  `,
  `
    &:hover svg rect {
        fill: #eaecef;
    }`,
  `
    &:active svg path {
        fill: #6680e6;
    }`,
  `
    &:active svg rect {
        fill: #6680e6;
    }`,
]);

const LogOutText = tw.div`
  font-sans text-grayscale-3 font-r-11
  group-hover:text-grayscale-2 group-active:text-blue
`;

const Symbol = tw.div`
  text-grayscale-3 font-r-12 
`;

const Amount = tw.div`
  text-white font-r-12
`;

const AddressWrapper = tw.div`
  flex flex-center w-full py-4 pl-24 pr-16 gap-4 clickable
`;

const CopyIconWrapper = styled.div(() => [
  tw`w-28 h-28 flex flex-center`,
  css`
    &:hover svg path {
      fill: #6d7684;
    }
  `,
  `
    &:active svg path {
        fill: #6680e6;
    }`,
]);

const AddressText = tw.span`
  font-sans text-white font-r-12
`;
