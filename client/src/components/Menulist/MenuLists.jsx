import React from 'react';

function MenuList({ menus = [], onMenuClick }) {
  if (menus.length === 0) {
    return (
      <section className="menu-list">
        <div className="container">
          <div className="col-12">
            <ul className="menu">
              <li>No menus available</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="menu-list">
      <div className="container">
        <div className="col-12">
          <ul className="menu">
            {menus.map((menu, index) => (
              <li key={index} onClick={() => onMenuClick(menu)} className="menu-link">
                <h3>{menu.name}</h3>
                <p>{menu.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MenuList;
