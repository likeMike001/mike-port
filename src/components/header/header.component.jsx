




function onAbout(){

}
function onProject(){

}

function onContact(){

}
const Header = () => {
  return (
    <div>
    {/* <h1>This is the header component.</h1> */}

    <button onClick={onAbout}>About</button>
    <button onClick = {onProject}>Projects </button>
    <button onClick={onContact}> Contact Me</button>

    </div>
  )
}

export default Header
