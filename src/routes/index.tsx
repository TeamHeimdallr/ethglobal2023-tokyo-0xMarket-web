import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import tw from 'twin.macro';

import { useMockUser } from '~/hooks/data/use-mock-user';

import { MOCK_USER } from '~/constants';

const MainPage = loadable(() => import('~/pages/main'));
const ListingPage = loadable(() => import('~/pages/listing'));
const DetailPage = loadable(() => import('~/pages/detail'));
const DetailPageMock = loadable(() => import('~/pages/detail-mock'));

const RouteWrapper = tw.main`relative w-full h-full overflow-auto`;
const EntryRoute = () => {
  useMockUser();

  return (
    <BrowserRouter>
      <RouteWrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/listing" element={<ListingPage />} />
          <Route path={`/${MOCK_USER.USER_1}`} element={<DetailPageMock id={MOCK_USER.USER_1} />} />
          <Route path={`/${MOCK_USER.USER_2}`} element={<DetailPageMock id={MOCK_USER.USER_2} />} />

          <Route path="/:address" element={<DetailPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </RouteWrapper>
    </BrowserRouter>
  );
};

export default EntryRoute;
