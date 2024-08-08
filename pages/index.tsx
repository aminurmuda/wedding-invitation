import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Cover from "../components/Cover";

import { useRouter } from "next/router";
import { weddingData } from "../config/name";


interface HomeProps {
  brideNickName: string;
  groomNickName: string;
}


const Home: NextPage<HomeProps> = ({brideNickName, groomNickName}: HomeProps) => {
  const router = useRouter();
  const recipient = router.query.to;
  if (recipient) {
    localStorage.setItem("recipient", recipient + "");
  }

  return (
    <div>
      <Head>
        <title>{brideNickName} & {groomNickName} Wedding</title>
        <meta
          name="description"
          content={`E-Invitation for  ${brideNickName} & ${groomNickName} Wedding`}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="App">
        <div className="cover bg-soft-brown">
          <Cover name={recipient} />
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { brideNickName, groomNickName } = weddingData
  return {
    props: {
      brideNickName,
      groomNickName,
    },
  };
};


export default Home;
