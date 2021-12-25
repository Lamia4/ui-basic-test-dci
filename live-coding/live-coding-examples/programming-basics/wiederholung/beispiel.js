
class App
{
    constructor(name, input)
    {
        this.name = name;
        this.input = input;
    }

    changeInput()
    {
        return this.input.split("").reverse().join("");
    }
}

module.exports = App;
