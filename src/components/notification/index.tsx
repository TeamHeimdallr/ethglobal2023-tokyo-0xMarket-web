import { useRef, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useOnClickOutside } from 'usehooks-ts';

import { useNotificationsQuery } from '~/api/notifications';

import { COLOR } from '~/assets/colors';
import { ButtonIconLarge } from '~/components/buttons';
import { IconNew, IconNoti } from '~/components/icons';

import { elapsedTime } from '~/utils/date';

export const Notification = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, open] = useState(false);

  const { data } = useNotificationsQuery({
    staleTime: 60 * 1000,
    cacheTime: 60 * 1000,
    enabled: false,
  });

  const notifications = data?.data;
  const hasNotification = notifications && notifications?.length > 0;
  const hasNewNotification = notifications?.find(n => n.isNew) ?? false;

  useOnClickOutside(ref, () => open(false));

  return (
    <Wrapper>
      <IconWrapper onClick={() => open(true)}>
        <ButtonIconLarge icon={<IconNoti />} selected={isOpen} />
        {hasNewNotification && !isOpen && (
          <IconNewWrapper>
            <IconNew color={COLOR.YELLOW().toHexString()} width={20} height={20} />
          </IconNewWrapper>
        )}
      </IconWrapper>
      {isOpen && (
        <ContentWrapper ref={ref}>
          <Title>Notifications</Title>
          {hasNotification ? (
            <ListWrapper>
              {notifications.map(notification => (
                <NotificationList key={notification.id}>
                  <ImageWrapper>
                    <Image src={notification.image} />
                    {notification.isNew && (
                      <ImageNewWrapper>
                        <IconNew color={COLOR.YELLOW().toHexString()} width={20} height={20} />
                      </ImageNewWrapper>
                    )}
                  </ImageWrapper>
                  <NotificationContentWrapper>
                    <NotificationTitle>{notification.message}</NotificationTitle>
                    <NotificationCaption>{elapsedTime(notification.timestamp)}</NotificationCaption>
                  </NotificationContentWrapper>
                </NotificationList>
              ))}
            </ListWrapper>
          ) : (
            <EmptyWrapper>
              <EmptyText>{"You don't have any notifications."}</EmptyText>
            </EmptyWrapper>
          )}
        </ContentWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  relative flex justify-start
`;

const IconWrapper = tw.div`
  relative
`;
const IconNewWrapper = tw.div`
  absolute top-2 right-2 z-10
`;

const ContentWrapper = tw.div`
  absolute top-48 left-0 z-1001 max-h-550 overflow-auto
  flex flex-col w-320 bg-grayscale-7 rounded-8 shadow-notification-content
  rounded-bl-8 rounded-br-8
`;

const Title = tw.div`
  flex px-24 py-16 font-sb-16 text-white
`;

const EmptyWrapper = tw.div`
  flex-center h-144 
`;
const EmptyText = tw.div`
  font-r-12 text-grayscale-4 text-center 
`;

const ListWrapper = tw.div`
  flex flex-col px-8 pb-8 bg-grayscale-7
`;

const NotificationList = tw.div`
  flex px-24 py-12 rounded-8 bg-grayscale-7 gap-16
  hover:bg-grayscale-6
`;

const ImageWrapper = tw.div`
  relative
`;

interface ImageProps {
  src?: string;
}
const Image = styled.div<ImageProps>(({ src }) => [
  tw`
    flex-center rounded-full bg-grayscale-5 bg-center bg-cover bg-no-repeat w-48 h-48 flex-shrink-0
  `,
  src &&
    css`
      background-image: url(${src});
    `,
]);

const ImageNewWrapper = tw.div`
  absolute -left-3 top-2
`;

const NotificationContentWrapper = tw.div`
  flex flex-col gap-2 py-4 flex-1
`;

const NotificationTitle = tw.div`
  font-r-12 text-white
`;
const NotificationCaption = tw.div`
  font-r-11 text-grayscale-4
`;
