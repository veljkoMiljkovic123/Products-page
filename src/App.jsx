import {Outlet} from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import axios from 'axios'

//dev mode
//axios.defaults.baseURl = 'localhost:4000'
axios.defaults.baseURL = 'https://dummyjson.com';
function App() {


  return <div>
      <NavbarComponent />




   <Outlet />
    </div>
  
}

export default App
