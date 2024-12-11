
ipaddress="192.168.178.37"
port="9990"

i=0;

itemCount = 50;
watingTime= 30;

var time = [];

var VAL1 = [];
VAL1_Name="Engine Batt";
VAL1_unit="V";

var VAL2 = [];
VAL2_Name="Aux Batt";
VAL2_unit="V";

var VAL3 = [];
VAL3_Name="Solar";
VAL3_unit="V";

function load(){ScreenWidth();show();};
function ScreenWidth(){var ScreenWidth = window.screen.width+"px";var ScreenHeight = window.screen.height+"px";document.getElementsByTagName("html")[0].style.width = ScreenWidth;document.getElementsByTagName("html")[0].style.height = ScreenHeight;};
function show(){const socket = new WebSocket('ws://'+ipaddress+':'+port);socket.addEventListener('open',function (event) {socket.send('Connection Established');});
    socket.addEventListener('message',
    function (event) {
        val = event.data;valSort = val.replace(/(\r\n|\n|\r)/gm,"");let numArray = valSort.split(";");

        item1 =  numArray[0];
        item2 =  numArray[1];
        item3 =  numArray[2];
        item4 =  numArray[3];
        item5 =  numArray[4];

        vVAL1 = (item1/620)*12;vVAL1 = vVAL1.toFixed(2); 
        vVAL2 = (item2/620)*12;vVAL2 = vVAL2.toFixed(2);
        vVAL3 = (item3/620)*12;vVAL3 = vVAL3.toFixed(2);

        document.getElementsByTagName("graph")[0].getElementsByTagName("value")[0].innerHTML = vVAL1 + " " + VAL1_unit;
        document.getElementsByTagName("graph")[1].getElementsByTagName("value")[0].innerHTML = vVAL2 + " " + VAL2_unit;
        document.getElementsByTagName("graph")[2].getElementsByTagName("value")[0].innerHTML = vVAL3 + " " + VAL3_unit;
        
        document.getElementById("VAL1_Label").innerHTML = VAL1_Name;
        document.getElementById("VAL2_Label").innerHTML = VAL2_Name;
        document.getElementById("VAL3_Label").innerHTML = VAL3_Name;

        drawCanvas("VAL1" ,vVAL1,10,"#3acb74");
        drawCanvas("VAL2" ,vVAL2,10,"#3a7ecb");
        drawCanvas("VAL3" ,vVAL3,10,"#cb3a3a");
        
        VAL1.push(vVAL1);
        VAL2.push(vVAL2);
        VAL3.push(vVAL3);

        

        const now = new Date();
        // const year = now.getFullYear();
        // const day = now.getDay()+3;
        // const month = now.getMonth() +1;
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        time.push(
            // year + "-" + month + "-" + day + " " + 
            // hours+
            // ":"
            // +minutes+
            // ":"
            // +seconds
            ""
        );


        // if (i > itemCount){
        //     timelenght = time.length;
        //     VAL1lenght = VAL1.length;
        //     VAL2lenght = VAL2.length;
        //     VAL3lenght = VAL3.length;
        //     if(timelenght > itemCount){time[""]}
        //     if(VAL1lenght > itemCount){VAL1[0]}
        //     if(VAL2lenght > itemCount){VAL2[0]}
        //     if(VAL3lenght > itemCount){VAL3[0]}
        // }
        // console.log(i);
        i++;
        if (i > itemCount){
            i=0;
            time.shift();
            VAL1.shift();
            VAL2.shift();
            VAL3.shift();
        }

        graphText=time;
        graphVAL1=VAL1;
        graphVAL2=VAL2;
        graphVAL3=VAL3;

        lineChart(graphText,graphVAL1,graphVAL2,graphVAL3);

        // console.log(graphText);
        // console.log(graphVAL1);
        // console.log(graphVAL2);
        // console.log(graphVAL3);

    });
    function lineChart(){
    new Chart("myChart", {
    type: "line",
    data: {
        labels: graphText,
        datasets: [
        {
        data: graphVAL1,
        borderColor: "#c5338b",
        backgroundColor: "#c5338b53",
        label: VAL1_Name,
        fill: true
        },
        {
        data: graphVAL2,
        borderColor: "#c58133",
        backgroundColor: "#c5813353",
        label: VAL2_Name,
        fill: true
        },
        {
        data: graphVAL3,
        borderColor: "#33c5c5",
        backgroundColor: "#33c5c553",
        label: VAL3_Name,
        fill: true
        }]
    },options: {legend: {display: true}, animation: {duration: 0}}});
    }
    function drawCanvas(ELEMENT,VALUE,MAXVALUE, COLOR){
        var endAngle = VALUE/MAXVALUE * Math.PI;
        var canvas = document.getElementById(ELEMENT);
        var counterClockwise = false;
        var context = canvas.getContext('2d');
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        var radius = 65;
        var startAngle = 0;
        context.clearRect(0,0,canvas.width,canvas.height);
        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
        context.lineWidth = 10;
        context.strokeStyle = COLOR;
        context.stroke();
    };setTimeout(() => show(), watingTime);
}