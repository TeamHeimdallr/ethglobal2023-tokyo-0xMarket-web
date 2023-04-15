import { useEffect, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { Account } from '~/types';

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
        ...accountDetail2,
        id: '0xB1C92C2b20B218fC3a466f4E838F92c2aA680F09',
        address: '0xB1C92C2b20B218fC3a466f4E838F92c2aA680F09',
      },
    ],
    []
  );

  useEffect(() => {
    setMockUser(mockUser);
  }, [mockUser, setMockUser]);
};
