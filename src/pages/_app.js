import "@/styles/globals.sass";
import "@/styles/global.css";
import { MainLayout } from "../components/layout/main-layout";
import Head from "next/head";
import icon from "/public/favicon.ico";

export default function App({ Component, pageProps }) {
  return (
    <div className="p-7">
      <Head>
        <title>Elite Events</title>
        <meta name="description" content="An Events App" />
        <link rel="icon" href={icon} />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}
