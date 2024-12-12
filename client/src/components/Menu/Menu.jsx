import React from 'react';

function Menu({ selectedMenu }) {
  if (!selectedMenu) return null;

  return (
    <section className='main-menu'>
        <div className="container">
            <div className="menu-wrapper">
                <div className="row">
                    <div className="title">
                        <h1>{selectedMenu.name}</h1>
                    </div>
                </div>
                <div className="row">
                  {selectedMenu.items.map((item, index) => (
                    <div key={index} className="col-md-6">
                        <div className="menu-item">
                            <div className="d-flex">
                                <h2>{item.name}</h2>
                                <p>${item.price}</p>
                            </div>
                            <div className="desc">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                  ))}
                </div>
            </div>
        </div>
    </section>
  );
}

export default Menu;
