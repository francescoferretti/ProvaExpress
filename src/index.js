//const express = require('express');
//const foundation = require("foundation");
const anime = require("animejs");
const $ = require("jquery");

//const Bundler = require('parcel');
//require("foundation/scss");
//const pug = require('pug');
//const path = require('path');



var basicTimeline = anime.timeline({
    autoplay: false
});

var pathEls = $(".check");
for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    var offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute("stroke-dashoffset", offset);
}

basicTimeline
    .add({
        targets: ".textspacial",
        duration: 1,
        opacity: "0"
    })
    .add({
        targets: ".buttonspecial",
        duration: 1300,
        height: 10,
        width: 300,
        backgroundColor: "#FFF",
        border: "0",
        borderRadius: 100
    })
    .add({
        targets: ".progress-bar",
        duration: 2000,
        width: 300,
        easing: "linear",
        backgroundColor: "#999"
    })
    .add({
        targets: ".buttonspecial",
        width: 0,
        duration: 1
    })
    .add({
        targets: ".progress-bar",
        width: 80,
        height: 80,
        delay: 500,
        duration: 750,
        borderRadius: 80,
        backgroundColor: "#71DFBE"
    })
    .add({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: 200,
        easing: "easeInOutSine"
    });

$(".buttonspecial").click(function () {
    basicTimeline.play();
    basicTimeline.finished.then(userAction);
});

$(".textspacial").click(function () {
    basicTimeline.play();
    basicTimeline.finished.then(userAction);
});


/*const userAction = async () => {
    const response = await fetch('http://localhost:54595/GetUpperWord?parola=casa');
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
    // do something with myJson
};*/

async function userAction() {
    const response = await fetch('http://localhost:54595/api/GetUpperWord?parola=casa');
    const myJson = await response.text(); //extract JSON from the http response
    console.log(myJson);
    // do something with myJson
};
