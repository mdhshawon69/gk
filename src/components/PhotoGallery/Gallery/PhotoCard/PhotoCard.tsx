'use client';

import React from 'react';
import style from './photoCard.module.scss';
import { PhotoView } from 'react-photo-view';
// import 'react-photo-view/dist/react-photo-view.css';

const PhotoCard = ({ index, item }: any) => {
  const { photoCard, mask } = style;
  return (
    <PhotoView src="https://www.grameenkalyan.com/uploads/gallery/thumb_image/1686121791_uchakhila-3.png">
      <div className={photoCard}>
        <img
          src="https://www.grameenkalyan.com/uploads/gallery/thumb_image/1686121791_uchakhila-3.png"
          alt=""
        />

        <div className={mask}>
          <h4>Rajnagar Health Center, Savar Region</h4>
        </div>
      </div>
    </PhotoView>
  );
};

export default PhotoCard;
