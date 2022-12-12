const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");
const validateRequest = require("../middlewares/validateRequest");

const UsersSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  img: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});
const User = mongoose.model("usuariosTest", UsersSchema);

const ValidateUser = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().min(4).max(100).required().messages({
      "string.empty": "Ingresa el Nombre",
      "string.min": "El nombre debe ser mayor a 5 caracteres",
      "any.required": "Ingresa el Nombre",
    }),
    email: Joi.string().email().min(5).max(100).required().messages({
      "string.empty": "Ingresa el email",
      "string.min": "El email debe ser mayor a 5 caracteres",
      "any.required": "Ingresa el email",
    }),
    password: Joi.string().min(5).max(100).required().messages({
      "string.empty": "Ingresa su password",
      "string.min": "El password debe ser mayor a 5 caracteres",
      "any.required": "Ingresa el password",
    }),
  });
  validateRequest(req, res, next, schema);
};

module.exports = {
  User,
  ValidateUser,
};
