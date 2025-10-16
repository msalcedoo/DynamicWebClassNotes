import axios from 'axios'

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    // inside headers use your ACCESS KEY
    headers: {
      Authorization: 'Client-ID tqU_43oE_s7KsruvXAY-_TdGPnCI-olVFOGJ10QrS4g',
    },
    params: {query: term},
  })
  console.log(response.data.results)
  return response.data.results
}

export default searchImages
