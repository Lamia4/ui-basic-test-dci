import logo from './logo.svg';
import './App.css';

function App() {
  const userList = 
  [
    {
      firstName: "Max",
      lastName: "Mustermann",
      age: 17
    },
    {
      firstName: "James",
      lastName: "Bond",
      age: 47
    },
    {
      firstName: "Michael",
      lastName: "Knight",
      age: 35
    }
  ];

  const isValid = false;

  const isAdult = (age) =>
  {
    return age > 18;
  }

  return (
    // <> </> React.Fragment> gibt uns die möglichkeit HTML elemente zu deklarieren ohne sie in eine weitere div zu verschachteln.
    <>
      <h1>JSX</h1>

      <div>

          <h2>JavaScript in JSX nutzen</h2>

          <p>Wenn wir JavaScript in JSX nutzen wollen, schreiben wir es in geschwungene klammern, oder curly braces, wichtig ist das wir dabei auf semikolons verzichten</p>

          <p>{`${ userList[0].firstName } ${ userList[0].lastName}`} is { userList[0].age } jahre alt...</p>

          <hr/>

          <h2>For loops in JSX = MAP</h2>

          <p>
            Wenn wir durch etwas loopen wollen, iun den inhalt in jsx ausgeben wollen, nutzen wir map.
            Wir gebn jedem element einen key, damit jeder eintrag eine definitive eigene nummer hat.
          </p>

          <ul>
            {
              userList.map((user, i) =>
              {
                return <li key={ i }>{ user.firstName } { user.lastName }</li>
              })
            }
          </ul>

          <hr/>

          <h2>Kommentare in JSX</h2>

          <p>Kommentare werden immer in curly braces eingeleitet, und dann im multiline oder jsdoc style geschrieben</p>

          {/* Ich bin eine Zeile lang */}

          {/*
            Ich
            bin
            mehrere
            Zeilen
            lang
          */}

          {
            // Einzeilig geht nur, wenn die schließende klammer NICHT in der selben Zeile ist, da wir sie mit auskommentieren.
          }

          {/**
           * JSDoc Style
           */}

          <hr/>

          <h2>"Conditional Rendering" .... oder: Zeige dinge nur, wenn du darfst</h2>

          <p>Conditional rendering funktioniert in react genau wie in der Dom, wir sagen "WENN" X zutrifft, zeige etwas an:</p>

          <h3>Markiere volljährige mitglieder:</h3>

          <ul>
            {
              userList.map((user, i) =>
              {
                return(
                  <li key={ i } style={{ width: 200, backgroundColor: isAdult(user.age) ? "lime" : "tomato" }}>
                    { user.firstName } { user.lastName }
                  </li>
                )
              })
            }
          </ul>

          <b>Wir können anhand von ternary operatoren ganze html bäume ein und ausblenden</b>

          <p>Entweder / Oder </p>
          {
            isValid === true ?
            (
              <div>
                <p>Über 18</p>
              </div>
            )
            :
            (
              <div>
                <p>Unter 18</p>
              </div>
            )
          }

          <b>Nur wenn der wert JA ist anzeigen:</b>

          {
            isValid && // || wird immer angezeigt  
            (
              <div>
                <p>Ich werde angezeigt!</p>
              </div>
            )
          }
      </div>
    </>
  );
}

export default App;
