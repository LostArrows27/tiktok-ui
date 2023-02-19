import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, index }) {
  return (
    <Button leftIcon={data.icon} to={data.to} className = {cx('menu-item')}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
