import { useEffect, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { Account, CATEGORIES } from '~/types';

import { accountDetail as accountDetail1 } from '~/__mocks__/data/account-detail-1';
import { accountDetail as accountDetail2 } from '~/__mocks__/data/account-detail-2';
import { LISTED_LOCAL_KEY } from '~/constants';

export const useMockUser = () => {
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

        price: 999999,
        tokenValue: 999999,

        verified: [],
        hidden: false,
      },
    ],
    []
  );

  useEffect(() => {
    setMockUser(mockUser);
  }, [mockUser, setMockUser]);
};
