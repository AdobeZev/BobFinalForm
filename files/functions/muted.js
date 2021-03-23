/* Scripted by Adobe Zev */

/* Requires */

let fs = require(`fs`);

let CommandsGuildCheck = require(`./../commands/guildCheck.js`);
let CommandsMessage = require(`./../commands/message.js`);

/* Discord Requires */

let Discord = require(`discord.js`);
let {Client, Intents} = require(`discord.js`);
let client = new Client({ws: {intents: Intents.all}});

/* Functions */

function MuteFunction(Message, MentionedUser)
{

	/* Get Muted Variables */

	let GuildString = CommandsGuildCheck.GuildCheck(Message.guild.id);
	let MuteString = CommandsGuildCheck.MuteCheck(Message.guild.id);

	/* Check if Directory Exists */

	if (fs.existsSync(GuildString) && fs.existsSync(MuteString))
	{

		/* Get Array */

		let MuteJSON = JSON.parse(fs.readFileSync(MuteString));

		/* Check if user has already been Muted */

		let UserMuted = false;

		if (MuteJSON.length > 0)
		{

			for (i = 0; i < MuteJSON.length; i++)
			{

				if (MuteJSON.id == MentionedUser.id)
				{

					UserMuted = true;
					break;

				}

			}

		}
		else
		{

			UserMuted = false;

		}

		if (UserMuted)
		{

			/* User Muted Reply */

			Message.channel.send(`${Message.author} ${MentionedUser.user.username} is already muted.`);
			return;

		}
		else
		{

			/* Find Time and Reason */

			let MessageSplit = CommandsMessage.Split(Message, ' ');

			if (MessageSplit.length >= 4)
			{

			}
			else
			{

				/* Doesn't meet all requirements */

				Message.channel.send(`${Message.author} the command doesn't meet all the requirments.\nMake sure to add a mention, Time Frame, and Reason in said order.`);
				return;

			}

		}

	}
	else
	{

		Message.channel.send(`Error: GMFM`);

	}

}

function UnMuteFunction(Message, MentionedUser)
{

}

/* Exports */

module.exports = 
{
	Mute: function(Message, MentionedUser)
	{
		MuteFunction(Message, MentionedUser);
	},

	UnMute: function(Message, MentionedUser)
	{
		 UnMuteFunction(Message, MentionedUser);
	}
};