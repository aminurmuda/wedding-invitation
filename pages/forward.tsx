import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Forward from "../components/Forward";
import { weddingData } from "../config/name";
interface ForwardInvitationProps {
  brideNickName: string;
  groomNickName: string;
}

const ForwardInvitation: NextPage<ForwardInvitationProps> = ({brideNickName, groomNickName}: ForwardInvitationProps) => {
  return (
    <div>
      <Head>
        <title>Forward Invitation |  {brideNickName} & {groomNickName} Wedding</title>
        <meta
          name="description"
          content="Quick link to forward invitation via website"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="App">
        <div className="center bg-soft-brown">
          <div className="page" style={{ minHeight: "100vh" }}>
            <Forward />
          </div>
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

export default ForwardInvitation;
