import { useRef, useState } from 'react';
import tw from 'twin.macro';
import { useOnClickOutside } from 'usehooks-ts';
import { useAccount, useSwitchNetwork } from 'wagmi';
import { useNetwork } from 'wagmi';

import IconETH from '~/assets/icons/icon-eth.png';
import IconMatic from '~/assets/icons/icon-matic.png';
import IconScroll from '~/assets/icons/icon-scroll.png';
import { ButtonIconLarge } from '~/components/buttons';

export const GnbNetworkSelector = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, open] = useState(false);
  const { chain } = useNetwork();
  const { isConnected } = useAccount();
  const { switchNetwork } = useSwitchNetwork();

  useOnClickOutside(ref, () => open(false));

  const networks = [
    { icon: IconETH, name: 'Ethereum Goerli', chainId: 5 },
    { icon: IconScroll, name: 'Scroll Alpha', chainId: 534353 },
    { icon: IconMatic, name: 'Polygon Mumbai', chainId: 80001 },
  ];

  const handleClick = (chainId: number) => {
    switchNetwork?.(chainId);
    open(false);
  };

  return (
    <Wrapper>
      <IconWrapper onClick={() => open(true)}>
        <ButtonIconLarge
          icon={
            <img
              src={
                isConnected && chain
                  ? networks.find(({ chainId }) => chainId === chain?.id)?.icon
                  : IconETH
              }
            />
          }
          selected={isOpen}
        />
      </IconWrapper>
      {isOpen && (
        <>
          <ContentWrapper ref={ref}>
            <Title>Switch Network</Title>
            <ListWrapper>
              {networks.map(v => (
                <NetworkList key={v.name} onClick={() => handleClick(v.chainId)}>
                  <ImageWrapper>
                    <img width={20} height={20} src={v.icon} />
                  </ImageWrapper>
                  <NetworkName>{v.name}</NetworkName>
                </NetworkList>
              ))}
            </ListWrapper>
          </ContentWrapper>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = tw.div`
    relative flex justify-start
  `;

const IconWrapper = tw.div`
    relative
  `;

const ContentWrapper = tw.div`
    absolute top-48 left-0 z-1001 max-h-550 overflow-auto
    flex flex-col w-220 bg-grayscale-7 rounded-8 shadow-notification-content
    rounded-bl-8 rounded-br-8
  `;

const Title = tw.div`
    flex px-24 py-16 font-sb-16 text-white
  `;

const NetworkList = tw.div`
  flex px-24 py-12 rounded-8 bg-grayscale-7 gap-16 clickable
  hover:bg-grayscale-6
  `;

const ListWrapper = tw.div`
  flex flex-col px-8 pb-8 bg-grayscale-7
`;

const ImageWrapper = tw.div`
  relative
`;

const NetworkName = tw.span`
  font-r-12 text-white
`;
