import tw from 'twin.macro';

import { Footer } from '~/components/footer';
import { GnbMain } from '~/components/gnb';

import { AccountDiscovers } from './components/account-discover';

const MainPage = () => {
  return (
    <Wrapper>
      <GnbMain />
      <ContentWrapper>
        <AccountDiscovers />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full h-full flex flex-col
  min-w-1440 min-h-960
`;
const ContentWrapper = tw.div`
  w-full h-full pt-200 pb-120 px-24 flex-center flex-1 flex-shrink-0
`;

export default MainPage;
