import Select from 'react-select';
import './featured.scss';
import { IoIosPlay, IoMdInformationCircleOutline } from 'react-icons/io';
import { useState } from 'react';

const Featured = ({ type }) => {
  const options = [
    { value: 'adventure', label: 'Adventure' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'crime', label: 'Crime' },
    { value: 'fantasy', label: 'Fantasy' },
    { value: 'historical', label: 'Historical' },
    { value: 'horror', label: 'Horror' },
    { value: 'romance', label: 'Romance' },
    { value: 'sci-fi', label: 'Sci-fi' },
    { value: 'thriller', label: 'Thriller' },
    { value: 'western', label: 'Western' },
    { value: 'animation', label: 'Animation' },
    { value: 'drama', label: 'Drama' },
    { value: 'documentary', label: 'Documentary' },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
    console.log('Selected Genre:', option.value);
  };
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
          <Select
            options={options}
            value={selectedOption}
            onChange={handleChange}
            placeholder="Select Genre"
            classNamePrefix="custom-select"
          />
        </div>
      )}
      <img src="/hero.jpg" alt="" width="100%" />
      <div className="info">
        <img src="/public/squid-game.jpg" alt="" />

        <span className="desc">
          The series tells the story of hundreds of people in debt who play
          dangerous children's games to win a large cash prize. However, the
          games are deadly and only one winner can survive. It is a moving
          portrayal of society's injustice, harsh criticism of capitalism and
          people's survival instincts.
        </span>

        <div className="buttons">
          <button className="play">
            <IoIosPlay /> <span>Play</span>
          </button>
          <button className="more">
            <IoMdInformationCircleOutline /> <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
