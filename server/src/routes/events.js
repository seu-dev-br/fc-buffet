const express = require('express');
const router = express.Router();

// Dados mockados de eventos realizados pelo FC Buffet
const eventsData = [
  {
    id: 1,
    title: "Casamento Sofia & Carlos",
    description: "Uma celebração romântica com 150 convidados, menu personalizado com pratos da culinária italiana e francesa. Decoração elegante com flores brancas e douradas.",
    imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
    category: "casamento",
    date: "2024-03-15",
    guestCount: 150,
    location: "Chácara Bela Vista",
    highlights: ["Menu personalizado", "Decoração elegante", "Serviço premium"]
  },
  {
    id: 2,
    title: "Evento Corporativo TechCorp",
    description: "Conferência anual para 200 profissionais de tecnologia. Coffee break gourmet e almoço executivo com opções vegetarianas e veganas.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
    category: "corporativo",
    date: "2024-02-28",
    guestCount: 200,
    location: "Centro de Convenções",
    highlights: ["Coffee break gourmet", "Opções vegetarianas", "Serviço profissional"]
  },
  {
    id: 3,
    title: "Aniversário de 50 anos - Maria",
    description: "Festa surpresa para 80 convidados com tema 'Golden Years'. Buffet completo com pratos tradicionais brasileiros e sobremesas especiais.",
    imageUrl: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&h=600&fit=crop",
    category: "aniversario",
    date: "2024-01-20",
    guestCount: 80,
    location: "Residência da família",
    highlights: ["Tema personalizado", "Pratos tradicionais", "Sobremesas especiais"]
  },
  {
    id: 4,
    title: "Casamento Ana & Pedro",
    description: "Cerimônia íntima com 80 convidados em estilo rústico-chique. Menu com pratos da culinária regional e internacional.",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    category: "casamento",
    date: "2024-04-10",
    guestCount: 80,
    location: "Sítio Encantado",
    highlights: ["Estilo rústico-chique", "Culinária regional", "Ambiente íntimo"]
  },
  {
    id: 5,
    title: "Lançamento de Produto - StartupXYZ",
    description: "Evento de lançamento para 120 investidores e parceiros. Cocktail sofisticado com finger foods e bebidas premium.",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
    category: "corporativo",
    date: "2024-03-22",
    guestCount: 120,
    location: "Hotel Premium",
    highlights: ["Cocktail sofisticado", "Finger foods", "Bebidas premium"]
  },
  {
    id: 6,
    title: "Festa de 15 anos - Juliana",
    description: "Celebração tradicional com 200 convidados. Buffet completo com pratos internacionais e decoração temática.",
    imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
    category: "aniversario",
    date: "2024-02-15",
    guestCount: 200,
    location: "Espaço de Eventos",
    highlights: ["Tradição e modernidade", "Pratos internacionais", "Decoração temática"]
  },
  {
    id: 7,
    title: "Casamento Marina & João",
    description: "Casamento na praia com 120 convidados. Menu com frutos do mar frescos e pratos da culinária mediterrânea.",
    imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
    category: "casamento",
    date: "2024-05-05",
    guestCount: 120,
    location: "Resort Praia Bela",
    highlights: ["Localização na praia", "Frutos do mar", "Culinária mediterrânea"]
  },
  {
    id: 8,
    title: "Conferência de Marketing Digital",
    description: "Evento para 150 profissionais de marketing. Coffee break e almoço executivo com foco em networking.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
    category: "corporativo",
    date: "2024-04-18",
    guestCount: 150,
    location: "Centro de Eventos",
    highlights: ["Foco em networking", "Menu executivo", "Ambiente profissional"]
  }
];

// GET /api/events - Listar todos os eventos
router.get('/', (req, res) => {
  try {
    const { category, limit } = req.query;
    
    let filteredEvents = [...eventsData];
    
    // Filtrar por categoria se especificado
    if (category) {
      filteredEvents = filteredEvents.filter(event => 
        event.category === category.toLowerCase()
      );
    }
    
    // Limitar número de resultados se especificado
    if (limit) {
      const limitNum = parseInt(limit);
      if (!isNaN(limitNum) && limitNum > 0) {
        filteredEvents = filteredEvents.slice(0, limitNum);
      }
    }
    
    res.json({
      success: true,
      count: filteredEvents.length,
      events: filteredEvents
    });
    
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    res.status(500).json({
      error: 'Erro interno do servidor',
      message: 'Não foi possível buscar os eventos.'
    });
  }
});

// GET /api/events/:id - Buscar evento específico
router.get('/:id', (req, res) => {
  try {
    const eventId = parseInt(req.params.id);
    const event = eventsData.find(e => e.id === eventId);
    
    if (!event) {
      return res.status(404).json({
        error: 'Evento não encontrado',
        message: 'O evento solicitado não foi encontrado.'
      });
    }
    
    res.json({
      success: true,
      event: event
    });
    
  } catch (error) {
    console.error('Erro ao buscar evento:', error);
    res.status(500).json({
      error: 'Erro interno do servidor',
      message: 'Não foi possível buscar o evento.'
    });
  }
});

// GET /api/events/categories - Listar categorias disponíveis
router.get('/categories/list', (req, res) => {
  try {
    const categories = [...new Set(eventsData.map(event => event.category))];
    
    res.json({
      success: true,
      categories: categories,
      count: categories.length
    });
    
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    res.status(500).json({
      error: 'Erro interno do servidor',
      message: 'Não foi possível buscar as categorias.'
    });
  }
});

// GET /api/events/stats - Estatísticas dos eventos
router.get('/stats/overview', (req, res) => {
  try {
    const totalEvents = eventsData.length;
    const totalGuests = eventsData.reduce((sum, event) => sum + event.guestCount, 0);
    const categories = [...new Set(eventsData.map(event => event.category))];
    
    const statsByCategory = categories.map(category => {
      const categoryEvents = eventsData.filter(event => event.category === category);
      return {
        category: category,
        count: categoryEvents.length,
        totalGuests: categoryEvents.reduce((sum, event) => sum + event.guestCount, 0),
        averageGuests: Math.round(categoryEvents.reduce((sum, event) => sum + event.guestCount, 0) / categoryEvents.length)
      };
    });
    
    res.json({
      success: true,
      stats: {
        totalEvents,
        totalGuests,
        averageGuestsPerEvent: Math.round(totalGuests / totalEvents),
        categories: statsByCategory
      }
    });
    
  } catch (error) {
    console.error('Erro ao buscar estatísticas:', error);
    res.status(500).json({
      error: 'Erro interno do servidor',
      message: 'Não foi possível buscar as estatísticas.'
    });
  }
});

module.exports = router; 