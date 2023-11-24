function updateClock() {
    var temp;
    var date = new Date();
    if (date.getHours() >= 12)
    {
        if (date.getHours() - 12 < 10)
        {
            var hours = `0${date.getHours()-12}`;
        }
        else
        {
            var hours = date.getHours() - 12;
        }
        temp = "PM";
    }
    else 
    {
        var hours = date.getHours();
        temp = "AM";
    }
    var minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0"+ date.getSeconds() : date.getSeconds();

    var time = `${hours} : ${minutes} : ${seconds}  ${temp}`
    console.log(time);
    var clock = document.getElementById("Clock");
    clock.innerHTML = time;
}

setInterval(updateClock, 1000);