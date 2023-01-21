import path from 'path';
import express from 'express';
import { ExpressPeerServer } from 'peer';

const app = express();

app.use(express.static(path.join(`${__dirname}/../public`)));
// app.use('/static', express.static(path.join(`${__dirname}/../public`)));

const listener = app.listen(9000);

const peerServer = ExpressPeerServer(listener, {
  path: '/myapp'
});

app.use('/peerjs', peerServer);
