import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import API, { endpoints } from "./API";

export default class Body extends React.Component {
    constructor() {
        super()
        this.state = {
            'tourSlide': [],
            'tours': [],
            'page': []
        }
    }

    loadTour = (page="?page=1") => {
        API.get(`${endpoints['toursHome']}${page}`).then(res => {
            this.setState({
                'tours': res.data.results,
                'page': res.data.count
            })
        })
    }

    componentDidMount() {
        this.loadTour()

        API.get(endpoints['toursSlide']).then(res => {
            this.setState({
                'tourSlide': res.data
            })
        })
    }

    componentDidUpdate() {
        this.loadTour(this.props.location.search)
    }

    render() {
        let items = []
        for (let i = 0; i < Math.ceil(this.state.page/12); i++) {
            items.push(
                <Link to={"/?page=" + (i+1)} className="page-numbers">{i+1}</Link>
            )
        }
        return(
            <>
                <main className="content">
                    <div className="slider">
                    <ul className="slides">
                        {this.state.tourSlide.map(t => <TourSlide image={t.image} name={t.name} 
                                        description={t.description}/>)}
                    </ul>
                    </div>
                    <div className="fullwidth-block features-section">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="feature left-icon wow fadeInLeft" data-wow-delay=".3s">
                            <i className="icon-ticket" />
                            <h3 className="feature-title">Class aptent taciti</h3>
                            <p>Laborum expedita fugiat et quas quia! Odio dignissimos beatae aspernatur in vero culpa excepturi consequatur!</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="feature left-icon wow fadeInLeft">
                            <i className="icon-plane" />
                            <h3 className="feature-title">Class aptent taciti</h3>
                            <p>Lectetur recusandae quasi repellendus accusamus ipsa sed quibusdam officia aspernatur natus itaque, asperiores impedit numquam dolorum.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="feature left-icon wow fadeInRight">
                            <i className="icon-sun" />
                            <h3 className="feature-title">Class aptent taciti</h3>
                            <p>L culpa ex dolorum ipsa, maxime soluta repudiandae officia corrupti. Doloribus iste voluptatibus nostrum?</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="feature left-icon wow fadeInRight" data-wow-delay=".3s">
                            <i className="icon-camera" />
                            <h3 className="feature-title">Class aptent taciti</h3>
                            <p>Lam sit, facere dicta libero ipsa. Repellat deleniti dignissimos, excepturi minima voluptatibus mollitia adipisci iusto.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="fullwidth-block offers-section" data-bg-color="#f1f1f1">
                    <div className="container">
                        <h2 className="section-title">The newest holiday offers</h2>
                        <div className="row">
                            {this.state.tours.map(t => <TourHome name={t.name} image={t.image}
                                        date={t.datetime} duaration={t.duaration}
                                        available={t.available} />)}
                        </div>
                        <div className="pagination wow fadeInUp justify-content-center">
                            {items}
                        </div>
                    </div>
                    </div>
                    <div className="fullwidth-block testimonial-section">
                    <div className="container">
                        <h2 className="section-title">Custommers</h2>
                        <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="testimonial wow fadeInUp">
                            <figure className="avatar"><img src="dummy/person-1.jpg" alt="" /></figure>
                            <blockquote className="testimonial-body">
                                <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                                <cite>Jessica Tracy</cite>
                                <span>Creative agency CEO</span>
                            </blockquote>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="testimonial wow fadeInUp" data-wow-delay=".2s">
                            <figure className="avatar"><img src="dummy/person-2.jpg" alt="" /></figure>
                            <blockquote className="testimonial-body">
                                <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                                <cite>John Smith</cite>
                                <span>Traveler</span>
                            </blockquote>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="testimonial wow fadeInUp" data-wow-delay=".4s">
                            <figure className="avatar"><img src="dummy/person-3.jpg" alt="" /></figure>
                            <blockquote className="testimonial-body">
                                <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                                <cite>Susan Webb</cite>
                                <span>Hairdresser</span>
                            </blockquote>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="testimonial wow fadeInUp" data-wow-delay=".6s">
                            <figure className="avatar"><img src="dummy/person-4.jpg" alt="" /></figure>
                            <blockquote className="testimonial-body">
                                <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                                <cite>Sarah Brown</cite>
                                <span>Athlete</span>
                            </blockquote>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </main>
            </>
        )
    }
}

function TourSlide(props) {
    const backgroundStyle = {
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundAttachment: 'fixed'
    }

    return(
        <>
        <li data-backgroundImage={`url(${props.image})`} style={backgroundStyle}>
            <div className="container">
                <div className="slide-caption col-md-4">
                    <h2 className="slide-title">{props.name}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </li>
        </>
    )
}

function TourHome(props) {
    return (
        <>
        <div className="col-md-3 col-sm-6 col-xs-12">
            <article className="offer wow bounceIn">
                <figure className="featured-image img-fluid"><img src={props.image} alt={props.name} style={{width: '270px', height: '174px'}} /></figure>
                <h2 className="entry-title text-center" style={{height: '35px'}}><a>{props.name}</a></h2>
                <span style={{display: 'block'}} className="pl-3"><i className="bi bi-calendar3" style={{marginRight: '15px'}} />{props.date}</span>
                <span style={{display: 'block'}} className="pl-3"><i className="bi bi-clock-history" style={{marginRight: '15px', color: 'blue'}} />{props.duaration}</span>
                {props.available ? <span style={{display: 'block'}} className="pl-3"><i className="bi bi-check-circle" style={{marginRight: '15px', color: 'green'}}></i>Available</span> 
                                : <span style={{display: 'block'}} className="pl-3"><i className="bi bi-x-circle" style={{marginRight: '15px', color: 'red'}}></i>Unavailable</span>}
                <a href="#" className="button">See details</a>
            </article>
        </div>
        </>
    )    
}