import Orang from "./components/Orang";
import {Link, Outlet} from "react-router-dom"

function App() {

  const style = {
    merah:{
      backgroundColor: "red",
      color: "white"
      
    }
  }

  return (
    <div >
        <p style={style.merah}>Hello World</p>
        <h1 style={{backgroundColor: "red", color:"white"}}>Akhmad Sakhoji Jamaludin</h1>
        <Orang nama="Akhmad Sakhoji Jamaludin" alamat="Tegal"/>
        <img src="/img/LOGO UNPAM.png" alt="" height="100px" width="100px"/>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Outlet/>
    </div>
  );
}

export default App;
