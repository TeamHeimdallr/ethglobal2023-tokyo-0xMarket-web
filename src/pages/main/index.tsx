import { useAccountDiscoversQuery } from '~/api/accounts';

const MainPage = () => {
  const { data } = useAccountDiscoversQuery();
  const accountDiscovers = data?.data;

  console.log(accountDiscovers);
  return <></>;
};

export default MainPage;
