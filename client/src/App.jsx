import Register from "./Register"
import axios from 'axios';

function App() {
  axios.defaults.baseURL = 'http://localhost:4040';
  axios.defaults.withCredentials = true;
  
  return (
    <Register />
  )
}

export default App
