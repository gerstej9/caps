const driver = require('../driver.js');
const vendor = require('../vendor.js');

console.log = jest.fn();

describe('Testing the driver module', () =>{
  it('should console log some output', () =>{
    driver.pickedUp({storeName: 'Franks', orderId: Math.random()*1000, customerName: 'Timmy', address: '111 Eleventeenth St.'})
    setTimeout(() => {expect(console.log).toHaveBeenCalled()}, 800);
  })
  it('should console log some output', () =>{
    driver.transit({storeName: 'Franks', orderId: Math.random()*1000, customerName: 'Timmy', address: '111 Eleventeenth St.'})
    expect(console.log).toHaveBeenCalled();
  })
  it('should console log some output', () =>{
    driver.transit({storeName: 'Franks', orderId: Math.random()*1000, customerName: 'Timmy', address: '111 Eleventeenth St.'})
    setTimeout(() => {expect(console.log).toHaveBeenCalled()}, 2800);
  })
})

describe('Testing the vendor module', () =>{
  it('should console log some output', () =>{
    vendor.delivered({storeName: 'Franks', orderId: Math.random()*1000, customerName: 'Timmy', address: '111 Eleventeenth St.'})
    expect(console.log).toHaveBeenCalled();
  })
})