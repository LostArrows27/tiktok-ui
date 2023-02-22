import { HeaderOnly } from '~/layouts';
import config from '~/config';

// Page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import NotFounded from '~/pages/NotFounded';
import Search from '~/pages/Search';

// Router khong can dang nhap cung xem duoc
const publicRoutes = [
  { path: config.routes.root, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.user, component: Profile },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.notfound, component: NotFounded, layout: null },
];

// Router dang nhap moi xem duoc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
