import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import image from '~/assets/images';
import config from '~/config';

import Button from '~/component/Button/Button';
import Menu from '~/component/Popper/Menu/Menu';
import { MessageIcon, UploadIcon } from '../Icons/Icons';
import Image from '~/layouts/components/Image/Image';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import { MENU_ITEM, userMenu } from './MenuItemData';
import { memo } from 'react';

const cx = classNames.bind(styles);

function Header() {
  // Handle Logic
  const handleMenuChange = (menuItem) => {
    // xu li khi 1 item trong menu khong co children
    switch (menuItem.type) {
      case 'language':
        console.log(menuItem.title);
        break;

      default:
        break;
    }
  };

  const currentUser = true;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')} to="/">
          <Link href="/" to={config.routes.root}>
            <img src={image.logo} alt="tikTok"></img>
          </Link>
        </div>

        {/* Search Component */}
        <Search />

        <div className={cx('action')}>
          {currentUser ? (
            <>
              {/* <Tippy delay={[0, 0]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                </button>
              </Tippy> */}

              <Button className={cx('upload-btn')} small leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Tippy delay={[0, 0]} content="Upload" placement="bottom" offset={[0, 14]}>
                <UploadIcon className={cx('icon-menu')} />
              </Tippy>
              <Tippy delay={[0, 0]} content="Inbox" placement="bottom">
                <MessageIcon className={cx('icon-menu')} />
              </Tippy>
            </>
          ) : (
            <>
              {/* <Button text small>
                Upload
              </Button> */}
              <Button className={cx('upload-btn', 'margin-left')} small leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button primary small>
                Log in
              </Button>
            </>
          )}
          <Menu item={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://static1.personality-database.com/profile_images/94f862375be441f7b59b496d24d2fae8.png"
                alt="Nguyen Thanh Dung"
                fallback="https://m.media-amazon.com/images/M/MV5BMzg3N2I3OTAtNThlYy00ZTM0LWFiMjItZmRkNzE3NWQ5MTg2XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
              ></Image>
            ) : (
              <button className={cx('more-button')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
