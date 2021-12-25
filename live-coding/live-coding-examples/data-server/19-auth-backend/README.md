# Authentication

## Creating users: updating our project's controllers
- The `User` model: best schema practices
- Hashing on save:
  mongoose hooks, `UserSchema.pre('save', <hashing function>)`
- The `signup` endpoint: POSTing new users

## Logging In: updating our project's controllers
- Extending schemas with methods, creating a compare function:
  `UserSchema.methods.authenticate = <compare function>`
- The `login` endpoint: POSTing a login request
- Hiding sensitive data, removing the password when sending users:
  `UserSchema.methods.toJSON = <function>`
