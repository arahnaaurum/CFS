import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';

function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;