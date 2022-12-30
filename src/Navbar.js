import logo from './epic-logo.png';
import './Navbar.css';
import SearchBar from "./SearchBar";

function Navbar() {
    return (
        <div className="Navbar">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <section className="Deliver">
                    <p className="Deliver-person">
                        Deliver to Anton
                    </p>
                    <p className="bold">
                        Irvine 92618
                    </p>
                </section>
                <SearchBar/>
            </header>
        </div>
    );
}

export default Navbar;
