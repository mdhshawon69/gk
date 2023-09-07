'use client';

import React from 'react';
import Image from 'next/image';

import bgImage from '@/assets/images/common/annual-report.jpg';

import style from './annualSection.module.scss';
import { IAnnualReportSection } from './annualReport.type';
import { motion } from 'framer-motion';

const {
  annualSection,
  heading,
  container,
  bgContainer,
  img,
  contentContainer,
  content,
  gridContainer,
  text,
  number,
  title,
  headingT,
  annualSectionT,
  contentContainerT
} = style;

const AnnualReportSection = ({ data, headingText, headingTop }: IAnnualReportSection) => {
  return (
    <div className={headingTop ? `${annualSection} ${annualSectionT}` : `${annualSection}`}>
      <h1 className={headingTop ? `${heading} ${headingT}` : `${heading}`}>{headingText}</h1>
      <div className={container}>
        <div className={bgContainer}>
          <Image className={img} src={bgImage} alt='bg-img' height={1000} width={1000}/>
        </div>
        <div className={headingTop ? `${contentContainer} ${contentContainerT}` : `${contentContainer}`}>
          <div className={gridContainer}>
            {
              data.map((item, index) => <motion.div
                style={{ position: 'relative' }}
                initial={{ opacity: 0, bottom: '-5rem' }}
                whileInView={{ opacity: 1, bottom: '0' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                key={index} className={content}>
                <p className={text}>
                  <span className={number}>{item.value}+</span>
                  <span className={title}>{item.title}</span>
                </p>
              </motion.div>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualReportSection;
