import { useEffect } from 'react';
import tw from 'twin.macro';

import { useListingDataState } from '~/states/listing-data';
import { useListingProgressState } from '~/states/listing-progress';

import { ListingStep1 } from './pages/listing-step-1';
import { ListingStep2 } from './pages/listing-step-2';

const ListingPage = () => {
  const { resetData } = useListingDataState();
  const { progress, resetProgress } = useListingProgressState();

  useEffect(() => {
    return () => {
      resetData();
      resetProgress();
    };
  }, [resetData, resetProgress]);

  return (
    <Wrapper>
      {progress === 0 && <ListingStep1 />}
      {(progress === 1 || progress === 2) && <ListingStep2 />}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full h-full
`;

export default ListingPage;
