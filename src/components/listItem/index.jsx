import { IoIosPlay, IoMdAdd } from 'react-icons/io';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import './listItem.scss';
import { useEffect, useState } from 'react';

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  /* console.log(movies); */

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_FETCH_AUTH}`,
    },
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
          options
        );
        const data = await response.json();
        setMovies(shuffleArray(data.results));
      } catch (err) {
        console.error('Error fetching movies:', err);
      }
    };

    const fetchGenres = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/genre/movie/list?language=en',
          options
        );
        const data = await response.json();
        setGenres(data.genres);
      } catch (err) {
        console.error('Error fetching genres:', err);
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchMovies(), fetchGenres()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  const shuffleArray = (array) => {
    return array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

  const getMovieGenres = (genreIds) => {
    return genreIds
      .map((id) => genres.find((genre) => genre.id === id)?.name)
      .filter(Boolean)
      .join(', ');
  };

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && (
        <img
          src={
            'https://image.tmdb.org/t/p/original' + movies[index]?.poster_path
          }
          alt=""
        />
      )}

      {isHovered && (
        <>
          <img
            src={
              'https://image.tmdb.org/t/p/original' +
              movies[index]?.backdrop_path
            }
            alt=""
          />
          <div className="itemInfo">
            <div className="icons">
              <IoIosPlay className="icon" />
              <IoMdAdd className="icon" />
              <AiOutlineLike className="icon" />
              <AiOutlineDislike className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14mins</span>
              <span className="limit">+16</span>
              <span>{movies[index]?.release_date.split('-')[0]}</span>
            </div>
            <div className="desc">{movies[index]?.overview}</div>
            <div className="genre">
              {loading
                ? 'Loading...'
                : getMovieGenres(movies[index]?.genre_ids || [])}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
