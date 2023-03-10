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
import * as searchServices from '~/services/searchServices';

const cx = classNames.bind(styles);

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);
    const fetchApi = async () => {
      const res = await searchServices.searchUser(debouncedValue);
      setSearchResult(res);
      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleHideResult = () => {
    setIsInputFocus(false);
  };

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  return (
    <div>
      <HeadlessTippy
        appendTo={() => document.body}
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
              const regex = /^\S/;
              if (regex.test(e.target.value)) {
                setSearchValue(e.target.value);
              } else {
                setSearchValue('');
              }
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

          <button className={cx('search-button')} onMouseDown={(e) => e.preventDefault()}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')}></FontAwesomeIcon>
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
};

export default Search;
