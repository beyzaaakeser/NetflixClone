import { useRef, useState } from 'react';
import ListItem from '../listItem';
import './list.scss';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const List = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const ref = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = ref.current.getBoundingClientRect().x - 50;

    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      ref.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === 'right' && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      ref.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to Watch</span>
      <div className="wrapper">
        <MdKeyboardArrowLeft
          className="sliderArrow left"
          onClick={() => handleClick('left')}
          style={{ display: !isMoved && 'none' }}
        />
        <div className="container " ref={ref}>
          <ListItem index={0} />
          <ListItem index={1}/>
          <ListItem index={2}/>
          <ListItem index={3}/>
          <ListItem index={4}/>
          <ListItem index={5}/>
          <ListItem index={6}/>
          <ListItem index={7}/>
          <ListItem index={8}/>
          <ListItem index={9}/>
        </div>
        <MdKeyboardArrowRight
          className="sliderArrow right"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
};

export default List;
