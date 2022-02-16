"use strict";

// ПРАКТИКА 1

/*

// Первое задание

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

// Второе задание

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// Третье задание

let a = prompt("Последний просмотренный фильм?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Последний просмотренный фильм?", ""),
  d = prompt("На сколько оцените его?", "");

personalMovieDB.movies.a = b;
personalMovieDB.movies.c = d;

*/

// ПРАКТИКА 2

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// Первое задание
// Второе задание

for (let i = 0; i < 2; i++) {
  let a = prompt("Последний просмотренный фильм?", "");
  let b = prompt("На сколько оцените его?", "");
  if (a != null && b != null && a != "" && b != "" && a.length < 10) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

//Третье задание

if (personalMovieDB.count < 10) {
  alert("Просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  alert("Вы киноман");
} else {
  alert("Ошибка!");
}
