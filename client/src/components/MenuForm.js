import React, { useState } from 'react';

const MenuForm = ({ onMenuCreated }) => {
  const [menuName, setMenuName] = useState('');
  const [menuDescription, setMenuDescription] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  // Handle form submission for creating menu
  const handleMenuSubmit = (e) => {
    e.preventDefault();
    if (!menuName || !menuDescription) return;

    const newMenu = {
      name: menuName,
      description: menuDescription,
      items: menuItems,
    };

    // Pass the created menu to the parent component
    onMenuCreated(newMenu);
    setMenuName('');
    setMenuDescription('');
    setMenuItems([]);
  };

  // Handle adding new menu items
  const handleAddItem = () => {
    if (!itemName || !itemDescription || !itemPrice) return;

    const newItem = {
      name: itemName,
      description: itemDescription,
      price: itemPrice,
    };

    setMenuItems([...menuItems, newItem]);
    setItemName('');
    setItemDescription('');
    setItemPrice('');
  };

  return (
    <form onSubmit={handleMenuSubmit}>
      <div>
        <label>Menu Name</label>
        <input
          type="text"
          value={menuName}
          onChange={(e) => setMenuName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Menu Description</label>
        <textarea
          value={menuDescription}
          onChange={(e) => setMenuDescription(e.target.value)}
          required
        />
      </div>

      {/* Add Menu Items */}
      <div>
        <h3>Add Menu Items</h3>
        <div>
          <label>Item Name</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div>
          <label>Item Description</label>
          <textarea
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Item Price</label>
          <input
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleAddItem}>
          Add Item
        </button>
      </div>

      <button type="submit">Create Menu</button>
    </form>
  );
};

export default MenuForm;
