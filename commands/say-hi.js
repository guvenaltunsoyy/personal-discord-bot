module.exports = {
	name: 'say-hi',
	description: 'Hello!',
	execute(message) {
		const Discord = require('discord.js');

		const welcomeEmbed = new Discord.MessageEmbed();

		welcomeEmbed.setColor('#5cf000');
		welcomeEmbed.setTitle(
			'WELCOME! **' +
				message.author.username +
				'** is Shopar other **' +
				message.guild.memberCount +
				'** people'
		);
		console.log(message.guild.memberCount);
		welcomeEmbed.setImage(
			'https://cdn.mos.cms.futurecdn.net/93GAa4wm3z4HbenzLbxWeQ-650-80.jpg.webp'
		);
		message.channel.send(welcomeEmbed);
	},
};
