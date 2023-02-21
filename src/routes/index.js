import { HeaderOnly } from '~/component/Layout';

// Page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import NotFounded from '~/pages/NotFounded';

// Router khong can dang nhap cung xem duoc
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/user/:nickname', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '*', component: NotFounded, layout: null },
];

// Router dang nhap moi xem duoc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
