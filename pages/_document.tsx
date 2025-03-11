import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Green University Photography Club" />
        <meta property="og:description" content="Official website of Green University Photography Club (GUPC)" />
        <meta property="og:image" content="/assets/link.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/assets/link.png" />
        <style dangerouslySetInnerHTML={{ __html: `
          /* Debug styles to help identify layout issues */
          /* Uncomment the line below to see element boundaries */
          /* * { outline: 1px solid red; } */
        `}} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
