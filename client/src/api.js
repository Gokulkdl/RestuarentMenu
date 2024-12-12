import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/menus';

// Fetch all menus
export const getMenus = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (err) {
    console.error('Error fetching menus:', err);
    return [];
  }
};

// Fetch a single menu by ID
export const getMenuById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (err) {
    console.error('Error fetching menu by ID:', err);
    return null;
  }
};

// Create a new menu
export const createMenu = async (menu) => {
  try {
    const response = await axios.post(apiUrl, menu);
    return response.data;
  } catch (err) {
    console.error('Error creating menu:', err);
    return null;
  }
};

// Add item to a menu
export const addItemToMenu = async (menuId, item) => {
  try {
    const response = await axios.post(`${apiUrl}/${menuId}/items`, item);
    return response.data;
  } catch (err) {
    console.error('Error adding item to menu:', err);
    return null;
  }
};
