import { HTMLAttributes, MouseEvent, useRef, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import copy from 'copy-to-clipboard';
import tw from 'twin.macro';
import { useOnClickOutside } from 'usehooks-ts';

import { COLOR } from '~/assets/colors';

import { shortenAddress } from '~/utils/string';

import { Balance, CURRENCY } from '~/types';

import { ButtonIconSmall } from '../buttons';
import { IconCopy, IconLogout } from '../icons';

interface Props extends HTMLAttributes<HTMLDivElement> {
  address: string;
  balances?: Balance[];
  disconnect?: () => void;
}

export const DropdownProfile = ({ address, balances, disconnect, ...rest }: Props) => {
  const [isOpen, open] = useState(false);
  const [addressText, setAddressText] = useState<string>(shortenAddress(address, 4));
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    open(false);
  };

  const copyAddress = (e: MouseEvent) => {
    e.stopPropagation();
    const copied = copy(address);

    if (copied) {
      setAddressText('Copied!');
      setTimeout(() => setAddressText(shortenAddress(address, 4)), 1000);
    }
  };

  useOnClickOutside(wrapperRef, handleClickOutside);

  return (
    <Wrapper ref={wrapperRef} isOpen={isOpen} {...rest}>
      <AddressWrapper onClick={() => open(prev => !prev)}>
        <AddressText>{addressText}</AddressText>
        <CopyIconWrapper>
          <ButtonIconSmall
            icon={<IconCopy color={COLOR.GRAYSCALE_4().toHexString()} width={20} height={20} />}
            onClick={copyAddress}
          />
        </CopyIconWrapper>
      </AddressWrapper>
      {isOpen && (
        <ContentWrapper>
          {balances?.map(val => (
            <BalanceWrapper key={val.currency}>
              <Amount>{val.balance}</Amount>
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

interface OpenProps {
  isOpen?: boolean;
}

const Wrapper = styled.div(({ isOpen }: OpenProps) => [
  tw`
    flex flex-col items-start rounded-8 text-white w-163 relative clickable
    py-6 pr-16 pl-24

    bg-grayscale-6/50 hover:bg-grayscale-6
  `,
  isOpen && tw`bg-grayscale-6 rounded-bl-0 rounded-br-0`,
]);
const AddressWrapper = tw.div`
  w-full flex items-center gap-4
`;
const CopyIconWrapper = styled.div(() => [
  css`
    &:hover svg path {
      fill: #f3f4f5;
    }
  `,
]);
const AddressText = tw.div`
  font-r-12 text-center flex flex-1
`;

const ContentWrapper = tw.div`
  absolute flex flex-col flex-center p-8 gap-4 bg-grayscale-6 rounded-bl-8 rounded-br-8 w-full
  top-40 left-0 overflow-hidden
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
