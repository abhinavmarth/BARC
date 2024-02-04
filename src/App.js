import Navbar from './Components/Navbar/Navbar.js';
import Layout from './Components/Layout/Layout.js';
import Coding from './Components/Coding/Coding.js';
import Footer from './Components/Footer/Footer.js';
import Intro from './Components/Intro/Intro.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Components/Home/Home.js';
import Resumepdf from './Components/Resumepdf/Resumepdf.js';
// import Rootlayout from './Rootlayout';
import Homepage from './Components/Homepage/Homepage.js';
import Codingpage from './Components/Codingpage/Codingpage.js';
import Resumepage from './Components/ResumePage/Resumepage.js';
function App() {
  const routes=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Homepage/>
        },
        {
          path:"/code",
          
          element:<Codingpage/>
        },
        {
          path:"/resume",
          element:<Resumepage/>
        }
      ]
    }
  ])
  return (
    <div className="App">
     
      <RouterProvider router={routes}/>
      
    </div>
  );
}

export default App;
