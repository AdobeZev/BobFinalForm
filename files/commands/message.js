/* Scripted by Adobe Zev */

/* Requires */

let fs = require(`fs`);

let CommandsGuildCheck = require(`./guildCheck.js`);

let FunctionsHelp = require(`./../functions/help.js`);
let FunctionsPog = require(`./../functions/pog.js`);
let FunctionsPing = require(`./../functions/ping.js`);
let FunctionsMeat = require(`./../functions/meat.js`);
let FunctionsMarco = require(`./../functions/marco.js`);
let FunctionsMurder = require(`./../functions/murder.js`);

let FunctionsBbans = require(`./../functions/bban.js`);

/* Discord Requires */

let Discord = require(`discord.js`);
let {Client, Intents} = require(`discord.js`);
let client = new Client({ws: {intents: Intents.all}});

/* Functions */

function LogFunction(Message, OldMessage = null, Created = true, Edited = false, Deleted = false)
{
		let LogMessage = `\x1b[0m`
		+ `\x1b[36m${Message.author.tag}\x1b[0m | `
		+ (Message.guild != null ? ` \x1b[33m${Message.guild.name}\x1b[0m | \x1b[34m${Message.channel.name}\x1b[0m | ` : ` \x1b[33mDM\x1b[0m `)
		+ (Message.author.bot ? ` \x1b[33mBOT\x1b[0m ` : `` )
		+ (Created ? ` \x1b[32mNew\x1b[0m ` : ``)
		+ (Edited ? ` \x1b[32mEdited\x1b[0m ` : ``)
		+ (Deleted ? ` \x1b[32mDeleted\x1b[0m ` : ``)
		+ `\n`
		+ (Message.attachments.size > 0 ? `\x1b[32m<Attachment>\x1b[0m\n` : ``)
		+ (Created ? `\x1b[32m${Message.content}\x1b[0m ` : ``)
		+ (Deleted ? `\x1b[31m${Message.content}\x1b[0m ` : ``)
		+ (Edited ? `\x1b[31m${OldMessage.content}\x1b[0m \nVVVV \n\x1b[32m${Message.content}\x1b[0m ` : ``);

		console.log(LogMessage);
}

/* Includes Prefix Function */

function IncludesPrefixFunction(MessageContent, Prefix)
{

	return (MessageContent.includes(Prefix) && MessageContent.includes('http') == false);
}

/* Split Function */

function SplitFunction(MessageContent, Prefix)
{
	
		/* Split Message */

		let SplitMessageContent = MessageContent.split(` `);

		/* Check if Split Message is bigger than 0 */

		if (SplitMessageContent.length > 0)
		{

		/* Check if  includes Prefix*/

		let GivenCommand = SplitMessageContent[0]

		if (IncludesPrefixFunction(GivenCommand, Prefix))
		{
			
			/* Split Message from Prefix */

			let SplitGivenCommand = GivenCommand.split(Prefix);
			let Command = SplitGivenCommand[1];

			/* Splice Given Command to Remove command */

			SplitMessageContent.splice(0, 1);

			/* Make new Array */

			let SplitMessageReturn = [];
			SplitMessageReturn.push(Command);

			/* Add Everything back to new array */

			for (i = 0; i < SplitMessageContent.length; i++)
			{
				SplitMessageReturn.push(SplitMessageContent[i]);
			}

			/* Return new Array */

			return SplitMessageReturn;

		}
		else
		{

			/* First World Doesn't include Prefix */

			console.log(`Message First Word doesnt include &`);
			return null;
		}

	}
	else
	{

		/* Null string */

		console.log(`Null Message sent`);
		return null;
	}

}

function FindFirstMentionedUserFunction(Message)
{
	
	/* Get Mentions */

	let MessageMentions = Message.mentions;

	/* Check if Mentions is larger than 0 */

	if (MessageMentions.members.size > 0)
	{

		return MessageMentions.members.first();

	}
	else
	{
		return null;
	}

}

