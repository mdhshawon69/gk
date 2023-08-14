'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { BiSolidDownArrow } from 'react-icons/bi';

import gkLogo from '@/assets/logo/gk-logo.svg';
import { IMAGE_BASE_URL } from '@/config';

import style from './navbar.module.scss';
import Link from 'next/link';

const {
  navbar,
  logoContainer,
  logo,
  list,
  item,
  subItem,
  dropdownItem,
  dropdownList,
  itemText,
  menuBtn,
  openList,
  active,
  bar,
  badgeContainer,
  img,
  spaceBox,
  link,
  subItemNoBorder
} = style;

interface INavbarProps {
  badgeImage: string
}

const Navbar = ({ badgeImage }: INavbarProps) => {
  const pathName = usePathname();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const closeNavbar = () => {
    setToggle(false);
  };

  const isHomePage = pathName === '/';
  const badge = IMAGE_BASE_URL + badgeImage;

  return (
    <div className={navbar}>
      <div className={logoContainer}>
        <Link className={link} href='/'>
          <Image className={logo} src={gkLogo} alt='GK logo'/>
        </Link>
      </div>
      <ul className={toggle ? `${list} ${openList}` : `${list}`}>
        <Link className={link} href='/' onClick={closeNavbar}>
          <li className={item}>home</li>
        </Link>
        <Link className={link} href='/about' onClick={closeNavbar}>
          <li className={item}>about us</li>
        </Link>
        <Link className={link} href='/services' onClick={closeNavbar}>
          <li className={item}>services</li>
        </Link>
        <Link className={link} href='/healthcare' onClick={closeNavbar}>
          <li className={item}>healthcare</li>
        </Link>
        <li className={dropdownItem}>
          <span className={itemText}>people <BiSolidDownArrow/></span>
          <ul className={dropdownList}>
            <Link className={link} href='/corporate' onClick={closeNavbar}>
              <li className={subItem}>corporate</li>
            </Link>
            <Link className={link} href='/health-force' onClick={closeNavbar}>
              <li className={subItem}>health force</li>
            </Link>
            <Link className={link} href='/join-us' onClick={closeNavbar}>
              <li className={`${subItem} ${subItemNoBorder}`}>join us</li>
            </Link>
          </ul>
        </li>
        <Link className={link} href='/stories' onClick={closeNavbar}>
          <li className={item}>stories</li>
        </Link>
        <li className={dropdownItem}>
          <span className={itemText}>gallery <BiSolidDownArrow/></span>
          <ul className={dropdownList}>
            <Link className={link} href='/photo-gallery'>
              <li className={`${subItem} ${subItemNoBorder}`}>photo album</li>
            </Link>
          </ul>
        </li>
        <Link className={link} href='/locator' onClick={closeNavbar}>
          <li className={item}>locator</li>
        </Link>
        {
          !isHomePage
            ? <li className={badgeContainer}>
              <Image className={img} src={badge} alt='badge img' width={100} height={100} loader={() => badge}/>
            </li>
            : null
        }
        {
          !isHomePage || toggle
            ? <div className={spaceBox}/>
            : null
        }
      </ul>
      <button className={toggle ? `${menuBtn} ${active}` : `${menuBtn}`} onClick={handleToggle}>
        <span className={bar}></span>
      </button>
    </div>
  );
};

export default Navbar;
