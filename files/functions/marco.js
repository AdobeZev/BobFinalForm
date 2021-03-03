/* Scripted by Adobe Zev */

/* Requires */

/* Discord Requires */

let Discord = require(`discord.js`);
let {Client, Intents} = require(`discord.js`);
let client = new Client({ws: {intents: Intents.all}});

/* Functions */

function MarcoFunction(Message)
{
	Message.channel.send(`Polo!`);
}

/* Exports */

module.exports = 
{
	Marco: function(Message)
	{
		MarcoFunction(Message);
	}
};