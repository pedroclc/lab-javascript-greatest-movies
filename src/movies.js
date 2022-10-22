// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorsArr = moviesArray.map(function (x) {
    return x.director;
  });
  return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let filtro = moviesArray.filter((x) => {
    return x.director === "Steven Spielberg" && x.genre.includes("Drama");
  });
  return filtro.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const soma = moviesArray.reduce((valAnterior, valAtual) => {
    return valAnterior + valAtual.score;
  }, 0);
  let avg = soma / moviesArray.length;
  return Number(avg.toFixed(2));
}
console.log(
  scoresAverage([
    {
      title: "Pulp Fiction",
      year: 1994,
      director: "Quentin Tarantino",
      duration: "2h 34min",
      genre: ["Crime", "Drama"],
      score: 8.999,
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
      director: "Peter Jackson",
      duration: "3h 21min",
      genre: ["Adventure", "Drama", "Fantasy"],
      score: 8.9,
    },
  ])
);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const filmesDrama = moviesArray.filter((filme) => {
    return filme.genre.includes("Drama");
  });
  const avgDrama = filmesDrama.reduce((inicial, item) => {
    return inicial + item.score / filmesDrama.length;
  }, 0);
  return Number(avgDrama.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesArrayCopy = [...moviesArray]; // faz uma cópia (clone) de uma Array

  function compareFn(a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }

    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  }

  return moviesArrayCopy.sort(compareFn);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesArrayCopy = [...moviesArray]; // faz uma cópia (clone) de uma Array
  const onlyTitles = moviesArrayCopy.map((movie) => movie.title);
  const orderTitle = onlyTitles.sort();
  if (orderTitle.length > 20) {
    return orderTitle.slice(0, 20);
  }
  return orderTitle;
}

const time = "2h 22min";
console.log(time.indexOf("h"), time.indexOf("min"));
console.log(time.substring(3, 5));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const copy = [...moviesArray]; // faz uma cópia (clone) de um Array
  for (let i = 0; i < copy.length; i++) {
    copy[i].duration =
      Number(copy[i].duration.substring(0, copy[i].duration.indexOf("h"))) *
        60 +
      Number(
        copy[i].duration.substring(
          copy[i].duration.indexOf("h") + 2,
          copy[i].duration.indexOf("min")
        )
      );
    console.log(copy[i].duration);
    console.log(typeof copy[i].duration);
  }

  return copy;
}

console.log(
  turnHoursToMinutes([
    {
      title: "Pulp Fiction",
      year: 1994,
      director: "Quentin Tarantino",
      duration: "2h 34min",
      genre: ["Crime", "Drama"],
      score: 8.999,
    },
  ])
);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
  const yearNumSum = [[], [], []];
  for (let i = 0; i < moviesArray.length; i++) {
    if (!yearNumSum[0].includes(moviesArray[i].year)) {
      yearNumSum[0].push(moviesArray[i].year);
      yearNumSum[1][yearNumSum[0].indexOf(moviesArray[i].year)] += 1;
      yearNumSum[2][yearNumSum[0].indexOf(moviesArray[i].year)] +=
        moviesArray[i].score;
    } else {
      yearNumSum[1][yearNumSum[0].indexOf(moviesArray[i].year)] += 1;
      yearNumSum[2][yearNumSum[0].indexOf(moviesArray[i].year)] +=
        moviesArray[i].score;
    }
  }
  yearNumSum.push([]);
  for (let i = 0; i < yearNumSum[0].length; i++) {
    yearNumSum[3].push(yearNumSum[2][i] / yearNumSum[1][i]);
  }
}
bestYearAvg([
  {
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    duration: "2h 34min",
    genre: ["Crime", "Drama"],
    score: 8.999,
  },
]);
