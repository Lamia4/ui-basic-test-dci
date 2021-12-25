/**
 *       | Promise                             | Async/Await                          |
 *       |-------------------------------------|--------------------------------------|
 * Scope | nur der promise chain ist asynchron | die komplette funktion ist asynchron |
 * Logik | mehrere promises mit Promise.all(); | Mehrere promises mit variablen       | 
 */

const users = 
[
    {
        firstName: "Max",
        lastName: "Mustermann",
        age: 25
    },
    {
        firstName: "James",
        lastName: "Bond",
        age: 43
    }
];

const getUsers = () => 
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            resolve(users);
        }, 3000);
    });
}

const addUser = (user) =>
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            users.push(user);

            resolve(user);
        }, 2000);
    });
}

const runUserDB = async() => 
{
    const newUser = await addUser({ firstName: "Michael", lastName: "Knight", age: 35 });
    const allUsers = await getUsers();

    console.log("Added:", newUser);
    console.log(allUsers);
    
    console.log("Beende verbindung zur datenbank...");
}

console.log("Verbinde zur datenbank...");
runUserDB();
