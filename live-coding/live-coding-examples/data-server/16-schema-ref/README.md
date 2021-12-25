# Planned Content

## Programmer Efficiency

### Keyboard Shortcuts VS-Code
- STRG-F12 oder F12 => Gehe zu Definition
- ALT-ARROW-[UP DOWN] => Bewege Linie
- ALT-SHIFT-ARROW-[UP DOWN] => Kopiere Zeile
- STRG-ARROW-[LEFT RIGHT] => springt zu Wortgrenzen
- STRG-SHIFT-ARROW-[LEFT RIGHT] => markiert...
- STRG-W => schließt aktuelle Datei

### Keyboard Shortcuts Terminal
- ARROWS-[UP DOWN]
- TAB
- `$> history` => zeigt Befehlsverlauf an, mit Nummern. Ausführen einer "Nummer" mit `$> !NUMMER`

## Mongoose

### Wiederholung "Relationships" und "Entity Relationship Diagram" (ER-Diagram)
- Relationship types: One to One, One to Many, Many to Many
- Charting out relations: Entity relation diagrams

### Mongoose "schema ref"
- Implementing relations in mongoDB: The mongoose `ref` schema option

### Creating Relations: updating our project's controllers
- Endpoints for multiple resources:
  creating REST endpoints for a shared resource
- Adding additional entities: the entity creation chain
- Deleting shared entities: the entity deletion chain

## Links
- Beispiele für Schema mit Referenzen:
  - Einführender Blog-Beitrag:

    https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/

  - Ausführlich bei Mongoose:

    https://mongoosejs.com/docs/populate.html

- Mongoose Middlewares:

  https://mongoosejs.com/docs/middleware.html

  - Mit `post` lässt sich ein Callback definieren, der nach Operation (bspw. `findOneAndDelete`) ausgeführt wird:
  
    https://mongoosejs.com/docs/api/schema.html#schema_Schema-post

- Mongoose `$pull` Update Operator

  https://docs.mongodb.com/manual/reference/operator/update/pull/