'use strict';

function eventPickup(payload){
  console.log(`EVENT: {event: 'pickup', ${Date.now()} {${payload.storeName}, ${payload.orderId},${payload.customerName},${payload.address},}`);
}

function eventIntransit(payload){
  console.log(`EVENT { event: 'in-transit'  ${Date.now()} {${payload.storeName}, ${payload.orderId},${payload.customerName},${payload.address},}`);
}


function eventDelivered(payload){
  console.log(`EVENT {event: delivered, ${Date.now()} {${payload.storeName}, ${payload.orderId},${payload.customerName},${payload.address},}`);
}

function driverPickup(payload){
  console.log(`DRIVER: picked up order #${payload.orderId}`);
}

function driverDelivered(payload){
  console.log(`DRIVER: delivered order #${payload.orderId}`)
}

function vendorDelivered(payload){
  console.log(`VENDOR: thank you for delivering order #${payload.orderId}`);
}

module.exports = {
  eventPickup: eventPickup,
  eventIntransit: eventIntransit,
  eventDelivered: eventDelivered,
  driverPickup: driverPickup,
  driverDelivered: driverDelivered,
  vendorDelivered: vendorDelivered
}