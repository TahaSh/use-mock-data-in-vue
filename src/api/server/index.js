import axios from 'axios'

export default {
  fetchPosts () {
    return axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.data)
  }
}
