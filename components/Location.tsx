import Image from "next/image";
// import ReactGA from "react-ga";
import Divider from "./Divider";

function Location() {
  return (
    <div>
      <div>
        <p className="font-1 title mb-3 scale-up">Lokasi Acara</p>
        <iframe 
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.333139623775!2d106.81189777586816!3d-6.219726460919501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f154fa8c5e67%3A0x4a8860a70aede1e3!2sBalai%20Sarbini!5e0!3m2!1sen!2sid!4v1723109400894!5m2!1sen!2sid" 
          className="maps scale-up location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <p className="mt-1 font-size-1 bold mb-1 slide-down">Balai Sarbini</p>
      <p className="fade-in">
        Jl. Jend. Sudirman No.Kav. 50 1, RT.1/RW.4, Karet Semanggi, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12930
      </p>
      <div className="mt-2 scale-up px-1">
        <a
          className="center action-button"
          href="https://maps.app.goo.gl/XBDPPMvFgTm3qcrx5"
          target="_blank"
          role="button"
          rel="noreferrer"
          // onClick={() => {
          //   ReactGA.event({
          //     category: "Location",
          //     action: "Click google maps button",
          //   });
          // }}
        >
          Buka di Google Maps
        </a>
      </div>
      
      {/* If there is directional map to be displayed */}
      {/* <Divider className="scale-up title mt-2 mb-1" />
      <p className="font-1 title mb-3 scale-up">Denah Lokasi dan Area Parkir</p>
      <Image loading="lazy" src="" width="320" height="592" alt="denah lokasi acara"/> */}
    </div>
  );
}

export default Location;
