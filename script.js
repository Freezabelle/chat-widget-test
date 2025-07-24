// Fill in your Twitch Channel name (without @ of #)
const CHANNEL_NAME = "Freezabelle"; // <-- Change this to your Twitch channel name

const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true
  },
  channels: [ CHANNEL_NAME ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  const chat = document.getElementById("chat");

  const msg = document.createElement("div");
  msg.className = "message";
  msg.innerHTML = `<strong>${tags['display-name']}:</strong> ${message}`;

  chat.prepend(msg);

  // Limit the number of messages displayed to 20
  if (chat.children.length > 20) {
    chat.removeChild(chat.lastChild);
  }
});
