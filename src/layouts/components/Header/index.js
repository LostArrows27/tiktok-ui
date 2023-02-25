import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faEarthAsia,
  faKeyboard,
  faCircleQuestion,
  faUser,
  faCoins,
  faGear,
  faSignOut,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import image from '~/assets/images';
import config from '~/config';

import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import { MessageIcon, UploadIcon } from '../Icons';
import Image from '~/layouts/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'ln',
          type: 'language',
          title: 'English',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'العربية',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'বাঙ্গালি (ভারত)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Cebuano (Pilipinas)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Čeština (Česká republika)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Deutsch',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Ελληνικά (Ελλάδα)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Español',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Suomi (Suomi)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Filipino (Pilipinas)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Français',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'עברית (ישראל)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'हिंदी',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Magyar (Magyarország)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Indonesia (Indonesia)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Italiano (Italia)',
        },
        {
          code: 'ln',
          type: 'language',
          title: '日本語（日本）',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Basa Jawa (Indonesia)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'ខ្មែរ (កម្ពុជា)',
        },
        {
          code: 'ln',
          type: 'language',
          title: '한국어 (대한민국)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Melayu (Malaysia)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'မြန်မာ (မြန်မာ)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Nederlands (Nederland)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Polski (Polska)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Português (Brasil)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Română (Romania)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Русский (Россия)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Svenska (Sverige)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'ไทย (ไทย)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Türkçe (Türkiye)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Українська (Україна)',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'اردو',
        },
        {
          code: 'ln',
          type: 'language',
          title: 'Tiếng Việt (Việt Nam)',
        },
        {
          code: 'ln',
          type: 'language',
          title: '简体中文',
        },
        {
          code: 'ln',
          type: 'language',
          title: '繁體中文',
        },
      ],
    },
  },
  { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];

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
  const userMenu = [
    { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/user/hoa' },
    { icon: <FontAwesomeIcon icon={faGear} />, title: 'Settings', to: '/settings' },
    { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: '/getcoins' },
    ...MENU_ITEM,
    { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out', seperate: true },
  ];

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

export default Header;
