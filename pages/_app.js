import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Where's my dollar?</title>
        <meta
          name="description"
          content="The US financial system is off its rails. Learn about its history and track its current preformance."
        />
        <meta
          property="og:title"
          content="Where's my dollar?"
        />
        <meta
          property="og:description"
          content="The US financial system is off its rails. Learn about its history and track its current preformance."
        />
        <meta property="og:url" content="https://wheresmydollar.us/inflation" />
        <meta property="og:type" content="website" />
      </Head>

      <Script
        strategy="afterInteractive"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
      />

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', {
            page_path: window.location.pathname
          });`,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}
