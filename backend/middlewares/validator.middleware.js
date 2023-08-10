const validateSchema = (schema) => (req, res, next) => {
  schema.parse(req.body);

  if (!schema) return res
    .status(400)
    .send({ 
      message: validateSchema.errors.map(error => error.message) 
    });

  next();
}

export default validateSchema;