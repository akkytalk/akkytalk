function Sortinng() {
  let movies = [
    {
      title: "Fight Club",
      rank: 10,
      id: "tt0137523",
    },
    {
      title: "The Shawshank Redemption",
      rank: 1,
      id: "tt0111161",
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      rank: 9,
      id: "tt0167260",
    },
    {
      title: "The Godfather",
      rank: 2,
      id: "tt0068646",
    },
    {
      title: "The Good, the Bad and the Ugly",
      rank: 5,
      id: "tt0060196",
    },
    {
      title: "The Godfather: Part II",
      rank: 3,
      id: "tt0071562",
    },
    {
      title: "The Dark Knight",
      rank: 6,
      id: "tt0468569",
    },
    {
      title: "Pulp Fiction",
      rank: 4,
      id: "tt0110912",
    },
    {
      title: "Schindler's List",
      rank: 8,
      id: "tt0108052",
    },
    {
      title: "12 Angry Men",
      rank: 7,
      id: "tt0050083",
    },
  ];

  function sortMoviesByArrt(movies, arrt) {
    for (let j = 0; j < movies.length - 1; j++) {
      let max_obj = movies[j];
      let max_location = j;
      for (let i = j; i < movies.length; i++) {
        if (movies[i][arrt] > max_obj[arrt]) {
          max_obj = movies[i];
          max_location = i;
        }
      }

      movies[max_location] = movies[j];
      movies[j] = max_obj;
    }
    return movies;
  }

  function sortMovies(movies) {
    for (let j = 0; j < movies.length - 1; j++) {
      let max_obj = movies[j];
      let max_location = j;
      for (let i = j; i < movies.length; i++) {
        if (movies[i].rank > max_obj.rank) {
          max_obj = movies[i];
          max_location = i;
        }
      }

      movies[max_location] = movies[j];
      movies[j] = max_obj;
    }
    return movies;
  }

  function sort(number) {
    // sortBestRatingFirst([10, 4, 5,8, 11, 7])

    for (let j = 0; j < number.length - 1; j++) {
      let max_num = number[j];
      let max_location = j;
      for (let i = j; i < number.length; i++) {
        if (number[i] > max_num) {
          max_num = number[i];
          max_location = i;
        }
      }

      number[max_location] = number[j];
      number[j] = max_num;
    }
    return number;
  }

  // sortMovies(movies);
  sortMoviesByArrt(movies, "id");
  console.log(sort([10, 4, 5, 8, 11, 7]));
  //console.log("sortMovies(movies)", sortMovies(movies));

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" style={{ border: "1px solid black" }}>
            Id
          </th>
          <th scope="col" style={{ border: "1px solid black" }}>
            Name
          </th>
          <th scope="col" style={{ border: "1px solid black" }}>
            Rank
          </th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr>
            <td style={{ border: "1px solid black" }}>{movie.id}</td>
            <td style={{ border: "1px solid black" }}>{movie.title}</td>
            <td style={{ border: "1px solid black" }}>{movie.rank}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Sortinng;
