// eslint-env mocha, chai

'use strict'

const expect = require('chai').expect

describe('data types', () => {
    describe('boolean', () => {
        it('returns type as Boolean for true or false', () => {
            expect(typeof true).to.equal('boolean')
            expect(typeof true).to.equal('boolean')
        })
    })

    describe('null', () => {
        it('returns typeof null', () => {
            expect(typeof null).to.equal('object')
        })

        it('literals return false for instanceof Boolean', () => {
            expect(true instanceof Boolean).to.be.false
            expect(false instanceof Boolean).to.be.false
        })

        it('typeof behaves differently if it is constructed rather than literal', () => {
            expect(typeof true).to.equal('boolean')
            expect(typeof false).to.equal('boolean')
        })

        it('constructed instances return true for instanceof Boolean', () => {
            expect(new Boolean(true) instanceof Boolean).to.be.true
            expect(new Boolean(false) instanceof Boolean).to.be.true
        })

        it('negated by unary operator !', () => {
            expect(!true).to.be.false
            expect(!false).to.be.true
        })

        it('typecasts values to Boolean', () => {
            expect(Boolean('true')).to.equal(true)
            expect(Boolean(1)).to.be.true
            expect(Boolean(0)).to.be.false
            expect(Boolean(undefined)).to.be.false
            expect(Boolean(undefined)).to.be.false
        })
    })

    describe('Null', () => {
        it('returns type as Object for null', () => {
            expect(typeof null).to.equal('object')
        })

        it('has no corresponding constructor', () => {
            expect(() => {
                new Null()
            }).to.throw(ReferenceError)
        })
    })

    describe('undefined', () => {
        it('returns type as undefined for undefined', () => {
            expect(typeof undefined).to.equal('undefined')
        })

        it('has no corresponding constructor', () => {
            expect(() => {
                new Undefined()
            }).to.throw(ReferenceError)
        })
    })

    describe('Number', () => {
        it('returns type as Number for true or false', () => {
            expect(typeof 13).to.equal('number')
        })

        it('literals return false for instanceof Number', () => {
            expect(13 instanceof Number).to.be.false
        })

        it('typeof behaves differently if it is constructed rather than literal', () => {
            expect(typeof new Number("13")).to.equal('object')
        })

        it('constructed instances return true for instanceof Number', () => {
            expect(new Number("13") instanceof Number).to.be.true
        })

        it('typecasts values to Number', () => {
            expect(Number('true')).to.be.NaN
            expect(Number(undefined)).to.be.NaN
            expect(Number("101238")).to.equal(101238)
            expect(Number(0)).to.equal(0)
        })
    })

    describe('String', () => {
        it('returns type as String for true or false', () => {
            expect(typeof "").to.equal('string')
        })

        it('literals return false for instanceof String', () => {
            expect("" instanceof String).to.be.false
        })

        it('typeof behaves differently if it is constructed rather than literal', () => {
            expect(typeof new String("")).to.equal('object')
        })

        it('constructed instances return true for instanceof String', () => {
            expect(new String("") instanceof String).to.be.true
        })
    })

    describe('Comparison', () => {
        it('compares loose equality with ==', () => {
            const obj = {}
            const f1 = () => {}
            const f2 = () => {}
            // loose equality introduces type casting
            expect("12" == 12).to.be.true
            expect({} == {}).to.be.false
            // Functions (and Arrays) are Objects, so comparison
            // with == fails for them as well:
            expect(f1 == f2).to.be.false
            expect(f1 == f1).to.be.true
        })

        it('compares strict equality with ===', () => {
            const obj = {}

            const f1 = () => {}
            const f2 = () => {}

            // strict equality does not involve type casting
            expect("12" === 12).to.be.false
            expect({} === {}).to.be.false
            expect(f1 === f2).to.be.false
        })

        it('compares loose inequality with !=', () => {
            // left as an exercise for the reader
            expect(5 != "4").to.be.true
        })

        it('compares strict inequality with !==', () => {
            // left as an exercise for the reader
            expect(3 !== "3").to.be.true
        })

        it('compares greater than with >', () => {
            // left as an exercise for the reader
            expect(1 > 2).to.be.false
        })

        it('compares less than with <', () => {
            // left as an exercise for the reader
            expect(1 < 2).to.be.true
        })

        it('compares greater than or equal to with >=', () => {
            // left as an exercise for the reader
            expect(2 >= 2).to.be.true
        })

        it('compares less than or equal to with <=', () => {
            // left as an exercise for the reader
            expect(2 <= 2).to.be.true
        })
    })

    describe('Logical', () => {
        it('&& allows for logical conjunction', () => {
            expect(true && 10 > 4).to.be.true
            expect(2 > 1 && "hi".length > 10).to.be.false
        })

        it('|| allows for logical disjunction', () => {
            expect(true || 10 > 4).to.be.true
            expect(2 > 1 || "hi".length > 10).to.be.true
        })
    })

    describe('Function', () => {
        describe('with `function` keyword', () => {
            it('allows for functions to be named', () => {
                function thisIsAwesome () {
                    return "This is awesome";
                }

                expect(thisIsAwesome()).to.equal("This is awesome")
            })

            it('allows for functions to be anonymous and function expression to be treated as a value ("Functions are 1st class citizens")', () => {
                const anonymous = function () { return 13 }

                expect(anonymous()).to.equal(13)
            })

            it('allows for functions to be immediately invoked (Immediately Invoked Function Expression ("iffy"))', () => {
                expect((function () {
                    return 'an iffy!'
                })()).to.equal('an iffy!')
            })

            it('return undefined if there is not an explicit return statement', () => {
                const returnsUndefined = function () { const a = "Hi" }
                expect(returnsUndefined()).to.be.undefined
            })
        })

        describe('arrow functions', () => {
            it('always anonymous, shorter form syntax similar to a function', () => {
                const anonymous = function () { return 13 }

                expect(anonymous()).to.equal(13)
            })

            it('can be immediately invoked like an IIFE', () => {
                expect((() => 'an arrow IIFE')()).to.equal('an arrow IIFE')
            })

            it('can not be used as constructors', () => {
                // expect(() => ({foo: 'bar'})).to.throw(TypeError)
            })

            xit('binds the value of `this` differently than `function` (to be covered in the future)')
        })
    })
})