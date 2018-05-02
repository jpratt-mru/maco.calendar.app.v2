import $ from 'jquery';
import 'fullcalendar';
import {
    Button
}
from './src/ui/button.js';
import {
    Searchbox
}
from './src/ui/searchbox.js'
import {
    instructors
}
from './data/instructor-data.js';

function placeCalendar() {
    $('#calendar').fullCalendar({
        defaultView: 'agenda',
        visibleRange: {
            start: '2018-09-10',
            end: '2018-09-15'
        },
        columnHeaderFormat: 'ddd',
        slotDuration: "00:30:00",
        slotLabelInterval: "01:00",
        minTime: "07:00:00",
        maxTime: "20:00:00",
        allDaySlot: false,
        nowIndicator: false,
        header: false
    });
}

function placeSearchBox() {
    let b = new Searchbox();
    let body = document.getElementById("searchbox");
    b.appendTo(body);
}

function loadEventListeners() {


}

document.addEventListener("DOMContentLoaded", function() {
    console.log("enter app.js");

    placeCalendar();
    placeSearchBox();

    loadEventListeners();

    console.log(instructors);

    console.log("exit app.js");
});
