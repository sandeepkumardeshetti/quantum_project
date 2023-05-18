import './submenu.css'
import {Link} from 'react-router-dom'
export const SubMenu = () => {
  return (
    <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <Link to="/retroMarkProducts" className='sub_menu_item_text' >ThermoPlastic Road Marking </Link>
        </li>
        <li className="nav__submenu-item ">
          <Link to="/glassBeads" >Glass Beads/ Retro Primer</Link>
        </li>
        <li className="nav__submenu-item ">
          <a>Cold Plastic Marking</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Machinery</a>
        </li>
      </ul>
  )
}