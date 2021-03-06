let c;
function randpitch() {
    c = (Math.random() * 360 - 180).toFixed(2);
    return c;
}
pitch = document.getElementById('pitch');
var time = new Date();
var layout = {

    autosize: false,

    width: 400,

    height: 300,

    // margin: {

    //     l: 50,

    //     r: 50,

    //     b: 100,

    //     t: 100,

    //     pad: 4

    // },
};
let isianpitch;
var data = [{
    x: [time], 
    y: [randpitch],
    mode: 'lines',
    line: {color: '#80CAF6'}
}]

Plotly.newPlot(pitch, data, layout);  

var cnt = 0;

var interval = setInterval(function() {
    
    var time = new Date();
    isianpitch = randpitch();
    var update = {
    x:  [[time]],
    y: [[isianpitch]]
    }
    
    var olderTime = time.setMinutes(time.getMinutes() - 1);
    var futureTime = time.setMinutes(time.getMinutes() + 1);
    
    var minuteView = {
        xaxis: {
            type: 'date',
            range: [olderTime,futureTime]
        }
        };
    
    Plotly.relayout(pitch, minuteView);
    Plotly.extendTraces(pitch, update, [0]);
    document.getElementById("angkapitch").innerHTML = isianpitch;
}, 1000);