import { ButtonGroup, Container, Dropdown, DropdownButton, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <>
      <Navbar id="navbar" className="bg-body-dark text-white">
        <Container className="justify-content-between">
          <div className="d-flex align-items-center justify-content-between ">
            <Navbar.Brand href="#home">
              <img alt="netflix-logo" src="/netflix_logo.png" width="120" height="60" className="d-inline-block align-top" />
            </Navbar.Brand>
            <div className="d-flex justify-content-between gap-3 d-none d-lg-flex">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/tvshows" className="nav-link">
                TV Shows
              </NavLink>
              <NavLink to="/movies" className="nav-link">
                Movies
              </NavLink>
              <NavLink to="/recentlyadded" className="nav-link">
                Recently Added
              </NavLink>
              <NavLink to="/mylist" className="nav-link">
                My List
              </NavLink>
            </div>
            <div className="d-block d-lg-none">
              {[DropdownButton].map((DropdownType, idx) => (
                <DropdownType as={ButtonGroup} key={idx} id={`dropdown-button-drop-${idx}`} size="sm" title="Explore">
                  <Dropdown.Item className="text-white" eventKey="1">
                    Home
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white" eventKey="2">
                    TV Shows
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white" eventKey="3">
                    Movies
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white" eventKey="4">
                    Recently Added
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white" eventKey="5">
                    My List
                  </Dropdown.Item>
                </DropdownType>
              ))}
            </div>
          </div>
          <form className="d-flex justify-content-between align-items-center gap-3" role="search">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <p className="m-0">KIDS</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
            </svg>
            <Dropdown id="dropdown">
              <Dropdown.Toggle id="dropdown-basic">
                <img src="/avatar.png" alt="avatar" height={40} width={40} />
              </Dropdown.Toggle>

              <Dropdown.Menu id="dropdown-menu">
                <Dropdown.Item href="#" className=" text-white">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item href="#" className=" text-white">
                  Change account
                </Dropdown.Item>
                <Dropdown.Item href="#" className=" text-white">
                  Exit
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </form>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
