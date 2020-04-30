const { celebrate, Segments, Joi } = require('celebrate');

const createOngValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    tel: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
});

const createIncidentValidator = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    descriptiom: Joi.string(),
    value: Joi.number().required()
  })
});

const indexIncidentValidator = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
});

const deleteIncidentValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
});

const indexProfileValidator = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
});

const createSessionValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  })
});

module.exports = {
  createOngValidator,
  createIncidentValidator,
  indexIncidentValidator,
  deleteIncidentValidator,
  indexProfileValidator,
  createSessionValidator,
}