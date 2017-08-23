function generateDictionary(filename) {
	let {readFileSync} = require('fs')
	return readFileSync(filename).toString().split('\n')
}
Array.prototype.isEqual = function (other) {
	return this.every((element, index) => element == other[index])
}
function unscramble(word, length, dict) {
	possibleMatches = []
	allCharsWord = word.toLowerCase().match(/\w/g).filter(function(item, pos, self) {
    	return self.indexOf(item) == pos;
	}).sort()
	console.log(allCharsWord)
	for (let i=0; i < dict.length; i++) {
		if (dict[i].length == length) {
			allCharsDict = dict[i].toLowerCase().match(/\w/g).filter(function(item, pos, self) {
		    	return self.indexOf(item) == pos;
			}).sort()
			if (allCharsWord.isEqual(allCharsDict)) {
				possibleMatches.push(dict[i])
			}
		}
	}
	return possibleMatches
}

let process = require('process')
let readline = require('readline')
const dict = generateDictionary('words.txt')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.question("Which word do you wish to unscramble? ", (word) => {
	rl.question("What is the length of the unscrambled word? ", (length) => {
		console.log(unscramble(word, parseInt(length, 10), dict))
		rl.close()
	})
})