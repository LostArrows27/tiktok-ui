import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Image from '~/layouts/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('account-item')}>
      <Image
        className={cx('image')}
        src="https://static1.personality-database.com/profile_images/ff92c776799849818f0cb3e24a500a2d.png"
        alt="avatar"
      />
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          <strong>LostArrows27</strong>
          <FontAwesomeIcon icon={faCheckCircle} className = {cx('icon')}></FontAwesomeIcon>
        </p>
        <p className={cx('name')}>
            Nguyễn Thành Dũng
        </p>
      </div>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
