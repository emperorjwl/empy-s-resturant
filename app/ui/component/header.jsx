"use client";


export default function Header() {
  

  function toggleMenu() {
    alert();
  }
  return (
    <header className="">
      <div className="site-title">
        <h1>Empy's Resturant</h1>
        <div className="menu-button">
          <i className="fa fa-bars" onClick={toggleMenu}></i>
        </div>
      </div>

      <div className="menu-item">
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Chef</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="header-action">
          <a href="">Call Now! 08035267974</a>
          <a href="" className="btn">
            Reserve a table
          </a>
        </div>
      </div>
    </header>
  );
}
