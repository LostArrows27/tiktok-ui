import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/component/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <img
          src="https://static1.personality-database.com/profile_images/ff92c776799849818f0cb3e24a500a2d.png"
          alt=""
          className={cx('avatar')}
        ></img>
        <div>
          <Button primary className = {cx('account-button')}>Follow</Button>
        </div>
      </header>
      <div className={cx('body')}>
        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>LostArrows27</strong>
            <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')}></FontAwesomeIcon>
          </p>
          <p className={cx('name')}>Nguyễn Thành Dũng</p>
          <p className={cx('analystic')}>
            <strong className={cx('follower-count')}>8.2M</strong>
            <span className={cx('follower')}>Followers</span>
            <strong className={cx('like-count')}>6.2M</strong>
            <span className={cx('like')}>Likes</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountPreview;
