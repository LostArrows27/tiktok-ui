import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faKeyboard,
  faCircleQuestion,
  faCloudUpload,
  faMessage,
  faPerson,
  faUser,
  faCoins,
  faGear,
  faSignOut,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import image from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '../AccountItem';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import { MessageIcon, UploadIcon } from '../Icons';
import Image from '~/component/Layout/components/Image';

const cx = classNames.bind(styles);
const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          type: 'language',
          title: 'English',
          // can add children here if have another level menu
        },
        {
          code: 'vi',
          type: 'language',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  // khi call API tim kiem co ket qua
  useEffect(() => {
    setSearchResult([]);
  }, []);

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
    { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/@hoa' },
    { icon: <FontAwesomeIcon icon={faGear} />, title: 'Settings', to: '/settings' },
    { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: '/getcoins' },
    ...MENU_ITEM,
    { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out' },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={image.logo} alt="tikTok"></img>
        </div>
        <HeadlessTippy
          visible={searchResult.length > 0}
          interactive={true}
          render={(attrs) => (
            <div tabIndex="-1" {...attrs} className={cx('search-result')}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts and videos" spellCheck="false"></input>
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
            </button>
            <FontAwesomeIcon icon={faSpinner} className={cx('spinner')}></FontAwesomeIcon>

            <button className={cx('search-button')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')}></FontAwesomeIcon>
            </button>
          </div>
        </HeadlessTippy>

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
              <UploadIcon />
              <MessageIcon />
            </>
          ) : (
            <>
              <Button text small>
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
                fallBack="https://m.media-amazon.com/images/M/MV5BMzg3N2I3OTAtNThlYy00ZTM0LWFiMjItZmRkNzE3NWQ5MTg2XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
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
