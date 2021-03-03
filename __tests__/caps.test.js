'use strict';

const events = require('../index.js');
console.log = jest.fn();

describe('Testing the caps module', () =>{
  it('should console log some output', () =>{
    events.eventPickup({storeName: 'Franks', orderId: Math.random()*1000, customerName: 'Timmy', address: '111 Eleventeenth St.'})
    expect(console.log).toHaveBeenCalled();
  })
  it('should console log some output', () =>{
    events.eventIntransit({storeName: 'Franks', orderId: Math.random()*1000, customerName: 'Timmy', address: '111 Eleventeenth St.'})
    expect(console.log).toHaveBeenCalled();
  })
  it('should console log some output', () =>{
    events.eventDelivered({storeName: 'Franks', orderId: Math.random()*1000, customerName: 'Timmy', address: '111 Eleventeenth St.'})
    expect(console.log).toHaveBeenCalled();
  })
})

describe('Testing the driver module', () =>{
  it('should console log some output', () =>{
    events.driverPickup({storeName: 'Franks', orderId: Math.random()*1000, customerName: 'Timmy', address: '111 Eleventeenth St.'})
    expect(console.log).toHaveBeenCalled();
  })
  it('should console log some output', () =>{
    events.driverDelivered({storeName: 'Franks', orderId: Math.random()*1000, customerName: 'Timmy', address: '111 Eleventeenth St.'})
    expect(console.log).toHaveBeenCalled();
  })
})

describe('Testing the vendor module', () =>{
  it('should console log some output', () =>{
    events.vendorDelivered({storeName: 'Franks', orderId: Math.random()*1000, customerName: 'Timmy', address: '111 Eleventeenth St.'})
    expect(console.log).toHaveBeenCalled();
  })
})