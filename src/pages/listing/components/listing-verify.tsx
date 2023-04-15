import tw from 'twin.macro';

import { Checkbox } from '~/components/checkbox';

import { useListingDataState } from '~/states/listing-data';

export const ListingVerify = () => {
  const { data, setData } = useListingDataState();

  return (
    <VerifyWrapper onClick={() => setData({ verified: !data.verified })}>
      <Checkbox selected={data.verified} />
      Verify accounts
    </VerifyWrapper>
  );
};

const VerifyWrapper = tw.div`
  flex gap-10 font-sb-14 text-grayscale-2 clickable self-start select-none
`;
