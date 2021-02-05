module.exports = {
	name: 'find',
	aliases: ['find', 'note', 'key'],
	description: 'Find note',
	execute(message, args) {
		if (!args || args.length === 0) {
			message.channel.send('Where is key?🤯 use help command! => !help');
			return;
		}
		message.guild.channels.cache.forEach(async (channel) => {
			if (channel.type === 'text') {
				channel.messages.fetch().then((messages) => {
					messages.forEach((msg) => {
						if (
							!msg.author.bot &&
							msg.content.includes(args[0]) &&
							!msg.content.includes('!find')
						) {
							message.channel.send(
								`${new Date(
									msg.createdTimestamp,
								).toLocaleDateString('tr-TR')} - ${
									msg.content
								}`,
							);
						}
					});
				});
			}
		});
	},
};
