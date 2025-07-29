import { useState, useEffect } from 'react'
import Link from 'next/link'

const EventGallery = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchEvents()
    fetchCategories()
  }, [selectedCategory])

  const fetchEvents = async () => {
    try {
      setLoading(true)
      const url = selectedCategory 
        ? `http://localhost:3001/api/events?category=${selectedCategory}`
        : 'http://localhost:3001/api/events'
      
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Erro ao carregar eventos')
      }
      
      const data = await response.json()
      setEvents(data.events || [])
    } catch (err) {
      setError(err.message)
      console.error('Erro ao buscar eventos:', err)
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/events/categories/list')
      if (response.ok) {
        const data = await response.json()
        setCategories(data.categories || [])
      }
    } catch (err) {
      console.error('Erro ao buscar categorias:', err)
    }
  }

  const getCategoryLabel = (category) => {
    const labels = {
      casamento: 'Casamentos',
      corporativo: 'Eventos Corporativos',
      aniversario: 'Aniversários'
    }
    return labels[category] || category
  }

  const getCategoryIcon = (category) => {
    const icons = {
      casamento: '💒',
      corporativo: '🏢',
      aniversario: '🎉'
    }
    return icons[category] || '🎊'
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <div className="text-red-600 mb-4">
          <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Erro ao carregar eventos</h3>
        <p className="text-secondary-600 mb-4">{error}</p>
        <button 
          onClick={fetchEvents}
          className="btn-primary"
        >
          Tentar Novamente
        </button>
      </div>
    )
  }

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Filtros */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                selectedCategory === ''
                  ? 'bg-primary-600 text-white'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              Todos os Eventos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                }`}
              >
                <span>{getCategoryIcon(category)}</span>
                {getCategoryLabel(category)}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Eventos */}
        {events.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold mb-2">Nenhum evento encontrado</h3>
            <p className="text-secondary-600">
              {selectedCategory 
                ? `Não encontramos eventos na categoria "${getCategoryLabel(selectedCategory)}"`
                : 'Não encontramos eventos no momento.'
              }
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="card overflow-hidden group">
                {/* Imagem do Evento */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{getCategoryIcon(event.category)}</span>
                      <span className="text-white text-sm font-medium bg-primary-600 px-3 py-1 rounded-full">
                        {getCategoryLabel(event.category)}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg">{event.title}</h3>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6">
                  <p className="text-secondary-600 mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  
                  {/* Detalhes do Evento */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <div className="font-semibold text-secondary-800">Convidados</div>
                      <div className="text-secondary-600">{event.guestCount}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-800">Local</div>
                      <div className="text-secondary-600">{event.location}</div>
                    </div>
                  </div>

                  {/* Destaques */}
                  {event.highlights && event.highlights.length > 0 && (
                    <div className="mb-6">
                      <div className="font-semibold text-secondary-800 mb-2">Destaques</div>
                      <div className="flex flex-wrap gap-2">
                        {event.highlights.slice(0, 3).map((highlight, index) => (
                          <span
                            key={index}
                            className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Botão Ver Mais */}
                  <Link
                    href={`/eventos/${event.id}`}
                    className="btn-outline w-full justify-center"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Estatísticas */}
        {events.length > 0 && (
          <div className="mt-16 bg-secondary-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Estatísticas dos Eventos</h3>
              <p className="text-secondary-600">
                Números que mostram nossa experiência e dedicação
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {events.length}
                </div>
                <div className="text-secondary-600">Eventos Exibidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {events.reduce((sum, event) => sum + event.guestCount, 0).toLocaleString()}
                </div>
                <div className="text-secondary-600">Total de Convidados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {Math.round(events.reduce((sum, event) => sum + event.guestCount, 0) / events.length)}
                </div>
                <div className="text-secondary-600">Média por Evento</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {categories.length}
                </div>
                <div className="text-secondary-600">Categorias</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default EventGallery 