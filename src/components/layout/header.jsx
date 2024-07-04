import { Link } from "react-router-dom"

const header = () => {
  return (
    <header className="navbar2 navbar-sm bg-color3">
        <div className="siteTitle fontSize-xl fontWeight-lg font-secondary">
            Macklib
        </div>
        <nav className="navbar-row fontSize-md">
                <Link className="fontWeight-lg" to="/colors">Colors</Link>
                <Link className="fontWeight-lg" to="/fonts">Fonts</Link>
                <Link className="fontWeight-lg" to="/paletes">Paletes</Link>
                <Link className="fontWeight-lg" to="/library">Library</Link>
        </nav>
    </header>
  )
}

export default header