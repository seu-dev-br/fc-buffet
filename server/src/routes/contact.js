const express = require('express');
const Joi = require('joi');
const router = express.Router();

// Schema de validação para o formulário de contato
const contactSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(100)
    .required()
    .messages({
      'string.min': 'Nome deve ter pelo menos 2 caracteres',
      'string.max': 'Nome deve ter no máximo 100 caracteres',
      'any.required': 'Nome é obrigatório'
    }),
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Email deve ser válido',
      'any.required': 'Email é obrigatório'
    }),
  phone: Joi.string()
    .pattern(/^[\+]?[1-9][\d]{0,15}$/)
    .required()
    .messages({
      'string.pattern.base': 'Telefone deve ser válido',
      'any.required': 'Telefone é obrigatório'
    }),
  eventType: Joi.string()
    .valid('casamento', 'corporativo', 'aniversario', 'outro')
    .required()
    .messages({
      'any.only': 'Tipo de evento deve ser: casamento, corporativo, aniversario ou outro',
      'any.required': 'Tipo de evento é obrigatório'
    }),
  eventDate: Joi.date()
    .greater('now')
    .required()
    .messages({
      'date.greater': 'Data do evento deve ser futura',
      'any.required': 'Data do evento é obrigatória'
    }),
  guestCount: Joi.number()
    .integer()
    .min(10)
    .max(1000)
    .required()
    .messages({
      'number.base': 'Número de convidados deve ser um número',
      'number.integer': 'Número de convidados deve ser inteiro',
      'number.min': 'Número de convidados deve ser pelo menos 10',
      'number.max': 'Número de convidados deve ser no máximo 1000',
      'any.required': 'Número de convidados é obrigatório'
    }),
  message: Joi.string()
    .min(10)
    .max(1000)
    .required()
    .messages({
      'string.min': 'Mensagem deve ter pelo menos 10 caracteres',
      'string.max': 'Mensagem deve ter no máximo 1000 caracteres',
      'any.required': 'Mensagem é obrigatória'
    })
});

// POST /api/contact - Enviar formulário de contato
router.post('/', async (req, res) => {
  try {
    // Validar dados de entrada
    const { error, value } = contactSchema.validate(req.body);
    
    if (error) {
      return res.status(400).json({
        error: 'Dados inválidos',
        details: error.details.map(detail => detail.message)
      });
    }

    // Simular envio de email (em produção, integrar com serviço de email)
    console.log('📧 Novo contato recebido:');
    console.log('Nome:', value.name);
    console.log('Email:', value.email);
    console.log('Telefone:', value.phone);
    console.log('Tipo de Evento:', value.eventType);
    console.log('Data do Evento:', value.eventDate);
    console.log('Número de Convidados:', value.guestCount);
    console.log('Mensagem:', value.message);
    console.log('Data/Hora:', new Date().toISOString());

    // Em produção, aqui você enviaria o email usando um serviço como:
    // - Nodemailer
    // - SendGrid
    // - AWS SES
    // - etc.

    // Responder com sucesso
    res.status(200).json({
      success: true,
      message: 'Solicitação de orçamento enviada com sucesso! Entraremos em contato em breve.',
      data: {
        name: value.name,
        eventType: value.eventType,
        eventDate: value.eventDate,
        guestCount: value.guestCount
      }
    });

  } catch (error) {
    console.error('Erro ao processar contato:', error);
    res.status(500).json({
      error: 'Erro interno do servidor',
      message: 'Não foi possível processar sua solicitação. Tente novamente.'
    });
  }
});

// GET /api/contact - Informações sobre o endpoint de contato
router.get('/', (req, res) => {
  res.json({
    message: 'Endpoint de contato do FC Buffet',
    method: 'POST',
    requiredFields: [
      'name',
      'email', 
      'phone',
      'eventType',
      'eventDate',
      'guestCount',
      'message'
    ],
    eventTypes: ['casamento', 'corporativo', 'aniversario', 'outro']
  });
});

module.exports = router; 