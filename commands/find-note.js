module.exports = {
	name: 'naber',
	description: 'Say hi.',
	execute(message) {
		message.channel.fetchMessages().then(async (messages) => {
			console.log(`${messages.size} procuradas.`);

			let finalArray = [];

			const putInArray = async (data) => finalArray.push(data);
			const handleTime = (timestamp) =>
				moment(timestamp)
					.format('DD/MM/YYYY - hh:mm:ss a')
					.replace('pm', 'PM')
					.reaplce('am', 'AM');

			for (const message of messages.array().reverse())
				await putInArray(
					`${handleTime(message.timestamp)} ${
						msg.author.username
					} : ${msg.content}`,
				);

			console.log(finalArray);
			console.log(finalArray.length);
		});
	},
};
