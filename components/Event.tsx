import dynamic from "next/dynamic";
// import ReactGA from "react-ga";
import Divider from "./Divider";
import { brideNickName, groomNickName } from "../config/name";
import { formatDateIndonesian } from "../utils/date";
import { encodedString } from "../utils/string";

const CountdownComponent = dynamic(() => import("./Countdown"), {
  ssr: false,
});

function Event() {
  const date = new Date("2024-08-24 08:30:00");
  const targetDate = date.getTime();
  const title = encodedString(`Acara Pernikahan ${brideNickName} & ${groomNickName}`);
  const dateRange = `20240824T083000/20240824T113000`;
  const details = encodedString(`Resepsi Acara Pernikahan ${brideNickName} & ${groomNickName}
Balai Sarbini
Jl. Jend. Sudirman No.Kav. 50 1, RT.1/RW.4, Karet Semanggi, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12930
https://maps.app.goo.gl/XBDPPMvFgTm3qcrx5`)
  const location = "";
  const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&dates=${dateRange}&location=${location}`;
  return (
    <div>
      <p className="mb-1 slide-up">
        Yang insyaa Allah akan diselenggarakan pada:
      </p>
      <div className="mt-1">
        <p className="center font-size-1 slide-up">{formatDateIndonesian(date)}</p>
      </div>
      <div className="mt-1">
        <p className="font-1 title scale-up">Akad Nikah</p>
        <p className="font-size-1 slide-up mt-1">Pukul 08.30 - 09.30 WIB</p>
      </div>
      <div>
        <p className="font-1 title scale-up mt-1">Walimah</p>
        <p className="font-size-1 slide-up mt-1">Pukul 09.30 - 11.30 WIB</p>
      </div>
      <p className="mt-2 mb-1 fade-in px-1">
        Maha Suci Allah ‘Azza wa Jalla yang menautkan dua hati dalam ikatan suci
        pernikahan. Semoga pernikahan ini bisa menjadi langkah awal kami untuk
        dapat berkumpul bersama kaum mukminin di syurga kelak. Aamiin.
      </p>
      <div className="px-1">
      <Divider className="scale-up title mt-1 mb-1" />
        <p
          className="font-1 title font-size-2 scale-up mt-1 mb-2"
          style={{ letterSpacing: "2.8px" }}
        >
          Hitung Mundur Acara
        </p>
        <CountdownComponent targetDate={targetDate} />
        <div className="mt-3 scale-up">
          <a
            className="action-button center"
            target="_blank"
            href={url}
            rel="nofollow noreferrer"
            role="button"
            // onClick={() => {
            //   ReactGA.event({
            //     category: "Event",
            //     action: "Click google calendar button",
            //   });
            // }}
          >
            Simpan ke Google Calendar
          </a>
        </div>
      </div>
    </div>
  );
}

export default Event;
