(this["webpackJsonptesting-ideas"]=this["webpackJsonptesting-ideas"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"connectionName",(function(){return r})),n.d(t,"connect",(function(){return i})),n.d(t,"writeData",(function(){return l})),n.d(t,"receiveData",(function(){return u}));var a=null,r="Nothing";function o(){alert("Disconnected")}function c(e){var t=e.target.value;console.log("value> ",t.getUint8(0))}function i(e,t){console.log("Searching Bluetooth Device...");var n={filters:[{services:[e]}]};navigator.bluetooth.requestDevice(n).then((function(e){return console.log("> Found "+e.name),r=e.name,console.log("Connecting to GATT Server... device",e),e.addEventListener("gattserverdisconnected",o),e.gatt.connect()})).then((function(t){return t.getPrimaryService(e)})).then((function(e){return e.getCharacteristic(t)})).then((function(e){return a=e,alert("Connected"),!0,a.startNotifications().then((function(e){console.log("> Notifications started"),a.addEventListener("characteristicvaluechanged",c)}))})).catch((function(e){console.log("Error! ",e)}))}function l(e){console.log("data to write",e);var t=new Uint8Array([e]);return a.writeValue([t]).catch((function(e){return console.log("Error when writing value! ",e)}))}function u(){a.readValue().then((function(e){var t=e.getUint8(0);console.log("Data received",t)})).catch((function(e){return console.log("Error when reading value! ",e)}))}},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=(n(9),n(1)),l=(n(10),n(11)),u="11";var s=function(){var e=Object(a.useState)("0000cafe-0000-1000-8000-00805f9b34fb"),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)("00000003-0000-1000-8000-00805f9b34fb"),s=Object(i.a)(c,2),f=s[0],v=s[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("label",null,"Version: 1"),r.a.createElement("br",null),r.a.createElement("label",null,"serviceUUID"),r.a.createElement("input",{value:n,onChange:function(e){o(e.target.value)}}),r.a.createElement("label",null,"charateristicUUID"),r.a.createElement("input",{value:f,onChange:function(e){v(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){l.connect(n,f)}},"SCAN"),r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){u=e.target.value}}),r.a.createElement("button",{onClick:function(){l.writeData(u)}},"Write Data")),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){l.receiveData()}},"Read Data")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.198ec350.chunk.js.map