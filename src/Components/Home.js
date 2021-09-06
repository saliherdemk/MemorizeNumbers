import React from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () =>{
    return(
        <div className="decision">
        <div className="pi">
          PI
          <div className="PIoptions">
              <Link to="/memorizePI">
                <button className="btn btn-outline-info memorizePI">memorize</button>
              </Link>
              <Link to="/challangePI">
                <button className="btn btn-outline-info">challange</button>
              </Link>
          </div>
          
        </div>
        <div className="gold">
          GOLDEN RATIO
          <div className="GOLDoptions">
              <Link to="/memorizeGOLD">
                <button className="btn btn-outline-info memorizegold">memorize</button>
              </Link>
              <Link to="/challangeGOLD">
                <button className="btn btn-outline-info">challange</button>
              </Link>
          </div>
          
        </div>
      </div>
    )
}
export default Home