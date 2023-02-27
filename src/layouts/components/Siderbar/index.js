import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { HomeIcon, HomeIconActive, LiveIcon, LiveIconActive, UserGroupIcon, UserGroupIconActive } from '../Icons/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.root} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupIconActive />}
        />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
      </Menu>
    </aside>
  );
}

export default Sidebar;
