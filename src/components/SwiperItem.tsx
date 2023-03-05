import React from 'react';
import { SwiperItemType } from '../models/SwiperItem';

export type Props = SwiperItemType;

function SwiperItem({imageSrc,imageAlt}: Props) {
  return (
    <li className="flex justify-center items-center place-content-evenly shrink-0">
      <img src={imageSrc} alt={imageAlt}  />
    </li>
  );
}

export default SwiperItem;


// className="block select-none"