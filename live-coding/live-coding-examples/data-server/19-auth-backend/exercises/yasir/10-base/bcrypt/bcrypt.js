import bcrypt from 'bcrypt';
const saltRounds = 12;
const txtprefix = "prefix";

function hashStrSync(txtSaf) {
return bcrypt.hashSync(`${txtprefix}${txtSaf}`, saltRounds);
}

function compareStrSync(txtSaf, txtHashli) {
    return bcrypt.compareSync(`${txtprefix}${txtSaf}`,txtHashli);
}

export default {hashStrSync, compareStrSync};