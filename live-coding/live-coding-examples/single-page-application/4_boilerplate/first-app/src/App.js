import logo from './logo.svg';
import './App.css';

function App()
{
    const testArray = [1, 2, 3, 4, 5];
    const isValid = false;
    
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and { "HALLOOOOOOO".toLowerCase() } save!
                </p>

                {
                    testArray.map((entry, i) =>
                    {
                        return <p key={ i }>{ entry }</p>
                    })
                }

                <div
                    style={{ backgroundColor: isValid ? "lime" : "tomato" }}
                    className={ isValid ? "success" : "fail" }
                >
                    <p>{ isValid ? "eingeloggt" : "nicht eingeloggt" }</p>
                </div>
          </header>
      </div>
  );
}

export default App;
