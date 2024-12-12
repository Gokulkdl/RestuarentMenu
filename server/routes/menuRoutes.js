const express = require("express");
const Menu = require("../models/Menu");
const router = express.Router();

// Create a new menu
router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;
    const newMenu = new Menu({ name, description, items: [] });
    const savedMenu = await newMenu.save();
    res.status(201).json(savedMenu);
  } catch (err) {
    res.status(500).json({ error: "Failed to create menu" });
  }
});

// Get all menus
router.get("/", async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch menus" });
  }
});

// Get a single menu by ID
router.get("/:id", async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) return res.status(404).json({ error: "Menu not found" });
    res.status(200).json(menu);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch menu" });
  }
});

// Add a menu item to a menu
router.post("/:id/items", async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const menu = await Menu.findById(req.params.id);
    if (!menu) return res.status(404).json({ error: "Menu not found" });

    const newItem = { name, description, price };
    menu.items.push(newItem);
    const updatedMenu = await menu.save();

    res.status(201).json(updatedMenu);
  } catch (err) {
    res.status(500).json({ error: "Failed to add menu item" });
  }
});

// Delete a menu by ID
router.delete("/:id", async (req, res) => {
  try {
    const menu = await Menu.findByIdAndDelete(req.params.id);
    if (!menu) return res.status(404).json({ error: "Menu not found" });
    res.status(200).json({ message: "Menu deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete menu" });
  }
});

module.exports = router;
