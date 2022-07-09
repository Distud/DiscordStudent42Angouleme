const { Client, Intents, Message, MessageActionRow, MessageSelectMenu, ModalSubmitFieldsResolver } = require('discord.js');
const client = new Client({intents : 32767});
const config = require('./config.json');

client.on('ready', () => {
  console.log("bot successfully fired");
});

client.login(config.token);
