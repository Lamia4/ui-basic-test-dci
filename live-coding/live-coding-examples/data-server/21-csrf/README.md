# Stateless HTTP and CSRF

## Ausflug Alexander-Technik

## Introduction: State and the server - Stateless HTTP
- state of the authentication ("logged in")

## CSRF
- Cross Site Request Forgery (CSRF): Dealing with intruders
- CSRF tokens as solution: Implementing csurf in form templates

  ### Links
  - [Cross-Site-Request-Forgery (DEU)](https://de.wikipedia.org/wiki/Cross-Site-Request-Forgery)
  - [Cross-site request forgery (ENG)](https://en.wikipedia.org/wiki/Cross-site_request_forgery)

  - [Understanding CSRF (ENG)](https://github.com/pillarjs/understanding-csrf)

  - [HTTP Cookies (MDN; ENG)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) (sehr zu empfehlen)

  - [Double Submit Cookie (by OWASP; ENG)](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#double-submit-cookie)

  - #### Implementation
    - [Node-Module "csurf" (ENG)](https://www.npmjs.com/package/csurf)
    - [Handlebars](https://www.npmjs.com/package/express-handlebars)
