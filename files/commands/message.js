/* Scripted by Adobe Zev */

/* Requires */

/* Discord Requires */

let Discord = require(`discord.js`);
let {Client, Intents} = require(`discord.js`);
let client = new Client({ws: {intents: Intents.all}});

/* Functions */

module.exports = 
{
	/* Message Log */

	Log: function(Message, OldMessage = null, Created = true, Edited = false, Deleted = false)
	{
		let LogMessage = `\x1b[0m`
		+ `\x1b[36m${Message.author.tag}\x1b[0m | `
		+ (Message.guild != null ? ` \x1b[33m${Message.guild.name}\x1b[0m | \x1b[34m${Message.channel.name}\x1b[0m | ` : ` \x1b[33mDM\x1b[0m `)
		+ (Message.author.bot ? ` \x1b[33mBOT\x1b[0m ` : `` )
		+ (Created ? ` \x1b[32mNew\x1b[0m ` : ``)
		+ (Edited ? ` \x1b[32mEdited\x1b[0m ` : ``)
		+ (Deleted ? ` \x1b[32mDeleted\x1b[0m ` : ``)
		+ `\n`
		+ (Message.attachments.size > 0 ? `` : ``)
		+ (Created ? `\x1b[32m${Message.content}\x1b[0m ` : ``)
		+ (Deleted ? `\x1b[31m${Message.content}\x1b[0m ` : ``)
		+ (Edited ? `\x1b[31m${OldMessage.content}\x1b[0m \nVVVV \n\x1b[32m${Message.content}\x1b[0m ` : ``);

		console.log(LogMessage);
	},

	/* Check if Message Includes Prefix */

	IncludesPrefix: function(Message, Prefix)
	{
		return (Message.content.includes(Prefix) && Message.content.includes('http'));
	}

};