import { useEffect, useMemo } from 'react';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';

import { Account } from '~/types';

import { accountDetail as accountDetail1 } from '~/__mocks__/data/account-detail-1';
import { accountDetail as accountDetail2 } from '~/__mocks__/data/account-detail-2';
import { LISTED_LOCAL_KEY } from '~/constants';

export const useMockUser = () => {
  const current = useReadLocalStorage<Account[]>(LISTED_LOCAL_KEY);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setMockUser] = useLocalStorage<Account[]>(LISTED_LOCAL_KEY, []);
  const mockUser = useMemo(
    () => [accountDetail1, accountDetail2],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    if (!current) setMockUser(mockUser);
  }, [current, mockUser, setMockUser]);
};
