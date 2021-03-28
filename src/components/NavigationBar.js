import logo from '../logo.png';
import {
    Link
  } from "react-router-dom";

function NavigationBar() {
    const menuList = [
        {text: 'visos vietos', to: '/'}, 
        {text: 'apie mus', to: '/'}, 
        {text: 'paslaugos', to: '/'}, 
        {text: 'straipsniai & top list\'ai', to: '/'}, 
        {text: 'maršrutai', to: '/'}, 
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