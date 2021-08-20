$(document).ready(() => {
    $('.slider .slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        infinite: true,
        dots: true,
    });
});

const regex = /^[a-zA-Z]{1}[a-zA-Z_\d]{2,24}/;
const uname = document.getElementById('username');
const form = document.getElementsByTagName('form');
const send = document.getElementById('bookHourBtn');
const errormsg = document.getElementById('error');
const add = document.getElementById("consult");
const count = document.getElementById("plus");
var counter = 1;


const validateinputs = (e) => {
    let msgs = [];
    if (uname.value === '' || uname.value == null) {
        msgs.push('Username is Required');
    }

    if (regex.test(uname.value) == false) {
        msgs.push('Username is invalid');
    }

    if (msgs.length > 0) {
        e.preventDefault();
        errormsg.innerText = msgs.join(', ');
    }

    if (msgs.length == 0) {
        return true;

    }

};



send.addEventListener('click', (e) => {
    validateinputs(e);

    let appt = [document.getElementById(":").value, document.getElementById("dateTimeInput").value];
    let nme = appt[0].split(" ");
    let dT = appt[1].split(' ');


    let newLi = document.createElement('li');
    let newI = document.createElement("i");
    let newSpan = document.createElement("span");

    add.insertBefore(newLi, add.getElementsByTagName('li')[0]);
    newLi.appendChild(newSpan);
    newSpan.innerHTML = `${nme[0]} - ${dT[0]} - ${dT[1]} `;
    newLi.appendChild(newI);
    newI.setAttribute('class', 'fas fa-chevron-circle-right');

    counter += 1;
    plus.innerHTML = counter;

    $.notify("Consultation set!", "success");
    document.forms[0].reset();

});