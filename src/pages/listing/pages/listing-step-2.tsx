import tw from 'twin.macro';

import { Footer } from '~/components/footer';
import { GnbListing } from '~/components/gnb';

import { BackButton } from '../components/back-button';
import { ListingInputs } from '../components/lising-inputs';
import { ListedAccountAbstract } from '../components/listed-account-abstract';
import { ListingVerify } from '../components/listing-verify';

export const ListingStep2 = () => {
  return (
    <Wrapper>
      <GnbListing />
      <ContentWrapper>
        <BackButton />
        <ListedAccountAbstract />
        <Divider />
        <ListingInputs />
        <ListingVerify />
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
  w-886 h-full pt-120 pb-120 flex flex-col flex-1 flex-shrink-0 gap-48
`;

const Divider = tw.div`
  w-full h-1 bg-grayscale-5
`;
