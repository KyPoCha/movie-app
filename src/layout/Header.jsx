function Header(){
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-movies">Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="!#">
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;