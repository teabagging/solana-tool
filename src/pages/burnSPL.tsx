import type { NextPage } from "next";
import Head from "next/head";
import { BurnSPLView } from "../views";


const Home: NextPage = (props) => {
  return (
    <div className=" flex flex-col h-screen justify-between">
      <Head>
        <title>SOLANA TOOLS</title>
        <meta name="description" content="Solana tools to help you in the solana ecosystem" />
      </Head>
      <BurnSPLView />
      
    </div>
  );
};

export default Home;