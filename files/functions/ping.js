/* Scripted by Adobe Zev */

/* Requires */

/* Discord Requires */

let Discord = require(`discord.js`);
let {Client, Intents} = require(`discord.js`);
let client = new Client({ws: {intents: Intents.all}});

/* Functions */

function PingFunction(Message)
{

	let MessageReply = (Message.author.id == 776921360466313227 || 481601075607240716 ? `Pong! (69ms)||(${Date.now() - Message.createdTimestamp}ms)||` : `Pong! (${Date.now() - Message.createdTimestamp}ms)`);

	Message.channel.send(`${Message.author} ${MessageReply}`);

}

/* Exports */

module.exports = 
{
	Ping: function(Message)
	{
		PingFunction(Message);
	}
};