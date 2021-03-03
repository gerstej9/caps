'use strict';
const io = require('socket.io-client');
const hostURL = 'http://localhost:3005';
const socket = io.connect(hostURL);
const events = require('../index.js');


socket.on('pickup', payload => {
    setTimeout(() => {
      events.driverPickup(payload);
      socket.emit('in-transit', payload);
    }, 1000)
  });


socket.on('pickup', payload => {
  setTimeout(() => {
    events.driverDelivered(payload);
    socket.emit('delivered', payload);
  }, 3000)
});
