'use strict';

let ledCharacteristic = null;
let poweredOn = false;
export let connectionName="Nothing"
function onConnected() {
  alert("Connected")

    poweredOn = true;
}

function onDisconnected() {
    alert("Disconnected")
}
function handleNotifications(event) {
  let value = event.target.value;
  console.log('value> ' ,value.getUint8(0));
  let a = [];
  // Convert raw data bytes to hex values just for the sake of showing something.
  // In the "real" world, you'd use data.getUint8, data.getUint16 or even
  // TextDecoder to process raw data bytes.
  // for (let i = 0; i < value.byteLength; i++) {
  //   a.push('0x' + ('00' + value.getUint8(i).toString(16)).slice(-2));
  // }
  // console.log('> ' + a.join(' '));
}

export function connect(serviceUUID,charateristicUUID) {
    console.log('Searching Bluetooth Device...');
    let options = {
       filters: [{services: [serviceUUID]},],
      // filters: [
      //   {services: ['heart_rate']},
      //   {services: [0x1802, 0x1803]},
      //   {services: ['c48e6067-5295-48d3-8d5c-0395f61792b1']},
      //   {name: 'ExampleName'},
      //   {namePrefix: 'Prefix'}
      // ],
      // optionalServices: ['0x2A04'],
      // acceptAllDevices: true
    }
    navigator.bluetooth.requestDevice(options)
        .then(device => {
            console.log('> Found ' + device.name);
            connectionName=device.name
            console.log('Connecting to GATT Server... device',device);
            device.addEventListener('gattserverdisconnected', onDisconnected)
            
            return device.gatt.connect();
        })
        .then(server => {
            return server.getPrimaryService(serviceUUID);//"0000180f-0000-1000-8000-00805f9b34fb"
        })
        .then(service => {
            return service.getCharacteristic(charateristicUUID);//00002a19-0000-1000-8000-00805f9b34fb
        })
        .then(characteristic => {
            ledCharacteristic = characteristic;
            onConnected();
            return ledCharacteristic.startNotifications().then(_ => {
              console.log('> Notifications started');
              ledCharacteristic.addEventListener('characteristicvaluechanged',
                  handleNotifications);
            });
        })
        .catch(error => {
            console.log('Error! ', error);
        });
}




export function writeData(data) { //write the characteristic value
  console.log("data to write", data)
  let data2 = new Uint8Array([data]);
  return ledCharacteristic.writeValue([data2])
      .catch(err => console.log('Error when writing value! ', err));
}
export function receiveData() { //write the characteristic value
  ledCharacteristic.readValue()
  .then(data => {
    let value = data.getUint8(0);
    console.log('Data received',value);

}).catch(err => console.log('Error when reading value! ', err));
}
