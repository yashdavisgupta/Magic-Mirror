$(document).ready(function() {
    time();
    });
function time()
{
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        result1 =h+':'+m;
        result2 = s;
        result3 = days[day]+' '+months[month]+' '+d+' '+year;
        document.getElementById('hourMinute').innerHTML = result1 + '<span id="second"></span>';
        document.getElementById('second').innerHTML = " "+result2;
        document.getElementById('date').innerHTML = result3;
        setTimeout('time();','1000');
        return true;
}
