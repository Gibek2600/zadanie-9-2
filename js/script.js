var damskie = ['Asia', 'Kasia', 'Magda', 'Sylwia', 'Ola', 'Ania'];
var meskie = ['Roman', 'Tomek','Michał','Kuba','Filip','Patryk'];
var imiona = damskie.concat(meskie);

var imie = prompt('Jakie imie dodac?');
if (imiona.indexOf(imie) === -1) {
	imiona.push(imie);
	console.log('Dodano imię do tablicy!')
}
else {
	console.log('Podane imię znajduje się już w tablicy!');
}


var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}