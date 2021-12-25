import './Page.css';
import { Message } from './../';

const Page = () =>
{
    function handleClick(event)
    {
        console.log("Ich wurde angeklickt!");
    }

    return(
        <main className="Page">
            <p>
                Unser Inhalt...
            </p>

            <Message isVisible={ true } status="success">Unsere erste Nachricht</Message>
            <Message isVisible={ false } status="failure">Unsere zweite Nachricht</Message>
            <Message isVisible={ true } status="success">Unsere dritte Nachricht</Message>
            <Message isVisible={ false }>
                <i>Unsere vierte Nachricht</i>
            </Message>
            <Message isVisible={ true } status="failure">
                <b>Unsere fünfte Nachricht</b>
            </Message>

            {/* In JSX wird das C von onclick groß geschrieben */}
            <button onClick={ handleClick }>
                Sag etwas in der Konsole!
            </button>
        </main>
    )
}

export default Page;
