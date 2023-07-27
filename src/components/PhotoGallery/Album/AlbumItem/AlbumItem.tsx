import React from 'react';
import style from './albumItem.module.scss';
import Link from 'next/link';
const AlbumItem = () => {
  const { albumItem, textContainer } = style;
  return (
    <div className={albumItem}>
      <Link href="/photo-gallery/1">
        <img
          src="https://www.grameenkalyan.com/uploads/gallery/thumb_image/1686121791_uchakhila-3.png"
          alt=""
        />
        <div className={textContainer}>
          <h4>Grameen Kalyan Health Centers</h4>
        </div>
      </Link>
    </div>
  );
};

export default AlbumItem;
