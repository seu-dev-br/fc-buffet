import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EventGallery from '../components/EventGallery'

export default function Eventos() {
  return (
    <>
      <Head>
        <title>Nossos Eventos | FC Buffet</title>
        <meta name="description" content="Conheça alguns dos eventos realizados pelo FC Buffet. Casamentos, eventos corporativos, aniversários e muito mais com qualidade e sofisticação." />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-600 to-gold-500 text-white">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nossos <span className="gradient-text">Eventos</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Uma seleção dos eventos mais marcantes que realizamos com carinho e dedicação
              </p>
            </div>
          </div>
        </section>

        {/* Event Gallery */}
        <EventGallery />

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary-600 to-gold-500 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quer Ver Seu Evento Aqui?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e vamos criar juntos uma experiência inesquecível para seu evento especial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contato" className="bg-white text-primary-600 hover:bg-secondary-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Solicitar Orçamento
              </a>
              <a href="tel:+5511999999999" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Ligar Agora
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 