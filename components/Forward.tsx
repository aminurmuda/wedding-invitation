import Icon from "@mdi/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import {
  mdiWhatsapp,
  mdiCheckCircle,
  mdiCheckboxBlankCircleOutline,
} from "@mdi/js";
import { brideFatherName, brideFullName, brideMotherName, brideNickName, groomFatherName, groomFullName, groomNickName } from "../config/name";

interface Recipient {
  name: string;
  nickname: string;
  from: string;
  phone: string;
  is_sent: string;
  show: string;
}
function Forward() {
  const [sheetData, setSheetData] = useState<Recipient[]>([]);
  const [templateData, setTemplateData] = useState<Recipient[]>([]);
  const [filteredData, setFilteredData] = useState<Recipient[]>(sheetData);
  const [isLoading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filter, setFilter] = useState("all");
  const useTemplate = process.env.NEXT_PUBLIC_USE_TEMPLATE
  
  useEffect(() => {
    fetchDataRecipients();
    fetchDataTemplate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTick = async (data: any) => {
    if (!isSubmitting) {
      setIsSubmitting(true);
      // Get data from the form.
      const form = {
        check: parseInt(data[0]) ? 0 : 1,
        row: data[1],
      };

      const response = await fetch("/api/update", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      await response.json();
      setIsSubmitting(false);
      fetchDataRecipients();
    }
  };

  const fetchData = async (url: string) => {
    if (!isLoading) {
      if(url === '/api/get-recipients'){
        setLoading(true);
      }
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const content = await response.json();
      if(url === '/api/get-recipients'){
        setSheetData(content.data);
        setLoading(false);
      } else {
        setTemplateData(content.data)
      }
    }
  };

  const fetchDataRecipients = () => {
    return fetchData('/api/get-recipients')
  }

  const fetchDataTemplate = () => {
    return fetchData('/api/get-template')
  }
  

  interface RecipientData {
    fullname: string;
    nickname: string;
    link: string;
  }
  const buildMessage = ({ fullname, nickname, link }: RecipientData) => {
    const text = `
Bismillaahirrahmaanirrahiim
_Assalamu'alaikum warahmatullahi wabarakatuh_

Kepada Yth.
${fullname}

Bagaimana kabarnya ${nickname}? Semoga ${nickname} dan keluarga sehat selalu dan berada di bawah lindungan Allah 'Azza wa Jalla. Melalui pesan singkat ini, kami ingin mengundang ${nickname} untuk menghadiri acara walimah pernikahan kami,

*${brideFullName} (${brideNickName})*
Putri Dari Bapak ${brideFatherName} dan Ibu ${brideMotherName}
&
*${groomFullName} (${groomNickName})*
Putra dari Bapak ${groomFatherName} dan Ibu ${brideMotherName}

Yang insyaa Allah akan berlangsung pada:
🗓️ Sabtu, 20 Januari 2024
🕙 08.30-11.30 WIB (Akad & Resepsi)
🏠 Kediaman Mempelai Wanita
Jl. Sukaresmi 17B Dago Bengkok, Mekarwangi, Kec. Lembang, Kab. Bandung Barat 40391
https://goo.gl/maps/pgGmGFYLA7ejGEQn6

Informasi detail mengenai acara dan kehadiran bisa diakses melalui link berikut:
${link}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila ${nickname} berkenan untuk hadir dan juga memberikan doa restunya agar prosesi pernikahan kami bisa berjalan dengan baik.

_Barakallahu fiikum_
_Wassalamu'alaikum warahmatullahi wabarakatuh_

${brideNickName} & ${groomNickName}`;
    return text;
  };

  const buildMessageFromTemplate = ({ fullname, nickname, link }: RecipientData) => {
    const text = templateData.toString()
    let newText = text.replaceAll("{fullname}", fullname)
    newText = newText.replaceAll("{nickname}", nickname)
    newText = newText.replaceAll("{link}", link)
    return newText
  }

  const RecipientItem = (props: any) => {
    const { data, row } = props;
    const fullname = data[0];
    const nickname = data[1];
    const phone = data[2];
    const link = `${process.env.NEXT_PUBLIC_BASE_URL}?to=${fullname
      .split(" ")
      .join("+")}`;

    const recipientData = { fullname, nickname, link };
    const text = useTemplate ? encodeURIComponent(buildMessageFromTemplate(recipientData)) : encodeURIComponent(buildMessage(recipientData));
    return (
      <div className="wish fade-in flex space-between">
        <div>
          <p>{data[0]}</p>
          <p>{data[2]}</p>
        </div>
        <div className="flex">
          {phone && (
            <>
              <div>
                <Link
                  className="ml-1"
                  href={`https://wa.me/${phone}?text=${text}`}
                  replace
                >
                  <button
                    className="action-button-sm"
                    aria-label="forward via whatsapp"
                  >
                    <Icon path={mdiWhatsapp} size={1} />
                  </button>
                </Link>
              </div>
              <div className="ml-1 mr-1">
                <button
                  className={"check"}
                  id={"check-" + row}
                  aria-label="check"
                  onClick={() => {
                    handleTick([data[3], row]);
                  }}
                >
                  <Icon
                    className={!!parseInt(data[3]) ? "is-active" : ""}
                    path={
                      !!parseInt(data[3])
                        ? mdiCheckCircle
                        : mdiCheckboxBlankCircleOutline
                    }
                    size={0.8}
                  />
                </button>
                <div>
                  <label htmlFor={"check-" + row}>Sent</label>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  function onChangeValue(event: any) {
    setFilter(event.target.value);
  }

  const filterData = () => {
    if (filter === groomNickName) {
      const data = sheetData.filter((item: any) => {
        return item[5].toLowerCase().includes(groomNickName?.toLowerCase());
      });
      setFilteredData(data);
    } else if (filter === brideNickName) {
      const data = sheetData.filter((item: any) => {
        return item[5].toLowerCase().includes(brideNickName?.toLowerCase());
      });
      setFilteredData(data);
    } else {
      return setFilteredData(sheetData);
    }
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, sheetData]);

  return (
    <div>
      <p className="font-1 title mb-1 scale-up">Forward Undangan</p>
      <p>Untuk memudahkan dalam mengirim link undangan via Whatsapp</p>
      <hr className="mt-2 mb-2 scale-up" />
      <div className="flex mb-1" onChange={onChangeValue}>
        <input
          name="filter"
          type="radio"
          id="all"
          value={"all"}
          defaultChecked={filter === "all"}
        />
        <label htmlFor="all" className="mr-2">
          All
        </label>
        <input
          name="filter"
          type="radio"
          id={groomNickName}
          value={groomNickName}
          defaultChecked={filter === groomNickName}
        />
        <label htmlFor={groomNickName} className="mr-2">
          {groomNickName}
        </label>
        <input
          name="filter"
          type="radio"
          id={brideNickName}
          value={brideNickName}
          defaultChecked={filter === brideNickName}
        />
        <label htmlFor={brideNickName} className="mr-2">
          {brideNickName}
        </label>
      </div>
      {isLoading && <Loading />}
      {filteredData && !isLoading && (
        <div className="wishes-container">
          {filteredData?.map((item: any) => {
            return (
              <div key={item[6]}>
                <RecipientItem data={item} row={item[6]} />
              </div>
            );
          })}
        </div>
      )}
      {filteredData.length === 0 && !isLoading && <p>Belum ada data</p>}
    </div>
  );
}

export default Forward;
