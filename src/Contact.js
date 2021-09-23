export default function Contact() {
    return(
        <>
        <main className="content">
            <div className="fullwidth-block">
            <div className="container">
                <div className="row">
                <div className="col-md-4 wow fadeInLeft">
                    <h4>Company Name</h4>
                    <ul className="list-fa">
                    <li><i className="fa fa-map-marker" /> 983 Avenue Street, New York</li>
                    <li><i className="fa fa-phone" /> +03934343453</li>
                    <li><i className="fa fa-envelope" />contact@companyname.com</li>
                    </ul>
                    <form action="#" className="contact-form">
                    <input type="text" placeholder="Your Name..." />
                    <input type="text" placeholder="Company Name..." />
                    <input type="text" placeholder="Email" />
                    <textarea name id placeholder="Message..." defaultValue={""} />
                    <input type="submit" className="button" defaultValue="Send Message" />
                    </form>
                </div>
                <div className="col-md-7 col-md-push-1 wow fadeInRight">
                    <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3029.2188753874375!2d-73.9617075!3d40.6029943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244f289a17b03%3A0x5108f35e55b5aa3c!2s983+Avenue+S%2C+Brooklyn%2C+NY+11223%2C+Amerika+Serikat!5e0!3m2!1sid!2sid!4v1411068708925" width={600} height={520} frameBorder={0} style={{border: 0}} />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>
        </>
    )
}