n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();

var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

day = weekday[n.getDay()];

document.getElementById("date").innerHTML = "Today is: " + day + " " + m + "/" + d + "/" + y;