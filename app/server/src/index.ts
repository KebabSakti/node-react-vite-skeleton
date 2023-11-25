require("dotenv").config();

import cors from "cors";
import express from "express";
import http from "http";
import { SocketIoService } from "./core/service/socket_io_service";
import { landing } from "./view/v1/landing";

const app = express();
const server = http.createServer(app);
const io = SocketIoService.init(server);
const port = 1001;

//init

//websocket
io.use(async (socket, next) => {
  next();
}).on("connection", async (socket) => {
  console.log(socket);
});

//global middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//REST
app.get("/", landing);

//route not found 404
app.use("*", (_, res) => res.status(404).json("Route path not found"));

server.listen(port);
