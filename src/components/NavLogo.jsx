import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const NavLogo = () => {
  return (
    <div >
       <Link to="/">
          <img
            className="inline-block"
            src={logo}
            alt="logo"
            height={35}
            width={35}
          />
        </Link>
    </div>
  )
}

export default NavLogo
