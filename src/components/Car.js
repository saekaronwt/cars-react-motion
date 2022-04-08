import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Data from './Data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import { carAnimation } from './Animation';

const Car = () => {
  const { id } = useParams();
  const history = useNavigate();
  const singlecar = Data.find((item) => item.id === parseInt(id));

  console.log(singlecar);

  return (
    <div className='car__container'>
      <motion.div className='car__box' variants={carAnimation} animate="show" exit="hide">
        <div className="back__car" onClick={() => history(-1)}>
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </div>
        <div className="slidecar__container">
          <img src={require(`../assets/${singlecar.image}`)}  alt="" />
          <div className="slidecar__description">
              <div className='description__box'>
                <h3>{singlecar.car}</h3>
                <p>
                {singlecar.description}
                </p>
              </div>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Car