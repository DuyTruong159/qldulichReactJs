import "./index.css"
import avatar from "./images/avatar.png"
import Safe from "react-safe"
import { useEffect, useState } from "react"
import Rating from "react-rating"
import { useHistory, useParams } from "react-router"
import API, { endpoints } from "./API"
import { Button, Col, Form, Modal, NavDropdown, Spinner } from "react-bootstrap"
import Moment from "react-moment"
import cookies from 'react-cookies'
import { useSelector } from "react-redux"

export default function TourInfo() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [tourInfo, setTourInfo] = useState(null)
    const [tag, setTag] = useState("")
    const [comment, setComment] = useState([])
    const [content, setContent] = useState("")
    const [rate, setRate] = useState(0)
    const [change, setChange] = useState(0)
    const [quantity, setQuantity] = useState(0)
    let { tourId } = useParams()
    let tagId = ""

    useEffect(async () => {
        let res = await API.get(endpoints['tourInfo'](tourId))
        console.info(res)
        setTourInfo(res.data)
        tagId = res.data.tags[0]

        let resTag = await API.get(endpoints['tags'](tagId))
        console.info(resTag)
        setTag(resTag.data.name)

        let resComment = await API.get(endpoints['commentTour'](tourId))
        console.info(resComment)
        setComment(resComment.data)
    }, [change])

    const addComment = async (event) => {
        event.preventDefault()

        try {
            let resAdd = await API.post(endpoints['add_comment'](tourId), {
                "name": content,
                "rating": rate
            }, {
                headers: {
                    'Authorization': `Bearer ${cookies.load('access_token')}`
                }
            })

            console.info(resAdd)
            comment.push(resAdd.data)
            setComment(comment)
            setChange(comment.length)
        } catch (err) {
            console.info(err)
            alert("Bạn phải đăng nhập!!")
        }
    }

    const ticket = async (event) => {
        event.preventDefault()

        try {
            let res = await API.post(endpoints['add_ticket'](tourId), {
                "quantity": quantity,
                // "seat": tourInfo.seats[0]
            }, {
                headers: {
                    'Authorization': `Bearer ${cookies.load('access_token')}`
                }
            })

            console.info(res)
            alert("Bạn đã đặt vé thành công")
        } catch (err) {
            console.info(err)
            alert("Bạn phải đăng nhập!!")
        }

    }

    const ticket2 = async (event) => {
        event.preventDefault()

        try {
            let res = await API.post(endpoints['add_ticket'](tourId), {
                "quantity": quantity,
                "seat": tourInfo.seats[1]
            }, {
                headers: {
                    'Authorization': `Bearer ${cookies.load('access_token')}`
                }
            })

            console.info(res)
            alert("Bạn đã đặt vé thành công")
        } catch (err) {
            console.info(err)
            alert("Bạn phải đăng nhập!!")
        }

    }

    if (tourInfo === null) {
        return (<Spinner animation="border" variant="secondary" />)
    } else {
        return(
            <>
            <main className="content">
                <div className="fullwidth-block">
                    <div className="container">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="product-content product-wrap clearfix product-deatil pb-5">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="pro-img-details">
                                            <img src={tourInfo.image} alt={tourInfo.name} width="550px" height="350px"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-md-offset-1 col-sm-12 col-xs-12 pl-5">
                                        <h2 className="name">
                                            {tourInfo.name}
                                            <br/>
                                            <small>Tag:  
                                                <a href="javascript:void(0);">{tag}</a>
                                            </small>
                                            <Rating
                                                stop={5}
                                                emptySymbol={['fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
                                                    'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
                                                    'fa fa-star-o fa-2x medium']}
                                                fullSymbol={['fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
                                                    'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
                                                    'fa fa-star fa-2x medium']}
                                                initialRating={tourInfo.rate}
                                            />
                                            <a className="h6 pl-3" href="javascript:void(0);">{tourInfo.customer} Customer Comments</a>
                                        </h2>
                                        <hr />
                                        <div className="certified">
                                            <ul className="row ml-2">
                                                <li className="col-md-6">
                                                    <a href="javascript:void(0);" onClick={handleShow}><p className="h3 text-center">{tourInfo.seats[0].name}</p><span><p className="h4">{tourInfo.seats[0].price} USD</p></span></a>
                                                </li>
                                                <li className="col-md-6">
                                                    <a href="javascript:void(0);" onClick={handleShow2}><p className="h3 text-center">{tourInfo.seats[1].name}</p><span><p className="h4">{tourInfo.seats[1].price} USD</p></span></a>
                                                </li>
                              
                                            </ul>
                                        </div>
                                        <hr />
                                        <div className="description description-tabs">
                                            <ul id="myTab" className="nav nav-pills">
                                                <li className="active btn"><a href="#more-information" data-toggle="tab" className="no-margin">Tour Description </a></li>
                                                <li className="btn"><a href="#specifications" data-toggle="tab">Specifications</a></li>
                                                <li className="btn"><a href="#reviews" data-toggle="tab">Reviews</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="myTabContent" className="tab-content mt-3" style={{height: '250px'}}>
                                    <div className="tab-pane fade active in" id="more-information" style={{overflow: 'scroll', height: '100%'}}>
                                        <strong className="pl-3">Description</strong>
                                        <Safe.p>
                                            {tourInfo.description}
                                        </Safe.p>
                                    </div>
                                    <div className="tab-pane fade" id="specifications" style={{overflow: 'scroll', height: '100%'}}>
                                        <dl>
                                            <dt className="pl-3">Date</dt>
                                            <dd><i className="bi bi-calendar3" style={{marginRight: '15px'}} />{tourInfo.datetime}</dd>
                                            <dt className="pl-3">Duaration</dt>
                                            <dd><i className="bi bi-clock-history" style={{marginRight: '15px', color: 'blue'}} />{tourInfo.duaration}</dd>
                                            <dt className="pl-3">Stock</dt>
                                            {tourInfo.available ? <dd><i className="bi bi-check-circle" style={{marginRight: '15px', color: 'green'}} />Available</dd>
                                                                : <dd><i className="bi bi-x-circle" style={{marginRight: '15px', color: 'red'}} />Unavailable</dd>}
                                        </dl>
                                    </div>
                                    <div className="tab-pane fade" id="reviews" style={{overflow: 'scroll', height: '100%'}}>
                                        <Form className="well padding-bottom-10" onSubmit={addComment}>
                                            <Form.Control as="textarea" rows={2} className="form-control" id="comment" placeholder="Write a review" onChange={(event) => setContent(event.target.value)}/>
                                            <div className="mt-1">
                                                <Button type="submit" variant="primary" className="pull-right mr-2">
                                                    Post
                                                </Button>
                                                <Rating
                                                    stop={5}
                                                    emptySymbol={['fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
                                                        'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
                                                        'fa fa-star-o fa-2x medium']}
                                                    fullSymbol={['fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
                                                        'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
                                                        'fa fa-star fa-2x medium']}
                                                    onClick={(value) => setRate(value)}
                                                    initialRating={rate}
                                                />
                                            </div>
                                        </Form>
                                        <div className="chat-body no-padding profile-message mt-5" id="commentArea">
                                            {comment.map(c => <CommentInfo comment={c}/>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Datve tour={tourInfo} seat={tourInfo.seats[0]} show={show} handle={handleClose} tickets={ticket} quantity={(event) => setQuantity(event.target.value)}/>
            <Datve2 tour={tourInfo} seat={tourInfo.seats[1]} show={show2} handle={handleClose2} tickets={ticket2} quantity={(event) => setQuantity(event.target.value)}/>
            </>
        )
    }
}

function Datve(props) {
    return(
        <Modal show={props.show} onHide={props.handle} style={{marginTop: '110px'}}>
            <Form onSubmit={props.tickets}>
                <Modal.Header closeButton>
                    <Modal.Title>Đặt vé</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Chuyến đi</Form.Label>
                        <Form.Control plaintext readOnly defaultValue={props.tour.name}/>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Ngày đi</Form.Label>
                            <Form.Control plaintext readOnly defaultValue={props.tour.datetime}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Duaration</Form.Label>
                            <Form.Control plaintext readOnly defaultValue={props.tour.duaration}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Loại</Form.Label>
                            <Form.Control plaintext readOnly defaultValue={props.seat.name}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Giá</Form.Label>
                            <Form.Control plaintext readOnly defaultValue={`${props.seat.price} USD`}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number" placeholder="Quantity" onChange={props.quantity}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handle}>
                        Đóng
                    </Button>
                    <Button variant="primary" type="submit">
                        Đặt vé
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

function Datve2(props) {
    return(
        <Modal show={props.show} onHide={props.handle} style={{marginTop: '110px'}} >
            <Form onSubmit={props.tickets}>
                <Modal.Header closeButton>
                    <Modal.Title>Đặt vé</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Chuyến đi</Form.Label>
                        <Form.Control plaintext readOnly defaultValue={props.tour.name}/>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Ngày đi</Form.Label>
                            <Form.Control plaintext readOnly defaultValue={props.tour.datetime}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Duaration</Form.Label>
                            <Form.Control plaintext readOnly defaultValue={props.tour.duaration}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Loại</Form.Label>
                            <Form.Control plaintext readOnly defaultValue={props.seat.name}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Giá</Form.Label>
                            <Form.Control plaintext readOnly defaultValue={`${props.seat.price} USD`}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number" placeholder="Quantity" onChange={props.quantity}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handle}>
                        Đóng
                    </Button>
                    <Button variant="primary" type="submit">
                        Đặt vé
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

function CommentInfo(props) {
    const user = useSelector(state => state.user)
    const history = useHistory()

    const deleteComment = async () => {
        if(window.confirm("Bạn muốn xóa bình luận này??") == true) {
            let res = await API.delete(endpoints['delete_comment'](props.comment.id), {
                headers: {
                    'Authorization': `Bearer ${cookies.load('access_token')}`
                }
            })

            alert("Xóa thành công")
        }
    }

    let manage = ""
    if(user !== null && user !== undefined) {
        if(props.comment.user.email === user.email) {
            manage = <NavDropdown id="basic-nav-dropdown">
                        <NavDropdown.Item className="text-center" href="javascript:;" onClick={deleteComment}>Xóa</NavDropdown.Item>
                    </NavDropdown>
        }
        
    }

    return(
        <div className="p-3 mb-3 bg-light rounded-lg">
            <div className="message row pb-2">
                <div className="col-md-12">
                    <img class="online" src={props.comment.user.avatar ? props.comment.user.avatar : avatar}/>
                        <a href="javascript:void(0);" className="h5 pl-3">
                            {props.comment.user.first_name} {props.comment.user.last_name}
                        </a>
                    <div className="pull-right" id="rate">
                    <Rating
                        stop={5}
                        emptySymbol={['fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
                            'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
                            'fa fa-star-o fa-2x medium']}
                        fullSymbol={['fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
                            'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
                            'fa fa-star fa-2x medium']}
                        initialRating={props.comment.rating}
                    />
                    </div>
                </div>
            </div>
            <div className="row pb-2">
                <div className="col-md-12 text-break h6">
                    {props.comment.name}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <small className="text-muted pull-right ultra-light"><Moment fromNow>{props.comment.created_day}</Moment></small>
                    {manage}
                </div>
            </div>
        </div>
    )
}