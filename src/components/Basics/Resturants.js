import React, { useState } from 'react';
import './Resturants.css';
import Menu from './menuApi.js';
import MenuCard from './MenuCard.js';
import Navbar from './Navbar';

const uniqueList = [
  ...new Set(
    Menu.map((menuItem) => {
      return menuItem.category;
    })
  ),
  'All',
];
console.log(uniqueList);

export const Resturants = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, SetMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === 'All') {
      setMenuData(Menu);
      return;
    }

    const updateList = Menu.filter((menuItem) => {
      return menuItem.category === category;
    });

    setMenuData(updateList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};
