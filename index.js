/* Scripted by AdobeZev */

/* Requires */

require('dotenv').config();

let CommandsMessage = require('./files/commands/message.js');
let CommandsUserCheck = require('./files/commands/userCheck.js');

/* Discord Requires */

let Discord = require(`discord.js`);
let {Client, Intents} = require(`discord.js`);
let client = new Client({ws: {intents: Intents.all}});

/* Variables */

let Prefix = '&'

/* Functions */

/* On Ready */

client.on('ready', () =>
{

	/* Log Ready */

	console.log(`${client.user.tag} has ASCENDED.`);

});

/* On Message */

client.on(`message`, (Message) => 
{

	/* Log Message */

	CommandsMessage.Log(Message);

	if (CommandsMessage.IncludesPrefix(Message, Prefix))
	{
		
	}

});

/* On Message Edit */

client.on(`messageUpdate`, (OldMessage, NewMessage) => 
{

	/* Log Message */

	CommandsMessage.Log(NewMessage, OldMessage, false, true);

});

/* On Message Delete */

client.on('messageDelete', (Message) =>
{

	/* Log Message */

	CommandsMessage.Log(Message, null, false, false, true);

});

/* Edited User */

client.on('guildMemberUpdate', (OldMember, NewMember) => 
{

});

/* Login */

client.login(process.env.DISCORD_TOKEN);