import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import navToggle from '../../assets/images/nav-toggle.png';
import logoShape from '../../assets/images/logo-shape.png';
import Modal from '../Modal'; // Import the reusable Modal component
import MenuForm from '../MenuForm'; // Import the MenuForm component
import MenuList from '../MenuList'; // Import the MenuList component
import Menu from '../Menu/Menu'; // Import the Menu component

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle menu creation
  const handleMenuCreated = (newMenu) => {
    setMenus([...menus, newMenu]);
  };

  // Handle menu click to display menu items
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <>
      {/* Navbar */}
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-logo">
              {/* Desktop Logo */}
              <Link to="/" className="brand d-none d-md-block">
                <img src={logo} alt="Logo" />
              </Link>
              {/* Mobile Logo */}
              <Link to="/" className="brand d-block d-md-none">
                <img src={logoShape} alt="Logo Shape" />
              </Link>
              {/* Toggle Button */}
              <a href="javascript:void(0);" className="nav-toggle">
                <img src={navToggle} alt="Toggle Navigation" />
              </a>
            </div>
            <div className="col-md-8 col-nav">
              <ul className="nav">
                <li>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <button
                    className="nav-link btn btn-primary"
                    onClick={openModal} // Open the modal when clicked
                  >
                    Add Menu
                  </button>
                </li>
                <li>
                  <Link to="/contact" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Modal for adding a menu */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Add Menu</h2>
          <MenuForm onMenuCreated={handleMenuCreated} />

          <h3>Existing Menus</h3>
          <MenuList menus={menus} onMenuClick={handleMenuClick} />
        </Modal>
      )}

      {/* Display selected menu items */}
      <Menu selectedMenu={selectedMenu} />
    </>
  );
};

export default Navbar;
