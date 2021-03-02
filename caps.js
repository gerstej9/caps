'use strict';

const eventPool = require('./events.js');
const vendor = require('./vendor.js');
const driver = require('./driver.js');
const store = 'Franks'

setInterval(() => {
  eventPool.emit('pickup', {storeName: store, orderId: Math.random()*1000, customerName: 'Timmy', address: '111 Eleventeenth St.'})
}, 5000)

eventPool.on('pickup', driver.pickedUp);

eventPool.on('in-transit', driver.transit); 

eventPool.on('in-transit', driver.delivered);

eventPool.on('delivered', vendor.delivered);

