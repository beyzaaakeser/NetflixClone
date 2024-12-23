import './watch.scss';
import { IoArrowBack } from 'react-icons/io5';
const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <IoArrowBack />
        Home
      </div>
      <video src="" className="video" autoPlay progress controls></video>
    </div>
  );
};

export default Watch;
