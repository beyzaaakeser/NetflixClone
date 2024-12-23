import { IoIosPlay, IoMdAdd } from 'react-icons/io';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import './listItem.scss';
import { useState } from 'react';

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    'https://www.google.com/search?sca_esv=01db24c8ddd18a27&sxsrf=ADLYWIKlwWS88TcQkIfL1GDBuUEaMc4Qcg:1734952277298&q=netflix+video&udm=7&fbs=AEQNm0CgMcZ11KbHg1uunEmuo39LHFJ72fKm3eDKnwE-p1_lrFS99GR8hClY8GX-nkIXU_srG4RfQQO8i2e4DkR4zLpRTEgjNqFd1YHzPHFjB6tpV4Sy0iTPPUhInNZ-4qhnxNc1hqv35ytYresK5dwTbquZkUFCcFjLvqSGvyhmAYYu2K8m5RUcuFNyYlLPGTL5ocYvyy_X4MnEjQoqMUBbnx-Ba6c7YQ&sa=X&ved=2ahUKEwiP7sLx4L2KAxWTyAIHHYkdJjcQtKgLegQIGBAB&biw=638&bih=944&dpr=1#fpstate=ive&vld=cid:a84f994a,vid:nbrfJAAS7Qc,st:0';
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="/netflix.png" alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <IoIosPlay className='icon' />
              <IoMdAdd  className='icon' />
              <AiOutlineLike className='icon'  />
              <AiOutlineDislike className='icon'  />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>

            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptatum facilis id, ipsum corrupti esse voluptatem accusantium
              ?
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
