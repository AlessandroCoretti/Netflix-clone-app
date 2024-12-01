import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import CustomTopbar from "./components/CustomTopbar";
import CustomCard from "./components/CustomCard";
import CustomFooter from "./components/CustoomFooter";
import CustomCard2 from "./components/CustomCard2";
import CustomCard3 from "./components/CustomCard3";
import CustomVideo from "./components/CustomVideo";

function App() {
  return (
    <>
      <CustomNavbar />
      <CustomVideo />
      <CustomTopbar />
      <CustomCard />
      <CustomCard2 />
      <CustomCard3 />
      <CustomFooter />
    </>
  );
}

export default App;

//http://www.omdbapi.com/?i=tt3896198&apikey=78681cd1
