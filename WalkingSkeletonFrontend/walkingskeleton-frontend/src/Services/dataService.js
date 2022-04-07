import axios from "axios";

const apiUrl = "http://localhost:5107/api";
const instance = axios.create({
  baseURL: apiUrl,
});

class DataService {
  getTweets() {
    return () => instance.get(`Tweet/tweets`)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
  }
}

export default new DataService();