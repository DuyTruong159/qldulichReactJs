import { Link } from 'react-router-dom';
import logo from './images/logo.png' 

export default function Headers() {
    return(
        <>
        <header className="site-header wow fadeInDown">
            <div className="container">
                <div className="header-content" style={{height: '110px'}}>
                    <div className="branding">
                        <img src={logo} alt="Company Name" class="logo mr-0" />
                        <h1 className="site-title"><Link to = "/">My Tour</Link></h1>
                        <small className="site-description">Travel Relax</small>
                    </div>
                    <nav className="main-navigation" style={{width: '75%'}}> 
                        <button type="button" className="menu-toggle"><i className="fa fa-bars" /></button>
                        <ul className="menu">
                            <li className="menu-item"><Link to = "/tour">Tour</Link></li>
                            <li className="menu-item"><Link to = "/customer_protect">Customer Protection</Link></li>
                            <li className="menu-item"><Link to = "/contact">Contact</Link></li>
                            <li className="menu-item"><Link to = "/about_us">About Us</Link></li>
                            <li className="menu-item float-right"><a style={{paddingBottom: '0px'}}><i className="fa fa-sign-in pr-2" />Login</a></li>
                            <li className="menu-item float-right"><a style={{paddingBottom: '0px'}}><i className="fa fa-pencil-square-o pr-2" />Register</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        </>
    );
}