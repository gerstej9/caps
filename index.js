'use strict';

function eventPickup(payload){
  console.log(`EVENT: {event: 'pickup', ${Date.now()} {${payload.order.retailer}, ${payload.order.orderId},${payload.order.customerName},${payload.order.address},}`);
}

function eventIntransit(payload){
  console.log(`EVENT { event: 'in-transit' ${Date.now()} {${payload.order.retailer}, ${payload.order.orderId},${payload.order.customerName},${payload.order.address},}`);
}


function eventDelivered(payload){
  console.log(`EVENT {event: delivered, ${Date.now()} {${payload.order.retailer}, ${payload.order.orderId},${payload.order.customerName},${payload.order.address},}`);
}

function driverPickup(payload){
  console.log(`DRIVER: picked up order #${payload.order.orderId}`);
}

function driverDelivered(payload){
  console.log(`DRIVER: delivered order #${payload.order.orderId}`)
}

function vendorDelivered(payload){
  console.log(`VENDOR: thank you for delivering order #${payload.order.orderId}`);
}

module.exports = {
  eventPickup: eventPickup,
  eventIntransit: eventIntransit,
  eventDelivered: eventDelivered,
  driverPickup: driverPickup,
  driverDelivered: driverDelivered,
  vendorDelivered: vendorDelivered
}