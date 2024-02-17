import localFont from 'next/font/local';

export const montserrat = localFont({
  src: [
    {
      path: './Montserrat-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Montserrat-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Montserrat-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Montserrat-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Montserrat-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Montserrat-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './Montserrat-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat',
});
