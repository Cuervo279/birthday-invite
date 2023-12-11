document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('card').addEventListener('click', function() {
        let myDiv = document.getElementById('mirror');

        if (!myDiv.classList.contains("turn_r") && !myDiv.classList.contains("turn")) {
            myDiv.classList.add("turn");
        }
        else {
            myDiv.classList.toggle("turn");
            myDiv.classList.toggle("turn_r");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('card').addEventListener('click', function() {
        let myDiv2 = document.getElementById('page1');

        if (!myDiv2.classList.contains("turn_r") && !myDiv2.classList.contains("turn")) {
            myDiv2.classList.add("turn");
        }
        else {
            myDiv2.classList.toggle("turn");
            myDiv2.classList.toggle("turn_r");
        }
    });
});

let d = new Date();
let monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
"JUL", "AUG", "SET", "OCT", "NOV", "DEC"
];
let day = d.getDate()
let year = d.getFullYear();
let month = monthNames[d.getMonth()];
let formattedDate = month + 
" " + day + " " + year;
document.getElementById("day").innerHTML = day;
document.getElementById("month").innerHTML = month;
document.getElementById("year").innerHTML = year;
