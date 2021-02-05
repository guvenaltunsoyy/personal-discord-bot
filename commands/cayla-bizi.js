const { Utils } = require('../app/utils');
module.exports = {
	name: 'cayla-bizi',
	aliases: ['cayla', 'cay-getir'],
	description: 'Get a tea of the tagged user(s)',
	execute(message) {
		const utilsInstance = new Utils();

		const teaList = [
			utilsInstance.stringToEmojiCharacters('Tavsan kani bunlar!!\n\n'),
		];
		message.mentions.users.each((user) => {
			teaList.push(`${user.username} ☕️.`);
		});

		teaList.push(
			utilsInstance.stringToEmojiCharacters('\n\nAfiyet olsun!\n'),
		);
		teaList.push(utilsInstance.stringToEmojiCharacters('Yine bekleriz!'));
		message.reply(teaList);
	},
};
