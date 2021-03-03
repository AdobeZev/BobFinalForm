/* Scripted by AdobeZev */

/* Requires */

let fs = require(`fs`);

/* Discord Requires */

let Discord = require(`discord.js`);
let {Client, Intents} = require(`discord.js`);
let client = new Client({ws: {intents: Intents.all}});

/* Functions */

function HelpFunction(Message, MessageAuthorAdmin = false)
{

	console.log(`HELP ME`);
	
	/* Commands string */

	let CommandsString = './files/commands/commands.json';
	let AdminCommandsString = './files/commands/admincommands.json';

	/* Commands JSON */

	let CommandsJSON = null;
	let AdminCommandsJSON = null;

	/* Check if Commands and Admin Commands Exist */

	if (fs.existsSync(CommandsString))
	{
		CommandsJSON = JSON.parse(fs.readFileSync(CommandsString));
	}

	if (fs.existsSync(AdminCommandsString))
	{
		AdminCommandsJSON = JSON.parse(fs.readFileSync(AdminCommandsString));
	}

	/* Check if Got Commands JSON and Admin Commands JSON */

	if (CommandsJSON != null && AdminCommandsJSON != null)
	{

		/* Set up Embed */

		let CommandsEmbed = new Discord.MessageEmbed()
		.setAuthor('Bob')
		.setDescription(`All Commands.`)
		.setColor('BLUE')
		.setFooter(`Scripted by AdobeZev`);

		for (i = 0; i < CommandsJSON.length; i++)
		{
			CommandsEmbed.addField(CommandsJSON[i].name, CommandsJSON[i].desc);
		}

		/* Double check that user has admin */

		if (MessageAuthorAdmin && Message.member.hasPermission(`ADMINISTRATOR`))
		{

			let AdminCommandsEmbed = new Discord.MessageEmbed()
			.setAuthor('Bob')
			.setDescription(`All Admin Commands`)
			.setColor(`RED`)
			.setFooter(`Scripted by AdobeZev`);

			for (i = 0; i < AdminCommandsJSON.length; i++)
			{
				AdminCommandsEmbed.addField(AdminCommandsJSON[i].name, AdminCommandsJSON[i].desc);
			}

			console.log(`Test 1`);

			Message.author.send(CommandsEmbed);
			Message.author.send(AdminCommandsEmbed);

		}
		else
		{

			console.log(`Test 2`);

			Message.author.send(CommandsEmbed);
		}

	}

}

/* Exports */

module.exports = 
{

	/* Exported Function */

	Help: function(Message, MessageAuthorAdmin = false)
	{
		HelpFunction(Message, MessageAuthorAdmin);
	}

}