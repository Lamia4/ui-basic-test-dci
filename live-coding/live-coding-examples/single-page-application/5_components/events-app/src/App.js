import './App.css'
import EventsReact from './Components/EventsReact';
import EventsBookReact from './Components/EventsBookReact';
import EventsOnChangeReact from './Components/EventsOnChangeReact';

function App()
{
    return (
        <div className="App">
            <EventsReact/>

            <br/>
            <br/>

            <EventsBookReact/>

            <br/>
            <br/>

            <EventsOnChangeReact/>
        </div>
    );
}

export default App;
