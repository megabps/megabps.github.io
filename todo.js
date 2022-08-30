if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", function (event) {
    var isSafari =
      /Safari/.test(navigator.userAgent) &&
      /Apple Computer/.test(navigator.vendor);
    if (isSafari) {
      var svgs = document.getElementsByTagName("svg");
      while (svgs.length) {
        var svg = svgs[0];
        var img = svg.getElementsByTagName("image")[0];
        svg.outerHTML = img.outerHTML.replace("image", "img");
      }
    }
  });
}

//CALENDAR
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();

let hariIni = weekday[d.getDay()];
let tgl = d.getDate();
let thn = d.getFullYear();
let bln = month[d.getMonth()];

document.getElementById("hari").innerHTML = hariIni;
document.getElementById("tanggal").innerHTML = tgl;
document.getElementById("bln-thn").innerHTML = bln + " " + thn;

$("#calendar").datepicker({
  language: "en",
  calendarWeeks: true,
  todayHighlight: true,
});

$(document).ready(function () {
  var max_fields = 10;
  var wrapper = document.getElementById("contentTodo");
  var add_button = document.getElementById("addBtn");
  var x = 1;
  $(add_button).click(function (e) {
    e.preventDefault();
    if (x < max_fields) {
      x++;
      // $(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="delete">Delete</a></div>'); //add input box
      $(wrapper).append(
        '<br><div class="row" style="margin-left: 1px;"> <div class="col-md-2 col-sm-3 col-xs-4" style="padding-left: 1px;padding-bottom: 3px; padding-right: 0;"><input type="time" aria-label="time" name="time" id="time" class="time"></div><div class="col-md-8 col-sm-6 col-xs-12" style="padding-left: 1px;padding-bottom: 1px;"><div class="input-group mb-3"><input type="text" id="descTodo" name="descTodo" class="form-control descTodo desc" placeholder="Desc your to-do list"> <div class="input-group-append"></div></div></div></div>'
      );
    } else {
      alert("You Reached the limits");
    }
  });
  $(wrapper).on("click", ".removeBtn", function (e) {
    e.preventDefault();
    $(this).parent("div").remove();
    x--;
  });
});
$("#calendar").datepicker({
  language: "en",
  calendarWeeks: true,
  todayHighlight: true,
});
$("#formDataSubmit").on("submit", store);
function store(e) {
  var calendar = $("#calendar").datepicker("getDate");
  var dates = calendar.getDate();
  var years = calendar.getFullYear();
  var months = month[calendar.getMonth()];
  var statValue = document.querySelector(
    'input[name="statRadio"]:checked'
  ).value;
  //   var form = localStorage.key;
  var title = document.getElementById("title").value;
  var time = $(".time");
  var desc = $(".desc");
  var progress = 0;
  var arrDesc = [];
  for (var i = 0; i < time.length; i++) {
    arrDesc.push({ time: time[i].value, desc: desc[i].value });
  }

  e.preventDefault();
  const formData = {
    cal: dates + " " + months + " " + years,
    statValue: statValue,
    title: title,
    progress: progress,
    des: arrDesc,
  };
  var temp = JSON.parse(localStorage.getItem("dataTotal")) ?? [];
  var arrTemp = [];
  if (temp.length > 0) {
    for (var i = 0; i < temp.length; i++) {
      arrTemp.push(temp[i]);
    }
  }

  arrTemp.push(formData);
  localStorage.setItem("dataTotal", JSON.stringify(arrTemp));
  window.location.reload();
  // console.log(arrTemp);
  // const dataToDoList=[]
  // dataToDoList.push(formData)
  //     if (localStorage.getItem("aia-to-do-list") === null) {
  //         localStorage.setItem('aia-to-do-list', JSON.stringify(dataToDoList));
  //     }
  //     else {
  //         const temp = JSON.parse(localStorage.getItem("aia-to-do-list")) ?? [];
  //         for (let i = 0; i < temp.length; i++) {
  //             dataToDoList.push(temp[i])
  //             localStorage.setItem('aia-to-do-list', JSON.stringify(dataToDoList));
  //         }

  //     }
}
