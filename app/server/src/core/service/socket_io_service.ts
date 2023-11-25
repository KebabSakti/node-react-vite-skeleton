import http from "http";
import { Server } from "socket.io";

class SocketIoService {
  static init(server: http.Server) {
    const io = new Server(server);

    return io;
  }
}

export { SocketIoService };
