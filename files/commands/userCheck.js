/* Scripted by Adobe Zev */

/* Requires */

let fs = require('fs');

let CommandsGuildCheck = require(`./guildCheck.js`);

/* Discord Requires */

let Discord = require(`discord.js`);
let {Client, Intents} = require(`discord.js`);
let client = new Client({ws: {intents: Intents.all}});

/* Functions */

function BanCheckFunction(user, guild)
{

	/* Setup Guild Ban String */

	let GuildId = guild.id;
	let GuildBanJSON = null;

	/* Set up User Variables */

	let UserId = user.id;

	/* Check if Guild Exists (Add to own function later) */

	CommandsGuildCheck.GuildCheck(GuildId);

	/* Check for Banned JSON */
	
	GuildBanJSON = JSON.parse(fs.readFileSync(CommandsGuildCheck.BanCheck(GuildId)));

	/* Check if Banned JSON is larger than 0 */

	if (GuildBanJSON.length > 0)
	{

		/* Go through List to check if banned */

		for (i = 0; i < GuildBanJSON.length; i++)
		{

			/* Check if Guild Item is User */

			if (GuildBanJSON[i].id == UserId)
			{

				/* Return True */

				return true;

			}

		}

		/* Return false as no user in list matched the User */

		return false;

	}
	else
	{

		/* Return False because no one is banned */

		return false;
	}

}

/* Exports */

module.exports = 
{

	/* Ban Check */

	BanCheck: function(user, guild)
	{
		return BanCheckFunction(user, guild);
	}
	
};