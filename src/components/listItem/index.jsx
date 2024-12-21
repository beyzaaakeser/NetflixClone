import { IoIosPlay,IoMdAdd } from 'react-icons/io';
import { AiOutlineLike, AiOutlineDislike} from "react-icons/ai";
import './listItem.scss';

const ListItem = () => {
  return <div className="listItem">
    <img src="/netflix.png" alt="" />
    <div className="itemInfo">
      <div className="icons">
        <IoIosPlay />
        <IoMdAdd />
        <AiOutlineLike />
        <AiOutlineDislike />
      </div>
    </div>
  </div>;
};

export default ListItem;
