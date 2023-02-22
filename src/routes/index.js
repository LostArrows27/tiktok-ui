import { HeaderOnly } from '~/component/Layout';
import routesConfig from '~/config/routes';

// Page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import NotFounded from '~/pages/NotFounded';
import Search from '~/pages/Search';

// Router khong can dang nhap cung xem duoc
const publicRoutes = [
  { path: routesConfig.root, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.user, component: Profile },
  { path: routesConfig.search, component: Search, layout: null },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.notfound, component: NotFounded, layout: null },
];

// Router dang nhap moi xem duoc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
