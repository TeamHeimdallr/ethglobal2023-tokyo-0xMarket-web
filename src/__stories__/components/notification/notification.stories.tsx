import { Notification } from '~/components/notification';

import mockAPIs from '~/__mocks__/api';

export default {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {},
};

export const _Notification = () => <Notification />;

_Notification.parameters = {
  msw: { handlers: mockAPIs },
};
