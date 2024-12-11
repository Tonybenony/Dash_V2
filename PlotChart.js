
ipaddress="192.168.178.37"
port="9990"

i=0;
count=10;
itemCount = 50;

const time = [];
const temp = [];
const humidity = [];
const Batterie = [];

function load(){ScreenWidth();show();};
function ScreenWidth(){var ScreenWidth = window.screen.width+"px";var ScreenHeight = window.screen.height+"px";document.getElementsByTagName("html")[0].style.width = ScreenWidth;document.getElementsByTagName("html")[0].style.height = ScreenHeight;};
function show(){const socket = new WebSocket('ws://'+ipaddress+':'+port);socket.addEventListener('open',function (event) {socket.send('Connection Established');});
    socket.addEventListener('message',
    function (event) {
        val = event.data
        valSort = val.replace(/(\r\n|\n|\r)/gm,"");
        let numArray = valSort.split(";");

        item1 =  numArray[0];
        item2 =  numArray[1];
        item3 =  numArray[2];
        item4 =  numArray[3];
        item5 =  numArray[4];

        Batt1 = (item1/620)*12;vBatt1 = Batt1.toFixed(2); 
        Batt2 = (item2/620)*12;vBatt2 = Batt2.toFixed(2);
        Batt3 = (item3/620)*12;vBatt3 = Batt3.toFixed(2);

        document.getElementsByTagName("graph")[0].getElementsByTagName("value")[0].innerHTML = vBatt1 + "  V";
        document.getElementsByTagName("graph")[1].getElementsByTagName("value")[0].innerHTML = vBatt2 + "  V";
        document.getElementsByTagName("graph")[2].getElementsByTagName("value")[0].innerHTML = vBatt3 + "  V";
        
        //console.debug(numArray);

        drawCanvas("Batterie"   ,vBatt1,10,"#3acb74");
        drawCanvas("Batterie" ,vBatt2,10,"#3a7ecb");
        drawCanvas("Batterie"  ,vBatt3,10,"#cb3a3a");

        console.debug(i);
        if (i == "0"){
            temp.push(vBatt1);
            humidity.push(vBatt2);
            Batterie.push(vBatt3);

            const now = new Date();
            const year = now.getFullYear();
            const day = now.getDay()+3;
            const month = now.getMonth() +1;
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            time.push(
                // year + "-" + month + "-" + day + " " + 
                hours + ":" + minutes + ":" + seconds);

            lineChart(
                time[0],time[1],time[2],time[3],time[4],time[5],time[6],time[7],time[8],time[9],
                time[10],time[11],time[12],time[13],time[14],time[15],time[16],time[17],time[18],time[19],
                time[20],time[21],time[22],time[23],time[24],time[25],time[26],time[27],time[28],time[29],
                time[30],time[31],time[32],time[33],time[34],time[35],time[36],time[37],time[38],time[39],
                time[40],time[41],time[42],time[43],time[44],time[45],time[46],time[47],time[48],time[49],

                temp[0],temp[1],temp[2],temp[3],temp[4],temp[5],temp[6],temp[7],temp[8],temp[9],
                temp[10],temp[11],temp[12],temp[13],temp[14],temp[15],temp[16],temp[17],temp[18],temp[19],
                temp[20],temp[21],temp[22],temp[23],temp[24],temp[25],temp[26],temp[27],temp[28],temp[29],
                temp[30],temp[31],temp[32],temp[33],temp[34],temp[35],temp[36],temp[37],temp[38],temp[39],
                temp[40],temp[41],temp[42],temp[43],temp[44],temp[45],temp[46],temp[47],temp[48],temp[49],

                humidity[0],humidity[1],humidity[2],humidity[3],humidity[4],humidity[5],humidity[6],humidity[7],humidity[8],humidity[9],
                humidity[10],humidity[11],humidity[12],humidity[13],humidity[14],humidity[15],humidity[16],humidity[17],humidity[18],humidity[19],
                humidity[20],humidity[21],humidity[22],humidity[23],humidity[24],humidity[25],humidity[26],humidity[27],humidity[28],humidity[29],
                humidity[30],humidity[31],humidity[32],humidity[33],humidity[34],humidity[35],humidity[36],humidity[37],humidity[38],humidity[39],
                humidity[40],humidity[41],humidity[42],humidity[43],humidity[44],humidity[45],humidity[46],humidity[47],humidity[48],humidity[49],

                Batterie[0],Batterie[1],Batterie[2],Batterie[3],Batterie[4],Batterie[5],Batterie[6],Batterie[7],Batterie[8],Batterie[9],
                Batterie[10],Batterie[11],Batterie[12],Batterie[13],Batterie[14],Batterie[15],Batterie[16],Batterie[17],Batterie[18],Batterie[19],
                Batterie[20],Batterie[21],Batterie[22],Batterie[23],Batterie[24],Batterie[25],Batterie[26],Batterie[27],Batterie[28],Batterie[29],
                Batterie[30],Batterie[31],Batterie[32],Batterie[33],Batterie[34],Batterie[35],Batterie[36],Batterie[37],Batterie[38],Batterie[39],
                Batterie[40],Batterie[41],Batterie[42],Batterie[43],Batterie[44],Batterie[45],Batterie[46],Batterie[47],Batterie[48],Batterie[49]
            );
        };

        i++;            
        if (i > count){
            i = 0;
        
            timelenght = time.length;
            tlenght = temp.length;
            hlenght = humidity.length;
            ilenght = Batterie.length;

            if(timelenght   > itemCount){time.splice(0,1, time[49]);time.splice(1,1, time[49]);time.length=2;}
            if(tlenght      > itemCount){temp.splice(0,1, temp[49]);temp.splice(1,1, temp[49]);temp.length=2;}
            if(hlenght      > itemCount){humidity.splice(0,1, humidity[49]);humidity.splice(1,1, humidity[49]);humidity.length=2;}
            if(ilenght      > itemCount){Batterie.splice(0,1, Batterie[49]);Batterie.splice(1,1, Batterie[49]);Batterie.length=2;}
            // console.log(temp.length);
        }


    });
    function lineChart(
        T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,
        T11,T12,T13,T14,T15,T16,T17,T18,T19,T20,
        T21,T22,T23,T24,T25,T26,T27,T28,T29,T30,
        T31,T32,T33,T34,T35,T36,T37,T38,T39,T40,
        T41,T42,T43,T44,T45,T46,T47,T48,T49,T50,

        V1,V2,V3,V4,V5,V6,V7,V8,V9,V10,
        V11,V12,V13,V14,V15,V16,V17,V18,V19,V20,
        V21,V22,V23,V24,V25,V26,V27,V28,V29,V30,
        V31,V32,V33,V34,V35,V36,V37,V38,V39,V40,
        V41,V42,V43,V44,V45,V46,V47,V48,V49,V50,

        VB1,VB2,VB3,VB4,VB5,VB6,VB7,VB8,VB9,VB10,
        VB11,VB12,VB13,VB14,VB15,VB16,VB17,VB18,VB19,VB20,
        VB21,VB22,VB23,VB24,VB25,VB26,VB27,VB28,VB29,VB30,
        VB31,VB32,VB33,VB34,VB35,VB36,VB37,VB38,VB39,VB40,
        VB41,VB42,VB43,VB44,VB45,VB46,VB47,VB48,VB49,VB50,

        VC1,VC2,VC3,VC4,VC5,VC6,VC7,VC8,VC9,VC10,
        VC11,VC12,VC13,VC14,VC15,VC16,VC17,VC18,VC19,VC20,
        VC21,VC22,VC23,VC24,VC25,VC26,VC27,VC28,VC29,VC30,
        VC31,VC32,VC33,VC34,VC35,VC36,VC37,VC38,VC39,VC40,
        VC41,VC42,VC43,VC44,VC45,VC46,VC47,VC48,VC49,VC50
    )
    {
        const xValues = [
            T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,
            T11,T12,T13,T14,T15,T16,T17,T18,T19,T20,
            T21,T22,T23,T24,T25,T26,T27,T28,T29,T30,
            T31,T32,T33,T34,T35,T36,T37,T38,T39,T40,
            T41,T42,T43,T44,T45,T46,T47,T48,T49,T50
        ];
    new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
        data: [
            V1,V2,V3,V4,V5,V6,V7,V8,V9,V10,
            V11,V12,V13,V14,V15,V16,V17,V18,V19,V20,
            V21,V22,V23,V24,V25,V26,V27,V28,V29,V30,
            V31,V32,V33,V34,V35,V36,V37,V38,V39,V40,
            V41,V42,V43,V44,V45,V46,V47,V48,V49,V50
        ],
        borderColor: "#c5338b",
        backgroundColor: "#c5338b53",
        label: "Temperature",
        fill: true
        },
        {
        data: [
            VB1,VB2,VB3,VB4,VB5,VB6,VB7,VB8,VB9,VB10,
            VB11,VB12,VB13,VB14,VB15,VB16,VB17,VB18,VB19,VB20,
            VB21,VB22,VB23,VB24,VB25,VB26,VB27,VB28,VB29,VB30,
            VB31,VB32,VB33,VB34,VB35,VB36,VB37,VB38,VB39,VB40,
            VB41,VB42,VB43,VB44,VB45,VB46,VB47,VB48,VB49,VB50
        ],
        borderColor: "#c58133",
        backgroundColor: "#c5813353",
        label: "Humidity",
        fill: true
        },
        {
        data: [
            VC1,VC2,VC3,VC4,VC5,VC6,VC7,VC8,VC9,VC10,
            VC11,VC12,VC13,VC14,VC15,VC16,VC17,VC18,VC19,VC20,
            VC21,VC22,VC23,VC24,VC25,VC26,VC27,VC28,VC29,VC30,
            VC31,VC32,VC33,VC34,VC35,VC36,VC37,VC38,VC39,VC40,
            VC41,VC42,VC43,VC44,VC45,VC46,VC47,VC48,VC49,VC50
        ],
        borderColor: "#33c5c5",
        backgroundColor: "#33c5c553",
        label: "Batterie",
        fill: true
        }]
    },options: {legend: {display: true}, animation: {duration: 0}}});
    }
    function drawCanvas(ELEMENT,VALUE,MAXVALUE, COLOR){var endAngle = VALUE/MAXVALUE * Math.PI;var canvas = document.getElementById(ELEMENT);var counterClockwise = false;var context = canvas.getContext('2d');var x = canvas.width / 2;var y = canvas.height / 2;var radius = 65;var startAngle = 0;context.clearRect(0,0,canvas.width,canvas.height);context.beginPath();context.arc(x, y, radius, startAngle, endAngle, counterClockwise);context.lineWidth = 10;context.strokeStyle = COLOR;context.stroke();
    };setTimeout(() => show(), 30);
}