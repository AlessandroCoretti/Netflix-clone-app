import { Component } from "react";

class CustomCard extends Component {
  state = {
    remoteCards: [],
  };

  fetchCard = () => {
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
      <div className="container mt-4">
        <h3 className="mb-2 text-white">Il Signore degli Anelli</h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 ">
          {this.state.remoteCards.map((card) => {
            return (
              <div key={card.imdbID}>
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
