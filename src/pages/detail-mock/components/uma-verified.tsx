import { format } from 'date-fns';
import tw from 'twin.macro';

import IconVerificationFailed from '~/assets/icons/icon-verification-failed.png';
import IconVerificationPending from '~/assets/icons/icon-verification-pending.png';
import IconVerificationSuccess from '~/assets/icons/icon-verification-success.png';
import ImagePoweredByUma from '~/assets/images/image-powered-by-uma.png';

import { AccountUmaVerified, UMA_VERIFY_STATUS } from '~/types';

import { DATE_FORMATTER } from '~/constants';

interface Props {
  verified?: AccountUmaVerified[];
}
export const UmaVerified = ({ verified }: Props) => {
  return (
    <Wrapper>
      <TitleWrapper>
        Verifiable statements
        <UmaImageWrapper style={{ backgroundImage: `url(${ImagePoweredByUma})` }} />
      </TitleWrapper>
      <ContentWrapper>
        {verified?.map(v => {
          const date = v.date ? new Date(v.date) : new Date();
          const captionText =
            v.status === UMA_VERIFY_STATUS.SUCCESS
              ? `Verified at ${format(date, DATE_FORMATTER.HHMM_AA_mm_dd)}`
              : v.status === UMA_VERIFY_STATUS.FAIL
              ? `Verification failed at ${format(date, DATE_FORMATTER.HHMM_AA_mm_dd)}`
              : 'Pending now';
          const icon =
            v.status === UMA_VERIFY_STATUS.SUCCESS
              ? IconVerificationSuccess
              : v.status === UMA_VERIFY_STATUS.FAIL
              ? IconVerificationFailed
              : IconVerificationPending;

          return (
            <CardWrapper key={v.id}>
              <VerificationIconWrapper style={{ backgroundImage: `url(${icon})` }} />
              <VerificationContentWrapper>
                <VerificationCaption>{captionText}</VerificationCaption>
                {v.text}
              </VerificationContentWrapper>
            </CardWrapper>
          );
        })}
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-16
`;

const TitleWrapper = tw.div`
  flex items-center justify-between font-sb-18 text-white
`;

const UmaImageWrapper = tw.div`
  w-147 h-28 rounded-8 bg-center bg-no-repeat bg-cover
`;

const ContentWrapper = tw.div`
  grid grid-cols-2 gap-16
`;

const CardWrapper = tw.div`
  flex gap-16 items-center px-24 py-16 bg-grayscale-7 rounded-8
`;

const VerificationIconWrapper = tw.div`
  w-18 h-18 rounded-full bg-center bg-no-repeat bg-cover flex-shrink-0
`;

const VerificationContentWrapper = tw.div`
  flex flex-col gap-2 font-r-14 text-white
`;

const VerificationCaption = tw.div`
  font-r-11 text-grayscale-3
`;
