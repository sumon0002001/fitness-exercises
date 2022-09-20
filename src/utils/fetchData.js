export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
   headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '9bd3878cd7msha0d0cca7c29f77bp1b32d3jsn9854d308596b',
      
    }
  };
  

export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  const data = await response.json();

  return data
}