import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { router } from "./router/index";
import { errorMiddleware } from "./middleware/errorMiddleware";
import { authMiddleware } from "./middleware/authMiddleware";
import { sequelize } from "./models/index";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use("/api", router);
app.use(authMiddleware);
app.use(errorMiddleware);

sequelize
  .authenticate()
  .then(() => console.log("db is connected"))
  .catch((err) => console.log("error during connecting to db", err));

const start = async () => {
  try {
    sequelize.sync({ force: true });
    app.listen(port, () => console.log("server is running"));
  } catch (err) {
    console.log(err);
  }
};

start();
