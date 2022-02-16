"use strict";

// ПРАКТИКА 1

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

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


