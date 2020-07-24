var mqtt    = require('mqtt');
var client  = mqtt.connect("mqtt://test.mosquitto.org:1883",{clientId:"hiClient"});
client.on("connect",function(){	
console.log("connected");

client.end();
})
