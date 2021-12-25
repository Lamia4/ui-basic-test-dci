# Readme

Diese Seite wird das Ziel eines "Cross Site"-Angriffs, bekannt als "Cross Site Request Forgery" (CSRF).

ENG: This site will be targeted by a cross site attack commonly known as "cross site request forgery" (CSRF).

## The Attack

## Gegenmaßnahmen (engl. "_Counter Measures_")

### Serverseitig: Check Referrer Header

- unter Client-Kontrolle => kann gefälscht werden

### "Sychronizer Token Pattern"

Der Webserver versieht jeden Request, der vom Client gestellt werden wird, mit einem für diesen Request individuellen Token.

Dieser Token wird für `POST`, `PUT`, `DELETE` Requests in das HTML-Formular eingebettet, etwa:
```HTML
<input type="hidden" name="csrf-request-token" value="INDIVIDUAL_REQUEST_TOKEN_VALUE \>`
```
oder ist Teil des Links bei `GET` Requests:
```HTML
`<a href="[...]?csrf-request-token=INDIVIDUAL_REQUEST_TOKEN_VALUE`
```

### Header mit Cookie-Wert (engl. "_cookie-to-header token_")

  Client-seitiges Javascript kann nur auf Cookies zugreifen, die vom selben Webserver gesetzt wurden, von dem das zugreifende JavaScript stammt.

  Diese Eigenschaft wird genutzt, um Requests, wie im "Synchronizer Token Pattern" auszustatten. Das Hinzufügen erfolgt bloß nicht bereits Server-seitig, sondern Client-seitig.

  Das CSRF-Token sollte einzigartig und nicht vorhersehbar sein. Um ein solches Token zu generieren, kann es bspw. aus dem Session-Token und einem anwendungsabhängigen Geheimnis abgeleitet werden (`csrf_token = HMAC(session_token, application_secret)`).

### Double Submit CSRF-Token (Live)

  Der Cookie-Wert wird als CSRF-Token mit dem jeweiligen Request (URL, body) gesendet. Der Server vergleicht diese beiden Werte und kann unterscheiden, ob die Werte übereinstimmen. Setzt voraus, dass der Angreifer keinen Zugriff auf den Cookie hat.

### Absichern von Cookies
  Der Zugriff auf Cookies kann mit Hilfe zusätzlicher Cookie-Attribute konfiguriert werden. Die Effektivität ist von der Implementierung des jeweils eingesetzten Browsers abhängig. Relevante Cookie-Eigenschaften:

#### __`Secure`__

  Der Cookie wird nur über eine verschlüsselte Verbindung übertragen (`https`)

#### `HttpOnly`

  Der Cookie wird nur über HTTP zur Verfügung gestellt, `HttpOnly` verhindert den Zugriff durch Javascript.

#### __`Domain`__

  Wenn keine Domain angegeben ist, wird der Cookie nur an den ursprünglichen Server gesendet. Wird hingegen eine Domain angegeben (bspw. `mozilla.org`), dann wird der Cookie auch an Subdomains (bspw. `developer.mozilla.org`) gesendet.

#### `Path`

  Ist die `Path`-Eigenschaft eines Cookies gesetzt, so wird dieser nur bei Requests auf URL deren Path diesen `Path` enthält mitgeschickt. Beispielsweise passt die Angabe von `Path=/docs` auf:
  - `/docs`
  - `/docs/Web`
  - `/docs/Web/HTTP`

#### __`SameSite`__ := {`Strict`, `Lax`, `None`}, default: `Lax`
  - __`Strict`__: Der Cookie wird nur an den ausstellenden Server gesendet.
  - `Lax` (default): Der Cookie wird gesendet, wenn ein Nutzer zur Cookie-ausstellenden Seite navigiert, also von außerhalb kommt.
  - `None`: Der Cookie wird immer gesendet, `None` funktionert aber nur in Verbindung mit `Secure`.

Beispiel HTTP-Header für ein Cookie mit `HttpOnly` und `Secure` Eigenschaften:
```HTTP
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

#### Cookie Prefixes
Cookies können Prefixe in ihrem Namen haben (siehe [HTTP Cookies (MDN; ENG)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies))

## Links
  - [Cross-Site-Request-Forgery (DEU)](https://de.wikipedia.org/wiki/Cross-Site-Request-Forgery)
  - [Cross-site request forgery (ENG)](https://en.wikipedia.org/wiki/Cross-site_request_forgery)

  - [Understanding CSRF (ENG)](https://github.com/pillarjs/understanding-csrf)

  - [HTTP Cookies (MDN; ENG)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) (sehr zu empfehlen)

  - [Double Submit Cookie (by OWASP; ENG)](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#double-submit-cookie)

  - ### Implementation
    - [Node-Module "csurf" (ENG)](https://www.npmjs.com/package/csurf)
    - [Handlebars](https://www.npmjs.com/package/express-handlebars)
