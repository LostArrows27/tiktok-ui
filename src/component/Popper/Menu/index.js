import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, item = [] }) {
  const renderItem = () => {
    return item.map((a, b) => {
      return <MenuItem key={b} data={a}></MenuItem>;
    });
  };

  return (
    <Tippy
      interactive
      delay={[0, 500]}
      placement="bottom-end"
      render={(attrs) => (
        <div tabIndex="-1" {...attrs} className={cx('menu-lists')}>
          <PopperWrapper className={cx('menu-popper')}>{renderItem()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
