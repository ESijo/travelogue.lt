import logo from '../logo.png';

function NavigationBar() {
    const menuList = ['visos vietos', 'apie mus', 'paslaugos', 'straipsniai & top list\'ai', 'maršrutai', 'kontaktai']
    return (
      <div className="nav">
        <img src={logo} alt="logo" />
        <nav className="menu">
            {menuList.map(text => <p key={text}>{text}</p>)}
        </nav>
      </div>
    );
  }
  
  export default NavigationBar;