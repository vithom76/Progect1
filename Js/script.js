"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
		while ( personalMovieDB.count== '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
		};
	},
	remeberMyFilms: function () {
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
	},

	detectPersonalLevel: function () {
		console.log(personalMovieDB);
		if (personalMovieDB.count < 10) {
			console.log('Просмотренно довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			console.log('Вы класический зритель');
		} else if (personalMovieDB.count > 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	writeYourGenres: function () {
		for (let i = 0; i < 3; i++){			
			personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
			if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '') {
				i--;
				console.log('Вы ввели неправильные данные');
			};
		};

		personalMovieDB.genres.forEach((element, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${element}`);
			
		});
	},
	toggleVisibleMyDB: function () {
		personalMovieDB.privat = (personalMovieDB.privat == false) ? true : false;
		},
	
};
	


//remeberMyFilms();



//detectPersonalLevel();


//showMyDB(personalMovieDB.privat);




/* writeYourGenres();
console.log(personalMovieDB);
 */



