export function ADDButton (props) {
    return(
        <button
        onClick={props.onClick} 
        style = {{ backgroundColor: props.color}} 
        className ='btn'
        >
            {props.text}
        </button>
    );
}
ADDButton.defaultProps = {
    color: 'black',
    text: 'Add'
}  


export default ADDButton;