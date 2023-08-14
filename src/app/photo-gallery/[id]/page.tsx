import React from 'react';

import Gallery from '@/components/PhotoGallery/Gallery/Gallery';
import { useFetch } from '@/shared/hook';

const GalleryPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const galleryPhotos = await useFetch({ url: `/photo-galleries?category_id=${id}` });

  return (
    <div>
      <Gallery data={galleryPhotos?.data}/>
    </div>
  );
};

export default GalleryPage;
