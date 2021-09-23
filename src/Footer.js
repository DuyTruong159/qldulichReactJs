import logo from './images/logo-footer.png'

export default function Footer() {
    return(
        <>
            <footer className="site-footer wow fadeInUp">
                <div className="footer-top">
                <div className="container">
                    <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="widget">
                        <h3 className="widget-title">About us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus animi asperiores magnam ducimus laboriosam soluta, odio doloribus, voluptas numquam facilis consectetur nam in repudiandae commodi odit iste sed doloremque repellat.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="widget">
                        <h3 className="widget-title">Helpful Links</h3>
                        <ul className="list-arrow">
                            <li><a href="#">Labore et dolore magnam</a></li>
                            <li><a href="#">Dolore magnam</a></li>
                            <li><a href="#">Magnam Labore et</a></li>
                            <li><a href="#">Dolore mabore magnam</a></li>
                            <li><a href="#">Et dolore magnam</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="widget">
                        <h3 className="widget-title">Helpful Links</h3>
                        <ul className="list-arrow">
                            <li><a href="#">Labore et dolore magnam</a></li>
                            <li><a href="#">Dolore magnam</a></li>
                            <li><a href="#">Magnam Labore et</a></li>
                            <li><a href="#">Dolore mabore magnam</a></li>
                            <li><a href="#">Et dolore magnam</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="widget widget-customer-info">
                        <h3 className="widget-title">Customer Service</h3>
                        <div className="cs-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptates pariatur vero.</p>
                            <p>+1 421 458 321 <br /> <a href="mailto:cs@companyname.com">pj@ou.edu.vn</a></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="footer-bottom">
                <div className="container">
                    <div className="branding pull-left">
                    <img src={logo} alt="Company Name" class="logo"/>
                    <h1 className="site-title"><a>My Tour</a></h1>
                    <small className="site-description">Travel Relax</small>
                    </div>
                    <div className="contact-links pull-right">
                    <a href="https://goo.gl/maps/oQKxg"><i className="fa fa-map-marker" /> Võ Văn Tần, Gò Vấp</a>
                    <a href="tel:+134453455345"><i className="fa fa-phone" /> +1 344 5345 5345</a>
                    <a href="mailto:contact@companyname.com"><i className="fa fa-envelope" /> pj@ou.edu.vn</a>
                    </div>
                </div>
                </div>
                <div className="colophon">
                <div className="container">
                    <p className="copy">Copyright 2021 My Tour, Designed by DTR, All right reserved.</p>
                </div>
                </div>
            </footer>
        </>
    )
}