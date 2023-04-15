import { useParams } from 'react-router-dom';
import tw from 'twin.macro';

import { Footer } from '~/components/footer';
import { GnbMain } from '~/components/gnb';
import {
  PortfolioInGameInfos,
  PortfolioLockupTokens,
  PortfolioNfts,
  PortfolioSbts,
  PortfolioStakingAssets,
  PortfolioTokens,
  PortfolioTxHistories,
} from '~/components/portfolios';

import {
  accountInGameInfos as accountInGameInfos1,
  accountLockupTokens as accountLockupTokens1,
  accountStakingAssets as accountStakingAssets1,
  accountTokens as accountTokens1,
  accountTxHistories as accountTxHistories1,
} from '~/__mocks__/data/account-portfolios-1';
import {
  accountInGameInfos as accountInGameInfos2,
  accountLockupTokens as accountLockupTokens2,
  accountStakingAssets as accountStakingAssets2,
  accountTokens as accountTokens2,
  accountTxHistories as accountTxHistories2,
} from '~/__mocks__/data/account-portfolios-2';
import { MOCK_USER } from '~/constants';

import { AccountInfo } from './components/account-info';

interface Props {
  id: string;
}
const DetailPageMock = ({ id }: Props) => {
  const tokenData = id === MOCK_USER.USER_1 ? accountTokens1 : accountTokens2;
  const lockupTokens = id === MOCK_USER.USER_1 ? accountLockupTokens1 : accountLockupTokens2;
  const inGameInfo = id === MOCK_USER.USER_1 ? accountInGameInfos1 : accountInGameInfos2;

  const tokens = tokenData.data.erc20.data;
  const nfts = tokenData.data.erc721.data;
  const sbts = tokenData.data.poap.data;

  const stakingAssets = id === MOCK_USER.USER_1 ? accountStakingAssets1 : accountStakingAssets2;
  const histories = id === MOCK_USER.USER_1 ? accountTxHistories1 : accountTxHistories2;

  return (
    <Wrapper>
      <GnbMain />
      <ContentWrapper>
        <DetailWrapper>
          <AccountInfo />
        </DetailWrapper>
        <PortfolioWrapper>
          <PortfolioInnerWrapper>
            <PortfolioTitle>Portfolio</PortfolioTitle>
            <PortfolioTokens data={tokens} />
            <Divider />
            <PortfolioSbts data={sbts} />
            <Divider />
            <PortfolioNfts data={nfts} />
            <Divider />
            <PortfolioLockupTokens data={lockupTokens} />
            <Divider />
            <PortfolioStakingAssets data={stakingAssets} />
            <Divider />
            <PortfolioTxHistories data={histories} />
            <Divider />
            <PortfolioInGameInfos data={inGameInfo} />
          </PortfolioInnerWrapper>
        </PortfolioWrapper>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full h-full flex flex-col items-center
  min-w-1440 min-h-960
`;

const ContentWrapper = tw.div`
  w-full pt-120 pb-120 flex flex-col flex-1 flex-shrink-0 items-center gap-80
`;

const DetailWrapper = tw.div`
  w-886 flex flex-col flex-1 flex-shrink-0 gap-48
`;

const Divider = tw.div`
  w-full h-1 bg-grayscale-5
`;

const PortfolioWrapper = tw.div`
  w-full flex justify-center py-60 bg-grayscale-7
`;

const PortfolioInnerWrapper = tw.div`
  w-886 flex flex-col gap-48
`;

const PortfolioTitle = tw.div`
  py-10 font-sb-24 text-white
`;

export default DetailPageMock;
