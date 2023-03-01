import '../styles/etc/nav.component.css';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">

                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarCenteredExample"
                >
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link colored-link" href="#hero">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link colored-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link colored-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link colored-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}