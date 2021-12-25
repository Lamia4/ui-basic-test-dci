

const getTimesTwo = (value) => {

    return value * 2;

}

const getTimesFour = (value) => {
    return value * 4;
}

const buildPage = (obj) =>

    {

        const appElement = document.getElementById('app');

        appElement.innerHTML = `
    <ul>
        <li>testwert 1: ${ obj.timesTwo} </li>
        <li>testwert 2: ${ obj.timesFour } </li>
    </ul>`
    }


export {
    getTimesTwo,
    getTimesFour,

    buildPage as makePage
}