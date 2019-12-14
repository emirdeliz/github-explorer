import React, { useEffect, useRef } from 'react';

import InfiniteScrollStyle from './infinite-scroll.style';

interface IInfiniteScroll {
  children: any;
  onLoadMore: () => void;
}

const InfiniteScroll = (props: IInfiniteScroll) => {
  const container = useRef(null);

  useEffect(() => {
    const el = container.current;
    el.addEventListener('scroll', function() {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
        props.onLoadMore();
      }
    });
  }, []);

  return(
    <InfiniteScrollStyle ref={container}>
      {props.children}
    </InfiniteScrollStyle>  
  );
}

export default React.memo(InfiniteScroll);