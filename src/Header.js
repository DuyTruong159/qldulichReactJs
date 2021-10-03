import { Link } from 'react-router-dom'
import logo from './images/logo.png' 
import { useState } from "react"
import { Alert, Button, Col, Form, Modal, NavDropdown } from 'react-bootstrap';
import { useRef } from 'react';
import API, { endpoints } from './API';
import cookies from 'react-cookies'
import { useDispatch, useSelector } from 'react-redux';

export default function Headers() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showLogin, setShowLogin] = useState(false);
    const closeLogin = () => setShowLogin(false);
    const openLogin = () => setShowLogin(true);

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [email, setEmail] = useState()
    const avatar = useRef()

    const [userLogin, setUserLogin] = useState()
    const [passLogin, setPassLogin] = useState()
    const user = useSelector(state => state.user)
    const dispath = useDispatch()
    const [validate, setValidate] = useState()
    const [validateRegister, setValidateRegister] = useState()

    const Register = (event) => {
        event.preventDefault()

        let registerUser = async () => {
            const formData = new FormData()
            formData.append("first_name", firstName)
            formData.append("last_name", lastName)
            formData.append("username", username)
            formData.append("password", password)
            formData.append("email", email)
            formData.append("avatar", avatar.current.files[0])

            try {
                let res = await API.post(endpoints['user'], formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
    
                console.info(res.data)

                handleClose();
                openLogin();
            } catch (err) {
                console.error(err)
                setValidateRegister("Yêu cầu nhập hết thông tin!!")
            }
        }

        if (password === confirmPassword) {
            registerUser()
        } else {
            setValidateRegister("Mật khẩu xác nhận sai!!")
        }
    }

    const Login = async (event) => {
        event.preventDefault()
        try {
            let info = await API.get(endpoints['oauth2-info'])
            let res = await API.post(endpoints['login'], {
                'client_id': info.data.client_id,
                'client_secret': info.data.client_secret,
                'username': userLogin,
                'password': passLogin,
                'grant_type': 'password'
            })

            console.info(res)
            cookies.save('access_token', res.data.access_token)
            let user = await API.get(endpoints['current-user'], {
                headers: {
                    'Authorization': `Bearer ${cookies.load('access_token')}`
                }
            })

            console.info(user)
            cookies.save('user', user.data)
            dispath({
                'type': 'USER_LOGIN',
                'payload': user.data
            })

            closeLogin()
        } catch (err) {
            console.info(err)
            setValidate("Sai thông tin!!")
        } 
    }

    const Logout = (event) => {
        event.preventDefault()
        cookies.remove('user')
        cookies.remove('access_token')
        dispath({
            'type': 'USER_LOGOUT',
            'payload': null
        })
    }

    let path = <>
        <li className="menu-item float-right"><a href="javascript:;" onClick={openLogin}><i className="fa fa-sign-in pr-2" />Login</a></li>
        <li className="menu-item float-right"><a href="javascript:;" onClick={handleShow}><i className="fa fa-pencil-square-o pr-2" />Register</a></li>
    </>
    if(user !== null && user !== undefined) {
        path = <>
            <li className="menu-item float-right">
                <NavDropdown title={user.username} id="basic-nav-dropdown">
                    <NavDropdown.Item className="p-2 text-center" href={`/profile?u=${user.id}`}>Profile</NavDropdown.Item>
                    <NavDropdown.Item className="p-2 text-center" href="javascript:;" onClick={Logout}>Logout</NavDropdown.Item>
                </NavDropdown>
            </li>
        </>
    }

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
                            {path}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        <Modal show={show} onHide={handleClose} style={{marginTop: '110px'}}>
            <Form onSubmit={Register}>
                <Modal.Header closeButton>
                    <Modal.Title>Đăng ký</Modal.Title>
                </Modal.Header>
                <Alert className="text-center text-danger m-0 h5">{validateRegister}</Alert>
                <Modal.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="firstName">
                                <RegisterForm name="First Name" type="text" change={(event) => setFirstName(event.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="lastName">
                                <RegisterForm name="Last Name" type="text" change={(event) => setLastName(event.target.value)}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="email">
                            <RegisterForm name="Email" type="email" change={(event) => setEmail(event.target.value)}/>
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="username">
                                <RegisterForm name="Username" type="text" change={(event) => setUsername(event.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="password">
                                <RegisterForm name="Password" type="password" change={(event) => setPassword(event.target.value)}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="confirmPassword">
                            <RegisterForm name="Confirm Password" type="password" change={(event) => setConfirmPassword(event.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="avatar" label="Avatar" ref={avatar} />
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" type="submit">
                        Đăng ký
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>

        <Modal show={showLogin} onHide={closeLogin} style={{marginTop: '130px'}}>
            <Form onSubmit={Login}>
                <Modal.Header closeButton>
                    <Modal.Title>Đăng nhập</Modal.Title>
                </Modal.Header>
                <Alert className="text-center text-danger m-0 h3">{validate}</Alert>
                <Modal.Body>
                    <Form.Group controlId="username">
                        <RegisterForm name="username" type="text" change={(event) => setUserLogin(event.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <RegisterForm name="password" type="password" change={(event) => setPassLogin(event.target.value)}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeLogin}>
                        Đóng
                    </Button>
                    <Button variant="primary" type="submit">
                        Đăng nhập
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
        </>
    );
}

function RegisterForm(props) {
    return(
        <>
        <Form.Label>{props.name}</Form.Label>
        <Form.Control type={props.type} placeholder={props.name} 
                        onChange={props.change}/>
        </>
    )
}