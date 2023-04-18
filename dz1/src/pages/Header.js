import {NavLink} from "react-router-dom";

export default function HeaderPage(){
    return (
        <>
            <h1>Header</h1>
            <ul className='ul'>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/navbar'>Nav</NavLink>
                </li>
                <li>
                    <NavLink to='/footer'>footer</NavLink>
                </li>
                <li>
                    <NavLink to='/'>MainPage</NavLink>
                </li>
            </ul>
        </>
    )
}