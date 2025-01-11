
ipaddress="192.168.178.37"
port="9990"

i=0;
itemCount = 20;
watingTime= 30;

var time = [];
var VAL1 = [];

VAL1_Name="Eng Batt";
VAL1_unit="V";

var VAL2 = [];
VAL2_Name="Aux Batt";
VAL2_unit="V";

var VAL3 = [];
VAL3_Name="Solar";
VAL3_unit="V";

function load(){ScreenWidth();show();};
function ScreenWidth(){var ScreenWidth = window.screen.width+"px";var ScreenHeight = window.screen.height+"px";document.getElementsByTagName("html")[0].style.width = ScreenWidth;document.getElementsByTagName("html")[0].style.height = ScreenHeight;};

function show(){
    const socket = new WebSocket('ws://'+ipaddress+':'+port);
    socket.addEventListener('open',function (event) {
        socket.send('Connection Established');
    });

    socket.addEventListener('message',
    function (event) {
        val = event.data;valSort = val.replace(/(\r\n|\n|\r)/gm,"");let numArray = valSort.split(";");
        input_lenght = numArray.length
        if (input_lenght < 20){
            console.debug("kleiner 20.\n Eingaben und wird verworfen")
        }else{
        count = numArray.length

        item1 =  numArray[0];
        item2 =  numArray[1];
        item3 =  numArray[2];

        vVAL1 = (item1/620)*12;vVAL1 = vVAL1.toFixed(2); 
        vVAL2 = (item2/620)*12;vVAL2 = vVAL2.toFixed(2);
        vVAL3 = (item3/620)*12;vVAL3 = vVAL3.toFixed(2);

        graphText=time;
        graphVAL1=VAL1;
        graphVAL2=VAL2;
        graphVAL3=VAL3;

        VAL1.push(vVAL1);
        VAL2.push(vVAL2);
        VAL3.push(vVAL3);
        time.push("");

        if (i > itemCount){
            time.shift();
            VAL1.shift();
            VAL2.shift();
            VAL3.shift();
        }
        i++;

        lineChart("myChart", graphText, graphVAL1, '#550055');
        lineChart("myChart2", graphText, graphVAL2, '#005500');
        lineChart("myChart3", graphText, graphVAL3, '#555500');
        
    };setTimeout(() => load(), watingTime);
    });}

    function lineChart(target, text, value, color){
    new Chart(target, {
    type: "line",
    data: {
        labels: text,
        datasets: [
        {
        data: value,
        borderColor: color,
        backgroundColor: color+"53",
        radius: 0,
        label: VAL1_Name,
        fill: true
        }]
    },
    options: {
        responsive: true,
        legend: {display: true}, 
        animation: {duration: 0},
        maintainAspectRatio: false
        
    }});};
