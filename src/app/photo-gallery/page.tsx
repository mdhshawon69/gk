import React from 'react';

import { useFetch } from '@/shared/hook';
import Album from '@/components/PhotoGallery/Album/Album';

const PhotoGallery = async () => {
  //Fetching album data
  const photoAlbums = await useFetch({ url: '/photo-albums' });

  return (
    <div>
      <Album albumsData={photoAlbums?.data} />
    </div>
  );
};

export default PhotoGallery;
