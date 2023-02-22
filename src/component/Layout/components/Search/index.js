import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '../AccountItem';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchServices';

const cx = classNames.bind(styles);

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const debounced = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);
    const fetchApi = async () => {
      const res = await searchServices.searchUser(debounced);
      setSearchResult(res);
      setLoading(false);
    };

    fetchApi();
  }, [debounced]);

  const handleHideResult = () => {
    setIsInputFocus(false);
  };

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  return (
    <HeadlessTippy
      visible={searchResult.length > 0 && isInputFocus && !!searchValue}
      onClickOutside={handleHideResult}
      interactive={true}
      render={(attrs) => (
        <div tabIndex="-1" {...attrs} className={cx('search-result')}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Account</h4>
            {!!searchResult &&
              searchResult.map((data, index) => {
                return <AccountItem key={index} data={data} />;
              })}
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          placeholder="Search accounts and videos"
          spellCheck="false"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onFocus={() => {
            setIsInputFocus(true);
          }}
        ></input>
        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
          </button>
        )}
        {!!loading && <FontAwesomeIcon icon={faSpinner} className={cx('spinner')}></FontAwesomeIcon>}

        <button className={cx('search-button')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')}></FontAwesomeIcon>
        </button>
      </div>
    </HeadlessTippy>
  );
};

export default Search;
