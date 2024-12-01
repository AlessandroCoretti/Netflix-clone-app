import { Button } from "react-bootstrap";

const CustomVideo = () => {
  return (
    <div className="d-none d-md-block position-relative">
      <video
        src="https://media.istockphoto.com/id/540464346/it/video/inseguire-la-mandria-in-tinta-unita.mp4?s=mp4-640x640-is&k=20&c=94skvTpvPujC0HiS_eEKlgHsZksNIsJpnVnu-gDT1S4="
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "auto" }}
      ></video>
      <div id="trailer-caption" className="position-absolute">
        <h1>Questo sarebbe il trailer</h1>
        <h3>In maniera specifica di un film appena uscito o in evidenza</h3>
        <p className="m-0 fs-5">E questa la breve trama che spiega perchè dovresti guardarlo</p>
        <div className="d-flex gap-2 mt-4 mb-2">
          <Button id="play-movie-btn" size="lg">
            <div className="d-flex  align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
              </svg>
              <p className="m-0">Riproduci </p>
            </div>
          </Button>
          <Button id="info-movie-btn" size="lg">
            <div className="d-flex gap-1 align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
              </svg>
              <p className="m-0">Altre info </p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CustomVideo;
