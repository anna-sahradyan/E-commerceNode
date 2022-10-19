import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import goodsRoutes from "./routes/product.router.js";
import userRoutes from "./routes/user.router.js";
const app = express();

dotenv.config();
app.use(cors());
//app.use(express.json());

const PORT = process.env.PORT || 4000;
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use("/goods", goodsRoutes);
app.use("/user",userRoutes);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT} `))).catch((err) => console.log(err.message));