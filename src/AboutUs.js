import person1 from './images/person-team-1.jpg'
import person2 from './images/person-team-2.jpg'
import person3 from './images/person-team-3.jpg'
import person4 from './images/person-team-4.jpg'

export default function AboutUs() {
    return (
        <>
        <main className="content">
            <div className="fullwidth-block">
            <div className="container">
                <div className="row">
                <div className="col-md-7 wow fadeInLeft">
                    <h2 className="section-title">Our History</h2>
                    <p>Amazing Spider-Man is the cornerstone of the Marvel Universe. Earths Mightiest Heroes reunite with their biggest guns at the forefront to take on familiar enemies and new threats alike. The Avengers return. Looking for the one superhero comic you just have to read.</p>
                    <p>Iron Man, Thor, Captain America and the rest of Earths Mightiest Heroes unite to stand against the threats none can face alone. See the Avengers go up against Ultron, Kang, the Masters of Evil and more over three decades of epic action. This is where youll find all the big-time action, major storylines and iconic Spider-Man magic youd come to expect from the Wall-Crawler. Meet all of Spideys deadly enemies, from the Green Goblin and Doctor Octopus to Venom and Carnage, plus see Peter Parker fall in love, face tragedy and triumph, and learn that with great power comes great responsibility.</p>
                    <p>Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. Avengers Assemble. Featuring the work of Kurt Busiek, George Perez and other quintessential Avengers creators. Earths Mightiest Heroes reunite with their biggest guns at the forefront to take on familiar enemies and new threats alike.</p>
                </div>
                <div className="col-md-4 col-md-push-1 wow fadeInRight">
                    <h2 className="section-title">Principle</h2>
                    <a href="#" className="boxed-link">Proin placeat condinemtum nulla</a>
                    <a href="#" className="boxed-link">Gamma bomb explosion while trying</a>
                    <a href="#" className="boxed-link">Perez and other quintessential</a>
                    <a href="#" className="boxed-link">Take on familiar enemies</a>
                    <a href="#" className="boxed-link">Avengers go up against Ultron</a>
                </div>
                </div>
            </div>
            </div>
            <div className="fullwidth-block" data-bg-color="#f1f1f1">
            <div className="container">
                <h2 className="section-title">Our Team</h2>
                <div className="row">
                <div className="col-md-6">
                    <div className="team wow fadeInRight">
                    <figure className="team-image">
                        <img src={person1} alt="" />
                    </figure>
                    <h2 className="team-name">Christian Brown</h2>
                    <small className="team-title">CEO</small>
                    <p>A gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. Avengers Assemble</p>
                    </div>
                    <div className="team wow fadeInRight">
                    <figure className="team-image">
                        <img src={person2} alt="" />
                    </figure>
                    <h2 className="team-name">Sarah Smith</h2>
                    <small className="team-title">PR Specialist</small>
                    <p>A gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. Avengers Assemble</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="team wow fadeInRight" data-wow-delay=".4s">
                    <figure className="team-image">
                        <img src={person3} alt="" />
                    </figure>
                    <h2 className="team-name">Steven Blumkin</h2>
                    <small className="team-title">Director</small>
                    <p>A gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. Avengers Assemble</p>
                    </div>
                    <div className="team wow fadeInRight" data-wow-delay=".4s">
                    <figure className="team-image">
                        <img src={person4} alt="" />
                    </figure>
                    <h2 className="team-name">Jessica Webb</h2>
                    <small className="team-title">Consumer Service</small>
                    <p>A gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. Avengers Assemble</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="fullwidth-block">
            <div className="container">
                <div className="row">
                <div className="col-md-4 wow fadeInUp">
                    <h2 className="section-title">The Best Travels</h2>
                    <p>Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk.</p> 
                    <p>Avengers Assemble. Featuring the work of Kurt Busiek, George Perez and other quintessential Avengers creators. Earths Mightiest Heroes reunite with their biggest guns at the forefront</p> 
                </div>
                <div className="col-md-4 wow fadeInUp" data-wow-delay=".2s">
                    <h2 className="section-title">How does it work?</h2>
                    <ol className="circle-list">
                    <li>Transformed into the incredibly powerful creature called the Hulk</li>
                    <li>A gamma bomb explosion while trying to save the life of a teenager</li>
                    <li>Featuring the work of Kurt Busiek, George Perez and other quintessential</li>
                    </ol>
                </div>
                <div className="col-md-4 wow fadeInUp" data-wow-delay=".4s">
                    <h2 className="section-title">Public relation</h2>
                    <a href="#" className="boxed-link">Proin placeat condinemtum nulla</a>
                    <a href="#" className="boxed-link">Perez and other quintessential</a>
                    <a href="#" className="boxed-link">Gamma bomb explosion while trying</a>
                    <a href="#" className="boxed-link">Perez and other quintessential</a>
                </div>
                </div>
            </div>
            </div>
        </main>
        </>
    )
}