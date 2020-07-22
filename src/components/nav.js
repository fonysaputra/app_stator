function Nav({ head }) {
  return (
    <div className=" container">
      <div className="cst-nav  mx-auto">
        <ul className="nav justify-content-center">
          <li className={head === 'home' ? 'nav-item active' : 'nav-item'}>
            <a className="nav-link " href="/home">
              Home
            </a>
          </li>
          <li className={head === 'bia' ? 'nav-item active' : 'nav-item'}>
            <a className="nav-link" href="/bia">
              BIA
            </a>
          </li>
          <li className={head === 'bmi' ? 'nav-item active' : 'nav-item'}>
            <a className="nav-link" href="/bmi">
              BMI
            </a>
          </li>
          <li className={head === 'about' ? 'nav-item active' : 'nav-item'}>
            <a className="nav-link " href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/login">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
