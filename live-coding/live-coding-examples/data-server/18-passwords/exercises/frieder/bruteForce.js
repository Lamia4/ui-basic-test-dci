import fs from 'fs';

const users = JSON.parse(
	fs.readFileSync('../../live/data/20-users-sha256-bob-changed-password.json', 'utf-8')
);

const table = fs.readFileSync('./hash.table', 'utf-8').split('\n');
for (const i in table) {
    table[i] = table[i].split(' ');
}

const check = users.bob.sha256;

const result = table.find(i => {
    if (i[1] == check) return i
});

console.log(result);