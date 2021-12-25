import './Message.css';

const Message = (props) =>
{
    console.log(props);

    if(!props.isVisible)
    {
        return null;
    }

    return(
        <div className={`Message ${ props.status }`}>
            <p>{ props.children ? props.children : "No Message" }</p>
        </div>
    )
}

export default Message;
