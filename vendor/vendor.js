'use strict';

const io = require('socket.io-client');
const faker = require('faker');
const events = require('../index.js');

const hostURL = 'http://localhost:3005';
const socket = io.connect(hostURL);

const store = 'Franks'

setInterval(() => {
  socket.emit('pickup', {storeName: store, orderId: Math.ceil(Math.random()*1000), customerName: `${faker.name.firstName()} ${faker.name.lastName()}`, address: `${faker.address.streetAddress()}, ${faker.address.city()}`})
}, 5000);

socket.on('delivered', payload => {
  events.vendorDelivered(payload);
});

