import { isEmpty } from 'lodash-es';
import tw from 'twin.macro';

import ImagePoweredByUma from '~/assets/images/image-powered-by-uma.png';
import { ButtonMediumDefault } from '~/components/buttons';
import { TextFieldMultiline } from '~/components/textfield';
import { Toggle } from '~/components/toggle';

import { useListingUmaState } from '~/states/listing-uma';

const UMA_PRICE = 1;
export const ListingUma = () => {
  const { active, toggleActive, data, setData } = useListingUmaState();
  const nextId = isEmpty(data) ? '0' : (Object.keys(data)?.length || 0).toString();
  const validDataCount = Object.values(data)?.filter(d => !!d)?.length || 0;

  return (
    <Wrapper>
      <UpperWrapper>
        <UpperInfoWrapper>
          <UpperInfo>
            Verify statements
            <UpperDescription>{`The verification fee costs ${UMA_PRICE} USDC per sentence.`}</UpperDescription>
          </UpperInfo>
          <Toggle active={active} onClick={toggleActive} />
        </UpperInfoWrapper>
        <UpperUma style={{ backgroundImage: `url(${ImagePoweredByUma})` }} />
      </UpperWrapper>
      {active && (
        <>
          <MiddleWrapper>
            {Object.keys(data)?.map(obj => (
              <TextFieldMultiline
                key={obj}
                border
                placeholder="Provide one sentence you'd like to be verified"
                onChange={value => setData(obj, value)}
                style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: 400,
                }}
              />
            ))}
            <AddButtonWrapper>
              <ButtonMediumDefault text="Add" onClick={() => setData(nextId, '')} />
            </AddButtonWrapper>
          </MiddleWrapper>
          <BottomWrapper>
            <BottomLabel>Verification Fee</BottomLabel>
            {`${UMA_PRICE * validDataCount} USDC`}
          </BottomWrapper>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col w-full gap-32
`;

const UpperWrapper = tw.div`
  flex flex-col gap-16
`;
const UpperInfoWrapper = tw.div`
  flex items-center justify-between
`;
const UpperInfo = tw.div`
  flex flex-col gap-8 font-sb-18 text-white
`;
const UpperDescription = tw.div`
  font-r-14 text-grayscale-2
`;
const UpperUma = tw.div`
  w-147 h-28 rounded-8 bg-center bg-no-repeat bg-cover
`;

const MiddleWrapper = tw.div`
  flex flex-col gap-16
`;

const AddButtonWrapper = tw.div`
  flex justify-end
`;
const BottomWrapper = tw.div`
  flex justify-end gap-8 font-sb-14 text-grayscale-2
`;
const BottomLabel = tw.div`
  font-r-14 text-grayscale-3
`;
