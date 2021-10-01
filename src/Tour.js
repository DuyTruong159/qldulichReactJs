import { useState, useEffect } from "react"
import { Alert, Button, Form, Row } from "react-bootstrap"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import { useHistory, useLocation } from "react-router"
import API, { endpoints } from "./API"
import TourInfo from "./TourInfo"

export default function Tour() {
    return(
        <>
        <main className="content">
        <div className="fullwidth-block">
            <BrowserRouter>
            <div className="container">
                <Tag/>
                <Switch>
                    <Route exact path ="/tour" component={TourAll}/>
                    <Route exact path ="/tag_boat" component={TourBoat}/>
                    <Route exact path ="/tag_mountain" component={TourMountain}/>
                    <Route exact path ="/tag_climbing" component={TourClimbing}/>
                    <Route exact path = "/tour_info/:tourId/" component={TourInfo}/>
                </Switch>
            </div>
            </BrowserRouter>
        </div>
        </main>
        </>
    )
}

function Tag(props) {
    let history = useHistory()
    const [kw, setKw] = useState("")

    const Search = (event) => {
        event.preventDefault()

        history.push(`/tour?kw=${kw}`)
    }

    return(
        <>
        <Form className="pb-5" onSubmit={Search}>
                <Form.Control type="search" placeholder="Searching..." className="col-md-10" onChange={(event) => setKw(event.target.value)} />
                <Button variant="primary" type="submit" className="ml-5">
                    Search
                </Button>
        </Form>
        <div className="filter-links filterable-nav">
            <select className="mobile-filter">
            <option value="*">Show all</option>
            <option value=".south-america">Boat</option>
            <option value=".asia">Asia</option>
            <option value=".africa">Africa</option>
            <option value=".north-america">North America</option>
            <option value=".europe">Europe</option>
            <option value=".australia">Australia</option>	
            </select>
            <Link to ="/tour" className="current wow fadeInRight" data-filter="*">Show All</Link>
            <Link to ="/tag_boat" className="wow fadeInRight" data-wow-delay=".2s" data-filter=".south-america">Boat</Link>
            <Link to ="/tag_mountain" className="wow fadeInRight" data-wow-delay=".4s" data-filter=".asia">Mountain</Link>
            <Link to ="/tag_climbing" className="wow fadeInRight" data-wow-delay=".6s" data-filter=".africa">Climbing</Link>
        </div>
        </>
    )
}

function TourAll(props) {
    const [tourAll, setTourAll] = useState([])
    const [count, setCount] = useState([])
    const [validate, setValidate] = useState()
    let url = useLocation()
    let items = []

    useEffect(async () => {
        let page = url.search
        try {
            let res = await API.get(`${endpoints['tours']}${page}`)
            console.info(res)
            console.info(page)
            setTourAll(res.data.results)
            setCount(res.data.count)
            setValidate(res.data.count)
        } catch (err) {
            console.info(err)
        }
    }, [url])

    for(let i = 0; i < Math.ceil(count/6); i++) {
        items.push(<a href={`?page=${i+1}`} className="page-numbers">{i+1}</a>)
    }

    if(validate === 0) {
        return(
            <>
            <Alert key="danger" variant="danger">
                Không có Tour bạn kiếm!!!
            </Alert>
            </>
        )
    }

    return(
        <>
        <Row md={3} xs={1}>
            {tourAll.map(t => <TourItems tour={t}/>)}   
        </Row>
        <div className="pagination wow fadeInUp justify-content-center">
            {items}
        </div>
        </>
    )
}

function TourBoat(props) {
    const [tourBoat, setTourBoat] = useState([])

    useEffect(async () => {
        let res = await API.get(endpoints['tagsBoat'])
        console.info(res)
        setTourBoat(res.data.tour)
    }, [])

    return(
        <>
        <Row md={3} xs={1}>
            {tourBoat.map(t => <TourItems tour={t}/>)}   
        </Row>
        </>
    )
}

function TourMountain(props) {
    const [tourMount, setTourMount] = useState([])

    useEffect(async () => {
        let res = await API.get(endpoints['tagsMount'])
        console.info(res)
        setTourMount(res.data.tour)
    }, [])

    return(
        <>
        <Row md={3} xs={1}>
            {tourMount.map(t => <TourItems tour={t}/>)}   
        </Row>
        </>
    )
}

function TourClimbing(props) {
    const [tourClimb, setTourClimb] = useState([])

    useEffect(async () => {
        let res = await API.get(endpoints['tagsClimb'])
        console.info(res)
        setTourClimb(res.data.tour)
    }, [])

    return(
        <>
        <Row md={3} xs={1}>
            {tourClimb.map(t => <TourItems tour={t}/>)}   
        </Row>
        </>
    )
}

function TourItems(props) {
    let path = `/tour_info/${props.tour.id}/`

    return(
        <>
        <div className="filterable-item p-4">
            <div className="filterable-items">
                <article className="offer-item">
                    <figure className="featured-image">
                        <Link to={path}><img src={props.tour.image} alt={props.tour.name} width="118" height="210"/></Link>
                    </figure>
                    <h2 className="entry-title"><Link to={path}>{props.tour.name}</Link></h2>
                    <p>{props.tour.description}</p>
                    <div className="price pl-2">
                        <strong>{props.tour.seats[0].price} USD</strong>
                        <small>/{props.tour.seats[0].name}</small>
                    </div>
                    <div className="price pl-2">
                        <strong>{props.tour.seats[1].price} USD</strong>
                        <small>/{props.tour.seats[1].name}</small>
                    </div>
                </article>
            </div>
        </div>
        </>
    )
}
