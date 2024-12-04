import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import CustomTopbar from "./components/CustomTopbar";
import CustomCard from "./components/CustomCard";
import CustomFooter from "./components/CustoomFooter";
import CustomCard2 from "./components/CustomCard2";
import CustomCard3 from "./components/CustomCard3";
import CustomVideo from "./components/CustomVideo";
import TVShows from "./components/TvShows";
import Movies from "./components/Movies";
import RecentlyAdded from "./components/RecentlyAdded";
import MyList from "./components/MyList";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CustomVideo />
                <CustomTopbar />
                <CustomCard />
                <CustomCard2 />
                <CustomCard3 />
                <CustomFooter />
              </>
            }
          />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/recentlyadded" element={<RecentlyAdded />} />
          <Route path="/mylist" element={<MyList />} />
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
};

export default App;

//http://www.omdbapi.com/?i=tt3896198&apikey=78681cd1
