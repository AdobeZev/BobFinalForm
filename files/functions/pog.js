/* Scripted by Adobe Zev */

/* Requires */

/* Discord Requires */

let Discord = require(`discord.js`);
let {Client, Intents} = require(`discord.js`);
let client = new Client({ws: {intents: Intents.all}});

/* Functions */

function PogFunction(Message)
{

	/* Calculate random */

	let RandomPog = Math.random();
	let PogFileMessage = (RandomPog > 0.2 ? `https://media1.tenor.com/images/3440eeba54af3eaf049ea411acc59e6a/tenor.gif?itemid=19308280` : `https://media1.tenor.com/images/fe80e9fbf5e756ba654f975ba0285c2c/tenor.gif?itemid=19293985`);

	Message.channel.send(`Ugh, fine! I guess you are my little pogchamp ${Message.author}. Come here.`, {files:[PogFileMessage]});

}

/* Exports */

module.exports = 
{
	Pog: function(Message)
	{
		PogFunction(Message);
	}
};