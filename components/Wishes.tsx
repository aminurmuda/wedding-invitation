import { useState, useEffect } from "react";
import { useTime } from "../utils/useCountdown";
import Loading from "./Loading";
import WishesForm from "./WishesForm";
import Image from "next/image";
import Divider from "./Divider";

interface Wish {
  name: string;
  message: string;
  timestamp: string;
}
function Wishes() {
  const [sheetData, setSheetData] = useState<Wish[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    if (!isLoading) {
      setLoading(true);
      const response = await fetch("/api/get-wishes", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const content = await response.json();
      setSheetData(content.data);
      setLoading(false);
    }
  };

  const WishItem = (props: any) => {
    const { data } = props;
    const targetDate = new Date(data[2]);
    // if (targetDate.toLocaleString() === "Invalid Date") {
    //   // console.log(data[2] + " " + targetDate);
    // }
    const getTime = targetDate.getTime();
    const timestamp = useTime(getTime);
    return (
      <div className="wish fade-in">
        <div className="flex space-between mb-2">
          <p className="bold title">{data[0]}</p>
          <p className="timestamp">{timestamp}</p>
        </div>
        <p>{data[1]}</p>
      </div>
    );
  };

  return (
    <div>
      <p className="font-1 title scale-up">Ucapan & Doa</p>
      <WishesForm onSubmit={fetchData} />
      <Divider className="scale-up title mt-2" />
      {sheetData && !isLoading && (
        <div className="wishes-container">
          {sheetData.map((item: Wish, index: number) => {
            return (
              <div key={index}>
                <WishItem data={item} />
              </div>
            );
          })}
        </div>
      )}
      <div className="center" style={{ minHeight: "64px" }}>
        {isLoading && <Loading />}
        {(!sheetData || sheetData.length === 0) && !isLoading && (
          <p>Belum ada data</p>
        )}
      </div>
    </div>
  );
}

export default Wishes;
