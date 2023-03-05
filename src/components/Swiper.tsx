import React from 'react';
import { SwiperItemType } from '../models/SwiperItem';
import SwiperItem from './SwiperItem';

export type Props = {
    items: Array<SwiperItemType>;
}

function Swiper({items}: Props) {
  return (
    <div className="overflow-auto  ">
      <ul className="flex list-none">
        {items.map((item, idx) => (
            <SwiperItem key={idx} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default Swiper;