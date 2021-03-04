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

		if (FirstMention.user.bot)
		{

			Message.channel.send(`${Message.author} you cannot kill a bot! Baka!`);

			return;

		}

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

				Message.channel.send(`${Message.author}, ${MurderUserName} is already dead!`);

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
			+ (RandomMessage == 1 ? `That's rough buddy.` : ``)

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
			+ (RandomMessage == 1 ? `: Omai wa mu moi shinderiu\n${MurderUserName} : NAnII????` : ``)

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
			+ (RandomMessage == 1 ? `That's rough buddy.` : ``)

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
			+ (RandomMessage == 1 ? `: Omai wa mu moi shinderiu\n${MurderUserName} : NAnII????` : ``)

			Message.channel.send(LogString);

		}

	}

}

function ResFunction(Message, FirstMention)
{

	/* Check if First Mention is not Null */

	let MurderUser = null;
	let MurderUserName = null;

	if (FirstMention == null)
	{
		MurderUser = Message.member;
		MurderUserName = Message.author.username;
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

		let FoundUser = false;
		let Placement = 0;

		for (i = 0; i < MurderJSON.length; i++)
		{

			if (MurderJSON[i].id == MurderUser)
			{
				FoundUser = true;
				Placement = i;
				break;
			}

		}

		if (FoundUser)
		{

			MurderJSON.splice(Placement, 1);

			fs.writeFileSync(MurderString, JSON.stringify(MurderJSON));

			let RandomMessage = Math.round(Math.random() * 10) / 10;

			if (MurderUser == Message.author.id)
			{

				let ReviveString = `${Message.author}`
				+ (RandomMessage == 0.0 ? ` has figured out if you jump off a cliff in heaven you just come back to earth.` : ``)
				+ (RandomMessage == 0.1 ? ` was too touchy with god. They came back burnt.` : ``)
				+ (RandomMessage == 0.2 ? ` never left. Earth is hell.` : ``)
				+ (RandomMessage == 0.3 ? `'s knife had a revive spell engraved. What an idiot` : ``)
				+ (RandomMessage == 0.4 ? ` didn't like that demons summoned him to hell. He went back through the portal.` : ``)
				+ (RandomMessage == 0.5 ? ` was kicked out of heaven.` : ``)
				+ (RandomMessage == 0.6 ? ` pogchamped. Who knew god hated pogchamp?` : ``)
				+ (RandomMessage == 0.7 ? ` woke up from a dream.` : ``)
				+ (RandomMessage == 0.8 ? ` was so normal that they couldn't go to heaven, hell, or purgatory.` : ``)
				+ (RandomMessage == 0.9 ? ` was too edgy for god.` : ``)
				+ (RandomMessage == 1 ? ` That's rough buddy.` : ``);

				Message.channel.send(ReviveString);

			}
			else
			{

				let ReviveString = `${Message.author}`
				+ (RandomMessage == 0.0 ? ` has summoned ${MurderUserName} back to life.` : '')
				+ (RandomMessage == 0.1 ? ` has been allowed to talk to ${MurderUserName} one last time.` : '')
				+ (RandomMessage == 0.2 ? ` accidentally brought ${MurderUserName} back. Their arch nemesis!` : '')
				+ (RandomMessage == 0.3 ? ` pogged ${MurderUserName}` : '')
				+ (RandomMessage == 0.4 ? ` dropped dragon saliva on ${MurderUserName}. It brought them back!` : '')
				+ (RandomMessage == 0.5 ? ` has superpowers and cried ${MurderUserName} back to life!` : '')
				+ (RandomMessage == 0.6 ? ` was an idiot and used the wrong knife. The knife had revived ${MurderUserName}!` : '')
				+ (RandomMessage == 0.7 ? ` gave ${MurderUserName} CPR!` : '')
				+ (RandomMessage == 0.8 ? ` woke ${MurderUserName} up from a dream.` : '')
				+ (RandomMessage == 0.9 ? ` couldn't live without ${MurderUserName}. That's kinda cute.` : '')
				+ (RandomMessage == 1 ? ` ${MurderUserName}: O?` : '')

				Message.channel.send(ReviveString);

			}

		}
		else
		{

			if (MurderUser == Message.author.id)
			{

				Message.channel.send(`${Message.author} you aren't dead. You can't boost your hp by trying a revive spell. Stop.`);

			}
			else
			{

				Message.channel.send(`${Message.author} ${MurderUserName} is not dead.`);

			}

		}

	}
	else
	{

		/* Check if Murdered User is author */

		if (MurderUser == Message.author)
		{

			Message.channel.send(`${Message.author} you aren't dead. You can't boost your hp by trying a revive spell. Stop.`);

		}
		else
		{

			Message.channel.send(`${Message.author} ${MurderUserName} is not dead.`);

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