import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FC Buffet - Sofisticação e Sabor para Seu Evento</title>
        <meta name="description" content="Realize seu casamento, festa ou evento corporativo com o luxo e o atendimento acolhedor do FC Buffet. Cardápios personalizados e experiência única." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="buffet, eventos, casamento, corporativo, aniversário, catering, FC Buffet" />
        <meta name="author" content="FC Buffet" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fcbuffet.com/" />
        <meta property="og:title" content="FC Buffet - Sofisticação e Sabor para Seu Evento" />
        <meta property="og:description" content="Realize seu casamento, festa ou evento corporativo com o luxo e o atendimento acolhedor do FC Buffet." />
        <meta property="og:image" content="https://fcbuffet.com/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fcbuffet.com/" />
        <meta property="twitter:title" content="FC Buffet - Sofisticação e Sabor para Seu Evento" />
        <meta property="twitter:description" content="Realize seu casamento, festa ou evento corporativo com o luxo e o atendimento acolhedor do FC Buffet." />
        <meta property="twitter:image" content="https://fcbuffet.com/images/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp 