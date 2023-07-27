'use client';

import React from 'react';
import style from './gallery.module.scss';
import PhotoCard from './PhotoCard/PhotoCard';
import { PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Link from 'next/link';

const Gallery = () => {
  const { galleryContainer, galleryGrid, backButton } = style;
  return (
    <PhotoProvider>
      <div className={galleryContainer}>
        <h2>Grameen Kalyan Health Centers</h2>
        <div className={galleryGrid}>
          {Array.from({ length: 10 }).map((item, i) => (
            <PhotoCard key={i} index={i} />
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
