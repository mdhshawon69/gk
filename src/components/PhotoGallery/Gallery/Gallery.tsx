'use client';

import React from 'react';
import Link from 'next/link';
import { PhotoProvider } from 'react-photo-view';

import PhotoCard from './PhotoCard/PhotoCard';

import style from './gallery.module.scss';
import 'react-photo-view/dist/react-photo-view.css';
import { IGalleryData } from './Gallery.types';

interface IGalleryProps{
  data: IGalleryData[]
}

const Gallery = ({ data }: IGalleryProps) => {
  const { galleryContainer, galleryGrid, backButton } = style;
  return (
    <PhotoProvider>
      <div className={galleryContainer}>
        <h2>{data && data[0].album_title}</h2>
        <div className={galleryGrid}>
          {data && data.map(item => (
            <div key={item.id}>
              <PhotoCard data={item}/>
            </div>
          ))}
        </div>
        <div className={backButton}>
          <Link href="/photo-gallery">Back</Link>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default Gallery;
