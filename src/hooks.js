import { useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

/* Used for flipping any type of card */
const useFlip = (initialState = true) => {
  const [isFacingUp, setIsFacingUp] = useState(initialState);

  const flipCard = () => {
    setIsFacingUp((isFacingUp) => !isFacingUp);
  };
  return [isFacingUp, flipCard];
};

/* Used for making an AJAX request with axios */

const useAxios = (url) => {
  const [data, setData] = useState([]);

  const addData = async (subUrl) => {
    if (subUrl) {
      url += subUrl;
    }

    const response = await axios.get(url);
    setData((data) => [...data, { ...response.data, id: uuid() }]);
  };
  return [data, addData];
};

export { useFlip, useAxios };
