import Image from "next/image";
import Divider from "./Divider";
import { brideFatherName, brideMotherName, brideNickName, groomFatherName, groomMotherName, groomNickName } from "../config/name";
function Closing() {
  return (
    <div>
      <p className="slide-up">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
        Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do’a restu kepada
        kami.
      </p>
      <p className="slide-up">Wassalamu’alaikum warahmatullahi wabarakatuh</p>
      <p className="font-size-0-5 mt-2 slide-up">Kami yang berbahagia,</p>
      <p className="font-1 title mt-1 scale-up">
        {brideNickName} <span className="font-size-2">&</span> {groomNickName}
      </p>
      <p className="font-size-0-5 mt-1 slide-up">
        Keluarga Bapak {brideFatherName} & Ibu {brideMotherName}
      </p>
      <p className="font-size-0-5 slide-up">Keluarga Bapak {groomFatherName} & Ibu {groomMotherName} </p>
      
      <Divider className="scale-up title mt-2 mb-2" />
      
      <p className="font-1 title scale-up">Doa Untuk Pengantin</p>
      <h2 className="m-2 slide-down">
        بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
      </h2>
      <p className="italic fade-in">
        Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu
        susah, serta semoga Allah mempersatukan kalian berdua dalam kebaikan
      </p>
      <p className="mt-0-5 slide-down">(HR. Abu Dawud)</p>
    </div>
  );
}

export default Closing;
