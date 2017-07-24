"use strict";

const Pub = require('../src/pub');
const expect = require('chai').expect

describe("Pub", () => {
    it("should start with number of seats from constructor", () => {
        const pub = new Pub(2)
        expect(pub.numberOfSeats).to.equal(2)
    })

    it("number of seats will be undefined if no argument is given", () => {
        const pub = new Pub()
        expect(pub.numberOfSeats).to.equal(undefined)
    })

    it("number of seats will be null if null is given", () => {
        const pub = new Pub(null)
        expect(pub.numberOfSeats).to.equal(null)
    })

    it("number of seats will be zero if zero is given", () => {
        const pub = new Pub(0)
        expect(pub.numberOfSeats).to.equal(0)
    })

    it("should have 10 taps", () => {
        const pub = new Pub(1)
        expect(pub.taps).to.equal(10)
    })

    it("addTaps should increase the number of taps by amount passed in", () => {
        const pub = new Pub(100)
        pub.addTaps(10)
        expect(pub.taps).to.eq(20)
    })
})
