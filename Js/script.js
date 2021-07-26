"use strict";
const namberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
	count: namberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

/* for (let i = 0; i < 2; i++) {
	const a = prompt('Один из просмотренных фильмов?', ''),
			b = prompt("Насколько оцените его?", "");
	if (a != null && b != null && a !='' && a.length < 50) {
		personalMovieDB.movies[a] = b;		
	} else {
		console.log('Error');
		i--;
	} */
let i = 0;
/* while (i < 2) {
	const a = prompt('Один из просмотренных фильмов?', ''),
	b = prompt("Насколько оцените его?", "");
if (a != null && b != null && a !='' && a.length < 50) {
	personalMovieDB.movies[a] = b;
	i++;
} else {
console.log('Error');
i--;
	} */

do {
	const a = prompt('Один из просмотренных фильмов?', ''),
		b = prompt("Насколько оцените его?", "");
	if (a != null && b != null && a != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		i++;
	} else {
		console.log('Error');
			}
}
while (i < 2);
console.log(personalMovieDB);
if (personalMovieDB.count < 10) {
	console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	console.log('Вы класический зритель');
} else if (personalMovieDB.count > 30) {
	console.log('Вы киноман');
} else {console.log ('Произошла ошибка');
		
};






