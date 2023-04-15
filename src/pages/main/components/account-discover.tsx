import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import tw from 'twin.macro';
import { useReadLocalStorage } from 'usehooks-ts';

import { useGetAccounts } from '~/api/contract/get-accounts';

import { Card } from '~/components/cards';

import { Account } from '~/types';

import { accountDetail as accountDetail1 } from '~/__mocks__/data/account-detail-1';
import { accountDetail as accountDetail2 } from '~/__mocks__/data/account-detail-2';
import { accountDetail as accountDetail3 } from '~/__mocks__/data/account-detail-3';
import { LISTED_LOCAL_KEY } from '~/constants';

export const AccountDiscovers = () => {
  const navigate = useNavigate();
  const currentAccounts = useReadLocalStorage<Account[]>(LISTED_LOCAL_KEY);

  const { accounts: accountAddresses } = useGetAccounts();
  const accounts = currentAccounts?.filter(account =>
    accountAddresses?.includes(ethers.utils.getAddress(account.address?.toLowerCase()))
  );

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Discover Accounts</Title>
      </TitleWrapper>
      <CardWrapper>
        <Card onClick={() => navigate(`/${accountDetail1.id}`)} {...accountDetail1} />
        <Card onClick={() => navigate(`/${accountDetail2.id}`)} {...accountDetail2} />
        <Card onClick={() => navigate(`/${accountDetail3.id}`)} {...accountDetail3} />
        {accounts?.map(account => (
          <Card key={account.id} onClick={() => navigate(`/${account.id}`)} {...account} />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full h-full flex-col flex-center gap-40
`;

const TitleWrapper = tw.div`
  flex-center py-10
`;

const Title = tw.div`
  font-sb-28 text-white
`;

const CardWrapper = tw.div`
  grid grid-cols-3 gap-y-32 gap-x-24
`;
