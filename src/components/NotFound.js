import { Link} from "react-router-dom";
import Header from "./Header";

import "../components/styles/notFound.css"
const NotFound = () =>  (
    <div>
      <Header/>
    <div className="not_found_main_container">
      <div className="not_found_inside_container">
      <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1757241973/website-page-found-error-robot-character-broken-chatbot-mascot-disabled-site-technical-work_502272-1888_jgx4tp.jpg" alt="Not Found" className="not_found_image" />
        <p className="">Oops! Page not found</p>
        <Link to="/" className="">
          Return to Home
        </Link>
      </div>
    </div>
    </div>
  );

export default NotFound;