
ipaddress="192.168.178.37"
port="9990"

watingTime= 100;

var VAL1 = [];VAL1_Name="Eng Batt";VAL1_unit="V";
var VAL2 = [];VAL2_Name="Aux Batt";VAL2_unit="V";
var VAL3 = [];VAL3_Name="Solar";VAL3_unit="V";

var VAL4 = [];VAL4_Name="4";VAL4_unit="V";
var VAL5 = [];VAL5_Name="5";VAL5_unit="V";
var VAL6 = [];VAL6_Name="6";VAL6_unit="V";

function load(){ScreenWidth();show();};
function ScreenWidth(){var ScreenWidth = window.screen.width+"px";var ScreenHeight = window.screen.height+"px";document.getElementsByTagName("html")[0].style.width = ScreenWidth;document.getElementsByTagName("html")[0].style.height = ScreenHeight;};
function show(){const socket = new WebSocket('ws://'+ipaddress+':'+port);socket.addEventListener('open',function (event) {socket.send('Connection Established');});
    socket.addEventListener('message',
    function (event) {
        val = event.data;valSort = val.replace(/(\r\n|\n|\r)/gm,"");let numArray = valSort.split(";");
        input_lenght = numArray.length
        if (input_lenght < 6){
            console.debug(input_lenght + "|" + "kleiner 20.\n Eingaben und wird verworfen")
        }else{
            console.debug(input_lenght)
            count = numArray.length

            item1 =  numArray[0];
            item2 =  numArray[1];
            item3 =  numArray[2];

            item4 =  numArray[3];
            item5 =  numArray[4];
            item6 =  numArray[5];

            vVAL1 = (item1/620)*12;vVAL1 = vVAL1.toFixed(2); 
            vVAL2 = (item2/620)*12;vVAL2 = vVAL2.toFixed(2);
            vVAL3 = (item3/620)*12;vVAL3 = vVAL3.toFixed(2);

            vVAL4 = (item4/620)*12;vVAL4 = vVAL4.toFixed(2);
            vVAL5 = (item5/620)*12;vVAL5 = vVAL5.toFixed(2);
            vVAL6 = (item6/620)*12;vVAL6 = vVAL6.toFixed(2); 

            document.getElementsByTagName("graph")[0].getElementsByTagName("value")[0].innerHTML = vVAL1 + " " + VAL1_unit;
            document.getElementsByTagName("graph")[1].getElementsByTagName("value")[0].innerHTML = vVAL2 + " " + VAL2_unit;
            document.getElementsByTagName("graph")[2].getElementsByTagName("value")[0].innerHTML = vVAL3 + " " + VAL3_unit;

            document.getElementsByTagName("graph")[3].getElementsByTagName("value")[0].innerHTML = vVAL4 + " " + VAL4_unit;
            document.getElementsByTagName("graph")[4].getElementsByTagName("value")[0].innerHTML = vVAL5 + " " + VAL5_unit;
            document.getElementsByTagName("graph")[5].getElementsByTagName("value")[0].innerHTML = vVAL6 + " " + VAL6_unit;

            document.getElementById("VAL1_Label").innerHTML = VAL1_Name;
            document.getElementById("VAL2_Label").innerHTML = VAL2_Name;
            document.getElementById("VAL3_Label").innerHTML = VAL3_Name;

            document.getElementById("VAL4_Label").innerHTML = VAL4_Name;
            document.getElementById("VAL5_Label").innerHTML = VAL5_Name;
            document.getElementById("VAL6_Label").innerHTML = VAL6_Name;

            drawCanvas("VAL1" ,vVAL1,10,"#3acb74");
            drawCanvas("VAL2" ,vVAL2,10,"#3a7ecb");
            drawCanvas("VAL3" ,vVAL3,10,"#cb3a3a");

            drawCanvas("VAL4" ,vVAL4,10,"#cb3a3a");
            drawCanvas("VAL5" ,vVAL5,10,"#cb3a3a");
            drawCanvas("VAL6" ,vVAL6,10,"#cb3a3a");
        }
    });setTimeout(() => show(), watingTime);
    
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
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise)
    context.lineWidth = 10;
    context.strokeStyle = COLOR;
    context.stroke();
}

}