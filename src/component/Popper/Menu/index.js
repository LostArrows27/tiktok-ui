import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, item = [], onChange = () => {} }) {
  const [history, setHistory] = useState([{ data: item }]); // du lieu cua Menu cap hien tai
  const current = history[history.length - 1];
  const menu = useRef();

  useEffect(() => {}, []);

  const renderItem = () => {
    return current.data.map((a, b) => {
      const isParent = !!a.children;
      return (
        <MenuItem
          key={b}
          data={a}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, a.children]);
            } else {
              onChange(a);
            }
          }}
        ></MenuItem>
      );
    });
  };

  const handleBackMenu = () => {
    setHistory(history.slice(0, history.length - 1));
  };

  const handleOutofHoverMenu = () => {
    setHistory([history[0]]);
  };

  return (
    <Tippy
      onHide={handleOutofHoverMenu}
      // onHide={() => alert('hidden')}
      interactive
      delay={[0, 700]}
      offset= {[16, 8]} // chinh ben trai / chieu cao so vs ban dau
      placement="bottom-end"
      render={(attrs) => (
        <div tabIndex="-1" {...attrs} className={cx('menu-lists')} ref={menu}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && <Header title="Language" onBack={handleBackMenu} />}
            {renderItem()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
