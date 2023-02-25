import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/component/Button/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <Button
      leftIcon={data.icon}
      to={data.to}
      className={cx('menu-item', {
        seperate: data.seperate,
        languageMenu: data.code,
      })}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
