function Message(props) {
    return (
    <div className = "message-row" style={{flexDirection: props.isUser ? "row-reverse" : "row"}}>
        <div className="message">
            <div className="message-name">{props.user}</div>
            <span>{props.text}</span>
        </div> 
    </div>)
}
export default Message