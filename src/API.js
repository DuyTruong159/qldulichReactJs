import axios from "axios";

export let endpoints = {
    "toursSlide": "/TourHome/tour_slide/",
    "toursHome": "/TourHome/",
    "tours": "/Tour/",
    "tourInfo": (tourId) => `/Tour/${tourId}/`,
    "tagsBoat": "/Tag/1/",
    "tagsMount": "/Tag/2/",
    "tagsClimb": "/Tag/3/",
    "tags": (tagId) => `/Tag/${tagId}/`,
    "user": "/User/",
    "oauth2-info": "/oauth2-info/",
    "login": "o/token/",
    "current-user": "/User/current-user/",
    "commentTour": (tourId) => `/Tour/${tourId}/comment/`,
    "add_comment": (tourId) => `/Tour/${tourId}/add_comment/`,
    "delete_comment": (commentId) => `/Comment/${commentId}/`,
    "add_ticket": (tourId) => `/Tour/${tourId}/add_ticket/`,
    "ticket": "/ticket/",
    "customer_slide": "/Comment/customer_slide/"
}

export default axios.create({
    baseURL: "http://127.0.0.1:8000",
})