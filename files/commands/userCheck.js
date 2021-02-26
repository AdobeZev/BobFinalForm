/* Scripted by Adobe Zev */

/* Requires */

let fs = require('fs');

/* Discord Requires */

let Discord = require(`discord.js`);
let {Client, Intents} = require(`discord.js`);
let client = new Client({ws: {intents: Intents.all}});

/* Functions */

module.exports = 
{

	/* Ban Check */

	BanCheck: function(user, guild)
	{

		/* Setup Guild Ban String */

		let GuildId = guild.id;
		let GuildBanString = `./guilds/${GuildId}/banned.json`;
		let GuildBanJSON = null;

		/* Set up User Variables */

		let UserId = user.id;

		/* Check for Banned JSON */
		
		if (fs.existsSync(GuildBanString))
		{

			/* Get File */

			GuildBanJSON = JSON.parse(fs.readFileSync(GuildBanString));
		}
		else
		{

			/* Create File */

			GuildBanJSON = [];
			fs.writeFileSync(GuildBanJSON, GuildBanString);
		}

		/* Check if Banned JSON is larger than 0 */

		if (GuildBanJSON.length > 0)
		{

			/* Go through List to check if banned */

			for (i = 0; i < GuildBanJSON.length; i++)
			{

				/* Check if Guild Item is User */

				if (GUildBanJSON[i].UserId == UserId)
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
	
};