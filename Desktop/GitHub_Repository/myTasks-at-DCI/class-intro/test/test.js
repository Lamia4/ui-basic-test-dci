const expect = require('chai').expect; //holt die Methode expect von chai

const Auto = require('./index');

const auto = new Auto();

describe("Auto():", () =>
{
    it('should return a string', () =>
    {
        expect(auto.fahren()).to.equal("Das Auto fährt ...")
    })
});

describe('Hello world', () => {
    it('should return true', () =>
    {
        expect(true).to.be.true; //true wird erwwartet und true kommt raus. wenn to.be.false kommt Fehler, weil true ist nicht false
    });
    it('should include 4', () =>
    {
        expect([1, 2, 3, 4]).to.include(4); // die array soll 4 enthalten, ansonsten fehler
    })
});


// expect().to.exist;