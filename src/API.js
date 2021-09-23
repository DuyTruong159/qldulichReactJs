import axios from "axios";

export let endpoints = {
    "toursSlide": "/TourHome/tour_slide/",
    "toursHome": "/TourHome/"
}

export default axios.create({
    baseURL: "http://127.0.0.1:8000",
})