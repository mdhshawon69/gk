'use client';

import React from 'react';
import Image from 'next/image';

import layoutImage from '@/assets/layout/layout-tr-small.svg';
import titleImage from '@/assets/images/home/title.svg';
import { Sliders } from '@/shared/components';
import { IMAGE_BASE_URL } from '@/config';

import { IHeroSectionProps } from './HeroSection.types';
import style from './heroSection.module.scss';

const {
  heroSection,
  bgImage,
  img,
  layout,
  glory,
  contentContainer,
  content,
  emptyBox,
  imgContainer
} = style;

const HeroSection = ({ badgeImage, sliderImages }: IHeroSectionProps) => {
  return (
    <div className={heroSection}>
      <div className={bgImage}>
        <Sliders
          infinite={true}
          slideShow={1}
          slideToShowMob={1}
          autoPlay={true}
          autoplaySpeed={3000}
        >
          {
            sliderImages.map(data => <div key={data.id} className={`${imgContainer}`}>
              <Image className={img} src={IMAGE_BASE_URL + data.banner_image} alt='Background img' width={100} height={100} loader={() => IMAGE_BASE_URL + data.banner_image}/>
            </div>)
          }
        </Sliders>
      </div>
      <div className={layout}>
        <Image className={img} src={layoutImage} alt='layout'/>
      </div>
      <div className={glory}>
        <img className={img} src={IMAGE_BASE_URL + badgeImage} alt='glory'/>
      </div>
      <div className={contentContainer}>
        <div className={emptyBox}></div>
        <div className={content}>
          <div className={imgContainer}>
            <Image className={img} src={titleImage} alt='title'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
