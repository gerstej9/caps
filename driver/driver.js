'use strict';
const io = require('socket.io-client');
const hostURL = 'http://localhost:3005/caps';
const socket = io.connect(hostURL);
const events = require('../index.js');


socket.emit('getAll');

socket.on('message', payload => {
  if(payload.order.event === 'pickup'){
    console.log(payload);
    setTimeout(() => {
      events.driverPickup(payload);
      socket.emit('in-transit', payload);
    }, 1000)
    setTimeout(() => {
      events.driverDelivered(payload);
      socket.emit('delivered', payload);
    }, 3000)
    socket.emit('subscriber', 'messages');
  }
})

socket.on('pickup', payload => {
    setTimeout(() => {
      events.driverPickup(payload);
      socket.emit('in-transit', payload);
    }, 1000)
    socket.emit('subscriber', 'pickup');
  });


socket.on('pickup', payload => {
  setTimeout(() => {
    events.driverDelivered(payload);
    socket.emit('delivered', payload);
  }, 3000)
})
