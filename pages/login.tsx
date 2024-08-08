import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
// import LoginButton from "../components/LoginButton";
import { useRouter } from "next/router";
import { weddingData } from "../config/name";
interface LoginProps {
  brideNickName: string;
  groomNickName: string;
}

const Login: NextPage<LoginProps> = ({brideNickName, groomNickName}: LoginProps) => {
  const router = useRouter();
  const recipient = router.query.to;
  return (
    <div>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Sign in to Admin page" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="App">
        <div className="cover bg-soft-brown">
          <div className="center fullheight">
            <div>
              <p className="font-size-2 slide-up">The Wedding of</p>
              <div className="mt-2 mb-2 shine scale-up">
                {brideNickName} & {groomNickName}
              </div>
              {/* <div className="mt-2">
                <LoginButton />
              </div> */}
            </div>
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

export default Login;
