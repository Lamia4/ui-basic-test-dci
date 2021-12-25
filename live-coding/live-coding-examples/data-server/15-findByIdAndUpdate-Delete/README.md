# Planned Content

## Update: Docker-Compose `mongo-express`
Now working => Underlying Fix and Demo

## Refactoring: `seed.js`
Refactoring of `seed.js` to use `mongoose` instead of `mongoclient`.

Reason:
- facilitates the use of functionality as provided by models.

## Mongoose

### Update & Delete: updating our project's controllers
- Updating a document: `await <model name>.findByIdAndUpdate(id, <data>);`

  https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndUpdate

- Getting back the updated document: The `new` update option
- Ensuring schema validation: The `runValidators` update option

  Can be configured either:
  - via a configuration-object (`{ new: true }`) as parameter
  - or for the whole database-connection (`mongoose.set('returnOriginal', false);`).

- Removing a document: `await <model name>.findByIdAndRemove(id);`

  https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndDelete

### Introduction: Relational vs. Non Relational

### Schema design principles II:
- Relationship types: One to One, One to Many, Many to Many
- Charting out relations: Entity relation diagrams
- Implementing relations in mongoDB: The mongoose `ref` schema option

### Creating Relations: updating our project's controllers
- Endpoints for multiple resources:
  creating REST endpoints for a shared resource
- Adding additional entities: the entity creation chain
- Deleting shared entities: the entity deletion chain

https://mongoosejs.com/docs/populate.html
modelInstance.populate(attributeName);