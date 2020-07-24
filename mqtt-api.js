// // Called after form input is processed
// function startConnect() {
//     // Generate a random client ID
//     clientID = "clientID-" + parseInt(Math.random() * 100);

//     // Fetch the hostname/IP address and port number from the form
//     topic = document.getElementById("topic").value;
//     when = document.getElementById("when").value;
//     what = document.getElementById("what").value;
//     who = document.getElementById("who").value;
//     where = document.getElementById("where").value;
//     why = document.getElementById("why").value;

//     // Print output for the user in the messages div
//     document.getElementById("messages").innerHTML += '<span>Pada tanggal ' + when + ' telah dilakukan kegiatan ' + what + ' .Kegiatan ' + topic + ' dilaksanakan di ' + where + ' yang diikuti oleh ' + who +'</span><br/>';
//     document.getElementById("messages").innerHTML += '<span>Tujuan dari dilakukan kegiatan ini adalah agar ' + why + '</span><br/>';

//     // Initialize new Paho client connection
//     client = new Paho.MQTT.Client(host, Number(port), clientID);

//     // Set callback handlers
//     client.onConnectionLost = onConnectionLost;
//     client.onMessageArrived = onMessageArrived;

//     // Connect the client, if successful, call onConnect function
//     client.connect({ 
//         onSuccess: onConnect,
//     });
// }

// // Called when the client loses its connection
// function onConnectionLost(responseObject) {
//     console.log("onConnectionLost: Connection Lost");
//     if (responseObject.errorCode !== 0) {
//         console.log("onConnectionLost: " + responseObject.errorMessage);
//     }
// }

// // Called when a message arrives
// function onMessageArrived(message) {
//     console.log("onMessageArrived: " + message.payloadString);
//     document.getElementById("messages").innerHTML += '<span>Topic: ' + message.destinationName + '  | ' + message.payloadString + '</span><br/>';
//     updateScroll(); // Scroll to bottom of window
// }

// // Called when the disconnection button is pressed
// function startDisconnect() {
//     client.disconnect();
//     document.getElementById("messages").innerHTML += '<span>Disconnected</span><br/>';
//     updateScroll(); // Scroll to bottom of window
// }

// // Updates #messages div to auto-scroll
// function updateScroll() {
//     var element = document.getElementById("messages");
//     element.scrollTop = element.scrollHeight;
// }