/* Scripted by Adobe Zev */

/* Requires */

/* Discord Requires */

let Discord = require(`discord.js`);
let {Client, Intents} = require(`discord.js`);
let client = new Client({ws: {intents: Intents.all}});

/* Functions */

function MeatFunction(Message)
{

	Message.channel.send('', {files:[`https://media1.tenor.com/images/a27d34a9448bfb0082f87e9285b08198/tenor.gif?itemid=16091188`]});

}

/* Exports */

module.exports = 
{
	Meat: function(Message)
	{
		MeatFunction(Message);
	}
};