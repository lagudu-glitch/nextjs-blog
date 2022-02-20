import ADDButton from './Button'
//const Header = () => {
//    return (
//        <header>
//           <h1>Task Tracker</h1> 
//        </header>
//    )
//}
function Header (props) {
    const {onClick} = props;

    return(
        <header className='header'>
            <h1 style = {{ fontFamily: "Courier"}}>{props.title}</h1>
            <ADDButton color='steelblue' text='Add' onClick = {onClick}/>
        </header>
    )
} 

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header
 