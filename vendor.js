'use strict';
const eventPool = require('./events.js');

const store = 'Franks'

setInterval(() => {
  eventPool.emit('pickup', {storeName: store, orderId: Math.random()*1000, customerName: 'Timmy', address: '111 Eleventeenth St.'})
}, 5000)

function delivered(payload){
  console.log(`VENDOR: thank you for delivering ${payload.orderId}`);
  console.log(`EVENT {event: delivered, ${Date.now()} {${payload.storeName}, ${payload.orderId},${payload.customerName},${payload.address},}`)
}

module.exports = {
  delivered: delivered}
