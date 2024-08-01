// Navbar to go to differing parts of the site
export default function Navbar() {
  return <nav className="nav">
    <a href="/" className="site-title">Ebb'n'Flow</a>
    <ul>
      <li>
        <a href="/Quiz">Quiz</a>
        </li>
      <li>
        <a href="/Credits">Credits</a>
      </li>
    </ul>
  </nav>
}