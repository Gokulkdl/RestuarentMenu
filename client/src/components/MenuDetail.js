import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMenuById, addItemToMenu } from '../api'; // Correctly import getMenuById
import Modal from '../components/Modal'; // Import Modal

const MenuDetail = () => {
  const { id } = useParams(); // Get the ID from URL parameters
  const [menu, setMenu] = useState(null);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Fetch the menu based on ID
  useEffect(() => {
    const fetchMenu = async () => {
      const menuData = await getMenuById(id); // Fetch single menu by ID
      setMenu(menuData); // Set the fetched menu
    };

    fetchMenu();
  }, [id]);

  const handleAddItem = async (e) => {
    e.preventDefault();
    const itemData = { name: itemName, description: itemDescription, price: itemPrice };
    const updatedMenu = await addItemToMenu(id, itemData); // Add item to the menu
    setMenu(updatedMenu); // Update menu after adding item
    setItemName('');
    setItemDescription('');
    setItemPrice('');
    setIsModalOpen(false); // Close modal after adding item
  };

  if (!menu) return <p>Loading...</p>;

  return (
    <div>
      <h2>{menu.name}</h2>
      <p>{menu.description}</p>

      <h3>Menu Items</h3>
      {menu.items.length === 0 ? (
        <p>No items available for this menu.</p>
      ) : (
        <ul>
          {menu.items.map((item) => (
            <li key={item.name}>
              {item.name} - {item.description} - ${item.price}
            </li>
          ))}
        </ul>
      )}

      {/* Button to open modal */}
      <button onClick={() => setIsModalOpen(true)}>Add New Item</button>

      {/* Modal for adding new items */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Add New Item</h3>
        <form onSubmit={handleAddItem}>
          <div>
            <label>Item Name:</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Item</button>
        </form>

        {/* List of current menu items */}
        <h3>Current Menu Items</h3>
        {menu.items.length === 0 ? (
          <p>No items available for this menu.</p>
        ) : (
          <ul>
            {menu.items.map((item) => (
              <li key={item.name}>
                {item.name} - {item.description} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </div>
  );
};

export default MenuDetail;
