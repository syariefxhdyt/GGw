const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const { Client } = require('discord.js-commando')
const path = require('path')


const client = new Client({
    commandPrefix: '.',
    owner: '634456486046859315', // can be an array of ids like: owner: ["id", "id"]
    invite: 'https://discord.gg/PxVmuZc',
})




client.registry
.registerDefaultTypes()
.registerGroups([
    ['misc', 'Misc'],
])
.registerDefaultGroups()
.registerDefaultCommands()
.registerCommandsIn(path.join(__dirname, 'commands'))

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}(${client.user.id})`)
    client.user.setActivity('Welcome To HALU🌛!!')
})

client.on('error', console.error)


client.login('NjUzNTQxOTgwNjkyODA3Njgx.XfEH5Q.peMTVlBR9lurLeGfGoQ8KMhwBJw')
