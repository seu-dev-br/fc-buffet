import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Sobre() {
  const team = [
    {
      name: 'Chef Carlos Silva',
      role: 'Chef Executivo',
      description: 'Com mais de 15 anos de experiência em gastronomia internacional, Chef Carlos é o responsável por criar nossos menus exclusivos e manter os mais altos padrões de qualidade.',
      image: '/images/chef-carlos.jpg'
    },
    {
      name: 'Ana Costa',
      role: 'Diretora de Eventos',
      description: 'Especialista em planejamento de eventos, Ana garante que cada detalhe seja perfeito, desde o primeiro contato até o último prato servido.',
      image: '/images/ana-costa.jpg'
    },
    {
      name: 'Roberto Santos',
      role: 'Gerente de Operações',
      description: 'Responsável pela logística e coordenação de equipes, Roberto assegura que tudo funcione perfeitamente em cada evento.',
      image: '/images/roberto-santos.jpg'
    }
  ]

  const values = [
    {
      title: 'Excelência',
      description: 'Buscamos a perfeição em cada detalhe, desde a seleção dos ingredientes até o atendimento final.',
      icon: '⭐'
    },
    {
      title: 'Inovação',
      description: 'Sempre em busca de novas tendências e técnicas para surpreender nossos clientes.',
      icon: '💡'
    },
    {
      title: 'Compromisso',
      description: 'Nosso compromisso é com a satisfação total do cliente e a qualidade de nossos serviços.',
      icon: '🤝'
    },
    {
      title: 'Paixão',
      description: 'Amamos o que fazemos e isso se reflete em cada prato e em cada evento que realizamos.',
      icon: '❤️'
    }
  ]

  return (
    <>
      <Head>
        <title>Nossa História | FC Buffet</title>
        <meta name="description" content="Conheça a história e a paixão por trás do FC Buffet, onde cada detalhe é pensado para criar uma experiência de luxo com um toque familiar." />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-600 to-gold-500 text-white">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nossa <span className="gradient-text">História</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Uma jornada de paixão pela gastronomia e dedicação aos nossos clientes
              </p>
            </div>
          </div>
        </section>

        {/* História Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Uma História de <span className="gradient-text">Sucesso</span>
                </h2>
                <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                  O FC Buffet nasceu da paixão de um grupo de amigos pela gastronomia e 
                  pelo desejo de transformar eventos comuns em experiências extraordinárias. 
                  Fundado em 2014, começamos como uma pequena empresa familiar com grandes sonhos.
                </p>
                <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                  Ao longo dos anos, crescemos e evoluímos, mas mantivemos sempre viva nossa 
                  essência: a dedicação aos detalhes, o amor pela culinária e o compromisso 
                  com a satisfação total de nossos clientes.
                </p>
                <p className="text-lg text-secondary-600 leading-relaxed">
                  Hoje, somos referência no mercado de eventos, atendendo desde casamentos 
                  íntimos até grandes eventos corporativos, sempre com a mesma qualidade 
                  e atenção que nos caracterizou desde o início.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-400 to-gold-400 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Nossa Filosofia</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    Acreditamos que cada evento é único e merece ser tratado com carinho, 
                    dedicação e profissionalismo. Combinamos luxo e sofisticação com um 
                    toque acolhedor que faz nossos clientes se sentirem especiais.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-sm">Eventos Realizados</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">10+</div>
                      <div className="text-sm">Anos de Experiência</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores Section */}
        <section className="section-padding bg-secondary-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossos <span className="gradient-text">Valores</span>
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                Princípios que guiam nosso trabalho e definem nossa identidade
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="card p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipe Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossa <span className="gradient-text">Equipe</span>
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                Profissionais apaixonados e experientes que fazem a diferença em cada evento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="card p-6 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-gold-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl text-white font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  <p className="text-secondary-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Missão e Visão Section */}
        <section className="section-padding bg-secondary-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary-600">Nossa Missão</h3>
                <p className="text-lg text-secondary-600 leading-relaxed">
                  Proporcionar experiências gastronômicas excepcionais que transformam 
                  momentos especiais em memórias inesquecíveis, sempre com qualidade, 
                  sofisticação e um atendimento que faz nossos clientes se sentirem em casa.
                </p>
              </div>
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary-600">Nossa Visão</h3>
                <p className="text-lg text-secondary-600 leading-relaxed">
                  Ser reconhecidos como a empresa líder em serviços de buffet e eventos 
                  no Brasil, referência em qualidade, inovação e atendimento personalizado, 
                  sempre mantendo nossa essência familiar e acolhedora.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary-600 to-gold-500 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conheça Nossa Equipe Pessoalmente
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Agende uma reunião conosco e descubra como podemos transformar seu evento 
              em uma experiência inesquecível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contato" className="bg-white text-primary-600 hover:bg-secondary-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Agendar Reunião
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