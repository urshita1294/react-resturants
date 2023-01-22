import React from 'react';

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((menuItem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(menuItem)}
              >
                {menuItem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
