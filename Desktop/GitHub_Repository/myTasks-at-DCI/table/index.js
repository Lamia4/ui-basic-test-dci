const Table = require('./table');

const columns = 
[
    {
        key: 'id',
        title: 'ID',
        width: 10
    },
    {
        key: 'name',
        title: 'Name',
        width: 25
    },
    {
        key: 'role',
        title: 'Role',
        width: 50
    }
];

const rows =
[
    {
        id: 1,
        name: 'Zeynep',
        role: 'Admin'
    },
    {
        id: 2,
        name: 'Katerina',
        role: 'Moderator'
    },
    {
        id: 3,
        name: 'Rigina',
        role: 'Moderator'
    }
]

const table = new Table ({
    title: "Eine Tabelle",
    width: 150,
    columns: columns,
    rows: rows
});

table.showTable();
