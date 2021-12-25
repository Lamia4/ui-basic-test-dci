# Forms

## Links

   React Forms

   https://reactjs.org/docs/forms.html

   Class Component

   https://www.digitalocean.com/community/tutorials/react-class-components


# Forms Intro
- onChange
- onReset
- onSubmit
- Propagation to parent via state

## Controlled Components

Nutze "state variables" und verknüpfe diese via "onChange", "onReset" und "onSubmit" mit dem Formular.

## Text

## Handling Multiple Inputs

Um den State zu speichern wird ein Object verwendet. Der "onChange"-handler **muss** das Objekt klonen und dann die zugehörige "setState"-Funktion damit aufrufen, - `setState(clonedObject)`. Diese Konstruktion erlaubt einen zentralen "onChange"-Handler, um auf die verschiedenen onChange-Events innerhalb des Formulars zu reagieren, und dabei die jeweilige Quelle zu berücksichtigen.

## Controlled Input Null Value

"Specifying the value prop on a controlled component prevents the user from changing the input unless you desire so. If you’ve specified a value but the input is still editable, you may have accidentally set value to undefined or null."