function FindCommandFunction(Command, Member, Message)
{
		
	/* Variables */

	let LoweredCommand = Command.toLowerCase();
	let AuthorId = Member.id;
	let MemberAdmin = Member.hasPermission(`ADMINISTRATOR`);

	let CommandsString = `./files/commands/commands.json`;
	let AdminCommandsString = `./files/commands/admincommands.json`;

	let CommandsJSON = null;
	let AdminCommandsJSON = null;
	let FoundCommand = null;

	/* Find Commands.Json */

	if (fs.existsSync(CommandsString))
	{

		/* Parse file */

		CommandsJSON = JSON.parse(fs.readFileSync(CommandsString));
	}
	else
	{

		/* Log Error */

		console.log(`Cannot find Commands json`);
		return;
	}

	/* Find AdminCommands.json */

	if (MemberAdmin && fs.existsSync(AdminCommandsString))
	{

		/* parse File */

		AdminCommandsJSON = JSON.parse(fs.readFileSync(AdminCommandsString));

	}


	/* Search Commands JSON for Commands */

	for (i = 0; i < CommandsJSON.length; i++)
	{

		/* Set up Variables */

		let LoweredCommandJSON = CommandsJSON[i].name.toLowerCase();

		/* Check if commands match */

		if (LoweredCommandJSON == LoweredCommand)
		{

			/* Set Found Command */

			FoundCommand = CommandsJSON[i];
		}

	}

	if (FoundCommand != null)
	{

		return FoundCommand;

	}
	else if (FoundCommand == null && MemberAdmin)
	{

		/* Check Admin Commands */

		for (i = 0; i < AdminCommandsJSON.length; i++)
		{

			/* Set up Variables */

			let LoweredCommandJSON = AdminCommandsJSON[i].name.toLowerCase();

			/* Check if Commands Match */

			if (LoweredCommandJSON == LoweredCommand)
			{

				/* Set Found Command */

				FoundCommand = AdminCommandsJSON[i];

			}

		}

		/* Check if Found Command */

		if (FoundCommand != null)
		{

			/* Return Command */

			return FoundCommand;

		}
		else
		{

		/* Tell user their command isn't real */

		Message.channel.send(`${Message.author} '${LoweredCommand}' is not a command.'`);
		return;

		}

	}
	else
	{

		/* Tell user their command isn't real */

		Message.channel.send(`${Message.author} '${LoweredCommand}' is not a command.'`);
		return;
	}

}

/* Exports */

module.exports = 
{
	/* Message Log */

	Log: function(Message, OldMessage = null, Created = true, Edited = false, Deleted = false)
	{
		LogFunction(Message, OldMessage, Created, Edited, Deleted);
	},

	/* Check if Message Includes Prefix */

	IncludesPrefix: function(MessageContent, Prefix)
	{
		return IncludesPrefixFunction(MessageContent, Prefix);
	},

	/* Split Message */

	Split: function(MessageContent, Prefix)
	{
		return SplitFunction(MessageContent, Prefix);
	},

	/* Find Mentioned User */

	FindFirstMentionedUser: function(Message)
	{

		return FindFirstMentionedUserFunction(Message);

	},

	/* Find Commands */

	FindCommand: function(Command, Member, Message)
	{
		return FindCommandFunction(Command, Member, Message);
	},

	/* Run Command */

	RunCommand: function(Message, Command)
	{

		/* Variables */

		let CommandsString = `./files/commands/commands.json`;
		let AdminCommandsString = `./files/commands/admincommands.json`;

		let CommandJSON = null;
		let AdminCommandJSON = null;

		if (fs.existsSync(CommandsString))
		{

			/* Set Commands JSON */

			CommandJSON = JSON.parse(fs.readFileSync(CommandsString));

		}
		
		if (fs.existsSync(AdminCommandsString))
		{

			/* Set Admin Commands JSON */

			AdminCommandJSON = JSON.parse(fs.readFileSync(AdminCommandsString));

		}

		if (CommandJSON != null && AdminCommandJSON != null)
		{

			switch(Command.name.toLowerCase())
			{

				/* Normal Commands */

				/* Help */

				case CommandJSON[0].name.toLowerCase():

					FunctionsHelp.Help(Message, Message.member.hasPermission(`ADMINISTRATOR`));

				break;

				/* Pog */

				case CommandJSON[1].name.toLowerCase():

					FunctionsPog.Pog(Message);

				break;

				/* Ping */

				case CommandJSON[2].name.toLowerCase():

					FunctionsPing.Ping(Message);

				break;

				/* Meat */

				case CommandJSON[3].name.toLowerCase():

					FunctionsMeat.Meat(Message);

				break;

				/* Marco */

				case CommandJSON[4].name.toLowerCase():

					FunctionsMarco.Marco(Message);

				break;

				/* Kill */

				case CommandJSON[5].name.toLowerCase():
				case `killme` :

					FunctionsMurder.Kill(Message, FindFirstMentionedUserFunction(Message));

				break;

				/* Res */

				case CommandJSON[6].name.toLowerCase():
				case `resme`:

					FunctionsMurder.Res(Message, FindFirstMentionedUserFunction(Message));

				break;

				/* Admin Commands */

				/* Ban */

				case AdminCommandJSON[0].name.toLowerCase():
					FunctionsBbans.Bban(Message, FindFirstMentionedUserFunction(Message));
				break;

				/* Un Ban */

				case AdminCommandJSON[1].name.toLowerCase():

					FunctionsBbans.UnBban(Message, FindFirstMentionedUserFunction(Message));

				break;

				case AdminCommandJSON[2].name.toLowerCase():

					FunctionsBbans.Bbanned(Message, FindFirstMentionedUserFunction(Message));

				break;

				default:

					console.log(`Cannot find command.`);

				break;
			}
		}
		else
		{
		}
	}

};