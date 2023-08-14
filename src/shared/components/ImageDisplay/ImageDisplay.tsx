'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IMAGE_BASE_URL } from '@/config';

import style from './imageDisplay.module.scss';
import { IImageDisplayProps } from './ImageDisplay.types';
import { filterData } from './imageDisplay.helpers';

const {
  contentContainer,
  heading,
  leftContent,
  content,
  imgContainer,
  imageContainer,
  rightContent,
  img,
  link,
  primaryImageContainer,
  primaryContentContainer
} = style;

const ImageDisplay = ({ data, primary }: IImageDisplayProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const leftSideData = filterData({ data, from: 1, to: 3 });
  const rightSideData = filterData({ data, from: 4, to: 6 });

  return (
    <div className={primary ? `${contentContainer} ${primaryContentContainer}` : `${contentContainer}`}>
      <h2 className={heading}>Stories</h2>
      <div className={leftContent}>
        {
          leftSideData?.map(data => <div key={data.id} className={content} onMouseOver={ () => setSelectedImage(data.banner_image)}>
            <Link className={link} href={data.dataType === 'medical' ? `/medical-care/${data.id}` : data.dataType === 'story' ? `/stories/${data.id}` : '#'}>
              <p>{data.name}</p>
            </Link>
            <div className={imgContainer}>
              <Image className={img} src={IMAGE_BASE_URL + data.banner_image} alt='stroy image' width={100} height={100} loader={() => IMAGE_BASE_URL + data.banner_image}/>
            </div>
          </div>)
        }
      </div>
      <div className={primary ? `${imageContainer} ${primaryImageContainer}` : `${imageContainer}`}>
        {
          IMAGE_BASE_URL && selectedImage
            ? <Image className={img} src={IMAGE_BASE_URL + selectedImage} alt='' width={100} height={100} loader={() => IMAGE_BASE_URL + selectedImage}/>
            : <Image className={img} src={IMAGE_BASE_URL + data[0].banner_image} alt='' width={100} height={100} loader={() => IMAGE_BASE_URL + data[0].banner_image}/>
        }
      </div>
      <div className={rightContent}>
        {
          rightSideData?.map(data => <div key={data.id} className={content} onMouseOver={() => setSelectedImage(data.banner_image)}>
            <Link className={link} href={data.dataType === 'medical' ? `/medical-care/${data.id}` : data.dataType === 'story' ? `/stories/${data.id}` : '#'}>
              <p>{data.name}</p>
            </Link>
            <div className={imgContainer}>
              <Image className={img} src={IMAGE_BASE_URL + data.banner_image} alt='stroy image' width={100} height={100} loader={() => IMAGE_BASE_URL + data.banner_image}/>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default ImageDisplay;
