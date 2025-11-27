
// arrow function is like normal functions
const Nav = props => {
    return (
        <nav className="main-nav">
            <ul>
                <li>{props.home}</li>
                <li>{props.articles}</li>
                <li>{props.about}</li>
                <li>{props.contact}</li>
            </ul>
        </nav>
    )
}

export default Nav;