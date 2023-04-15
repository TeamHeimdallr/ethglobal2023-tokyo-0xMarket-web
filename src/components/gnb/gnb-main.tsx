import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

import { Logo } from '~/components/logo';

import { Balance, CURRENCY } from '~/types';

import { chains } from '~/configs/setup-wallet';
import { CHAIN_ID } from '~/constants';

import { ButtonMediumPrimary } from '../buttons';
import { DropdownProfile } from '../dropdown-profile';
import { Notification } from '../notification';

export const GnbMain = () => {
  const navigate = useNavigate();

  const { isConnected, address } = useAccount();
  const { connect } = useConnect({
    chainId: CHAIN_ID.GOERLI,
    connector: new MetaMaskConnector({ chains }),
  });
  const { disconnect } = useDisconnect();

  const { data: goerliBalance } = useBalance({
    chainId: CHAIN_ID.GOERLI,
    address,
  });

  const balances: Balance[] = [
    {
      currency: CURRENCY.ETH,
      balance: goerliBalance?.formatted ?? '0',
    },
  ];

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo color="#fff" />
      </LogoWrapper>
      {isConnected ? (
        <ConnectWalletWrapper>
          <Notification />
          <DropdownProfile
            address={address ?? '0x'}
            balances={balances}
            disconnect={() => disconnect()}
          />
          <ButtonMediumPrimary text="List my account" onClick={() => navigate('/listing')} />
        </ConnectWalletWrapper>
      ) : (
        <ButtonMediumPrimary text="Connect wallet" onClick={() => connect()} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div(() => [
  tw`
    fixed left-0 top-0 w-full h-80 flex items-center justify-between px-24 py-20 relative z-1000
  `,
  css`
    background: rgba(25, 31, 40, 0.01);
    backdrop-filter: blur(4px);
  `,
]);

const LogoWrapper = tw.div`
  flex-center
`;
const ConnectWalletWrapper = tw.div`
  flex gap-16
`;
