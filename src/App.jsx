
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import Home from "./Routes/Home/";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import NotFound from "./Routes/NotFound";
import Favs from "./Routes/Favs";
import { useContextGlobal} from "./utils/global.context";



function App() {
const { state } = useContextGlobal();
// console.log("la data "+ state.theme);

  return (
    <div className={`App  ${state.theme}`}>
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>} />
            <Route path={routes.contact} element={<Contact/>} />
            <Route  path={routes.dentist} element={<Detail/>}/>
            <Route path={routes.favs} element={<Favs/>} />
            <Route path={routes.others} element={<NotFound/>} />
          </Routes>
          <Footer/>       
      </div>
  );
}

export default App;
