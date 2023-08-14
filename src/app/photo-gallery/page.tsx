import React from 'react';

import { useFetch } from '@/shared/hook';
import Album from '@/components/PhotoGallery/Album/Album';

const PhotoGallery = async () => {
  const photoAlbums = await useFetch({ url: '/photo-albums', revalidateIn: 86400 });

  return (
    <div>
      <Album albumsData={photoAlbums?.data}/>
    </div>
  );
};

export default PhotoGallery;
