import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { router } from "./router/index";
import { errorMiddleware } from "./middleware/errorMiddleware";
import { authMiddleware } from "./middleware/authMiddleware";
import { sequelize } from "./models/index";
import http from "http";
import { Server } from "socket.io";
import session from "express-session";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { credentials: true, origin: "*" } });
const port = process.env.PORT;

const sessionMiddleware = session({
  secret: "secret__key",
  resave: true,
  saveUninitialized: true,
});

app.use(sessionMiddleware);

io.engine.use(sessionMiddleware);

io.on("connection", (socket) => {
  socket.on(
    "registration",
    (message: { username: string; password: string }) => {
      // if (message) {
      socket.emit("registrationSuccess", { status: "success" });
      // }
    }
  );
});

// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.CLIENT_URL,
//   })
// );
// app.use("/api", router);
// app.use(authMiddleware);
// app.use(errorMiddleware);

sequelize
  .authenticate()
  .then(() => console.log("db is connected"))
  .catch((err) => console.log("error during connecting to db", err));

const start = async () => {
  try {
    sequelize.sync();
    server.listen(port, () => console.log("server is running"));
  } catch (err) {
    console.log(err);
  }
};

start();
