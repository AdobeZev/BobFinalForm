/* Scripted by Adobe Zev */

/* Requires */

let fs = require(`fs`);

let CommandsGuildCheck = require(`./../commands/guildCheck.js`);

/* Discord Requires */

let Discord = require(`discord.js`);
let {Client, Intents} = require(`discord.js`);
let client = new Client({ws: {intents: Intents.all}});

/* Functions */

function KillFunction(Message, FirstMention = null)
{

	/* Check if First Mention is not Null */

	let MurderUser = null;
	let MurderUserName = null;

	if (FirstMention == null)
	{
		MurderUser = Message.member.id;
		MurderUserName = Message.member.user.username;
	}
	else
	{
		MurderUser = FirstMention.id;
		MurderUserName = FirstMention.user.username;
	}

	/* Find Files */

	let GuildString = CommandsGuildCheck.GuildCheck(Message.guild.id);
	let MurderString = CommandsGuildCheck.MurderCheck(Message.guild.id);

	if (GuildString == null || MurderString == null)
	{

		console.log(`Guild or Guild Murdered is not a directory!`);
		return;

	}

	/* Get Files */

	let MurderJSON = JSON.parse(fs.readFileSync(MurderString));

	/* Check if MurderUser is dead */

	if (MurderJSON.length > 0)
	{

		/* Variables */

		let FoundUser = false;

		for (i = 0; i < MurderJSON.length; i++)
		{

			if (MurderJSON[i].id == MurderUser)
			{

				FoundUser = true;
				break;

			}

		}

		/* Check if found */

		if (FoundUser)
		{

			/* Check if murder user is the author */

			if (MurderUser == Message.author.id)
			{

				Message.channel.send(`${Message.author}, you cannot die. You are already dead.`);

			}
			else
			{

				Message.channel.send(`${Message.author}, ${MurderUser.username} is already dead!`);

			}

			return;

		}

		/* Add user to list */

		MurderJSON.push({id : MurderUser});

		fs.writeFileSync(MurderString, JSON.stringify(MurderJSON));

		/* Log kill */

		if (MurderUser == Message.author.id)
		{

			let RandomMessage = Math.round(Math.random() * 10) / 10;

			let LogString = `${Message.author} `
			+ (RandomMessage == 0 ? `Mistakes were made.` : ``)
			+ (RandomMessage == 0.1 ? `You've jumped. Hope you enjoy hell.` : ``)
			+ (RandomMessage == 0.2 ? `Does you heart feel good now that you've stabbed it?` : ``)
			+ (RandomMessage == 0.3 ? `You were mugged and than died. Better luck next life. ${JSON.stringify(`¯\_(ツ)_/¯`)}` : ``)
			+ (RandomMessage == 0.4 ? `God wants to have a chat. Your body will rot soon enough` : ``)
			+ (RandomMessage == 0.5 ? `You had an anxiety attack. You stabbed yourself on accident. oops` : ``)
			+ (RandomMessage == 0.6 ? `Eating monkey brain wasn't the best idea bud.` : ``)
			+ (RandomMessage == 0.7 ? `Did it feel good?` : ``)
			+ (RandomMessage == 0.8 ? `Who told you a suger rush was a good thing?` : ``)
			+ (RandomMessage == 0.9 ? `You touched death and loved it ... Too much.` : ``)

			Message.channel.send(LogString);

		}
		else
		{

			let RandomMessage = Math.round(Math.random() * 10) / 10;

			let LogString = `${Message.author} `
			+ (RandomMessage == 0 ? `pushed ${MurderUserName}.` : ``)
			+ (RandomMessage == 0.1 ? `thought ${MurderUserName} was too cool for school` : ``)
			+ (RandomMessage == 0.2 ? `decided their car was better than ${MurderUserName}'s'` : ``)
			+ (RandomMessage == 0.3 ? `mugged ${MurderUserName} a bit too well ${JSON.stringify(`¯\_(ツ)_/¯`)}` : ``)
			+ (RandomMessage == 0.4 ? `went pew pew on ${MurderUserName}` : ``)
			+ (RandomMessage == 0.5 ? `breathed. ${MurderUserName} couldn't handle it.` : ``)
			+ (RandomMessage == 0.6 ? `is death and death has it ways. Today was ${MurderUserName}'s turn.'` : ``)
			+ (RandomMessage == 0.7 ? `fell asleep. Their grip loosened and ${MurderUserName} fell.` : ``)
			+ (RandomMessage == 0.8 ? `bet ${MurderUserName}. ${MurderUserName} lost.` : ``)
			+ (RandomMessage == 0.9 ? `flipped a coin. ${MurderUserName} had to go.` : ``);

			Message.channel.send(LogString);

		}

	}
	else
	{

		/* Add user to Murdered FIle */

		MurderJSON.push({id: MurderUser});

		fs.writeFileSync(MurderString, JSON.stringify(MurderJSON));

		if (MurderUser == Message.author.id)
		{

			let RandomMessage = Math.round(Math.random() * 10) / 10;

			let LogString = `${Message.author} `
			+ (RandomMessage == 0 ? `Mistakes were made.` : ``)
			+ (RandomMessage == 0.1 ? `You've jumped. Hope you enjoy hell.` : ``)
			+ (RandomMessage == 0.2 ? `Does you heart feel good now that you've stabbed it?` : ``)
			+ (RandomMessage == 0.3 ? `You were mugged and than died. Better luck next life. ${JSON.stringify(`¯\_(ツ)_/¯`)}` : ``)
			+ (RandomMessage == 0.4 ? `God wants to have a chat. Your body will rot soon enough` : ``)
			+ (RandomMessage == 0.5 ? `You had an anxiety attack. You stabbed yourself on accident. oops` : ``)
			+ (RandomMessage == 0.6 ? `Eating monkey brain wasn't the best idea bud.` : ``)
			+ (RandomMessage == 0.7 ? `Did it feel good?` : ``)
			+ (RandomMessage == 0.8 ? `Who told you a suger rush was a good thing?` : ``)
			+ (RandomMessage == 0.9 ? `You touched death and loved it ... Too much.` : ``)

			Message.channel.send(LogString);

		}
		else
		{

			let RandomMessage = Math.round(Math.random() * 10) / 10;

			let LogString = `${Message.author} `
			+ (RandomMessage == 0 ? `pushed ${MurderUserName}.` : ``)
			+ (RandomMessage == 0.1 ? `thought ${MurderUserName} was too cool for school` : ``)
			+ (RandomMessage == 0.2 ? `decided their car was better than ${MurderUserName}'s'` : ``)
			+ (RandomMessage == 0.3 ? `mugged ${MurderUserName} a bit too well ${JSON.stringify(`¯\_(ツ)_/¯`)}` : ``)
			+ (RandomMessage == 0.4 ? `went pew pew on ${MurderUserName}` : ``)
			+ (RandomMessage == 0.5 ? `breathed. ${MurderUserName} couldn't handle it.` : ``)
			+ (RandomMessage == 0.6 ? `is death and death has it ways. Today was ${MurderUserName}'s turn.'` : ``)
			+ (RandomMessage == 0.7 ? `fell asleep. Their grip loosened and ${MurderUserName} fell.` : ``)
			+ (RandomMessage == 0.8 ? `bet ${MurderUserName}. ${MurderUserName} lost.` : ``)
			+ (RandomMessage == 0.9 ? `flipped a coin. ${MurderUserName} had to go.` : ``);

			Message.channel.send(LogString);

		}

	}

}

function ResFunction(Message, FirstMention)
{

	/* Check if First Mention is not Null */

	let MurderUser = null;

	if (FirstMention == null)
	{
		MurderUser = Message.member;
	}
	else
	{
		MurderUser = FirstMention;
	}

	/* Find Files */

	let GuildString = CommandsGuildCheck.GuildCheck(Message.guild.id);
	let MurderString = CommandsGuildCheck.MurderCheck(Message.guild.id);

	if (GuildString == null || MurderString == null)
	{

		console.log(`Guild or Guild Murdered is not a directory!`);
		return;

	}

	/* Get Files */

	let MurderJSON = JSON.parse(MurderString);

	/* Check if MurderUser is dead */

	if (MurderJSON.length > 0)
	{

	}
	else
	{

		/* Check if Murdered User is author */

		if (MurderUser == Message.author)
		{

			Message.channel.send();

		}
		else
		{



		}

	}

}

/* Exports */

module.exports = 
{
	
	Kill: function(Message, FirstMention)
	{
		KillFunction(Message, FirstMention);
	},

	Res: function(Message, FirstMention)
	{
		ResFunction(Message, FirstMention);
	}

};