const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	//	TODO: 
	//	Grab list of players to track from server
	//	Start ping loop with server
});

client.on('message', message => {
	//	TODO:
	//	Check author of message against user list, deal accordingly
});

client.on('guildBanAdd', (guild, user) => {
	//	TODO:
	//	Check user against user list
});

client.on('guildDelete', guild => {
	//	TODO:
	//	Update user data from the guild
});

client.on('channelCreate', channel => { });
client.on('emojiCreate', emoji => { });
client.on('guildMemberAdd', member => { });

client.login('');