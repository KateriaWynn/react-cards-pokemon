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

/* Used for making an AJAX request with axios v1*/
const useAxios1 = (url) => {
  const [data, setData] = useState(url);

  const addData = async () => {
    const response = await axios.get(url);
    setData((data) => [...data, { ...response.data, id: uuid() }]);
  };

  return [data.slice(45, data.length), addData];
};

/* Used for making an AJAX request with axios v2,
 * with rest of url */

function useAxios2(baseUrl, restOfUrl) {
  const [data, setData] = useState(baseUrl, restOfUrl);

  const addData = async () => {
    const response = await axios.get(`${baseUrl}` + '/' + `${restOfUrl}`);
    setData((data) => [...data, response.data]);
  };

  return [data.slice(34, data.length), addData];
}

export { useFlip, useAxios1, useAxios2 };
