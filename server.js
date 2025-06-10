const { Server } = require("socket.io");
const http = require("http");

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log("Joueur connecté");

  socket.on("disconnect", () => {
    console.log("Joueur déconnecté");
  });
});

server.listen(3000, () => {
  console.log("Serveur Socket.io en écoute sur le port 3000");
});
