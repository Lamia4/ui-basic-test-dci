# Passwords

Von Plaintext über Hash zu _Salt_ und _Pepper_.

## Introduction: Authentication and Access control
Encryption: creating a library wrapper around `bcrypt`
- Encryption intro: hashing and salting
- Hashing: `bcrypt.hashSync(<plain text>, <salt rounds>)`
- Salting: salt rounds and performance
- Comparing: `await bcrypt.compareSync(<plain text>, <hash>)`

## Links
- Passwort
  - [Passwort (DEU)](https://de.wikipedia.org/wiki/Passwort)
  - [Password (ENG)](https://en.wikipedia.org/wiki/Password)
- Hash
  - [Hash Function (ENG)](https://en.wikipedia.org/wiki/Hash_function)
  - [Hashfunktion (DEU)](https://de.wikipedia.org/wiki/Hashfunktion)
  - [SHA-2 (DEU)](https://de.wikipedia.org/wiki/SHA-2)
  - [SHA-2 (ENG)](https://en.wikipedia.org/wiki/SHA-2)
  - [bcrypt](https://de.wikipedia.org/wiki/Bcrypt)
  - [node: bcrypt](https://www.npmjs.com/package/bcrypt)
- Salt
  - [Salt (DEU)](https://de.wikipedia.org/wiki/Salt_(Kryptologie))
  - [Salt (ENG)](https://en.wikipedia.org/wiki/Salt_(cryptography))
- Pepper
  - [Pepper (ENG)](https://en.wikipedia.org/wiki/Pepper_%28cryptography%29)
