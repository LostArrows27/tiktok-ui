import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
  HomeIcon,
  HomeIconActive,
  LiveIcon,
  LiveIconActive,
  UserGroupIcon,
  UserGroupIconActive,
} from '~/layouts/components/Icons/Icons';
import SuggestedComponent from '~/component/SuggestedAccount/SuggestedComponent';

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
      <SuggestedComponent label="Suggested accounts" buttonLabel="See more" />
      <SuggestedComponent label="Followed accounts" buttonLabel="See all" />
    </aside>
  );
}

export default Sidebar;
