import { RefObject } from 'react';

const scrollIntoViewRef = (ref: RefObject<HTMLAnchorElement>) => {
  setTimeout(() => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, 250);
};

export default scrollIntoViewRef;
