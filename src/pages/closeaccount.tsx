import type { NextPage } from "next";
import Head from "next/head";
import { CloseAccountView } from "../views";


const Home: NextPage = (props) => {
  return (
    <div className=" flex flex-col h-screen justify-between">
      <Head>
        <title>SOLANA TOOLS</title>
        <meta name="description" content="Solana tools to help you in the solana ecosystem" />
      </Head>
      <CloseAccountView />
      
    </div>
  );
};

export default Home;