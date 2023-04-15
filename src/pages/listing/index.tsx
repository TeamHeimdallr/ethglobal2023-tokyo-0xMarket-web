import tw from 'twin.macro';

import { useListingProgressState } from '~/states/listing-progress';

import { ListingStep1 } from './pages/listing-step-1';
import { ListingStep2 } from './pages/listing-step-2';

const ListingPage = () => {
  const { progress } = useListingProgressState();
  return (
    <Wrapper>
      {progress === 0 && <ListingStep1 />}
      {progress === 1 && <ListingStep2 />}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full h-full
`;

export default ListingPage;
