import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuList from './components/MenuList';
import MenuForm from './components/MenuForm';
import MenuDetail from './components/MenuDetail';
import Navbar from './components/Header/Navbar';
import MenuLists from './components/Menulist/MenuLists';
import Menu from './components/Menu/Menu';
import './App.scss';

import { getMenus, createMenu } from './api'; // Assuming createMenu is in the API file
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal'; // Import Modal component

const App = () => {
  const [menus, setMenus] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    const fetchMenus = async () => {
      const menusData = await getMenus();
      setMenus(menusData);
    };
    fetchMenus();
  }, []);

  const handleMenuCreated = (newMenu) => {
    setMenus((prevMenus) => [...prevMenus, newMenu]);
    setIsModalOpen(false); // Close the modal after menu creation
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
        <MenuLists />
        <Menu />
        <Footer />
        <div style={{ padding: '20px' }}>
          <h1>Menu App</h1>
          <button onClick={toggleModal}>Create Menu</button> {/* Button to open modal */}
          <Modal isOpen={isModalOpen} onClose={toggleModal}>
            <h2>Create Menu</h2>
            <MenuForm onMenuCreated={handleMenuCreated} /> {/* Menu form inside modal */}
            <h3>Previously Added Menus</h3>
            <MenuList menus={menus} /> {/* List of added menus */}
          </Modal>
          <Routes>
            <Route path="/" element={<MenuList menus={menus} />} />
            <Route path="/menus/:id" element={<MenuDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
