const expect = require('chai').expect;

function unsereFunktion()
{
    return "Hallo funktion";
}

describe('UnserCode', () =>
{
    it('should exist', () => 
    {
        expect(unsereFunktion()).to.exist;
    });

    it('should return a string', () =>
    {
        expect(unsereFunktion()).to.be.a('string');
    });
});
