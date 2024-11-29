import { Button, Dropdown, ListGroup, ListGroupItem, Nav, NavLink } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <>
      <Nav className="navbar navbar-expand-lg text-bg-dark">
        <div className="container px-0">
          <NavLink className="navbar-brand" href="#">
            <img src="/netflix_logo.png" alt="netflix-logo" width="120px" height="60px" />
          </NavLink>
          <Button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ListGroup className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <ListGroupItem className="nav-item bg-dark">
                <NavLink className="nav-link text-white" href="#">
                  Home
                </NavLink>
              </ListGroupItem>
              <ListGroupItem className="nav-item bg-dark">
                <NavLink className="nav-link text-white" href="#">
                  TV Shows
                </NavLink>
              </ListGroupItem>
              <ListGroupItem className="nav-item bg-dark">
                <NavLink className="nav-link text-white" href="#">
                  {" "}
                  Movies{" "}
                </NavLink>
              </ListGroupItem>
              <ListGroupItem className="nav-item bg-dark">
                <NavLink className="nav-link text-white" href="#">
                  Recently Added
                </NavLink>
              </ListGroupItem>
              <ListGroupItem className="nav-item bg-dark">
                <NavLink className="nav-link text-white" href="#">
                  My List
                </NavLink>
              </ListGroupItem>
            </ListGroup>
            <form className="d-flex justify-content-between align-items-center gap-3" role="search">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
              <p className="m-0">KIDS</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  <img src="/avatar.png" alt="" className="img-fluid" height={40} width={40} />
                </Dropdown.Toggle>

                <Dropdown.Menu className="bg-dark">
                  <Dropdown.Item href="#" className="text-white">
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="text-white">
                    {" "}
                    Change Account
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="text-white">
                    {" "}
                    Exit
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </form>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default CustomNavbar;
