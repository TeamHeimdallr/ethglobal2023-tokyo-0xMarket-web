import tw from 'twin.macro';

export default {
  title: 'Components/Typeface',
};

export const Typeface = () => (
  <OuterWrapper>
    <Title>Inter</Title>
    <Wrapper>
      <InnerWrapper>
        <RegularTitle>Regular</RegularTitle>
        <RegularText1>{'Text size 11px\nLine height 18px'}</RegularText1>
        <RegularText2>{'Text size 12px\nLine height 20px'}</RegularText2>
        <RegularText3>{'Text size 14px\nLine height 22px'}</RegularText3>
        <RegularText4>{'Text size 16px\nLine height 24px'}</RegularText4>
        <RegularText5>{'Text size 18px\nLine height 26px'}</RegularText5>
      </InnerWrapper>
      <InnerWrapper>
        <SemiBoldTitle>Semi-bold</SemiBoldTitle>
        <SemiBoldText1>{'Text size 12px\nLine height 20px'}</SemiBoldText1>
        <SemiBoldText2>{'Text size 14px\nLine height 22px'}</SemiBoldText2>
        <SemiBoldText3>{'Text size 16px\nLine height 24px'}</SemiBoldText3>
        <SemiBoldText4>{'Text size 18px\nLine height 26px'}</SemiBoldText4>
        <SemiBoldText5>{'Text size 20px\nLine height 28px'}</SemiBoldText5>
        <SemiBoldText6>{'Text size 24px\nLine height 32px'}</SemiBoldText6>
        <SemiBoldText7>{'Text size 28px\nLine height 38px'}</SemiBoldText7>
        <SemiBoldText8>{'Text size 32px\nLine height 38px'}</SemiBoldText8>
      </InnerWrapper>
    </Wrapper>
  </OuterWrapper>
);

const OuterWrapper = tw.div`
  p-20 flex flex-col gap-20
`;
const Wrapper = tw.div`
  flex gap-100
`;

const InnerWrapper = tw.div`
  flex flex-col gap-32
`;
const Title = tw.div`
  text-white text-28 leading-28 font-semibold
`;

const RegularTitle = tw.div`
  text-white text-16 leading-28 font-regular
`;
const SemiBoldTitle = tw.div`
  text-white text-16 leading-28 font-semibold
`;

const RegularText1 = tw.div`whitespace-pre-wrap font-r-11 text-white`;
const RegularText2 = tw(RegularText1)`font-r-12`;
const RegularText3 = tw(RegularText1)`font-r-14`;
const RegularText4 = tw(RegularText1)`font-r-16`;
const RegularText5 = tw(RegularText1)`font-r-18`;

const SemiBoldText1 = tw.div`whitespace-pre-wrap font-sb-12 text-white`;
const SemiBoldText2 = tw(SemiBoldText1)`font-sb-14`;
const SemiBoldText3 = tw(SemiBoldText1)`font-sb-16`;
const SemiBoldText4 = tw(SemiBoldText1)`font-sb-18`;
const SemiBoldText5 = tw(SemiBoldText1)`font-sb-20`;
const SemiBoldText6 = tw(SemiBoldText1)`font-sb-24`;
const SemiBoldText7 = tw(SemiBoldText1)`font-sb-28`;
const SemiBoldText8 = tw(SemiBoldText1)`font-sb-32`;
