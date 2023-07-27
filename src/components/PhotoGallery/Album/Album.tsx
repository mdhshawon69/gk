import React from 'react';
import style from './album.module.scss';
import AlbumItem from './AlbumItem/AlbumItem';

const Album = () => {
  const { albumContainer, albumGrid } = style;
  return (
    <div className={albumContainer}>
      <div className={albumGrid}>
        {Array.from({ length: 10 }).map((item, i) => (
          <AlbumItem key={i} />
        ))}
      </div>
    </div>
  );
};

export default Album;
