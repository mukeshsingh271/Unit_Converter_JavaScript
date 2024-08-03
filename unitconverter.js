var feet = document.getElementById('feet');
var inch = document.getElementById('inch');

feet.addEventListener('input', function(){
    f = feet.value;
    i = f*12;
    inch.value = i;
});

inch.addEventListener('input', function(){
    i = inch.value;
    f = i/12;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    }
    feet.value = f;
});





// ----------------------------------------

var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second')
var day = document.getElementById('day');


day.addEventListener('input', function(){
    let d = day.value;
    let h = d*24;
    let m = h*60;
    let s = m*6;
    hour.value = h;
    minute.value = m;
    second.value = s;
});

hour.addEventListener('input', function(){
    let h = hour.value;
    let d = h/24
    let m = h*60;
    let s = m*6;
    if(!Number.isInteger(d)){
        d = d.toFixed(2);
    }
    day.value = d;
    minute.value = m;
    second.value = s;
});
minute.addEventListener('input', function(){
    let m = minute.value;
    let d = m/1440
    let h = m/60;
    let s = m*6;
    if(!Number.isInteger(d)){
        d = d.toFixed(2);
    }
    if(!Number.isInteger(h)){
        h = h.toFixed(2);
    }
    day.value = d;
    hour.value = h;
    second.value = s;
});

second.addEventListener('input', function(){
    let s = second.value;
    let h = s/360;
    let m = s/6;
    if(!Number.isInteger(m)){
        m = m.toFixed(2);
    }
    if(!Number.isInteger(h)){
        h = h.toFixed(2);
    }
    hour.value = h;
    minute.value = m;
});
