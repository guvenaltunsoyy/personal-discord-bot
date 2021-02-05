const emojiCharacters = {
	a: '🇦',
	b: '🇧',
	c: '🇨',
	d: '🇩',
	e: '🇪',
	f: '🇫',
	g: '🇬',
	h: '🇭',
	i: '🇮',
	j: '🇯',
	k: '🇰',
	l: '🇱',
	m: '🇲',
	n: '🇳',
	o: '🇴',
	p: '🇵',
	q: '🇶',
	r: '🇷',
	s: '🇸',
	t: '🇹',
	u: '🇺',
	v: '🇻',
	w: '🇼',
	x: '🇽',
	y: '🇾',
	z: '🇿',
	0: '0️⃣',
	1: '1️⃣',
	2: '2️⃣',
	3: '3️⃣',
	4: '4️⃣',
	5: '5️⃣',
	6: '6️⃣',
	7: '7️⃣',
	8: '8️⃣',
	9: '9️⃣',
	10: '🔟',
	'#': '#️⃣',
	'*': '*️⃣',
	'!': '❗',
	'?': '❓',
	' ': ' ',
	'.': '.',
	'\n': '\n',
};

class Utils {
	stringToEmojiCharacters(text) {
		let resultText = '';
		for (let index = 0; index < text.length; index++) {
			//console.log(emojiCharacters[text[index].toLowerCase()]);
			resultText += emojiCharacters[text[index].toLowerCase()]
				? `${emojiCharacters[text[index].toLowerCase()]} `
				: text[index];
		}
		return resultText;
	}
}
module.exports = { Utils };
// or
// exports = { MyClass1, MyClass2 };
