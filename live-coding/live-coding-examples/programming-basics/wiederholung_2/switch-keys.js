// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.

// Expected: {"John": name, "teacher": job} 

let person = 
{
    name: "John",
    job: "Teacher"
}

const copy = (obj) =>
{
    const keyValues = Object.entries(obj); // [ [ "name", "John"], [ "job", "Teacher"] ]

    for (let i = 0; i < keyValues.length; i++)
    {
        // 1. macht aus [ "name", "John" ] - [ "John", "name" ]
        // 2. macht aus [ "job", "Teacher" ] - [ "Teacher", "job" ]
        keyValues[i].reverse();
    }

    return Object.fromEntries(keyValues); // { John: "name", Teacher: "job" } 
}

console.log(copy(person)); // { John: "name", Teacher: "job" }
