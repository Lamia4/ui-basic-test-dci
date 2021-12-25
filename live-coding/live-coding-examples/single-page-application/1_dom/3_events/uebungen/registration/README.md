# Registration Form

Go through and use the existing form setup to create a 3 Phase/Part Registration that displays all user entries, as represented below. By the default the first form is shown and the rest are hidden;

1. Using the `checkValidity()` method, write a function that checks if the requirement for every input field has been met. e.g

```javascript
let checkNationality = document
  .getElementsByName('nationality')[0]
  .checkValidity();
```

<br>

2. `alert()` the user if they haven't. Upon completion, the next phase should be displayed and the previous hidden.

3. Write a function `showData()` that shows all user data upon successful completion of the form.

> Hint: Refer to [MDN](https://developer.mozilla.org/en-US/ 'MDN Homepage')
> & the representation below, for an idea of what your result should look like.

![demo](https://raw.githubusercontent.com/DigitalCareerInstitute/Browser-RegistrationForm/solution/demo.gif?token=AADYJNSGSN6IU64GMVTCFL3ANQDX6)