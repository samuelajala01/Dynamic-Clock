var clock = setInterval(clocktiming,1000);
    function clocktiming(){


    var dt = new Date();
    var t = dt.toLocaleTimeString();
    //toLocaleTimeString() method returns the time portion of a Date object as a string, using locale conventions.
    document.getElementById('myclock').innerHTML = t;

}