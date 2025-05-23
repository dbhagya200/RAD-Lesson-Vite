import './Navbar.css';

export function Navbar(){
    return (
       <section className='nav'>
        <div>
            <nav className='navbar'>
                <div className='logo'>
                    <img src="./src/assets/react.svg" alt="" />
                </div>
                <div className='menu'>
                <ul className='list'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
       </section>
    )
}