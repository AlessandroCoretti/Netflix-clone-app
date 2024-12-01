import { Component } from "react";
import { Spinner } from "react-bootstrap";

class CustomCard extends Component {
  state = {
    remoteCards: [],
    isLoading: false,
  };

  fetchCard = () => {
    this.setState({ isLoading: true });
    fetch('http://www.omdbapi.com/?apikey=78681cd1&s="lord of the rings"')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then((data) => {
        console.log("RISPOSTA JSON SERVER", data);
        if (data.Search) {
          this.setState({
            remoteCards: data.Search,
          });
        } else {
          console.error("struttura non valida", data);
        }
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        console.log("errore", error);
      });
  };

  componentDidMount() {
    console.log("COMPONENTDIDMOUNT");
    this.fetchCard();
  }

  render() {
    console.log("RENDER");
    return (
      <div className="container mt-4 text-center text-sm-start">
        <h3 className="mb-2 text-white">The Lord of The Rings</h3>
        <div className="d-flex justify-content-center">
          {this.state.isLoading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 ">
          {this.state.remoteCards.slice(0, 6).map((card) => {
            return (
              <div key={card.imdbID} id="img-card">
                <img src={card.Poster} alt="" className="img-fluid" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CustomCard;
