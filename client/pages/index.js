import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  const services = [
    {
      title: 'Casamentos',
      description: 'Celebrações românticas e elegantes com menus personalizados e decoração sofisticada.',
      icon: '💒',
      href: '/eventos?category=casamento'
    },
    {
      title: 'Eventos Corporativos',
      description: 'Coffee breaks, almoços executivos e eventos empresariais com profissionalismo.',
      icon: '🏢',
      href: '/eventos?category=corporativo'
    },
    {
      title: 'Aniversários',
      description: 'Festas especiais para todas as idades com temas personalizados e muita alegria.',
      icon: '🎉',
      href: '/eventos?category=aniversario'
    }
  ]

  const testimonials = [
    {
      name: 'Maria e João Silva',
      event: 'Casamento',
      text: 'O FC Buffet superou todas as nossas expectativas! O menu personalizado ficou perfeito e o atendimento foi impecável. Nossos convidados adoraram!',
      rating: 5
    },
    {
      name: 'TechCorp Ltda',
      event: 'Evento Corporativo',
      text: 'Excelente serviço para nosso evento anual. Profissionalismo e qualidade em todos os detalhes. Recomendamos fortemente!',
      rating: 5
    },
    {
      name: 'Ana Costa',
      event: 'Aniversário de 50 anos',
      text: 'Uma festa inesquecível! O FC Buffet transformou nossa celebração em um momento mágico. Obrigada por tudo!',
      rating: 5
    }
  ]

  const stats = [
    { number: '500+', label: 'Eventos Realizados' },
    { number: '50k+', label: 'Convidados Atendidos' },
    { number: '98%', label: 'Satisfação dos Clientes' },
    { number: '10+', label: 'Anos de Experiência' }
  ]

  return (
    <>
      <Head>
        <title>FC Buffet - Sofisticação e Sabor para Seu Evento</title>
        <meta name="description" content="Realize seu casamento, festa ou evento corporativo com o luxo e o atendimento acolhedor do FC Buffet. Cardápios personalizados e experiência única." />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center text-white px-4">
            <div className="container-custom">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg">
                Eventos Memoráveis,{' '}
                <span className="gradient-text">Sabores Inesquecíveis</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-shadow">
                Transformamos seus momentos especiais em experiências únicas com 
                sofisticação, sabor e um toque acolhedor que faz toda a diferença.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contato" className="btn-primary text-lg px-8 py-4">
                  Solicitar Orçamento
                </Link>
                <Link href="/eventos" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary-800">
                  Ver Nossos Eventos
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary-600 text-white py-16">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-secondary-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossos <span className="gradient-text">Serviços</span>
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                Oferecemos soluções completas para todos os tipos de eventos, 
                sempre com qualidade premium e atendimento personalizado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="card p-8 text-center">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link href={service.href} className="btn-outline">
                    Ver Mais
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Sobre o <span className="gradient-text">FC Buffet</span>
                </h2>
                <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                  Com mais de 10 anos de experiência, somos especialistas em criar 
                  experiências gastronômicas únicas que transformam eventos comuns 
                  em momentos extraordinários.
                </p>
                <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                  Nossa filosofia combina luxo e sofisticação com um toque acolhedor 
                  e familiar, garantindo que cada detalhe seja perfeito para seu 
                  evento especial.
                </p>
                <Link href="/sobre" className="btn-primary">
                  Conheça Nossa História
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-400 to-gold-400 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
                  <p className="text-lg leading-relaxed">
                    Proporcionar experiências gastronômicas excepcionais que 
                    transformam momentos especiais em memórias inesquecíveis, 
                    sempre com qualidade, sofisticação e um atendimento que 
                    faz nossos clientes se sentirem em casa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-secondary-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                O Que Nossos <span className="gradient-text">Clientes Dizem</span>
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                A satisfação dos nossos clientes é nossa maior recompensa. 
                Veja alguns depoimentos de quem já viveu a experiência FC Buffet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-secondary-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-secondary-800">{testimonial.name}</div>
                    <div className="text-sm text-primary-600">{testimonial.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary-600 to-gold-500 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Criar Seu Evento Inesquecível?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e vamos transformar sua visão em realidade. 
              Nossa equipe está pronta para criar uma experiência única para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="bg-white text-primary-600 hover:bg-secondary-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Solicitar Orçamento
              </Link>
              <Link href="tel:+5511999999999" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Ligar Agora
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 