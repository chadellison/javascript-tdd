// in pub.js

// old syntax
// function Pub(numberOfSeats) {
//     this.numberOfSeats = numberOfSeats;
//     this.taps = 10;
// }
//
// Pub.prototype.addTaps = function(numTaps) {
//     this.taps += numTaps;
// }

// new syntax )es6
class Pub {
    constructor(numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
        this.taps = 10;
    }

    addTaps(numTaps) {
        this.taps += numTaps;
    }
}

module.exports = Pub