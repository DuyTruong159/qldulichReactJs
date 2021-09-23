import React, { useEffect, useState } from "react"
import { Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import API, { endpoints } from "./API"

export default class Tour extends React.Component {
    constructor() {
        super()
        this.state = {
            'tour': [],
            'page': 0
        }
    }

    loadTour = (page="?page=1") => {
        API.get(`${endpoints['toursHome']}${page}`).then(res => {
            console.info(res)
            this.setState({
                'tour': res.data.results,
                'page': res.data.count
            })
        })
    }
    componentDidMount() {
        this.loadTour()
    }

    componentDidUpdate() {
        this.loadTour(this.props.location.search)
    }

    render() {
        let items = []
        for (let i = 0; i < Math.ceil(this.state.page/12); i++) {
            items.push(
                <Link to={"/tour?page=" + (i+1)} className="page-numbers">{i+1}</Link>
            )
        }
        return(
            <>
            <main className="content">
                <div className="fullwidth-block">
                    <div className="container">
                        <div className="filter-links filterable-nav">
                            <select className="mobile-filter">
                                <option value=".south-america">South America</option>
                                <option value=".asia">Asia</option>
                                <option value=".africa">Africa</option>
                                <option value=".north-america">North America</option>
                                <option value=".europe">Europe</option>
                                <option value=".australia">Australia</option>	
                            </select>
                            <a href="#" className="wow fadeInRight" data-wow-delay=".2s" data-filter=".south-america">Boat</a>
                            <a href="#" className="wow fadeInRight" data-wow-delay=".4s" data-filter=".asia">Mountain</a>
                            <a href="#" className="wow fadeInRight" data-wow-delay=".6s" data-filter=".africa">Africa</a>
                            <a href="#" className="wow fadeInRight" data-wow-delay=".8s" data-filter=".north-america">North America</a>
                            <a href="#" className="wow fadeInRight" data-wow-delay="1s" data-filter=".europe">Europe</a>
                            <a href="#" className="wow fadeInRight" data-wow-delay="1.2s" data-filter=".australia">Australia</a>
                        </div>
                        <div className="filterable-items">
                            <Row xs={1} md={3}> 
                            {this.state.tour.map(t => <TourItem image={t.image} name={t.name} description={t.description}
                                                        adultP={t.seats[0].price} adultT={t.seats[0].name}
                                                        childP={t.seats[1].price} childT={t.seats[1].name}/>)}
                            </Row>
                        </div>
                    </div>
                    <div className="pagination wow fadeInUp justify-content-center">
                            {items}
                        </div>
                </div>
            </main>
            </>
        )
    } 
}

function TourItem(props) {
    return(
        <>
        <div className={`filterable-item ${props.tag}`}>
            <article className="offer-item">
                <figure className="featured-image">
                    <img src={props.image} alt={props.name} width="118" height="210"/>
                </figure>
                <h2 className="entry-title"><a href="#">{props.name}</a></h2>
                <p>{props.description}</p>
                <div className="price pl-2">
                    <strong>{props.adultP} USD</strong>
                    <small>/{props.adultT}</small>
                </div>
                <div className="price pl-2">
                    <strong>{props.childP} USD</strong>
                    <small>/{props.childT}</small>
                </div>
            </article>
        </div>
        </>
    )
}
