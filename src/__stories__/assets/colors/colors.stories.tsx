import styled from '@emotion/styled';
import tw from 'twin.macro';

import { COLOR } from '~/assets/colors';

export default {
  title: 'Components/Colors',
};

export const _Colors = () => (
  <Wrapper>
    <InnerWrapper>
      <PalatteWrapper>
        <Palatte style={{ backgroundColor: COLOR.BLUE().toHexString() }} />
        <ColorText>{`blue\n${COLOR.BLUE().toHexString()}`}</ColorText>
      </PalatteWrapper>
      <PalatteWrapper>
        <Palatte style={{ backgroundColor: COLOR.RED().toHexString() }} />
        <ColorText>{`red\n${COLOR.RED().toHexString()}`}</ColorText>
      </PalatteWrapper>
      <PalatteWrapper>
        <Palatte style={{ backgroundColor: COLOR.YELLOW().toHexString() }} />
        <ColorText>{`yellow\n${COLOR.YELLOW().toHexString()}`}</ColorText>
      </PalatteWrapper>
      <PalatteWrapper>
        <Palatte style={{ backgroundColor: COLOR.LIGHT_BLUE().toHexString() }} />
        <ColorText>{`light blue\n${COLOR.LIGHT_BLUE().toHexString()}`}</ColorText>
      </PalatteWrapper>
    </InnerWrapper>
    <InnerWrapper>
      <PalatteWrapper>
        <Palatte style={{ backgroundColor: COLOR.BLACK().toHexString() }} />
        <ColorText light>{`black\n${COLOR.BLACK().toHexString()}`}</ColorText>
      </PalatteWrapper>
      <PalatteWrapper>
        <Palatte style={{ backgroundColor: COLOR.GRAYSCALE_7().toHexString() }} />
        <ColorText light>{`grayscale 1\n${COLOR.GRAYSCALE_7().toHexString()}`}</ColorText>
      </PalatteWrapper>
      <PalatteWrapper>
        <Palatte style={{ backgroundColor: COLOR.GRAYSCALE_6().toHexString() }} />
        <ColorText light>{`grayscale 2\n${COLOR.GRAYSCALE_6().toHexString()}`}</ColorText>
      </PalatteWrapper>
      <PalatteWrapper>
        <Palatte style={{ backgroundColor: COLOR.GRAYSCALE_5().toHexString() }} />
        <ColorText light>{`grayscale 3\n${COLOR.GRAYSCALE_5().toHexString()}`}</ColorText>
      </PalatteWrapper>
      <PalatteWrapper>
        <Palatte style={{ backgroundColor: COLOR.GRAYSCALE_4().toHexString() }} />
        <ColorText light>{`grayscale 4\n${COLOR.GRAYSCALE_4().toHexString()}`}</ColorText>
      </PalatteWrapper>
      <PalatteWrapper>
        <Palatte style={{ backgroundColor: COLOR.GRAYSCALE_3().toHexString() }} />
        <ColorText>{`grayscale 5\n${COLOR.GRAYSCALE_3().toHexString()}`}</ColorText>
      </PalatteWrapper>
      <PalatteWrapper>
        <Palatte style={{ backgroundColor: COLOR.GRAYSCALE_2().toHexString() }} />
        <ColorText>{`grayscale 6\n${COLOR.GRAYSCALE_2().toHexString()}`}</ColorText>
      </PalatteWrapper>
      <PalatteWrapper>
        <Palatte style={{ backgroundColor: COLOR.GRAYSCALE_1().toHexString() }} />
        <ColorText>{`grayscale 7\n${COLOR.GRAYSCALE_1().toHexString()}`}</ColorText>
      </PalatteWrapper>
      <PalatteWrapper>
        <Palatte style={{ backgroundColor: COLOR.WHITE().toHexString() }} />
        <ColorText>{`white\n${COLOR.WHITE().toHexString()}`}</ColorText>
      </PalatteWrapper>
    </InnerWrapper>
  </Wrapper>
);

_Colors.argTypes = {
  color: { control: { type: 'color' } },
};
_Colors.args = {
  color: '#191F28',
};

const Wrapper = tw.div`
  p-20 flex flex-col gap-20
`;
const InnerWrapper = tw.div`
  flex flex-wrap
`;
const PalatteWrapper = tw.div`
  flex flex-col relative
`;
const Palatte = tw.div`
  w-120 h-120
`;
interface ColorTextProps {
  light?: boolean;
}
const ColorText = styled.div<ColorTextProps>(({ light }) => [
  tw`
    absolute left-0 bottom-0 p-5 whitespace-pre-wrap
  `,
  light ? tw`text-white` : tw`text-black`,
]);
