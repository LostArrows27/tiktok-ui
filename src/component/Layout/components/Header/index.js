import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import image from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={image.logo} alt="tikTok"></img>
        </div>
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
        <div className = {cx('action')}></div>
      </div>
    </header>
  );
}

export default Header;
