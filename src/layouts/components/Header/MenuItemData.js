import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faGear,
  faCoins,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';

export const MENU_ITEM = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
        title: 'Language',
        data: [
          {
            code: 'ln',
            type: 'language',
            title: 'English',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'العربية',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'বাঙ্গালি (ভারত)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Cebuano (Pilipinas)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Čeština (Česká republika)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Deutsch',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Ελληνικά (Ελλάδα)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Español',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Suomi (Suomi)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Filipino (Pilipinas)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Français',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'עברית (ישראל)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'हिंदी',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Magyar (Magyarország)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Indonesia (Indonesia)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Italiano (Italia)',
          },
          {
            code: 'ln',
            type: 'language',
            title: '日本語（日本）',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Basa Jawa (Indonesia)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'ខ្មែរ (កម្ពុជា)',
          },
          {
            code: 'ln',
            type: 'language',
            title: '한국어 (대한민국)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Melayu (Malaysia)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'မြန်မာ (မြန်မာ)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Nederlands (Nederland)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Polski (Polska)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Português (Brasil)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Română (Romania)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Русский (Россия)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Svenska (Sverige)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'ไทย (ไทย)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Türkçe (Türkiye)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Українська (Україна)',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'اردو',
          },
          {
            code: 'ln',
            type: 'language',
            title: 'Tiếng Việt (Việt Nam)',
          },
          {
            code: 'ln',
            type: 'language',
            title: '简体中文',
          },
          {
            code: 'ln',
            type: 'language',
            title: '繁體中文',
          },
        ],
      },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
  ];

export const userMenu = [
  { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/user/hoa' },
  { icon: <FontAwesomeIcon icon={faGear} />, title: 'Settings', to: '/settings' },
  { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: '/getcoins' },
  ...MENU_ITEM,
  { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out', seperate: true },
];


