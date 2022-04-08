import React from "react";
import Data from "./Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gridAnimation, cardAnimation, h3Animation } from "./Animation";

const Cars = () => {
  return (
    <div className="cars__container">
      <motion.h1
        className="title"
        variants={h3Animation}
        animate="show"
        exit="hide"
      >
        Choose you car
      </motion.h1>
      <motion.div
        className="list__cars"
        variants={gridAnimation}
        animate="show"
        exit="hide"
      >
        {Data.map((itemCar) => {
          return (
            <Link to={`/car/${itemCar.id}`} key={itemCar.id} className="item__car">
              <motion.div
                className="car__card"
                variants={cardAnimation}
                animate="show"
                exit="hide"
              >
                <img src={require(`../assets/${itemCar.image}`)} alt={itemCar.car} />
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Cars;
