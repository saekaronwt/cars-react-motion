import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, fa4, faXmark } from "@fortawesome/free-solid-svg-icons";
import Data from "./Data";
import { Link } from "react-router-dom";

const Navigation = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)

  return (
    <div className="navigation__bar">
      <div className="bar__logo">
        <FontAwesomeIcon icon={fa4} />
      </div>
      <div className="icon__bar" onClick={handleClick}>
        <FontAwesomeIcon icon={click ? faXmark : faBarsStaggered} />
      </div>
      <div className={click ? 'bar__box active' : 'bar__box'}>
        <ul>
          {Data.map((carName) => {
            return (
              <li key={carName.id}>
                <Link to={`/car/${carName.id}`}>{carName.car}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
