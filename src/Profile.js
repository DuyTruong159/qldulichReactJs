import cookies from 'react-cookies'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import ava from './images/avatar.png'
import API, { endpoints } from './API'
import { useState } from 'react'
import { Line } from 'react-chartjs-2'

export default function Profile() {
    const [ticket, setTicket] = useState([])
    let user = cookies.load('user')
    let url = useLocation()
    let p = []
    let date = []
    let item = []

    useEffect(async () => {
        let path = url.search

        let res = await API.get(`${endpoints['ticket']}${path}`)
        console.info(res.data.results)
        setTicket(res.data.results)
    }, [])

    for(var i = 0; i < ticket.length; i++) {
        p.push(ticket[i].price)
        date.push(ticket[i].tour.datetime)
        item.push(<tr>
            <th scope="row">{i + 1}</th>
            <td>{ticket[i].tour.name}</td>
            <td>{ticket[i].tour.datetime}</td>
            <td>{ticket[i].quantity}</td>
            <td>{ticket[i].price} USD</td>
        </tr>)
    }

    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datasets: [
            {
                label: 'Chi tiêu',
                data: p,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };
      

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return(
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

        <div className="container target mt-3 mb-5">
            <div className="row">
                <div className="col-sm-10">
                    <h1>{user.first_name} {user.last_name}</h1>
                </div>
                <div className="col-sm-2"><img title="profile image" className="img-fluid rounded-circle" src={user.avatar ? user.avatar : ava} /></div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-3">
                    <ul className="list-group">
                        <li className="list-group-item text-muted" contentEditable="false">Profile </li>
                        <li className="list-group-item text-left"><span className="pull-left"><strong className>First Name: </strong></span>{user.first_name}</li>
                        <li className="list-group-item text-left"><span className="pull-left"><strong className>Last Name: </strong></span>{user.last_name}</li>
                        <li className="list-group-item text-left"><span className="pull-left"><strong className>Username: </strong></span>{user.username}</li>
                        <li className="list-group-item text-muted" contentEditable="false">Contact Details </li>
                        <li className="list-group-item text-left"><span className="pull-left"><strong className>Email: </strong></span>{user.email}</li>
                    </ul>
                </div>
                <div className="col">
                    <Line data={data} options={options} />
                    <h2 className="ml-3">Tours Paid</h2>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {item}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}