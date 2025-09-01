import express from 'express';
import {Server} from 'socket.io';
import http from 'http';

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);
const io=new Server(server);

io.on('connection', (socket) => {
  console.log('A user connected');
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
