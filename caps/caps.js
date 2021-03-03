'use strict';

const socketio = require('socket.io');
const events = require('../index.js');

const io = socketio(3005);

io.on('connection', (socket) => {
  console.log('new connection created', socket.id);

  socket.on('pickup', payload => {
    events.eventPickup(payload);
    io.emit('pickup', payload);
  })
  
  socket.on('in-transit', payload => {
    events.eventIntransit(payload);
  }); 
  
  
  socket.on('delivered', payload => {
    events.eventDelivered(payload);
    io.emit('delivered', payload);
  });

})


