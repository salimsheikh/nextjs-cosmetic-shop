import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const RandomRatings = () => {
  const getRandomNumber = (min: number, max: number) => {
    return Math.ceil(Math.random() * (max - min) + min);
  };

  const randomNumber = getRandomNumber(0, 5);

  switch (randomNumber) {
    case 0:
      return (
        <div className="flex justify-center text-accent pt-4 pb-2">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
    case 1:
      return (
        <div className="flex justify-center text-accent pt-4 pb-2">
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );

    case 2:
      return (
        <div className="flex justify-center text-accent pt-4 pb-2">
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );

    case 3:
      return (
        <div className="flex justify-center text-accent pt-4 pb-2">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );

    case 4:
      return (
        <div className="flex justify-center text-accent pt-4 pb-2">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      );

    case 5:
      return (
        <div className="flex justify-center text-accent pt-4 pb-2">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      );
  }
};

export default RandomRatings;
