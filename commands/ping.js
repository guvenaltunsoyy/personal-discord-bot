const { Utils } = require('../app/utils');
module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message) {
		const utilsInstance = new Utils();

		message.channel.send(utilsInstance.stringToEmojiCharacters('Pong?'));
	},
};
