import logo from '../logo.png';
import {
    Link
  } from "react-router-dom";

function NavigationBar() {
    const menuList = [
        {text: 'visos vietos', to: '/'}, 
        {text: 'apie mus', to: '/aboutus'}, 
        {text: 'paslaugos', to: '/services'}, 
        {text: 'straipsniai & top list\'ai', to: '/articles'}, 
        {text: 'maršrutai', to: '/itineraries'}, 
        {text: 'kontaktai', to: '/contacts'}
    ]
    return (
      <div className="nav">
        <img src={logo} alt="logo" />
        <nav className="menu">
            {menuList.map(text => <Link className="menu-text" to={text.to} key={text.text}>{text.text}</Link>)}
        </nav>
      </div>
    );
  }
  
  export default NavigationBar;