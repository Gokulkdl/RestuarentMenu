const express = require("express");
const mongoose = require("mongoose");
const menuRoutes = require("./routes/menuRoutes");
const cors = require("cors");
const connectDB = require("./database/db"); // Import the database connection

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/menuapp", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error(err));

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/menus", menuRoutes);

// Server
const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
