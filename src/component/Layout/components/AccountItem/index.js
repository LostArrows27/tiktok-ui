import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://m.media-amazon.com/images/M/MV5BMzg3N2I3OTAtNThlYy00ZTM0LWFiMjItZmRkNzE3NWQ5MTg2XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
        alt="user"
        className={cx('avatar')}
      ></img>
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Thanh Dung</span>
          <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}></FontAwesomeIcon>
        </h4>
        <span className={cx('username')}>lostarrows27</span>
      </div>
    </div>
  );
}

export default AccountItem;
