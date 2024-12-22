int AnalogPin1 = A0;
int AnalogVal1 = 0; 

int AnalogPin2 = A1;
int AnalogVal2 = 0; 

int AnalogPin3 = A2;
int AnalogVal3 = 0; 

int AnalogPin4 = A3;
int AnalogVal4 = 0; 

int AnalogPin5 = A4;
int AnalogVal5 = 0; 

int AnalogPin6 = A5;
int AnalogVal6 = 0; 

int AnalogPin7 = A6;
int AnalogVal7 = 0; 

int AnalogPin8 = A7;
int AnalogVal8 = 0; 

int DigitalPin1 = 12;int DigitalVal1 = 0;
int DigitalPin2 = 11;int DigitalVal2 = 0;
int DigitalPin3 = 10;int DigitalVal3 = 0;
int DigitalPin4 = 9;int DigitalVal4 = 0;
int DigitalPin5 = 8;int DigitalVal5 = 0;
int DigitalPin6 = 7;int DigitalVal6 = 0;
int DigitalPin7 = 6;int DigitalVal7 = 0;
int DigitalPin8 = 5;int DigitalVal8 = 0;
int DigitalPin9 = 4;int DigitalVal9 = 0;
int DigitalPin10 = 3;int DigitalVal10 = 0;
int DigitalPin11 = 2;int DigitalVal11 = 0;

void setup() {
  pinMode(DigitalPin1, INPUT);digitalWrite(DigitalPin1, LOW);
  pinMode(DigitalPin2, INPUT);digitalWrite(DigitalPin2, LOW);
  pinMode(DigitalPin3, INPUT);digitalWrite(DigitalPin3, LOW);
  pinMode(DigitalPin4, INPUT);digitalWrite(DigitalPin4, LOW);
  pinMode(DigitalPin5, INPUT);digitalWrite(DigitalPin5, LOW);
  pinMode(DigitalPin6, INPUT);digitalWrite(DigitalPin6, LOW);
  pinMode(DigitalPin7, INPUT);digitalWrite(DigitalPin7, LOW);
  pinMode(DigitalPin8, INPUT);digitalWrite(DigitalPin8, LOW);
  pinMode(DigitalPin9, INPUT);digitalWrite(DigitalPin9, LOW);
  pinMode(DigitalPin10, INPUT);digitalWrite(DigitalPin10, LOW);
  pinMode(DigitalPin11, INPUT);digitalWrite(DigitalPin11, LOW);

  Serial.begin(9600);
}

void loop() {

AnalogVal1 = analogRead(AnalogPin1);
AnalogVal2 = analogRead(AnalogPin2);
AnalogVal3 = analogRead(AnalogPin3);
AnalogVal4 = analogRead(AnalogPin4);
AnalogVal5 = analogRead(AnalogPin5);
AnalogVal6 = analogRead(AnalogPin6);
AnalogVal7 = analogRead(AnalogPin7);
AnalogVal8 = analogRead(AnalogPin8);

DigitalVal1 = digitalRead(DigitalPin1);
DigitalVal2 = digitalRead(DigitalPin2);
DigitalVal3 = digitalRead(DigitalPin3);
DigitalVal4 = digitalRead(DigitalPin4);
DigitalVal5 = digitalRead(DigitalPin5);
DigitalVal6 = digitalRead(DigitalPin6);
DigitalVal7 = digitalRead(DigitalPin7);
DigitalVal8 = digitalRead(DigitalPin8);
DigitalVal9 = digitalRead(DigitalPin9);
DigitalVal10 = digitalRead(DigitalPin10);
DigitalVal11 = digitalRead(DigitalPin11);

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
delay(150);
}
