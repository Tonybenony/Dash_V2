long AnalogVal1;
long AnalogVal2;
long AnalogVal3;
long AnalogVal4;
long AnalogVal5;
long AnalogVal6;
long AnalogVal7;
long AnalogVal8;

long DigitalVal1;
long DigitalVal2;
long DigitalVal3;
long DigitalVal4;
long DigitalVal5;
long DigitalVal6;
long DigitalVal7;
long DigitalVal8;
long DigitalVal9;
long DigitalVal10;
long DigitalVal11;

void setup() {
  Serial.begin(115200);
  randomSeed(analogRead(0));
}

void loop() {

AnalogVal1 = random(1024);
AnalogVal2 = random(1024);
AnalogVal3 = random(1024);
AnalogVal4 = random(1024);
AnalogVal5 = random(1024);
AnalogVal6 = random(1024);
AnalogVal7 = random(1024);
AnalogVal8 = random(1024);


DigitalVal1 =  random(0,2);
DigitalVal2 =  random(0,2);
DigitalVal3 =  random(0,2);
DigitalVal4 =  random(0,2);
DigitalVal5 =  random(0,2);
DigitalVal6 =  random(0,2);
DigitalVal7 =  random(0,2);
DigitalVal8 =  random(0,2);
DigitalVal9 =  random(0,2);
DigitalVal10 = random(0,2);
DigitalVal11 = random(0,2);

String p1=";";
Serial.println(
  AnalogVal1+p1+
  AnalogVal2+p1+
  AnalogVal3+p1+
  AnalogVal4+p1+
  AnalogVal5+p1+
  AnalogVal6+p1+
  AnalogVal7+p1+
  AnalogVal8+p1+
  DigitalVal1+p1+
  DigitalVal2+p1+
  DigitalVal3+p1+
  DigitalVal4+p1+
  DigitalVal5+p1+
  DigitalVal6+p1+
  DigitalVal7+p1+
  DigitalVal8+p1+
  DigitalVal9+p1+
  DigitalVal10+p1+
  DigitalVal11+p1  
  );
delay(50);
}
