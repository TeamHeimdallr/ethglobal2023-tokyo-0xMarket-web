import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import tw from 'twin.macro';

const MainPage = loadable(() => import('~/pages/main'));
const ListPage = loadable(() => import('~/pages/list'));
const DetailPage = loadable(() => import('~/pages/detail'));

const RouteWrapper = tw.main`relative w-full h-full`;
const EntryRoute = () => {
  return (
    <BrowserRouter>
      <RouteWrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </RouteWrapper>
    </BrowserRouter>
  );
};

export default EntryRoute;
