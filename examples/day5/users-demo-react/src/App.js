import logo from './logo.svg';
import './App.css';
import axios from 'axios'; // to make HTTP requests
import {useState} from 'react'; // to initialize the components state
function App() {
  let [users, setUsers] = useState([]); // initially users is []

  return (
    <div className="App">
      <h2>My First React App</h2>
      <button onClick = {() => axios.get('http://localhost:9090/users')
      .then(value => setUsers(value.data))}>Refresh</button>
      {users.map((value, index) => <p>Hello {value.name}, your id is {value._id}</p>)}
    </div>
  );
}

export default App;
