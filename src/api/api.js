import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '33242507-b636b92a727f8a1118e29175e';
const basicQueryParams = 'image_type=photo&orientation=horizontal&per_page=12';

export const fetchImg = async (searchQuery, page) => {
  const response = await axios.get(
    `/?q=${searchQuery}&page=${page}&key=${API_KEY}&${basicQueryParams}`
  );
  return response.data.hits;
};
