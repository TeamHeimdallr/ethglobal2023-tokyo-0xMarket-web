import { useEffect, useMemo } from 'react';
import { sub } from 'date-fns';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';

import { Account, CATEGORIES, UMA_VERIFY_STATUS } from '~/types';

import { accountDetail as accountDetail1 } from '~/__mocks__/data/account-detail-1';
import { accountDetail as accountDetail2 } from '~/__mocks__/data/account-detail-2';
import { LISTED_LOCAL_KEY } from '~/constants';

export const useMockUser = () => {
  const current = useReadLocalStorage<Account[]>(LISTED_LOCAL_KEY);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setMockUser] = useLocalStorage<Account[]>(LISTED_LOCAL_KEY, []);
  const mockUser = useMemo(
    () => [
      accountDetail1,
      accountDetail2,
      {
        id: '0xB1C92C2b20B218fC3a466f4E838F92c2aA680F09',
        address: '0xB1C92C2b20B218fC3a466f4E838F92c2aA680F09',
        receivingAddress: '0x9DCD43faB2CF8104cb2ff53CF4C051842C125EE0',

        title: 'sample title',
        description: 'sample description',
        category: CATEGORIES.SBT,

        price: 999,
        tokenValue: 999,

        hidden: false,
        verified: [
          {
            id: '1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            status: UMA_VERIFY_STATUS.SUCCESS,
            date: new Date(),
          },
          {
            id: '2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            status: UMA_VERIFY_STATUS.PENDING,
          },
          {
            id: '3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            status: UMA_VERIFY_STATUS.FAIL,
            date: sub(new Date(), { hours: 7 }),
          },
        ],
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    if (!current) setMockUser(mockUser);
  }, [current, mockUser, setMockUser]);
};
