import React from 'react';

const MenuList = ({ menus, onMenuClick }) => {
  return (
    <div>
      {menus.map((menu, index) => (
        <div key={index} onClick={() => onMenuClick(menu)}>
          <h3>{menu.name}</h3>
          <p>{menu.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
