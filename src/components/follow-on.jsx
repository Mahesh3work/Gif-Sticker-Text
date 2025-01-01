import {FaInstagram, FaXTwitter, FaYoutube} from "react-icons/fa6";
import { Link } from "react-router-dom";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
       <Link to="/">
        <a href="#">
          <FaYoutube size={20} />
        </a>
      </Link>
       <Link to="/">
        <a href="#">
          <FaInstagram size={20} />
        </a>
      </Link>
       <Link to="/">
        <a href="#">
          <FaXTwitter size={20} />
        </a>
      </Link>
      </div>
    </div>
  );
};

export default FollowOn;