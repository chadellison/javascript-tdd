// test/account_test
'use strict'

const expect = require('chai').expect

const Account = require('../src/account');

describe("An account when it is first opened", () => {
    it("has a balance of zero", () => {
        const account = new Account

        expect(account.balance).to.equal(0)
    })
})