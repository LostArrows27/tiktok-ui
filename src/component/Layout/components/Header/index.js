import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faKeyboard,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import image from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '../AccountItem';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEM = [
  { icon: <FontAwesomeIcon icon={faEarthAsia} />, title: 'English' },
  { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard Shortcuts' },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  // khi call API tim kiem co ket qua
  useEffect(() => {
    setSearchResult([]);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={image.logo} alt="tikTok"></img>
        </div>
        <Tippy
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
            <input placeholder="Search account and videos" spellCheck="false"></input>
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
            </button>
            <FontAwesomeIcon icon={faSpinner} className={cx('spinner')}></FontAwesomeIcon>

            <button className={cx('search-button')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')}></FontAwesomeIcon>
            </button>
          </div>
        </Tippy>

        <div className={cx('action')}>
          <Button text small>
            Upload
          </Button>
          <Button primary small>
            Log in
          </Button>
          <Menu item={MENU_ITEM}>
            <button className={cx('more-button')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
