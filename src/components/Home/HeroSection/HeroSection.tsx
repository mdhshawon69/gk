'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import layoutImage from '@/assets/layout/layout-tr-small.svg';
import titleImage from '@/assets/images/home/title.svg';
import { Sliders } from '@/shared/components';
import { IMAGE_BASE_URL } from '@/config';

import { IHeroSectionProps } from './HeroSection.types';
import './heroSection.scss';

const HeroSection = ({ badgeImage, sliderImages }: IHeroSectionProps) => {
  return (
    <div className='heroSection'>
      <div className='bgImage'>
        <Sliders
          infinite={true}
          slideShow={1}
          slideToShowMob={1}
          autoPlay={true}
          autoplaySpeed={3000}
        >
          {
            sliderImages?.map(data => <div key={data.id} className='imgContainer'>
              <Image className='img' src={IMAGE_BASE_URL + data.banner_image} alt='Background img' width={100} height={100} loader={() => IMAGE_BASE_URL + data.banner_image}/>
            </div>)
          }
        </Sliders>
      </div>
      <div className='layout'>
        <Image className='img' src={layoutImage} alt='layout'/>
      </div>
      <div className='glory'>
        <Image className='img' src={IMAGE_BASE_URL + badgeImage} alt='glory' width={100} height={100} loader={() => IMAGE_BASE_URL + badgeImage}/>
      </div>
      <div className='contentContainer'>
        <motion.div
          initial={{ opacity: 0, left: '-20rem' }}
          whileInView={{ opacity: 1, left: '0' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='imgContainer'
        >
          <Image className='img' src={titleImage} alt='title'/>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
