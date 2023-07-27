/* eslint-disable comma-dangle */
import React from 'react';
import style from './officeLocations.module.scss';
import gridTopLeaf from '@/assets/images/grid-top-leaf.png';

const OfficeLocations = () => {
  const {
    officeLocationContainer,
    locationContainer,
    locationCard,
    cardOne,
    cardTwo,
    layoutContainer,
    mainContainer,
  } = style;
  return (
    <div className={mainContainer}>
      <div className={officeLocationContainer}>
        <div className={layoutContainer}>
          <img src={gridTopLeaf.src} alt="" />
        </div>
        <h2>Regional Office across Bangladesh</h2>

        <div className={locationContainer}>
          {Array.from({ length: 10 }).map((item, i) => (
            <div
              className={`${locationCard} ${i % 2 === 0 ? cardOne : cardTwo}`}
              key={i}
            >
              <h3>Dhaka</h3>
              <p>
                Holding no. 499-100 (2nd Floor), Plot 17, Road 5, Block-A,
                Tangail Housing Estate, Pashchim Akur Takur Para, Tangail-1900.
                +88 (0) 1701-693232
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficeLocations;
