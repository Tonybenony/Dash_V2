
ipaddress="192.168.178.37"
port="9990"

const Tables = ["StatusBit1","StatusBit2","StatusBit4","StatusBit5","StatusBit6","StatusBit7","StatusBit8","StatusBit9","StatusBit10","StatusBit11"];
const Names = ["Batt", "Vol","test","StatusBit5","StatusBit6","StatusBit7","StatusBit8","StatusBit9","StatusBit10","StatusBit11"];

watingTime= 100;

function load(){
    ScreenWidth();
    SetStatusBitID();
    show();
};

function ScreenWidth(){
    var ScreenWidth = window.screen.width+"px";
    var ScreenHeight = window.screen.height+"px";  
    document.getElementsByTagName("html")[0].style.width = ScreenWidth;
    document.getElementsByTagName("html")[0].style.height = ScreenHeight;
};

function SetStatusBitID(){ 
    var StatusBitLenght = document.getElementsByClassName("status").length;
    for (let i = 0; i < StatusBitLenght; i++) {document.getElementsByClassName("status")[i].id = "bit_"+(i+1);}

    var StatusBitLenght = document.getElementsByClassName("status_number").length;
    for (let i = 0; i < StatusBitLenght; i++) {document.getElementsByClassName("status_number")[i].innerHTML = (i+1)+".";}

    var LabelLenght =     document.getElementsByClassName("Label").length;
    for (let i = 0; i < LabelLenght; i++) {document.getElementsByClassName("Label")[i].id = "VAL"+(i+1)+"_Label";}

}

function show(){
    const socket = new WebSocket('ws://'+ipaddress+':'+port);socket.addEventListener('open',function (event) {socket.send('Connection Established');});
    socket.addEventListener('message',
    function (event) {
        val = event.data;
        valSort = val.replace(/(\r\n|\n|\r)/gm,"");
        let numArray = valSort.split(";");
        input_lenght = numArray.length
        if (input_lenght < 20){
            console.debug("kleiner 20.\n Eingaben und wird verworfen")
        }else{
            var StatusBitLenght = document.getElementsByClassName("status").length;
            for (let i = 0; i < StatusBitLenght; i++) {
                Tables[i] =  numArray[(i+8)];
                // console.log(StatusBitLenght);
                // console.log(Tables[i]);
                document.getElementById("VAL"+(i+1)+"_Label").innerHTML = Names[i];  
                if (Tables[i] === "1") {document.getElementsByClassName("status")[i].style.background = "radial-gradient(var(--green) 40%,black 100%)";};
                if (Tables[i] === "0") {document.getElementsByClassName("status")[i].style.background = "radial-gradient(var(--red) 40%,black 100%)";}        
            }
        }
    });setTimeout(() => show(), watingTime);
}