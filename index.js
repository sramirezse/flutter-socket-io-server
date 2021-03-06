const express = require('express');

const path = require('path');
require('dotenv').config();

//app de express
const app = express();

//Node Server

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./sockets/sockets');
//path publica
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));


server.listen(process.env.PORT, (err)=>{

    if(err) throw new Error(err);
    console.log('Servidor OK Port ', 8090);
})
