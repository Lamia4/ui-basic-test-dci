// liste mit befehlen für chai: https://www.chaijs.com/api/bdd/

const expect = require('chai').expect;
const Auto = require('./../index');

const auto = new Auto();

describe("Auto();", () =>
{
    it('should return a string', () =>
    {
        expect(auto.fahren()).to.equal("Das auto fährt...");
    });
});

describe("Hallo Welt", () => {
    it('should return true', () => 
    {
        expect(true).to.be.true;
    });

    it('should include 4', () =>
    {
        expect([ 1, 2, 3 ]).to.include(4);
    });

    it('should be 10', () => 
    {
        const aufgabe = 5 + 5;

        expect(aufgabe).to.equal(10);
    });

    it('should be an array and include the number 2', () => 
    {
        const testArray = [ 2, 3, 5 ];

        expect(testArray).to.be.an('array').that.includes(2);
    });

    it('should be an array with 2 items', () =>
    {
        const newTestArray = [ 1, 2 ];

        expect(newTestArray).to.be.of.length(2);
    });

    it('should be empty', () => 
    {
        const anotherTestArray = [ "Hallo" ];

        expect(anotherTestArray).to.be.empty;
    })

    it('should floor the number', () =>
    {
        expect(Math.floor(11.5)).to.equal(11);
    });
});
