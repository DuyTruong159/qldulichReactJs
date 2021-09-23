/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){ 
    let date = document.querySelectorAll(".text-muted");
    for (let i = 0; i < date.length; i++) {
        let d = date[i];
        d.innerText = moment(d.innerText).fromNow();
    }
    
    let r = document.querySelectorAll("#rate");
    for (let i = 0; i < r.length; i++) {
        let rate = r[i];
        let a = rate.innerText;
        if(a.includes("1") || $("#rateAvg").text().includes("1")) {
            rate.innerHTML = `<i class="fa fa-star text-warning"></i>`;
            
            $("#rateAvg").html(`<i class="fa fa-star text-warning"></i>`);
        }
        if(a.includes("2") || $("#rateAvg").text().includes("2")) {
            rate.innerHTML = `<i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>`;
            
            $("#rateAvg").html(`<i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>`);
        }
        if(a.includes("3") || $("#rateAvg").text().includes("3")) {
            rate.innerHTML = `<i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>`;
            
            $("#rateAvg").html(`<i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>`);
        }
        if(a.includes("4") || $("#rateAvg").text().includes("4")) {
            rate.innerHTML = `<i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>`;
            
            $("#rateAvg").html(`<i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>`);
        }
        if(a.includes("5") || $("#rateAvg").text().includes("5")) {
            rate.innerHTML = `<i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>`;
            
            $("#rateAvg").html(`<i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>`);
        }
        if(a.includes("0")) {
            rate.innerHTML = ``;
        } 
    } 
});

function addComment(tourId) {
    fetch("/QLDuLich/api/addComment", {
        method: "post",
        body: JSON.stringify({
            "content": document.getElementById("comment").value,
            "tourId": tourId,
            "rate": $("input[type='radio']:checked").val()    
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(res) {
        return res.json();
    }).then(function(data) {
        let area = document.getElementById("commentArea");
        
        area.innerHTML = `
            <div class="p-3 mb-3 bg-light rounded-lg">
                <div class="message row pb-2">
                    <div class="col-md-12">
                        <img src="https://res.cloudinary.com/dtr/image/upload/v1630180708/kof4plq0qupua6aojlr9.jpg" class="online" />
                    <span class="message-text">
                        <a href="javascript:void(0);" class="h5 pl-3">
                            User
                            <div class="pull-right">
                                ${data.rate}
                            </div>
                        </a>
                    </div>
                </div>
                <div class="row pb-2">
                    <div class="col-md-12 text-break h6">
                        ${data.content}
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <small class="text-muted pull-right ultra-light"> ${moment(data.createdDate).fromNow()} </small>
                    </div>
                </div>
            </div>
        ` + area.innerHTML
    });
}