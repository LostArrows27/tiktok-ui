import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function SuggestedAccount({ label }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('heading')}>{label}</p>
    </div>
  );
}

SuggestedAccount.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccount;
