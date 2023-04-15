import tw from 'twin.macro';

import { Footer } from '~/components/footer';
import { GnbListing } from '~/components/gnb';

import { ListingAccount } from '../components/listing-account';
import { SelectingCategory } from '../components/selecting-category';

export const ListingStep1 = () => {
  return (
    <Wrapper>
      <GnbListing />
      <ContentWrapper>
        <ListingAccount />
        <SelectingCategory />
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
  w-full h-full pt-200 pb-120 px-24 flex-col flex-center flex-1 flex-shrink-0 gap-90
`;
