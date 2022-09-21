import { useParams } from "react-router-dom";

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

const removeHTMLTags = (str) => {
  let processedString = "";
  let open = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "<") {
      open = true;
    } else if (open && str[i] !== ">") {
      continue;
    } else if (open && str[i] === ">") {
      open = false;
    } else {
      processedString += str[i];
    }
  }
  return processedString;
};

export { convertDate, findSelectedShow, findSelectedEpisode, removeHTMLTags };
