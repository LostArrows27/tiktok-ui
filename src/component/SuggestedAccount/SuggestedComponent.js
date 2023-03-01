import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestComponent({ label, buttonLabel}) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <p className={cx('more-btn')}>{buttonLabel}</p>
    </div>
  );
}

SuggestComponent.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestComponent;
