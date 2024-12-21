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
            classNamePrefix='custom-select'
          />
        </div>
      )}
      <img src="/hero.jpg" alt="" width="100%" />
      <div className="info">
        <img src="" alt="" />

        <span className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          asperiores odio nam doloremque iusto aspernatur cupiditate, autem,
          exercitationem sit reprehenderit quidem tempore qui sed praesentium
          porro eaque minus debitis. Repudiandae.
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
