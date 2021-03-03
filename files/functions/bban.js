/* Scripted by Adobe Zev */

/* Requires */

let fs = require(`fs`);

let CommandsGuildCheck = require(`./../commands/guildCheck.js`);
let CommandsMessage = require(`./../commands/message.js`);
let CommandsUserCheck = require(`./../commands/userCheck.js`);

/* Discord Requires */

let Discord = require(`discord.js`);
let {Client, Intents} = require(`discord.js`);
let client = new Client({ws: {intents: Intents.all}});

/* Functions */

function BbanFunction(Message, MentionedUser)
{
	/* Check if Message Author has Admin */

	if (Message.member.hasPermission(`ADMINISTRATOR`) == false)
	{
		Message.channel.send(`${Message.author}, Ban is not a command!`);
		return;
	}

	/* Get Files */

	let GuildString = CommandsGuildCheck.GuildCheck(Message.guild.id);
	let GuildBanString = CommandsGuildCheck.BanCheck(Message.guild.id);

	if (GuildString == null || GuildBanString == null)
	{
		console.log(`Guild or Guild Ban doesn't exist`);
		return;
	}

	/* Find Files */

	let GuildBanJSON = JSON.parse(fs.readFileSync(GuildBanString));

	/* Find mentioned user (Make function for message.js) */

	if (MentionedUser == null)
	{
		
		Message.channel.send(`${Message.author} command requires mention.`);
		return;

	}
	else if (MentionedUser == Message.member)
	{
		Message.channel.send(`${Message.author} you cannot ban yourself!`);
		return;
	}
	else if (MentionedUser.user.bot)
	{
		Message.channel.send(`${Message.author} you cannot ban a bot!`);
		return;
	}
	else if (MentionedUser.hasPermission(`ADMINISTRATOR`))
	{
		Message.channel.send(`${Message.author} you cannot ban an admin.`);
		return;
	}

	if (GuildBanJSON.length > 0)
	{

		/* Check if User is already banned */

		for (i = 0; i < GuildBanJSON.length; i++)
		{

			let BanId = GuildBanJSON[i].id;

			if (BanId == MentionedUser.id)
			{
				Message.channel.send(`${Message.author}, ${MentionedUser.tag} is already banned!`);
				return;
			}

		}

	}

	/* Ban user */

	let BannedUserArray = {id : MentionedUser.id, Banner : Message.author.id};
	GuildBanJSON.push(BannedUserArray);

	fs.writeFileSync(GuildBanString, JSON.stringify(GuildBanJSON));

	/* Log to channel */

	Message.channel.send(`${Message.author} banned ${MentionedUser.user.tag}`);

}

function UnBbanFunction(Message, MentionedUser)
{

	/* Check if Author has Admin */

	if (Message.member.hasPermission(`ADMINISTRATOR`) == false)
	{

		Message.channel.send(`${Message.author} Unban is not a command!`);
		return;

	}

	/* Get FIles */

	let GuildString = CommandsGuildCheck.GuildCheck(Message.guild.id);
	let GuildBanString = CommandsGuildCheck.BanCheck(Message.guild.id);

	if (GuildString == null || GuildBanString == null)
	{
		console.log(`Guild or Guild Ban doesn't exist`);
		return;
	}

	/* Find Files */

	let GuildBanJSON = JSON.parse(fs.readFileSync(GuildBanString));

	/* Find mentioned user (Make function for message.js) */

	if (MentionedUser == null)
	{
		
		Message.channel.send(`${Message.author} command requires mention.`);
		return;

	}
	else if (MentionedUser == Message.member)
	{
		Message.channel.send(`${Message.author} you cannot ban yourself!`);
		return;
	}
		else if (MentionedUser.user.bot)
	{
		Message.channel.send(`${Message.author} you cannot ban a bot.`);
		return;
	}
	else if (MentionedUser.hasPermission(`ADMINISTRATOR`))
	{
		Message.channel.send(`${Message.author} you cannot ban an admin.`);
		return;
	}

	/* Check if GuildBan is larger than 0 */

	if (GuildBanJSON.length > 0)
	{

		for (i = 0; i < GuildBanJSON.length; i++)
		{

			let GuildBannedId = GuildBanJSON[i].id;

			if (GuildBannedId == MentionedUser.id)
			{

				/* Un Ban User */

				GuildBanJSON.splice(i, 1);
				fs.writeFileSync(GuildBanString, JSON.stringify(GuildBanJSON));

				Message.channel.send(`${Message.author} has unbanned ${MentionedUser.user.tag}!`);
				return;

			}

		}

	}
	else
	{

		Message.channel.send(`${Message.author} No one is banned.`);
		return;

	}

}

function BbannedFunction(Message, MentionedUser)
{

	/* Check if banned */

	if (CommandsUserCheck.BanCheck(MentionedUser, Message.guild))
	{
		Message.channel.send(`${MentionedUser.user.tag} is banned!`);
	}
	else
	{
		Message.channel.send(`${MentionedUser.user.tag} is not banned.`);
	}

}

/* Exports */

module.exports = 
{
	Bban: function(Message, MentionedUser)
	{
		BbanFunction(Message, MentionedUser);
	},

	UnBban: function(Message, MentionedUser)
	{
		UnBbanFunction(Message, MentionedUser);
	},

	Bbanned: function(Message, MentionedUser)
	{
		BbannedFunction(Message, MentionedUser);
	}
};