import { Dropdown, DropdownButton } from "react-bootstrap";

const CustomTopbar = () => {
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center mt-3">
        <div className="d-flex align-items-center column-gap-2 flex-md-column flex-lg-row">
          <h1 className="text-white">TV Shows</h1>
          <DropdownButton id="dropdown-genres-button" title="Genres">
            <Dropdown.Item href="#" className="bg-black text-white">
              Azione e Avventura
            </Dropdown.Item>
            <Dropdown.Item href="#" className="bg-black text-white">
              Commedie
            </Dropdown.Item>
            <Dropdown.Item href="#" className="bg-black text-white">
              Film per bambini e famiglie
            </Dropdown.Item>
            <Dropdown.Item href="#" className="bg-black text-white">
              Drammatici
            </Dropdown.Item>
            <Dropdown.Item href="#" className="bg-black text-white">
              Horror e thriller
            </Dropdown.Item>
            <Dropdown.Item href="#" className="bg-black text-white">
              Film romantici
            </Dropdown.Item>
            <Dropdown.Item href="#" className="bg-black text-white">
              Fantascienza e fantasy
            </Dropdown.Item>
            <Dropdown.Item href="#" className="bg-black text-white">
              Film storici e biografici
            </Dropdown.Item>
            <Dropdown.Item href="#" className="bg-black text-white">
              Film d autore e indipendenti
            </Dropdown.Item>
            <Dropdown.Item href="#" className="bg-black text-white">
              Musical e concerti
            </Dropdown.Item>
            <Dropdown.Item href="#" className="bg-black text-white">
              Film in lingua straniera
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="d-flex d-none d-md-flex">
          <div className="border border-1 border-secondary-emphasis px-2 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-text-left" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
          <div className="border border-1 border-secondary px-2 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomTopbar;
