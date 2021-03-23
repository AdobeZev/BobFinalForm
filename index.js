/* Scripted by AdobeZev */

/* Requires */

require('dotenv').config();

let CommandsMessage = require('./files/commands/message.js');
let CommandsUserCheck = require('./files/commands/userCheck.js');

/* Discord Requires */

let Discord = require(`discord.js`);
let {Client, Intents} = require(`discord.js`);
let client = new Client({ws: {intents: Intents.all}});

/* Variables */

let Prefix = '&'

/* Functions */

/* On Ready */

client.on('ready', () =>
{

	/* Log Ready */

	console.log(`${client.user.tag} has ASCENDED.`);

});

/* On Message */

client.on(`message`, (Message) => 
{

	/* Log Message */

	CommandsMessage.Log(Message);

	/* Check if Message has Prefix and Isn't a url */

	if (CommandsMessage.IncludesPrefix(Message.content, Prefix))
	{

		/* Check if Banned */

		if (CommandsUserCheck.BanCheck(Message.author, Message.guild) == false)
		{

			/* Message Variable Setups */

			let MessageContent = Message.content;
			let MessageGuild = Message.guild;
			let MessageAuthor = Message.author;
			let MessageMember = Message.member;

			/* Split Message */

			let SplitMessageContent = CommandsMessage.Split(MessageContent, Prefix);
			
			/* Check if Split Message Content isn't null */

			if (SplitMessageContent != null)
			{

				/* Check if Message is not Mention */

				/* Split Message Variables */

				let Command = SplitMessageContent[0];

				/* Check if Command is actual Command */
				
				let FoundCommand = CommandsMessage.FindCommand(Command, MessageMember, Message);

				if (FoundCommand != null)
				{

					CommandsMessage.RunCommand(Message, FoundCommand);
					
				}
				else
				{

					console.log(`Its null retard`);
				}

			}

		}
		else
		{

			/* Banned Message */

			Message.channel.send(`${Message.author}, you are not allowed to run commands.`);
		}
	}
	else
	{
		return;
	}

});

/* On Message Edit */

client.on(`messageUpdate`, (OldMessage, NewMessage) => 
{

	/* Log Message */

	if (OldMessage.content != NewMessage.content || NewMessage.content == "")
	{

		CommandsMessage.Log(NewMessage, OldMessage, false, true);

	}

});

/* On Message Delete */

client.on('messageDelete', (Message) =>
{

	/* Log Message */

	CommandsMessage.Log(Message, null, false, false, true);

});

/* Edited User */

client.on('guildMemberUpdate', (OldMember, NewMember) => 
{

});

/* Login */

client.login(process.env.DISCORD_TOKEN);