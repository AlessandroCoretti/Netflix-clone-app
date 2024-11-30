import { Component } from "react";

class CustomCard3 extends Component {
  state = {
    remoteCards: [],
  };

  fetchCard = () => {
    fetch('http://www.omdbapi.com/?apikey=78681cd1&s="vacanze di natale"')
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
      <div className="container mt-4 text-center text-sm-start">
        <h3 className="mb-2 text-white">Commedie Natalizie</h3>
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

export default CustomCard3;
