import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/layouts/components/Image';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (attrs) => {
    return (
      <div tabIndex="-1" {...attrs} className={cx('preview')}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy offset={[-20, 0]} interactive delay={[1000, 0]} render={renderPreview} placement="bottom">
        <div className={cx('account-item')}>
          <Image
            className={cx('image')}
            src="https://static1.personality-database.com/profile_images/ff92c776799849818f0cb3e24a500a2d.png"
            alt="avatar"
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>LostArrows27</strong>
              <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')}></FontAwesomeIcon>
            </p>
            <p className={cx('name')}>Nguyễn Thành Dũng</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
