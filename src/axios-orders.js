import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-react-cho.firebaseio.com/"
});

export default instance;
