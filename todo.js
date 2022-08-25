if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function (event) {
        var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
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
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();

    let hariIni = weekday[d.getDay()];
    let tgl = d.getDate();
    let thn = d.getFullYear();
    let bln = month[d.getMonth()];

        document.getElementById("hari").innerHTML = hariIni;
        document.getElementById("tanggal").innerHTML = tgl;
        document.getElementById("bln-thn").innerHTML = bln+" "+thn;
    
            $('#calendar').datepicker({
                language: "en", 
                calendarWeeks: true, 
                todayHighlight: true
                });