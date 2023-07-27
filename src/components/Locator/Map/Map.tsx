/* eslint-disable comma-dangle */
import React from 'react';
import Image from 'next/image';
import layoutImg from '@/assets/layout/layout-tr-small.svg';
import arrow from '@/assets/images/arrow-left.svg';
import style from './map.module.scss';

const {
  heroSection,
  bgImageContainer,

  content,
  heading,
  layoutContainer,
  layoutImage,
  contentContainer,
  contentLeft,
  contentRight,
  taglineFooter,
} = style;

const Map = () => {
  return (
    <div className={heroSection}>
      <div className={bgImageContainer}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.286476263072!2d90.34785941118281!3d23.808409986457153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c134aa8c4db7%3A0x9c24803a1413f9a9!2sGrameen%20Telecom%20Trust!5e0!3m2!1sen!2sbd!4v1690104837934!5m2!1sen!2sbd"></iframe>
      </div>
      <div className={content}>
        <h2 className={heading}>Opening Hours</h2>
        <div className={contentContainer}>
          <div className={contentLeft}>
            <h4>Head Office</h4> <h5>Sunday - Thursday</h5>
            <span>10:00 AM - 6:00 PM</span>
          </div>
          <div className={contentRight}>
            <h4>Regional Office And Health Centers</h4>
            <h5>Sunday - Thursday</h5> <span>10:00 AM - 6:00 PM</span>
          </div>
        </div>
        <div className={layoutContainer}>
          <Image className={layoutImage} src={layoutImg} alt="layout" />
        </div>

        <div className={taglineFooter}>
          <a href="#">
            <img src={arrow.src} alt="" />
            See our regional locations on the map
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;
