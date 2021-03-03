/* Scripted by Adobe Zev */

/* Requires */

let fs = require('fs');

/* Discord Requires */

let Discord = require(`discord.js`);
let {Client, Intents} = require(`discord.js`);
let client = new Client({ws: {intents: Intents.all}});

/* Functions */

/* Guild Check Function */

function GuildCheckFunction(GuildID)
{

	/* Guild Check Variables */

	let GuildString = `./guilds/${GuildID}/`;

	/* Check if Directory Exists */

	if (fs.existsSync(GuildString))
	{

		/* Give Path if exists */

		return GuildString;
	}
	else
	{

		/* Make Directory than Give Path */

		fs.mkdirSync(GuildString);
		return GuildString;

	}

}

/* Ban Check Function */

function BanCheckFunction(GuildID)
{

	/* Ban Check Variables */

	let GuildString = GuildCheckFunction(GuildID);
	let BanString = GuildString + `banned.json` ;

	/* Check if File Exists */

	if (fs.existsSync(BanString))
	{

		/* File Exists */

		return BanString;

	}
	else
	{

		/* File Doesn't Exist */

		fs.appendFileSync(BanString, JSON.stringify([]), function(err)
		{
			if (err) throw err;
		});

	}

}

/* Mute Check Function */

function MuteCheckFunction(GuildID)
{

	/* Mute Check Variable */

	let GUildString = GuildCheckFunction(GuildID)
	let MuteString = GuildString + 'muted.json';

	/* Check if File Exists */

	if (fs.existsSync(MuteString))
	{

		/* Return Path */

		return MuteString;

	}
	else
	{
		fs.appendFileSync(MuteString, JSON.stringify([]), function(err)
		{
			if (err) throw err;
		});
	}

}

function MurderCheckFunction(GuildID)
{

	/* Murder Check Variable */

	let GuildString = GuildCheckFunction(GuildID);
	let MurderString = GuildString + `murdered.json`;

	/* Check if File Exists */

	if (fs.existsSync(MurderString))
	{

		/* Return Path */

		return MurderString;

	}
	else
	{

		fs.appendFileSync(MurderString, JSON.stringify([]), function(err)
		{

			if (err) throw err;

		})

	}

}

/* Exports */

module.exports = 
{

	/* Guild Check */

	GuildCheck: function(GuildID)
	{
		return GuildCheckFunction(GuildID);
	},

	/* Ban Check */

	BanCheck: function(GuildID)
	{
		return BanCheckFunction(GuildID);
	},

	/* Mute Check */
	
	MuteCheck: function(GuildID)
	{
		return MuteCheckFunction(GuildID);
	},

	MurderCheck: function(GuildID)
	{
		return MurderCheckFunction(GuildID);
	}

};