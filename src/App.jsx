import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import CustomTopbar from "./components/CustomTopbar";
import CustomCard from "./components/CustomCard";

function App() {
  return (
    <>
      <CustomNavbar />

      <CustomTopbar />
      <CustomCard />
    </>
  );
}

export default App;

//http://www.omdbapi.com/?i=tt3896198&apikey=78681cd1
