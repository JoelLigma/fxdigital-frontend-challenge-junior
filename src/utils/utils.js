import { useParams } from "react-router-dom";

const handleError = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

const convertDate = (date) => {
  const selectedDate = new Date(date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return selectedDate.toLocaleDateString("en-GB", options);
};

const findSelectedShow = (data) => {
  const selectedShowObj = useParams();
  return data.find((item) => item.id === Number(selectedShowObj.showId));
};

const findSelectedEpisode = (setSelectedEp, data, id) => {
  setSelectedEp(data.find((ep) => ep.id === id));
};

export { handleError, convertDate, findSelectedShow, findSelectedEpisode };
