import { useState } from 'react';
import tw from 'twin.macro';

import { ButtonMediumPrimary } from '~/components/buttons';
import { TextFieldMultiline } from '~/components/textfield';
import { Toggle } from '~/components/toggle';

const UMA_PRICE = 1;

export const UmaVerify = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState<string | undefined>();

  return (
    <Wrapper>
      <UpperWrapper>
        <UpperInfo>
          Add verifiable statements
          <UpperDescription>{`The verification fee costs ${UMA_PRICE} USDC per sentence.`}</UpperDescription>
        </UpperInfo>
        <Toggle active={active} onClick={() => setActive(prev => !prev)} />
      </UpperWrapper>
      {active && (
        <>
          <MiddleWrapper>
            <TextFieldMultiline
              border
              placeholder="Provide one sentence you’d like to be verified"
              onChange={value => setData(value)}
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: 400,
              }}
            />
            <LabelWrapper>
              <BottomLabel>Verification Fee</BottomLabel>
              {`${data ? UMA_PRICE : 0} USDC`}
            </LabelWrapper>
          </MiddleWrapper>
          <BottomWrapper>
            <AddButtonWrapper>
              <ButtonMediumPrimary text="Verify" disabled />
            </AddButtonWrapper>
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
  flex w-full gap-48 justify-between
`;
const UpperInfo = tw.div`
  flex flex-col gap-2 font-sb-18 text-white
`;
const UpperDescription = tw.div`
  font-r-14 text-grayscale-2
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
const LabelWrapper = tw.div`
 font-sb-14 text-grayscale-2 flex gap-8 justify-end
`;
