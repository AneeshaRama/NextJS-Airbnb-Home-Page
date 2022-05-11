import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Airbnb: Holiday rentals, Cabins, Beach Houses...</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
