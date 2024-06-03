import { Outlet } from 'react-router-dom';
import MainHeader from '../../components/MainHeader/MainHeader';

const RootLayout = () => (
  <>
    <MainHeader />
    <Outlet />
  </>
);

export default RootLayout;
