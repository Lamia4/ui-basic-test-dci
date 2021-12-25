
/** 
 * im vergleich sind also die unterschiede zwischen diesen beiden for-loops folgende:
 * 
 * | benutzbar für | for/in | for/of  |
 * | Objekte       | ja     | nein    |
 * | Arrays        | ja     | ja      |
 * | Strings       | ja     | ja      |
 * 
*/

const books =
[
    // 0
    {
        author: 'Arthur Conan Doyle', 
        title: 'Sherlock Holmes' 
    },

    // 1
    {
        author: 'Ian Flemming', 
        title: 'Casino Royale' 
    },

    // 2
    {
        author: 'J. R. R. Tolkien', 
        title: 'Der Hobbit' 
    }
];

books.forEach((book, i) =>
{
    // book: { author: 'Arthur Conan Doyle', title: 'Sherlock Holmes' }
    console.log(`Book ${ i } = Author: ${ book["author"] } - Title: ${ book.title }`);
});

console.log(books[0]);

console.log("=".repeat(50));

// Ein etwas erweiterteres Beispiel:
const users =
[
    // 0
    {
        id: 0,
        firstName: "Max",
        lastName: "Mustermann",
        roles:
        {
            admin: true,
            moderator: false
        },
        email:
        [
            "max@example.com"
        ]
    },

    // 1
    {
        id: 1,
        firstName: "James",
        lastName: "Bond",
        roles:
        {
            admin: false,
            moderator: true
        },
        email: []
    },

    // 2
    {
        id: 2,
        firstName: "Michael",
        lastName: "Knight",
        roles:
        {
            admin: false,
            moderator: true
        },
        email:
        [
            "knight@foundation.com",
            "kitt@knight-industries.org"
        ]
    }
];

users.forEach((user, i) =>
{
    console.log(`\n${ user.firstName } (${ user.id })`);
    // console.log("- Email: " + user.email[0]);

    for (let i = 0; i < user.email.length; i++)
    {
        console.log("- Email: " + user.email[i]);
    }

    for (const role in user.roles)
    {
        console.log(role, user.roles[role]);
    }
});
