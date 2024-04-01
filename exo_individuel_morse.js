// Etape 1
let expressionList="Hello, World";
console.log(expressionList); 

function getLatinCharacterList(String){
    let lettres = String.split('');
    return lettres
};
getLatinCharacterList(expressionList);
console.log(getLatinCharacterList('Hello World'));


function getLatinCharacterList(expressionList){
    let lettres = expressionList.split('');
    return lettres
};
getLatinCharacterList(expressionList);
console.log(getLatinCharacterList(expressionList));

// Etape 2

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const entries = Object.entries(latinToMorse);

function translateLatinCharacter(String){

	for (let i = 0; i< entries.length; i++) {

		if (String === entries[i][0]){

		return entries [i][1]
		}
	}
};
translateLatinCharacter('A');
console.log(translateLatinCharacter("B"));

// Etape 3:
function encode(String){
	let traduction=[];
	let en_majuscule = String.toUpperCase();
	let diviser = getLatinCharacterList(en_majuscule);
	for (let i = 0; i < diviser.length; i++) {
		traduction[i] = translateLatinCharacter(diviser[i]);
	  }
	  return traduction
};

encode("coucou");
console.log(encode("coucou je suis contente de terminer l exercice"));

//Etape 4: 
const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H"
  };

const entries2 = Object.entries(morseToLatin);
console.log(entries2);

function getMorseCharacterList(String){
	let caractere_morse = String.split('');
    return caractere_morse
};

getMorseCharacterList('−··· −−− −· ·−−− −−− ··− ·−· −−··−−  ·−−− ·  ··· ··− ·· ···  ··−· ·− − ·· −−· ··− · ·');
console.log(getMorseCharacterList("-.-. --- ..- -.-. --- ..- / .--- . / ... ..- .. ... / -.-. --- -. - . -. - . / -.. . / - . .-. -- .. -. . .-. / .-.. / . -..- . .-. -.-. .. -.-. . "));

function translateMorseCharacter(String){
	for (let i = 0; i< entries2.length; i++) {

		if (String === entries2[i][0]){

		return entries2[i][1]
		}
	}

  };

  translateMorseCharacter('--');
  console.log(translateMorseCharacter('-.--'));

  function decode(String){
	let traduction=[];
	let diviser = getMorseCharacterList(String);
	for (let i = 0; i < diviser.length; i++) {
		traduction[i] = translateLatinCharacter(diviser[i]);
	  }
	  return traduction
};
decode("-.-. --- ..- -.-. --- ..- / .--- . / ... ..- .. ... / -.-. --- -. - . -. - . / -.. . / - . .-. -- .. -. . .-. / .-.. / . -..- . .-. -.-. .. -.-. . ");
console.log(decode("-.-. --- ..- -.-. --- ..- / .--- . / ... ..- .. ... / -.-. --- -. - . -. - . / -.. . / - . .-. -- .. -. . .-. / .-.. / . -..- . .-. -.-. .. -.-. . "));

// var btn = document.querySelector("input");
// btn.addEventListener("click", updateBtn);


// "-.-. --- ..- -.-. --- ..- / .--- . / ... ..- .. ... / -.-. --- -. - . -. - . / -.. . / - . .-. -- .. -. . .-. / .-.. / . -..- . .-. -.-. .. -.-. . "

function decodeMorse(morseCode) {
	let morseToLatin = {
    '-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H"
  };
  return morseCode//recupere l'argument de la fonction soit le message a décoder
  .split('   ') // separe chaque caractere par des guillement

  .map( // Pour chaque caractere identifié on lui applique des guillemet pour qu'il soit retrouvé dans les propriétés à chaque propriété on recherche sa valeur
	a => a
	  .split(' ')
	  .map(
		b => morseToLatin[b]
	  ).join('')// retire tous les espace entre les lettres et ne laisse plus qu'un élément dans le tableau 
	).join(' ')// retire les guillemets et le tableau
  .trim();//retire les espaces
};


var decoded = decodeMorse("-.-. --- ..- -.-. --- ..- / .--- . / ... ..- .. ... / -.-. --- -. - . -. - . / -.. . / - . .-. -- .. -. . .-. / .-.. / . -..- . .-. -.-. .. -.-. . ");
console.log(decoded);
