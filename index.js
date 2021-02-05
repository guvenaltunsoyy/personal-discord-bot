const fs = require('fs');
const Discord = require('discord.js');
const request = require('request');
const { prefix } = require('./config.json');
const { DISCORD_APP_TOKEN, AUTHOR, CLOUD_HUB, COMPANY_NAME } = process.env;
const { Utils } = require('./app/utils');
// importing express framework
const express = require('express');
const app = express();

let user = undefined;
const client = new Discord.Client();
const commandFiles = fs
	.readdirSync('./commands')
	.filter((file) => file.endsWith('.js'));

client.commands = new Discord.Collection();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
client.once('ready', () => {
	const guven = client.users.cache.find(
		(element) => element.username === 'Güven ALTUNSOY',
	);
	console.log({ guven });
	user = guven;
	console.log('Ready!');
});

client.login(DISCORD_APP_TOKEN);

client.on('guildMemberAdd', (member) => {
	member.roles.add(member.guild.roles.cache.find((i) => i.name === 'Shopar'));

	const welcomeEmbed = new Discord.MessageEmbed();

	welcomeEmbed.setColor('#5cf000');
	welcomeEmbed.setTitle(
		'**' +
			member.user.username +
			'** is Shopar other **' +
			member.guild.memberCount +
			'** people',
	);
	welcomeEmbed.setImage(
		'https://cdn.mos.cms.futurecdn.net/93GAa4wm3z4HbenzLbxWeQ-650-80.jpg.webp',
	);

	member.guild.channels.cache
		.find((i) => i.name === 'welcome')
		.send(welcomeEmbed);
});

client.on('guildMemberRemove', (member) => {
	const goodbyeEmbed = new Discord.MessageEmbed();

	goodbyeEmbed.setColor('#f00000');
	goodbyeEmbed.setTitle(
		'**' +
			member.user.username +
			'** was not the impostor there are **' +
			member.guild.memberCount +
			'** left Shopar',
	);
	goodbyeEmbed.setImage(
		'https://gamewith-en.akamaized.net/article/thumbnail/rectangle/22183.png',
	);

	member.guild.channels.cache
		.find((i) => i.name === 'welcome')
		.send(goodbyeEmbed);
});
client.on('message', (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command =
		client.commands.get(commandName) ||
		client.commands.find(
			(cmd) => cmd.aliases && cmd.aliases.includes(commandName),
		);

	if (!command) return;

	try {
		command.execute(message, args, client);
	} catch (error) {
		console.error(error);
		message.reply(
			'🤯 there was an error trying to execute that command! 🤯',
		);
	}
});

// Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
	console.log('Server is running');
	return res.send('Server is available. \nSTATUS: 200 OK ✅\n');
});
// listen to port 7000 by default
app.listen(process.env.PORT || 7000, () => {
	console.log('Server is running. Server info');
	const utilsInstance = new Utils();
	utilsInstance.stringToEmojiCharacters('Server is running. Server info');
	console.log({ AUTHOR, CLOUD_HUB, COMPANY_NAME });
	setInterval(() => {
		if (!user) {
			user = client.users.find(
				(element) => element.username === 'Güven ALTUNSOY',
			);
		}
		request(
			'https://shopi-discord-bot-app.herokuapp.com/',
			{ json: true },
			(err, res, body) => {
				try {
					if (err) {
						user.send(err);
						return console.log(err);
					}
					user.send(utilsInstance.stringToEmojiCharacters(body));
				} catch (exception) {
					console.log(JSON.stringify(exception, null, 2));
				}
			},
		);
	}, 600000);
});
module.exports = app;
