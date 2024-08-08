import Image from "next/image";
import Heart from "./Heart";
import { brideFatherName, brideFullName, brideMotherName, brideNickName, groomFatherName, groomFullName, groomMotherName, groomNickName } from "../config/name";
function Pengantin() {
  return (
    <div>
      <Image
        src="/images/bismillah.webp"
        alt="bismillah"
        className="bismillah scale-up"
        width="192"
        height="43"
      />
      <p className="italic slide-up mt-2">
        Assalamu’alaikum warahmatullahi wabarakatuh
      </p>
      <p className="mt-0-5 slide-up">
        Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaa Allah
        kami akan melangsungkan acara akad nikah dan resepsi pernikahan antara:
      </p>
      <div className="mt-2 mx-1">
        <div>
          <p className="font-1 title scale-up m-0">
            {brideFullName} <br />
            ({brideNickName})
          </p>
        </div>

        <p className="mt-0-5 slide-down">
          Putri bungsu dari Bapak {brideFatherName} dan Ibu {brideMotherName}
        </p>
      </div>
      <p className="font-1 title font-size-3 scale-up m-0 m-2">&amp;</p>
      <div className="mb-1 mx-1">
        <div>
          <p className="font-1 title scale-up m-0">
            {groomFullName} <br />
            ({groomNickName})
          </p>
        </div>
        <p className="mt-0-5 slide-down">
          Putra bungsu dari Bapak {groomFatherName} dan Ibu {groomMotherName}
        </p>
      </div>
    </div>
  );
}

export default Pengantin;
