import asyncio
import websockets
import serial

ser = serial.Serial('/dev/ttyUSB0', 115200)
# create handler for each connection
async def handler(websocket, path):
    Speed = ser.readline()
    Value = (Speed.decode())

    data = await websocket.recv()
    reply = Value
    await websocket.send(reply)
    ser.flushInput();ser.flushOutput()

start_server = websockets.serve(handler, "192.168.178.37", 9990)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
ser.close()




