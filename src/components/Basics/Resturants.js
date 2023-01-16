import React, { useState } from 'react';
import './Resturants.css';
import Menu from './menuApi.js';
import MenuCard from './MenuCard.js';

export const Resturants = () => {
  const [menuData, setMenuData] = useState(Menu);
  return (
    <>
      <MenuCard menuData={menuData} />
    </>
  );
};
