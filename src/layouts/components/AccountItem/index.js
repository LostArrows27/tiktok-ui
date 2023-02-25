import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '../Image';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  if (data['full_name'].trim() === '') data['full_name'] = `User ${data.id}`;
  return (
    <Link className={cx('wrapper')} to={`/user/${data.nickname}`}>
      <Image src={data.avatar} alt={data.full_name} className={cx('avatar')} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data['full_name']}</span>
          {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}></FontAwesomeIcon>}
        </h4>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
