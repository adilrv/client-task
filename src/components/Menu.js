import { Link } from "react-router-dom";

const Menu=()=>{
    return(
        <>
        <menu>
            <nav>
                <ul>
                <Link to='/home'>
                <li>Home</li>
                    </Link>
                  
                    <Link to='/about'>
                    <li>About</li>
                    </Link>
                    <Link to='/works'>
                <li>Portfolio</li>
                    </Link>
                    <Link to='/connect'>
                <li>Call us</li>
                    </Link>
                </ul>
            </nav>
        </menu>
      
        </>
    )
}
export default Menu;