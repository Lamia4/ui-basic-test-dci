
const menu = [
    {
        name: "Cola",
        type: "drink",
        price: 2
    },
    {
        name: "Kaffee",
        type: "drink",
        price: 2
    },
]
const orders = [];

addOrder = (order) =>
{
    if (menu.filter(eintrag => eintrag.name == order).length)
    {
        orders.push(order)
        console.log("Bestellung aufgenommen!");
    }
    else
    {
        console.log(`${ order } haben wir leider nicht im Angebot.`);
    }
}

addOrder("Käse");
console.log(orders);

if(false)
{
    console.log(0, false);
}
else if(true)
{
    console.log(1, true);
}
if(true)
{
    console.log(2, true);
}
