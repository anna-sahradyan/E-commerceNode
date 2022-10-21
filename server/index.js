import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import productRoutes from "./routes/product.router.js";
import userRoutes from "./routes/user.router.js";
import cartRoutes from "./routes/cart.router.js";

const app = express();

dotenv.config();
app.use(cors());


const PORT = process.env.PORT || 4000;
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/cart", cartRoutes);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT} `))).catch((err) => console.log(err.message));